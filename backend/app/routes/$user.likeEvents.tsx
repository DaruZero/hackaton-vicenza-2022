import { ActionFunction } from "@remix-run/node";
import {
  deleteUserLikeEvent,
  findUserLikeEvent,
  insertUserLikeEvent,
} from "~/models/user.server";

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "GET": {
      const body = (await request.json()) as { userId: string };
      return findUserLikeEvent(body.userId);
    }
    case "POST": {
      const body = (await request.json()) as {
        userId: string;
        eventId: string;
      };
      return insertUserLikeEvent(body.userId, body.eventId);
    }
    case "DELETE": {
      const body = (await request.json()) as { id: string };
      return deleteUserLikeEvent(body.id);
    }
  }
};
