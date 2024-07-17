import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL)
    console.log(`Database Connected Successfully With ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error)
  }
}

export default connectDB