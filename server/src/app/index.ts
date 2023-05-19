/* @/app/index.ts */

import { createServer } from "http";
import express, { Request, Response } from "express";
import cors from "cors";
import { Server } from "socket.io";
import { SERVER_HTML } from "../config";
import { initRoutes } from "../services/routes";
import {
  connectToAuthsDB2,
  connectToUsersDB2,
} from "../services/controllers/sql/connections/__postgres__.connections";

/* INIT SERVER DBs */

export const firebaseDBs = {};

export const sqlDBs = {
  auths: connectToAuthsDB2(),
  users: connectToUsersDB2(),
};

/* INIT APP SERVER */

export const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req: Request, res: Response) => {
  console.log(req.url);
  res.send(SERVER_HTML);
});

/* INIT SERVER ROUTER */

initRoutes(app);

/* INIT SOCKET SERVER */

export const server: Server<Request, Response> | any = createServer(app);
export const io: Server = new Server(server, {
  cors: {
    origin: [
      "*", // Remove * in production
    ],
    methods: ["GET", "POST"],
  },
  maxHttpBufferSize: 1e9, // 0.93 gigabyte
  // pingTimeout: 20,
});

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-10 */
