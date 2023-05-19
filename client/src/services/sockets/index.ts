/* @/services/sockets/index.ts */

import { SERVER_URL } from "@/config";
import AppSockets from "./__app__.sockets";
import useStore from "@/services/store";

/*** SOCKETS WITH STORE INITALIZATION ***/

const store = useStore();

const socket = new AppSockets(SERVER_URL, store);
export default socket;

export const sockets = socket.socketInstances(socket._socket, store);

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-17 */
