import { PropertyType } from "@/components/Property";
import mongoose, { Schema } from "mongoose";

type UserSchemaType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  bio: string;
  imageUrl: string;
  companyName: string;
  phoneNumber: string;
  workEmail: string;
  facebook: string;
  twitter: string;
  linkedIn: string;
  instagram: string;
  wishlist?: PropertyType[];
};

const UserSchema = new Schema<UserSchemaType>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    imageUrl: { type: String, default: "/placeholder-profile-image.png" },
    companyName: { type: String },
    phoneNumber: { type: String },
    workEmail: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    linkedIn: { type: String },
    instagram: { type: String },
    wishlist: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "property",
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", UserSchema);
