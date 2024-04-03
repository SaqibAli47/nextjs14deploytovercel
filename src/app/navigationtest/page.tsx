"use client"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function NavigationTest() {
  const router = useRouter();
  const pathName = usePathname();
  // console.log("PathName", pathName)
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams.get('q'))
  const handleClick = (e:any) => {
    e.stopPropagation();
    console.log("clicked")
    router.replace("/");
  }
  return (
    <div>
      <Link href={"/"} prefetch={false}>Click Here</Link>
      <button onClick={handleClick}>Click Me</button>

    </div>
  )
}

export default NavigationTest
