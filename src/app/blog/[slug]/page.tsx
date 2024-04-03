import styles from './singlePostPage.module.css'
import React, { Suspense } from 'react'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser'
import { getSinglePost } from '@/lib/data'
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
    const postId = Number(slug);
    const post = await getSinglePost(postId)
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                src={`https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                alt="single image"
                fill
                className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <PostUser id={post.userId} />
                </Suspense>
                <div className={styles.content}>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    )
}
export default singlePostPage