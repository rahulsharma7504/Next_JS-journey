import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String }, // Static field
    content: { type: String }, // Static field
  },
  { strict: false } // Allow dynamic fields
);

// Model creation
export const postModel = mongoose.models.Post || mongoose.model("Post", postSchema);
