import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUserPage/singleUserPage.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="avatar" fill />
        </div>
        {user?.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={id} />
          <label>Username</label>
          <input type="text" placeholder={user?.username} name="username" />
          <label>Email</label>
          <input type="email" placeholder={user?.email} name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" placeholder={user?.phone} name="phone" />
          <label>Address</label>
          <textarea type="text" placeholder={user?.address} name="address" />
          <lable>Is Admin ?</lable>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <lable>Is Active ?</lable>
          <select name="isActive" id="isActive">
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
