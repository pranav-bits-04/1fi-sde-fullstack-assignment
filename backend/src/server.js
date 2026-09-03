import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(",").map((item) => item.trim())
    : true
}));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "1Fi API is running" });
});

app.use("/api/products", productRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  });
