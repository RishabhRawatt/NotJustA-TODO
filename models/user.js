import mongoose from "mongoose";

//make schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createddAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", schema);
