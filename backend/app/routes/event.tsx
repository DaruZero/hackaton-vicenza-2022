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
      const body = (await request.json()) as Event;
      return findEvent(body.id);
    }
    case "POST": {
      const body = (await request.json()) as Event;
      return insertEvent(body);
    }
    case "PUT": {
      const body = (await request.json()) as Event;
      return updateEvent(body.id, body);
    }
    case "DELETE": {
      const body = (await request.json()) as Event;
      return deleteEvent(body.id);
    }
    default: {
      return new Response(null, {
        status: 405,
        statusText: "Method not allowed",
      });
    }
  }
};
