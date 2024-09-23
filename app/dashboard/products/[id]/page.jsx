import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <form action={updateProduct} className={styles.form}>
        <input type="hidden" name="id" value={product.id} />
        <input type="text" placeholder={product?.title} name="title" />
        <select name="cat" id="cat">
          <option value="general">
            {product?.cat || "Choose a Category"}{" "}
          </option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          placeholder={product?.price || "Please enter price"}
          name="price"
        />
        <input
          type="number"
          placeholder={product?.stock || "please enter stock"}
          name="stock"
        />
        <input
          type="text"
          placeholder={product?.color || "please choose a color"}
          name="color"
        />
        <input
          type="text"
          placeholder={product?.size || "please choose a size"}
          name="size"
        />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder={product?.desc}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
