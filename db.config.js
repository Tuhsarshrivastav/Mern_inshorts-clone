import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.db, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
