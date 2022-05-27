import { ActionFunction } from "@remix-run/node";
import {
  deleteUserLikePointOfInterest,
  findUserLikePointOfInterest,
  insertUserLikePointOfInterest,
} from "~/models/user.server";

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "GET": {
      const body = (await request.json()) as { id: string };
      return findUserLikePointOfInterest(body.id);
    }
    case "POST": {
      const body = (await request.json()) as {
        userId: string;
        pointOfInterestId: string;
      };
      return insertUserLikePointOfInterest(body.userId, body.pointOfInterestId);
    }
    case "DELETE": {
      const body = (await request.json()) as { id: string };
      return deleteUserLikePointOfInterest(body.id);
    }
  }
};
