import { Event } from "@prisma/client";
import { ActionFunction } from "@remix-run/node";
import {
  findEvent,
  insertEvent,
  updateEvent,
  deleteEvent,
} from "~/models/event.server";

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "GET": {
      const body = await request.json();
      return findEvent((body as any).id);
    }
    case "POST": {
      const body = await request.json();
      return insertEvent(body as Event);
    }
    case "PUT": {
      const body = await request.json();
      return updateEvent((body as any).id, body as Event);
    }
    case "DELETE": {
      const body = await request.json();
      return deleteEvent((body as any).id);
    }
    default: {
      return new Response(null, {
        status: 405,
        statusText: "Method not allowed",
      });
    }
  }
};
