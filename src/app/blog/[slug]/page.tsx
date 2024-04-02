import styles from './singlePostPage.module.css'
import Image from 'next/image'
function singlePostPage () {
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
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                    className={styles.avatar}
                    src={`https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                    alt="single image"
                    width={50}
                    height={50}
                    />
                    <div className={styles.detailText}>
                        <div className={styles.detailTitle}>Author</div>
                        <div className={styles.detailValue}>Terry Jefferson</div>
                    </div>
                    <div className={styles.detailText}>
                        <div className={styles.detailTitle}>Published</div>
                        <div className={styles.detailValue}>01.01.2024</div>
                    </div>
                </div>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus debitis harum voluptatum doloremque architecto dolores inventore perspiciatis, at tenetur aspernatur voluptatibus dicta dignissimos delectus nisi aperiam, consectetur est porro nulla!</p>
                </div>
            </div>
        </div>
    )
}
export default singlePostPage