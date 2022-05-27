import { Event } from "@prisma/client";
import { prisma } from "~/helpers/database-helpers";

export const findEvent = async (id: string) => {
  return prisma.event.findUnique({
    where: {
      id,
    },
  });
};

export const deleteEvent = async (id: string) => {
  return prisma.event.delete({
    where: {
      id,
    },
  });
};

export const updateEvent = async (id: string, event: Omit<Event, "id">) => {
  return prisma.event.update({
    where: {
      id,
    },
    data: {
      ...event,
    },
  });
};

export const insertEvent = async (event: Omit<Event, "id">) => {
  return prisma.event.create({
    data: {
      ...event,
    },
  });
};
