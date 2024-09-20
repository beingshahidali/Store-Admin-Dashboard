import styles from "@/app/ui/dashboard/users/singleUserPage/singleUserPage.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="avatar" fill />
        </div>
        Jordan Jr.
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" placeholder="Jordan Jr." name="username" />
          <label>Email</label>
          <input type="email" placeholder="Jordan@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" placeholder="+91 9211121224" name="phone" />
          <label>Address</label>
          <textarea type="text" placeholder="Bihar 06" name="address" />
          <lable>Is Admin ?</lable>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <lable>Is Active ?</lable>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
