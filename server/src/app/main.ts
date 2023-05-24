/* @/app/main.ts */

import { createServer } from "http";
import express, { Request, Response } from "express";
import cors from "cors";
import { Server } from "socket.io";
import { SERVER_HTML } from "../config";
import { initRoutes } from "../services/routes";
// import "@/services/controllers/firebase";
// import SQL from "@/services/controllers/sql/connection/__mysql__.connection";

/* INIT SERVER DB's */

// export const DBx = { ...FB };
// export const DBy = { ...SQL };

/* INIT APP SERVER */

export const APP: express.Application = express();
APP.use(cors());
APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));
APP.get("/", (req: Request, res: Response) => {
  console.log(req.url);
  res.send(SERVER_HTML);
});

/* INIT SERVER ROUTER */

initRoutes(APP);

/* INIT SOCKET SERVER */

const SERVER: Server<Request, Response> | any = createServer(APP);
export const IO: Server = new Server(SERVER, {
  cors: {
    origin: [
      "*", // Remove * in production
    ],
    methods: ["GET", "POST"],
  },
  maxHttpBufferSize: 1e9, // 0.93 gigabyte
  // pingTimeout: 20,
});

export default SERVER;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-10 */
