import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://tinkushakya501:Prem123456@cluster0.opkdldb.mongodb.net/twitter"
    );
    console.log(`Connected to Mongodb Database ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to Mongodb Database");
  }
};
