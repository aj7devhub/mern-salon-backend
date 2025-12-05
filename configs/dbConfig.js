import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  mongoose.connection.on('connected',() => {
    console.log("DB was connected successfully");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/mern-salon`);
};

export { connectDB };
