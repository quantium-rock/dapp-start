import { defineStore } from "pinia";
import { State } from "@/global/interfaces";
import { authInit, userInit, uiInit } from "./defaults";

const useStore = defineStore("store", {
  state: (): State => {
    return {
      auth: { ...authInit },
      user: { ...userInit },
      ui: { ...uiInit },
    };
  },
  actions: {
    scrollTop(): void {
      window.scrollTo(document.body.scrollHeight, 0);
    },
    switchDark(): void {
      this.ui.dark = !this.ui.dark;
    },
    switchSound(): void {
      this.ui.sound = !this.ui.sound;
    },
    setPrimaryColor(color: string): void {
      this.ui.primaryColor = color;
    },
    setSecondaryColor(color: string): void {
      this.ui.secondaryColor = color;
    },
  },
});

export default useStore;
