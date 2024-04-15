import { handleGithubLogin, login } from '@/lib/action';
import styles from './login.module.css'
const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
        <button>Login With Github</button>
      </form>
      <div className={styles.nextForm}>
      <form action={login} className={styles.form}>
        <input type='text' placeholder='enter username' name='username' />
        <input type='password' placeholder='enter password' name='password' />
        <button>Login With Credentials</button>
      </form>
      </div>
    </div>
    </div>
  )
}

export default LoginPage
