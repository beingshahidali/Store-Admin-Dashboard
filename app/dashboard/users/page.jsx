import Link from "next/link";
import Pagination from "../../ui/dashboard/pagination/Pagination";
import styles from "../../ui/dashboard/users/userPage.module.css";
import Image from "next/image";
import Search from "../../ui/dashboard/search/Search";
import { fetchUsers } from "@/app/lib/data";

const UserPage = async () => {
  const users = await fetchUsers();
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
          {users.map((user) => {
            return (
              <tr key={user.email}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={user?.img || "/noavatar.png"}
                      alt="user image"
                      width={40}
                      height={40}
                      className={styles.image}
                    />
                    {user?.username}
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>{user?.createdAt?.toString().slice(4, 11) || "200 BC"}</td>
                <td>{user?.isAdmin ? " Admin" : "Client"}</td>
                <td>{user?.isActive ? " Active" : "Passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user?.id}`}>
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
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UserPage;
