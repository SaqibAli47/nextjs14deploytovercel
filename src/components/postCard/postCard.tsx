import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";
// import { Date } from "mongoose";
interface PostProps {
  title: string,
  desc: string,
  slug: string,
  img: string,
  createdAt: Date
}
function PostCard({post}: {post: PostProps}) {
  // console.log("post88", post.createdAt)
  // const formattedDate = new Date(post.createdAt).toLocaleDateString();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt="single image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>{post && new Date(post.createdAt).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.desc}
        </p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  );
}
export default PostCard;
