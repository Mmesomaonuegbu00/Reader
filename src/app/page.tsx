import Hero from '@/Component/Hero/Hero'
import Post from '@/Component/Post/Post'
import Recent from '@/Component/Recents/Recent';

import { getRedditPosts } from '../../utils/reddit';


export default async function Home() {
  const trending = await getRedditPosts('technology');
  const popular = await getRedditPosts('health');
  const editorsPick = await getRedditPosts('careerguidance'); 
  const gaming = await getRedditPosts('gaming'); 

  return (
    <div>
      <Hero />
      <Post
        trending={trending}
        popular={popular}
        editorsPick={editorsPick}
      />
      <Recent gaming={gaming} />
      
    </div>
  );
}