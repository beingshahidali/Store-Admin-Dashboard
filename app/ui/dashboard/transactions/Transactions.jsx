import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noAvatar.png"
                  alt="table image"
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>15.08.1947</td>
            <td>$8.78</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noAvatar.png"
                  alt="table image"
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>15.08.1947</td>
            <td>$8.78</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noAvatar.png"
                  alt="table image"
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>15.08.1947</td>
            <td>$8.78</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noAvatar.png"
                  alt="table image"
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>15.08.1947</td>
            <td>$8.78</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
