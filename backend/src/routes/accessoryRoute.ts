import express from "express";
import { getAllAccessories } from "../services/accessoryService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const accessories = await getAllAccessories();
    res.status(200).send(accessories);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;