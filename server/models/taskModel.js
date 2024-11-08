import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    clientName: String,
    username: String,
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
