import { User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q, page) => {
  const regEx = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    await connectToDb();
    const count = await User.find({
      username: { $regex: regEx },
    }).countDocuments();
    const users = await User.find({ username: { $regex: regEx } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (e) {
    throw new Error(e);
  }
};
