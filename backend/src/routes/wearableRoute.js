import express from "express";
import { getAllWearable } from "../services/wearableService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const laptops = await getAllWearable();
    res.status(200).send(laptops);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;