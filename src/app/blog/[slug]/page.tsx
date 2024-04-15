import styles from "./singlePostPage.module.css";
import React, { Suspense } from "react";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getSinglePostWithSlug } from "@/lib/data";
import { Metadata, ResolvingMetadata } from 'next';
// Fetch an Single POST API method
const getSinglePost = async (slug:string) => {
    // const url = `http://localhost:3000/api/blog/${slug}`;
    const url = `https://nextjs14deploytovercel-learning.vercel.app/api/blog/${slug}`;
    try{
        const res = await fetch(url);
        if(!res.ok){
            throw new Error("Something went Wrong");
        } return res.json();
    } catch(err){
        console.log("Error", err)
    }
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // read route params
  const { slug } = params;
  // console.log("slug77: ", slug)

  // fetch data
  // const post = await getSinglePostWithSlug(slug);
  const post = await getSinglePost(slug)
  // console.log("post77:", post)

  return {
    title: post?.title,
    description: post?.desc,
  };
}
async function singlePostPage({params}: Readonly<{ params: { slug: string } }>) {
  const { slug } = params;
  // const post = await getSinglePostWithSlug(slug);
  const post = await getSinglePost(slug);
  // console.log("Post777: ", post)
  return (
    <div className={styles.container}>
      {post && post.img && (
        <div className={styles.imgContainer}>
          <Image
            src={`${post && post.img}`}
            alt="single image"
            fill
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.container}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>
              {post && new Date(post.createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
}
export default singlePostPage;
