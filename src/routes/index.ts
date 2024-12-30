import express from "express";
import {
  createMedication,
  modifyMedication,
  deleteMedication,
} from "../controllers/index";

const router = express.Router();

router.post("/", createMedication);
router.patch("/:id", modifyMedication);
router.delete("/:id", deleteMedication);

export default router;
