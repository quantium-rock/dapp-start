import { AuthState, UserProfile, UIConfig } from "@/global/interfaces";

export const userInit: UserProfile = {
  username: "",
  description: "",
  pfp: "",
  mood: "",
  firstName: "",
  lastName: "",
  age: 0,
  gender: "",
  handees: "right",
  country: "",
  lang: "",
  timezone: "",
  website: "",
  created_on: "",
  verified: false,
  topics: [],
};

export const uiInit: UIConfig = {
  dark: true,
  sound: false,
  primaryColor: "pink-500",
  secondaryColor: "purple-500",
  loading: false,
  modals: {
    login: true,
  },
};

export const authInit: AuthState = {
  state: false,
  userInput: "",
  newUser: false,
  info: {
    username: "",
    token: "",
    email: "",
    last_auth: BigInt(0),
    created_at: BigInt(0),
  },
};
