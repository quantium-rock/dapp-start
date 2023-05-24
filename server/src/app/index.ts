/* @/app/index.ts */

import SERVER, { IO } from "./main";
import socketConnect from "../services/sockets";
import { getTime } from "../global/utils/time.utils";
import { PORT } from "../config/dev.config";

/*** RUN SERVER ***/

SERVER.listen(PORT, () => {
  console.log("SERVER UP & RUNNING IN PORT ", PORT);
  socketConnect(IO); // init socket server
  console.log(process.version); // node version
  setInterval(() => {
    const time = getTime();
    if (time.split(":")[2] == "00") {
      console.log(time); // print utc time every minute.
    }
  }, 1000); // 1 second clock.
});

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
