import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  "use server";
  // const username = formData.get('username')
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    await connectToDb();
    const newUser = await new User({
      username,
      email,
      password,
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
