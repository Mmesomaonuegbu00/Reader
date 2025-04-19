import Image from 'next/image';

interface PostDetailsProps {
    id: string;
    headed: string;
    content: string;
    image: string;
    published: string;
    poster: string;
    name: string;
}

// Get Reddit token
async function getRedditToken() {
    const auth = Buffer.from(`${process.env.R_CLIENT_ID}:${process.env.R_API_KEY}`).toString('base64');

    const res = await fetch('https://www.reddit.com/api/v1/access_token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    });

    const data = await res.json();
    return data.access_token;
}

// Fetch single post data by Reddit name (e.g., t3_abc123)
async function getPostData(id: string): Promise<PostDetailsProps | null> {
    const token = await getRedditToken();
    const name = `t3_${id}`;

    const res = await fetch(`https://oauth.reddit.com/api/info?id=${name}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'User-Agent': 'web:yourapp:v1.0 (by /u/your_reddit_username)',
        },
        next: { revalidate: 10 },
    });

    if (!res.ok) {
        console.error('Failed to fetch:', res.status, await res.text());
        return null;
    }

    try {
        const data = await res.json();
        const post = data.data.children[0]?.data;

        if (!post) return null;

        return {
            id: post.id,
            headed: post.title,
            content: post.selftext || 'No content available.',
            image: post.thumbnail?.startsWith('http') ? post.thumbnail : '/r1.webp',
            published: new Date(post.created_utc * 1000).toLocaleDateString(),
            poster: post.author,
            name: post.subreddit,
        };
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}

// Server Component
export default async function PostDetail({ params }: { params: { id: string } }) {
    const post = await getPostData(params.id);

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto p-8 text-center">
                <h1 className="text-2xl font-bold text-red-600">404: Post Not Found</h1>
            </div>
        );
    }

    return (
        <div className='pt-[4vh] relative'>
            <div className="max-w-6xl mx-auto p-8 pt-40">
                {post.image && (
                    <Image
                        src={post.image}
                        alt={post.headed}
                        width={600}
                        height={400}
                        className="rounded-lg mb-6"
                    />
                )}
                <h1 className="text-3xl font-bold mb-4">{post.headed}</h1>
                <p className="text-gray-500 mb-2">Published on: {post.published}</p>
                <p className="text-gray-500 mb-4">By: {post.name} ({post.poster})</p>
                <div className="text-lg">
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
    );
}
