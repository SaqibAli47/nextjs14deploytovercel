"use client"
import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'
interface navLink {
    title: string,
    slug: string
}
const NavLink = ({item}: {item: navLink}) => {
    const pathName = usePathname();
    return (
        <Link href={item.slug} className={`${styles.container} ${pathName === item.slug && styles.active}`}>{item.title}</Link>
    )
}
export default NavLink