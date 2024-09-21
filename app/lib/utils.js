import mongoose from "mongoose";

export const connectToDb = async () => {
  const connection = {};
  try {
    if (connection.isConnected) {
      console.log("Already connected");
      return;
    }
    const db = await mongoose.connect(
      "mongodb://127.0.0.1:27017/Store_Admin_Dashboard"
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB successfully");
  } catch (e) {
    throw new Error("Couldn't connect to Mongoose" + e.message);
  }
};
