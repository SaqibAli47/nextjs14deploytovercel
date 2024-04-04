import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: [3, 'minimum character should be 3'],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v: string) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
      required: [true, "Email required"],
    },
    image: {
      type: String
    },
    password: {
      type: String,
      required: true,
      min: [6, "Password Should be minimum 6 character"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// for posts
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    }
  },
  { timestamps: true }
);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
