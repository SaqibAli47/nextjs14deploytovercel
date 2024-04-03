import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data';
// import Error from 'next/error';
// type BlogPageProps = {
//     params: string | string[];
//     searchParams: string;
// }
// Fetch Posts With an API method
// const getPosts = async () => {
//     const url = `https://jsonplaceholder.typicode.com/posts`;
//     try {
//         const response = await fetch(url, {next: {revalidate: 3600}});
//         if(!response.ok){
//             throw new Error("Not Found");
//         } else{
//             const data = response.json();
//             return data;
//         }
//     } catch (err) {
//         console.log(err);
//         throw new Error("Not Found");
//     } 
// }
const BlogPage = async () => {
    const posts = await getPosts();
    // console.log("Posts", posts)
    return (
        <div className={styles.container}>
          {posts.map((post:any) => (
            <div className={styles.post} key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      );
}
export default BlogPage