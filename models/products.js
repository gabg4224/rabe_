import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      trim: true,
    },
    price: { type: Number, required: [true, "Price is required"] },
    color: { type: Array, required: [true, "Color is required"] },
    size: { type: String, required: [true, "Size is required"] },
    description: {
      type: String,
      required: [true, "description is required"],
      unique: true,
      trim: true,
    }
   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Product || model("Product", productSchema);
