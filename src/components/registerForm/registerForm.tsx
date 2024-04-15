"use client"
import { useFormState } from 'react-dom';
import styles from './registerForm.module.css'
import { addUser } from '@/lib/action';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function RegisterForm() {
  const [state, formAction] = useFormState(addUser, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.sucess && router.push("/login");
  }, [state?.sucess, router])
  return (
    <form action={formAction} className={styles.form}>
    <input type="text" placeholder="Enter User name" name="username" />
    <input type="text" placeholder="Enter name" name="name" />
    <input type="text" placeholder="Enter email" name="email" />
    <input type="text" placeholder="enter image url" name="img" />
    <input type="password" placeholder="Enter Password" name="password" />
    <input type="password" placeholder="Repeat Password" name="repeatpassword" />
    <button>Add User</button>
    {state?.error && state.error}
    <Link href={"/login"}>Have an account? <b>Login</b></Link>
  </form>
  )
}

export default RegisterForm
