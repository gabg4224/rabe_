import products from "@/models/products";
import { connectDB } from "@/utils/mongoose.js";
connectDB();

export default async function handler(req, res) {
  const { method, body, query:{id}} = req;
  switch (method) {
    case "GET":
      try {
        const productList = await products.find();
        console.log(productList);
        return res.status(200).json(productList);
      } catch (error) {
        return res.status(400).json(error);
      }
    case "POST":
      try {
        const newProduct = new products(body);
        const savedProduct = await newProduct.save();
        return res.status(201).json(savedProduct);
      } catch (error) {

        return res.status(400).json(error);
      }

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
