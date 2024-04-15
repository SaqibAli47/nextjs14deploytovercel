"use client";
import { login } from "@/lib/action";
import Link from "next/link";
import styles from './loginForm.module.css';
import { useFormState } from "react-dom";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
function LoginForm() {
const [state, formAction] = useFormState(login, undefined);
// const router = useRouter();
// useEffect(() => {
//     state?.success && router.push("/register")
// },[])
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="enter username" name="username" />
      <input type="password" placeholder="enter password" name="password" />
      <button>Login With Credentials</button>
      {state?.error && state.error}
    <Link href={"/register"}>Do not have an account <b>Register</b></Link>
    </form>
  );
}

export default LoginForm;
