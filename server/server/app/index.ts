import { createServer } from "http";
import express, { Request, Response } from "express";
import { initRoutes } from "../router";
import { Server } from "socket.io";
import cors from "cors";
import {
  connectAuthsDB,
  connectUsersDB,
} from "../controllers/sql/connections/__pg__.connections";

/* INIT SERVER DBs */

export const firebaseDBs = {};

export const sqlDBs = {
  auths: connectAuthsDB(),
  users: connectUsersDB(),
};

/* CREATE APP SERVER */

export const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Games for a Living - Portal Server</h1>");
});

/* INIT SERVER ROUTER */

initRoutes(app);

/* INSTANCE SOCKET SERVER */

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
/* Last update: 2023-05-09 */
