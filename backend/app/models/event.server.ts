import { Event, EventOrganizer } from "@prisma/client";
import { prisma } from "~/helpers/database-helpers";

export const findEvent = async (id: string) => {
  return prisma.event.findUnique({
    where: {
      id,
    },
  });
};

export const findEventOrganizer = async (id: string) => {
  return prisma.eventOrganizer.findUnique({
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

export const deleteEventOrganizer = async (id: string) => {
  return prisma.eventOrganizer.delete({
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

export const updateEventOrganizer = async (
  id: string,
  eventOrganizer: Omit<EventOrganizer, "id">
) => {
  return prisma.eventOrganizer.update({
    where: {
      id,
    },
    data: {
      ...eventOrganizer,
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

export const insertEventOrganizer = async (
  eventOrganizer: Omit<EventOrganizer, "id">
) => {
  return prisma.eventOrganizer.create({
    data: {
      ...eventOrganizer,
    },
  });
};
