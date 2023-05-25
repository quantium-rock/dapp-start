import { Application } from "express";
import { socketId } from "../sockets";

/* INIT TEMPORARY & STATIC ROUTES */

export const initRoutes = async (
  app: Application,
  req?: Request,
  res?: Response
): Promise<void> => {
  tempRoutes(app);
};

/* TEMPORARY INSTANCES CONNECTIONS */

export default function tempRoutes(app: Application): void {
  app.post(`/$${socketId}`, (req, res) => {
    const socketState = req.body;
    console.log(socketState, res);
  });
}

/* PUBLIC WEB API */

//
// NOT STATIC ROUTES FOR NOW.
//

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
