import Link from "next/link";
import Pagination from "../../ui/dashboard/pagination/Pagination";
import styles from "../../ui/dashboard/products/productPage.module.css";
import Image from "next/image";
import Search from "../../ui/dashboard/search/Search";
import { fetchProducts, fetchUsers } from "@/app/lib/data";
import { deleteProdcut } from "@/app/lib/actions";

const ProductPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { products, count } = await fetchProducts(q, page);
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
            {products.map((product) => (
              <tr key={product?.id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={product?.img || "/noproduct.jpg"}
                      alt="product image"
                      width={40}
                      height={40}
                      className={styles.image}
                    />
                    {product?.title}
                  </div>
                </td>
                <td>{product?.desc}</td>
                <td>{product?.price}</td>
                <td>August 8</td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product?.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deleteProdcut}>
                      <input type="hidden" name="id" value={product?.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default ProductPage;
