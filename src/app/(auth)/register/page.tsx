import { addUser } from "@/lib/action";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={addUser} className={styles.form}>
          <input type="text" placeholder="Enter User name" name="username" />
          <input type="text" placeholder="Enter name" name="name" />
          <input type="text" placeholder="Enter email" name="email" />
          <input type="text" placeholder="enter image url" name="img" />
          <input type="password" placeholder="Enter Password" name="password" />
          <input type="password" placeholder="Repeat Password" name="repeatpassword" />
          <button>Add User</button>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
