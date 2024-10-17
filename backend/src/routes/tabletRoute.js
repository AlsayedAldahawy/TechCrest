import express from "express";
import { getAllTablets } from "../services/tabletService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tablets = await getAllTablets();
    res.status(200).send(tablets);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;