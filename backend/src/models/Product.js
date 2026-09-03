import mongoose from "mongoose";

const variantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    storage: { type: String, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
  },
  { _id: false }
);

const emiPlanSchema = new mongoose.Schema(
  {
    tenure: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    monthlyPayment: { type: Number, required: true },
    cashback: { type: Number, default: 0 }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    variants: { type: [variantSchema], required: true },
    emiPlans: { type: [emiPlanSchema], required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
