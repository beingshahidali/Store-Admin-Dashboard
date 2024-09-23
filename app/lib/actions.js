"use server";
import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
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
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDb();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await User.findByIdAndUpdate(id, updateFields);

    console.log("Updated to db successfully");
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  } catch (e) {
    console.log("Something went wrong while updating user" + e);
    throw e;
  }
};
export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    await connectToDb();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Product.findByIdAndUpdate(id, updateFields);

    console.log("Updated to db successfully");
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  } catch (e) {
    console.log("Something went wrong while updating user" + e);
    throw e;
  }
};
export const addProdcut = async (formData) => {
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
export const deleteProduct = async (formData) => {
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
export const deleteUser = async (formData) => {
  // const username = formData.get('username')
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDb();

    await User.findByIdAndDelete(id);

    console.log("Deleted from db successfully");
    revalidatePath("/dashboard/users");
  } catch (e) {
    console.log("Something went wrong while Deleting user");
    throw e;
  }
};
export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
