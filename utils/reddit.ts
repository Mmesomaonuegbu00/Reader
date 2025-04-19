export async function getRedditToken() {
    const auth = btoa(`${process.env.R_CLIENT_ID}:${process.env.R_API_KEY }`);
    
    const res = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const data = await res.json();
  
    return data.access_token;
  }
  
  export async function getRedditPosts(subreddit: string) {
    const token = await getRedditToken();
  
    const response = await fetch(`https://oauth.reddit.com/r/${subreddit}/hot?limit=10`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'web:yourapp:v1.0 (by /u/your_reddit_username)',
      },
    });
  
    const data = await response.json();
  
    return (data.data.children || []).map((item: { data: { id: string; name: string; title: string; author: string; created_utc: number; selftext?: string; thumbnail?: string; permalink: string; } }) => ({
      id: item.data.id,
      name: item.data.name,
      headed: item.data.title,
      poster: item.data.author,
      posterImage: '/alex.webp',
      nameSub: subreddit,
      published: new Date(item.data.created_utc * 1000).toLocaleDateString(),
      content: item.data.selftext || ' A new wave of innovation is sweeping the gaming world this week Developers reveal stunning trailers for upcoming AAA titles Analysts predict a record-breaking year for the global game market',
      image: item.data.thumbnail?.startsWith('http') ? item.data.thumbnail : '/r1.webp',
      permalink: item.data.permalink,
    }));
    
  }
  