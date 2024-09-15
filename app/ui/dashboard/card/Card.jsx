import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={25} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>22.3 M</span>
        <span className={styles.title}>
          <span className={styles.positive}>20%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
