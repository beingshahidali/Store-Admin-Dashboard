import Link from "next/link";
import Pagination from "../../ui/dashboard/pagination/Pagination";
import styles from "../../ui/dashboard/products/productPage.module.css";
import Image from "next/image";
import Search from "../../ui/dashboard/search/Search";

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a product" />
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add new</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead className="">
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created at</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/noproduct.jpg"
                    alt="product image"
                    width={40}
                    height={40}
                    className={styles.image}
                  />
                  iPhone
                </div>
              </td>
              <td>This is indeed a very good product.</td>
              <td>$888</td>
              <td>August 8</td>
              <td>34</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/products/test">
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
    </div>
  );
};

export default ProductPage;
