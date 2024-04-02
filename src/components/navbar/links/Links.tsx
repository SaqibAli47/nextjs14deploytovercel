"use client"
import NotFound from "@/app/not-found";
import navbarProps from "@/components/interfaces/navbar";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";
function PageLinks({ links }: { links: navbarProps[] }) {
    //Temporary
    const [mobileMenu, setMobileMenu] = useState(false)
    const session = true;
    const isAdmin = true;
  return (
    <div className={styles.container}>
        <div className={styles.mainLink}>
        {links && links.length > 0 ? (
            <div className={styles.links}>
            {links.map((link, index) => (
                <NavLink item={link} key={index} />
            ))} {
                session ? (
                    <>
                    {isAdmin && <NavLink item={{title: "Admin", slug: "/admin"}} />}
                    <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "Login", slug: "/login"}}/>
                )
            }
            </div>
            ) : (
                <NotFound />
            )}
        </div>
        {/* <button className={styles.menuButton} onClick={() => setMobileMenu((prevState) => !prevState)}>Menu</button> */}
        <Image src={`/menu.png`} onClick={() => setMobileMenu((prevState) => !prevState)} className={styles.menuButton} alt="menu-png" width={30} height={30} />
        {
            mobileMenu && (
                <div className={styles.mobileLinks} >
                    { links && links.map((link, index) => (
                        <NavLink item={link} key={index} />
                    ))} {
                        session ? (
                            <>
                            {isAdmin && <NavLink item={{title: "Admin", slug: "/admin"}} />}
                            <button className={styles.logout}>Logout</button>
                            </>
                        ) : (
                            <NavLink item={{title: "Login", slug: "/login"}}/>
                        )
                    }
                </div>
            )
        }
    </div>
  )
}
export default PageLinks;
