import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }, // Fixed typo here
    profileImage: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

// Hash the password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // Fixed here too
  next();
});

//comapre password function
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Correct way to create a model
const User = mongoose.model("User", userSchema); // Changed Schema to model

export default User;
