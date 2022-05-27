import { User } from "@prisma/client";
import { prisma } from "~/helpers/database-helpers";

export const findUser = async (id: string) => {
  return prisma.user.findUnique({
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
