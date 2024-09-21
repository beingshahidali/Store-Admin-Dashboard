import { User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q) => {
  const regEx = new RegExp(q, "i");
  try {
    connectToDb();
    const users = await User.find({ username: { $regex: regEx } });
    return users;
  } catch (e) {
    throw new Error(e);
  }
};
