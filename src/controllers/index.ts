import { Request, Response } from "express";
import { publishToQueue } from "../utils/rabbitmq";
import {
  addMedication,
  updateMedication,
  removeMedication,
} from "../services/index";

import {
  addProcedure,
  updateProcedure,
  removeProcedure,
} from "../services/index";

export const createMedication = async (req: Request, res: Response) => {
  const medication = await addMedication(req.body);
  publishToQueue("medication_created", medication);
  res.status(201).json(medication);
};

export const modifyMedication = async (req: Request, res: Response) => {
  const medication = await updateMedication(Number(req.params.id), req.body);
  publishToQueue("medication_updated", medication);
  res.status(200).json(medication);
};

export const deleteMedication = async (req: Request, res: Response) => {
  await removeMedication(Number(req.params.id));
  publishToQueue("medication_deleted", { id: req.params.id });
  res.status(204).send();
};

export const createProcedure = async (req: Request, res: Response) => {
  const procedure = await addProcedure(req.body);
  publishToQueue("procedure_created", procedure);
  res.status(201).json(procedure);
};

export const modifyProcedure = async (req: Request, res: Response) => {
  const procedure = await updateProcedure(Number(req.params.id), req.body);
  publishToQueue("procedure_updated", procedure);
  res.status(200).json(procedure);
};

export const deleteProcedure = async (req: Request, res: Response) => {
  await removeProcedure(Number(req.params.id));
  publishToQueue("procedure_deleted", { id: req.params.id });
  res.status(204).send();
};
