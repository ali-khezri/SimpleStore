import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const PORT = process.env.port || 5000;

app.use(express.json());

app.use("/api/products", productRoutes);

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
  });
}

startServer();
