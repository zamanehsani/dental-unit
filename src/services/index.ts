import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addMedication = async (data: any) => {
  return await prisma.medications.create({ data });
};

export const updateMedication = async (id: number, data: any) => {
  return await prisma.medications.update({ where: { id }, data });
};

export const removeMedication = async (id: number) => {
  return await prisma.medications.delete({ where: { id } });
};

export const addProcedure = async (data: any) => {
  return await prisma.procedures.create({ data });
};

export const updateProcedure = async (id: number, data: any) => {
  return await prisma.procedures.update({ where: { id }, data });
};

export const removeProcedure = async (id: number) => {
  return await prisma.procedures.delete({ where: { id } });
};
