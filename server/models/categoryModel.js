import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    category: String,
    colorLabel: String,
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
