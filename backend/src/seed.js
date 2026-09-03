import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";

const products = [
  {
    name: "Apple iPhone 17 Pro",
    slug: "iphone-17-pro",
    brand: "Apple",
    description:
      "Premium smartphone with a pro-grade camera system and powerful performance.",

    variants: [
      {
        name: "Silver",
        storage: "256 GB",
        mrp: 134900,
        price: 124900,
        image: "/images/iphone-silver.jpg",
      },
      {
        name: "Deep Blue",
        storage: "512 GB",
        mrp: 154900,
        price: 144900,
        image: "/images/iphone-blue.jpg",
      },
    ],

    emiPlans: [
      {
        tenure: 6,
        interestRate: 0,
        monthlyPayment: 20817,
        cashback: 3000,
      },
      {
        tenure: 9,
        interestRate: 10.5,
        monthlyPayment: 15140,
        cashback: 2500,
      },
      {
        tenure: 12,
        interestRate: 10.5,
        monthlyPayment: 10988,
        cashback: 1500,
      },
    ],
  },

  {
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-s24-ultra",
    brand: "Samsung",
    description:
      "Flagship Android smartphone with an immersive display, S Pen and advanced cameras.",

    variants: [
      {
        name: "Titanium Gray",
        storage: "256 GB",
        mrp: 129999,
        price: 114999,
        image: "/images/samsung-gray.jpg",
      },
      {
        name: "Titanium Black",
        storage: "512 GB",
        mrp: 139999,
        price: 124999,
        image: "/images/samsung-black.jpg",
      },
    ],

    emiPlans: [
      {
        tenure: 6,
        interestRate: 0,
        monthlyPayment: 19167,
        cashback: 2500,
      },
      {
        tenure: 9,
        interestRate: 10.5,
        monthlyPayment: 13917,
        cashback: 2000,
      },
      {
        tenure: 12,
        interestRate: 10.5,
        monthlyPayment: 10111,
        cashback: 1000,
      },
    ],
  },

  {
    name: "Google Pixel 9 Pro",
    slug: "google-pixel-9-pro",
    brand: "Google",
    description:
      "AI-powered smartphone with a clean Android experience and exceptional photography.",

    variants: [
      {
        name: "Porcelain",
        storage: "128 GB",
        mrp: 109999,
        price: 99999,
        image: "/images/google-procelain.jpg",
      },
      {
        name: "Obsidian",
        storage: "256 GB",
        mrp: 119999,
        price: 109999,
        image: "/images/google-obsidian.jpg",
      },
    ],

    emiPlans: [
      {
        tenure: 6,
        interestRate: 0,
        monthlyPayment: 16667,
        cashback: 2000,
      },
      {
        tenure: 9,
        interestRate: 10.5,
        monthlyPayment: 12250,
        cashback: 1500,
      },
      {
        tenure: 12,
        interestRate: 10.5,
        monthlyPayment: 8895,
        cashback: 1000,
      },
    ],
  },
];

async function seed() {
  try {
    await connectDB();

    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log(`Seeded ${products.length} products`);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
}

seed();