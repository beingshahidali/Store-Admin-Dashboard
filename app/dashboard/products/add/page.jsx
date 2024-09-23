import { addProdcut } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form action={addProdcut} className={styles.form}>
        <input placeholder="title" type="text" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input placeholder="Price" type="number" name="price" />
        <input placeholder="Stock" type="number" name="stock" />
        <input placeholder="Color" type="text" name="color" />
        <input placeholder="Size" type="text" name="size" />
        <textarea
          placeholder="Description"
          name="desc"
          id="desc"
          cols="5"
          rows="16"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
