import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  "use server";
  // const username = formData.get('username')
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    await connectToDb();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();

    console.log("Saved to db successfully");
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  } catch (e) {
    console.log("Something went wrong while adding user");
    throw e;
  }
};
export const addProdcut = async (formData) => {
  "use server";
  // const username = formData.get('username')
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    await connectToDb();

    const newPost = await new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newPost.save();

    console.log("Saved to db successfully");
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  } catch (e) {
    console.log("Something went wrong while adding product");
    throw e;
  }
};
export const deleteProdcut = async (formData) => {
  "use server";
  // const username = formData.get('username')
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDb();

    await Product.findByIdAndDelete(id);

    console.log("Deleted from db successfully");
    revalidatePath("/dashboard/products");
  } catch (e) {
    console.log("Something went wrong while Deleting product");
    throw e;
  }
};
