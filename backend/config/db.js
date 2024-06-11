import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://fooddel:mesintempur3@cluster0.douidi7.mongodb.net/food-del"
    )
    .then(() => console.log("Connect"));
};
