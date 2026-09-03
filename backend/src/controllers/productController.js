import Product from "../models/Product.js";

export async function getProducts(req, res) {
  try {
    const products = await Product.find({}, {
      name: 1,
      slug: 1,
      brand: 1,
      description: 1,
      variants: 1
    }).sort({ createdAt: 1 });

    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function getProductBySlug(req, res) {
  try {
    const product = await Product.findOne({ slug: req.params.slug });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
