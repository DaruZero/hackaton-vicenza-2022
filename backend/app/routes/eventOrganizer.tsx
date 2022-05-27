import { EventOrganizer } from "@prisma/client";
import { ActionFunction } from "@remix-run/node";
import {
  findEventOrganizer,
  insertEventOrganizer,
  updateEventOrganizer,
  deleteEventOrganizer,
} from "~/models/event.server";

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "GET": {
      const body = (await request.json()) as EventOrganizer;
      return findEventOrganizer(body.id);
    }
    case "POST": {
      const body = (await request.json()) as EventOrganizer;
      return insertEventOrganizer(body);
    }
    case "PUT": {
      const body = (await request.json()) as EventOrganizer;
      return updateEventOrganizer(body.id, body);
    }
    case "DELETE": {
      const body = (await request.json()) as EventOrganizer;
      return deleteEventOrganizer(body.id);
    }
    default: {
      return new Response(null, {
        status: 405,
        statusText: "Method not allowed",
      });
    }
  }
};