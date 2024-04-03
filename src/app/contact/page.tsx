"use client"
import Image from 'next/image'
import styles from './contact.module.css'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// import HydrationTest from '@/components/HydrationTest'
const initialData = {
    name: '',
    email: '',
    phone_number: '',
    message: '',
}
// const HydrationTestNoSSR = dynamic(() => import("@/components/HydrationTest"), {ssr: false})
function ContactPage(){
    const [data, setData] = useState(initialData)
    const [client, setClient] = useState(false);
    const handleChange = (e:any) => {
        // if any prop drilling
        e.stopPropagation();
        if(e.target.value) {
            setData({
                ...data,
                [e.target.name] : e.target.value
            })
        }
    }
    const isReady = () => {
        return data?.name !== '' && data.email !== '' && data.message !== '';
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        // call an API to insert record
        try{
            console.log("data::", data)
        } catch(err){
            console.log("err", {err})
        }
    }
    useEffect(() => {
        setClient(true)
    },[])
    
    const uniqueRandom = () => {
        let result = '';
        while (result.length < 6) {
            let digit = Math.floor(Math.random() * 10);
            if (!result.includes(digit.toString())) {
                result += digit;
            }
        }
        return result;
    };
    
    const randomNumber = uniqueRandom();  
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt='Contact Image' fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form action={""} className={styles.form}>
                    {/* <HydrationTestNoSSR /> */}
                    {/* <div suppressHydrationWarning>{randomNumber}</div> */}
                    <input type='text' name="name" placeholder='Name and Surename' onChange={handleChange} />
                    <input type='text' name="email" placeholder='Email Address' onChange={handleChange} />
                    <input type='text' name="phone_number" placeholder='Phone Number (Optional)' onChange={handleChange} />
                    <textarea name="message" id="" cols={30} rows={10} placeholder='Message' onChange={handleChange}></textarea>
                    <button disabled={!isReady()} onClick={handleSubmit}>Send</button>
                </form>
            </div>
        </div>
    )
}
export default ContactPage