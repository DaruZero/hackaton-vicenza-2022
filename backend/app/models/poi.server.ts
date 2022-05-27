import { PointOfInterest } from "@prisma/client";
import { prisma } from "~/helpers/database-helpers";

export const findPointOfInterest = async (id: string) => {
  return prisma.pointOfInterest.findUnique({
    where: {
      id,
    },
  });
};

export const deletePointOfInterest = async (id: string) => {
  return prisma.pointOfInterest.delete({
    where: {
      id,
    },
  });
};

export const updatePointOfInterest = async (
  id: string,
  pointOfInterest: Omit<PointOfInterest, "id">
) => {
  return prisma.pointOfInterest.update({
    where: {
      id,
    },
    data: {
      ...pointOfInterest,
    },
  });
};

export const insertPointOfInterest = async (
  pointOfInterest: Omit<PointOfInterest, "id">
) => {
  return prisma.pointOfInterest.create({
    data: {
      ...pointOfInterest,
    },
  });
};
