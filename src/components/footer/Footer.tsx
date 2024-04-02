import styles from './footer.module.css'
function Footer () {
    return (
        <div className={styles.container}>
            <div className='logo'>
                tripleKDev
            </div>
            <div className='text'>
                tripek creative thoughts agency © All Rights Reserved
            </div>
        </div>
    )
}
export default Footer