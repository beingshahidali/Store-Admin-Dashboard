import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input placeholder="Username" type="text" name="username" required />
        <input placeholder="Email" type="email" name="email" required />
        <input
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          placeholder="Address"
          name="address"
          id="address"
          cols="5"
          rows="16"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
