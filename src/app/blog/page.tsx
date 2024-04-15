import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
import { Metadata } from "next";
// import Error from 'next/error';
// type BlogPageProps = {
//     params: string | string[];
//     searchParams: string;
// }
// Fetch Posts With an API method
const getPostsData = async () => {
    // const url = `http://localhost:3000/api/blog`;
    const url = `https://nextjs14deploytovercel-learning.vercel.app/api/blog`
    try {
        const response = await fetch(url, {next: {revalidate: 3600}});
        if(!response.ok){
            throw new Error("Not Found");
        } else{
            const data = response.json();
            return data;
        }
    } catch (err) {
        console.log(err);
        throw new Error("Not Found");
    }
}
export const metadata: Metadata = {
  title: "Blog Page",
  description: "This one is the blog Page",
};
const BlogPage = async () => {
  // const posts = await getPosts();
  const posts = await getPostsData();
  // console.log("Posts", posts)
  return (
    <div className={styles.container}>
      {posts.map((post: any) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
