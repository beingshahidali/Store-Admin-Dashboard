import { User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (e) {
    throw new Error(e);
  }
};
