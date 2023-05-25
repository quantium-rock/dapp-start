/* @/services/sockets/connections/index.ts */

import { TSocket } from "@/global/types/custom/socket.types";
import { SOCKET_IN } from "@/config/sockets.config";
import SOCKET_CLIENT from "./client.socket";
import SOCKET_SERVER from "./server.socket";

let SOCKET: TSocket = SOCKET_CLIENT;

if (SOCKET_IN === "server") {
  SOCKET = SOCKET_SERVER;
}

export default SOCKET;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-22 */
