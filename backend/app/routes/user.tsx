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
      const body = await request.json();
      return findUser((body as any).id);
    }
    case "POST": {
      const body = await request.json();
      return insertUser(body as User);
    }
    case "PUT": {
      const body = await request.json();
      return updateUser((body as any).id, body as User);
    }
    case "DELETE": {
      const body = await request.json();
      return deleteUser((body as any).id);
    }
    default: {
      return new Response(null, {
        status: 405,
        statusText: "Method not allowed",
      });
    }
  }
};
