import mongoose from "mongoose";
const { Schema } = mongoose;

const attachmentsSchema = new Schema(
  {
    trackId: { type: Schema.Types.ObjectId, ref: "Task" },
    name: String,
    data: Buffer,
    contentType: String,
    size: Number,
  },
  { timestamps: true }
);

const Attachment = mongoose.model("Attachment", attachmentsSchema);

export default Attachment;
