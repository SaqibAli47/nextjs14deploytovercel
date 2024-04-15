import { handleGithubLogin } from '@/lib/action';
import styles from './login.module.css'
import LoginForm from '@/components/loginForm/loginForm';
const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
        <button className={styles.github}>Login With Github</button>
      </form>
      <div className={styles.nextForm}>
        <LoginForm />
      </div>
    </div>
    </div>
  )
}

export default LoginPage
