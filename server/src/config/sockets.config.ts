/* @/config/sockets.config.ts */

import { TSocketIn } from "@/global/types/custom/socket.types";

export const CORS_WL = ["*"]; // CORS IP Whitelist.
export const SOCKET_IN: TSocketIn = "server"; // server | client
export const SOCKET_TIMEOUT = 30; // 30 seconds.

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-08 */
