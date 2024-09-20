import Link from "next/link";
import Pagination from "../../ui/dashboard/pagination/Pagination";
import styles from "../../ui/dashboard/users/userPage.module.css";
import Image from "next/image";
import Search from "../../ui/dashboard/search/Search";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead className="">
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.image}
                />
                John Doe
              </div>
            </td>
            <td>beignsha@gmail.com</td>
            <td>08.08.2000</td>
            <td>Enginerr</td>
            <td>Pending</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UserPage;
