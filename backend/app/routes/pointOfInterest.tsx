import { PointOfInterest } from "@prisma/client";
import { ActionFunction } from "@remix-run/node";
import {
  findPointOfInterest,
  insertPointOfInterest,
  updatePointOfInterest,
  deletePointOfInterest,
} from "~/models/poi.server";

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "GET": {
      const body = (await request.json()) as PointOfInterest;
      return findPointOfInterest(body.id);
    }
    case "POST": {
      const body = (await request.json()) as PointOfInterest;
      return insertPointOfInterest(body);
    }
    case "PUT": {
      const body = (await request.json()) as PointOfInterest;
      return updatePointOfInterest(body.id, body);
    }
    case "DELETE": {
      const body = (await request.json()) as PointOfInterest;
      return deletePointOfInterest(body.id);
    }
    default: {
      return new Response(null, {
        status: 405,
        statusText: "Method not allowed",
      });
    }
  }
};
