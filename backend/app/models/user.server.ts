import { User } from "@prisma/client";
import { prisma } from "~/helpers/database-helpers";

export const findUser = async (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const findUserLikeEvent = async (userId: string) => {
  return prisma.userLikeEvent.findMany({
    where: {
      userId,
    },
  });
};

export const findUserLikePointOfInterest = async (id: string) => {
  return prisma.userLikePointOfInterest.findMany({
    where: {
      id,
    },
  });
};

export const deleteUser = async (id: string) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};

export const deleteUserLikeEvent = async (id: string) => {
  return prisma.userLikeEvent.delete({
    where: {
      id,
    },
  });
};

export const deleteUserLikePointOfInterest = async (id: string) => {
  return prisma.userLikePointOfInterest.delete({
    where: {
      id,
    },
  });
};

export const updateUser = async (id: string, user: Omit<User, "id">) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      ...user,
    },
  });
};

export const insertUser = async (user: Omit<User, "id">) => {
  return prisma.user.create({
    data: {
      ...user,
    },
  });
};

export const insertUserLikeEvent = async (userId: string, eventId: string) => {
  return prisma.userLikeEvent.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      event: {
        connect: {
          id: eventId,
        },
      },
    },
  });
};

export const insertUserLikePointOfInterest = async (
  userId: string,
  pointOfInterestId: string
) => {
  return prisma.userLikePointOfInterest.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      pointOfInterest: {
        connect: {
          id: pointOfInterestId,
        },
      },
    },
  });
};
