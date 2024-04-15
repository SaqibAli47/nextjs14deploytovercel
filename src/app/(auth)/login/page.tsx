import { handleGithubLogin, login } from '@/lib/action';
const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login With Github</button>
      </form>
      <form action={login}>
        <input type='text' placeholder='enter username' name='username' />
        <input type='password' placeholder='enter password' name='password' />
        <button>Login With Credentials</button>
      </form>
    </div>
  )
}

export default LoginPage
