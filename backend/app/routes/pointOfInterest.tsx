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
      const body = await request.json();
      return findPointOfInterest((body as any).id);
    }
    case "POST": {
      const body = await request.json();
      return insertPointOfInterest(body as PointOfInterest);
    }
    case "PUT": {
      const body = await request.json();
      return updatePointOfInterest((body as any).id, body as PointOfInterest);
    }
    case "DELETE": {
      const body = await request.json();
      return deletePointOfInterest((body as any).id);
    }
    default: {
      return new Response(null, {
        status: 405,
        statusText: "Method not allowed",
      });
    }
  }
};
