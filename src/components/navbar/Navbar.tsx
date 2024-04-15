import Link from "next/link";
import PageLinks from "@/components/navbar/links/Links";
import navbarProps from "@/components/interfaces/navbar"
import styles from './navbar.module.css'
import { auth } from "@/lib/auth";
const linksArr: navbarProps[] = [
    {
        "title": "Home",
        "slug": "/"
    },
    {
        "title": "About",
        "slug": "/about"
    },
    {
        "title": "Blogs",
        "slug": "/blog"
    },
    {
        "title": "Contact",
        "slug": "/contact"
    },

];
const NavBar = async () =>  {
    const session = await auth();
    // console.log("session:", session)
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Logo
            </Link>
            <div>
                <PageLinks links={linksArr} session = {session}/>
            </div>
        </div>
    )
}
export default NavBar