import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required, unique: true },
  email: { type: String, required: true, unique: true },
  passworrd: { type: String, required: true, minlength: 6 },
  profileImage: { type: String, default: "" },
});

const User = mongoose.Schema("User", userSchema);

export default User;
