import React from 'react'
import styles from './postUser.module.css'
import Image from 'next/image'
import { getSingleUser } from '@/lib/data'
// Fetch an single User
// const getUserData = async (userId:number) => {
//    try{
//     const url = `https://jsonplaceholder.typicode.com/users/${userId}`
//     const res = await fetch(url, {cache: 'no-store'});
//     if(!res.ok){
//         throw new Error("Something Went Wrong!");
//     } return res.json();
//    } catch(err){
//     console.log("error", err)
//    }
// }
const PostUser = async ({id}: Readonly<{id: number}>) =>  {
    const userId = Number(id);
    const user = await getSingleUser(userId);
    return (
        <div className={styles.detail}>
            <Image
            className={styles.avatar}
            src={`https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
            alt="single image"
            width={50}
            height={50}
            />
            <div className={styles.detailText}>
                <div className={styles.detailTitle}>{user?.username}</div>
                <div className={styles.detailValue}>{user?.name}</div>
            </div>
            <div className={styles.detailText}>
                <div className={styles.detailTitle}>Published</div>
                <div className={styles.detailValue}>01.01.2024</div>
            </div>
        </div>
    )
}
export default PostUser
