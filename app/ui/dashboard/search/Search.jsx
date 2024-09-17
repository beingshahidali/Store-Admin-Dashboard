import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        placeholder={placeholder || "Type something"}
        type="text"
        className={styles.input}
      />
    </div>
  );
};

export default Search;
