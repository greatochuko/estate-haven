import mongoose from "mongoose";

type PropertySchemaType = {
  id: string;
  name: string;
  yearBuilt: string;
  parkingSpots: number;
  description: string;
  images: string[];
  price: number;
  city: string;
  state: string;
  type: string;
  agentId: string;
  views: number;
  beds: number;
  bath: number;
  area: number;
  category: "rent" | "sale";
  petsAllowed: boolean;
  dateCreated: string;
  isPublished: boolean;
};

const propertySchema = new mongoose.Schema<PropertySchemaType>(
  {
    name: { type: String, required: true },
    yearBuilt: { type: String, required: true },
    parkingSpots: { type: Number, default: 0 },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    type: { type: String, required: true },
    agentId: { type: String, required: true },
    views: { type: Number, default: 0 },
    beds: { type: Number, required: true },
    bath: { type: Number, required: true },
    area: { type: Number, required: true },
    category: { type: String, required: true },
    petsAllowed: { type: Boolean, required: true },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Property =
  mongoose.models?.Property ||
  mongoose.model<PropertySchemaType>("Property", propertySchema);
