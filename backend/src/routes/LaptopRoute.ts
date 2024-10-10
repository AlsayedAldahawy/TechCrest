import express from "express";
import { getAllLaptops } from "../services/laptopService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const laptops = await getAllLaptops();
    res.status(200).send(laptops);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;