import express from "express";
import { getAllMobiles } from "../services/mobileService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const mobiles = await getAllMobiles();
    res.status(200).send(mobiles);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});

export default router;