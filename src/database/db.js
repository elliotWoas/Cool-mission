import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected...");
  } catch (err) {
    console.log("MongoDB connection faild:", err.message);
    process.exit(1);
  }
};

export default connectDB;