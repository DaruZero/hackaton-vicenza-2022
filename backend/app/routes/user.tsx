import { User } from "@prisma/client";
import { ActionFunction } from "@remix-run/node";
import {
  deleteUser,
  findUser,
  insertUser,
  updateUser,
} from "~/models/user.server";

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "GET": {
      const body = (await request.json()) as User;
      return findUser(body.id);
    }
    case "POST": {
      const body = (await request.json()) as User;
      return insertUser(body);
    }
    case "PUT": {
      const body = (await request.json()) as User;
      return updateUser(body.id, body);
    }
    case "DELETE": {
      const body = (await request.json()) as User;
      return deleteUser(body.id);
    }
    default: {
      return new Response(null, {
        status: 405,
        statusText: "Method not allowed",
      });
    }
  }
};
