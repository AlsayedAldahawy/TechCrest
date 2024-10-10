import express from "express";
import { getAllGaming } from "../services/gamingService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const gaming = await getAllGaming();
    res.status(200).send(gaming);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;