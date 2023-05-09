import { AuthPublicState } from "./auth.interfaces";
import { UserProfile } from "./user.interfaces";
import { UIConfig } from "./ui.interfaces";

export interface AppState {
  auth: AuthPublicState;
  user: UserProfile;
  ui: UIConfig;
  socket_id: string; // socket unique and temporary connection id
  socket_started_at: bigint; // UTC timestamp when socket connection started
  socket_started_on: string; // user's gmt datetime
}
