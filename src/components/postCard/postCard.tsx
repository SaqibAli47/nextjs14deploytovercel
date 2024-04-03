import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";
interface PostProps {
  title: string,
  body: string,
  id: number
}
function PostCard({post}: {post: PostProps}) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={`https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
            alt="single image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.body}
        </p>
        <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  );
}
export default PostCard;
