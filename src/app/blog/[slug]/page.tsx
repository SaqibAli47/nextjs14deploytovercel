import styles from './singlePostPage.module.css'
import React, { Suspense } from 'react'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { getSinglePostWithSlug } from '@/lib/data'
// Fetch an Single POST API method
// const getPost = async (slug:number) => {
//     const url = `https://jsonplaceholder.typicode.com/posts/${slug}`;
//     try{
//         const res = await fetch(url);
//         if(!res.ok){
//             throw new Error("Something went Wrong");
//         } return res.json();
//     } catch(err){
//         console.log("Error", err)
//     }
// }
async function singlePostPage ({params}: Readonly<{params: {slug: string}}>) {
    const {slug} = params;
    const post = await getSinglePostWithSlug(slug)
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                src={`${post && post.img}`}
                alt="single image"
                fill
                className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <PostUser userId={post.userId} />
                </Suspense>
                <div className={styles.content}>
                    <p>{post.desc}</p>
                </div>
            </div>
        </div>
    )
}
export default singlePostPage