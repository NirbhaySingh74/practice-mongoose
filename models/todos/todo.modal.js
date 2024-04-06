import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: Number,
    en_No: {
      type: Number,
      required: true,
      unique: true,
    },
    class: String,
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);
