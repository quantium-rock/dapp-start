<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { WEB3AUTH_CID } from "@/config";
import { Web3AuthAPI } from "@/services/apis/auth";
import {
  usernameSocket,
  userAuthSocket,
  createUserSocket,
} from "@/services/sockets/users.socket";
import socket from "@/services/sockets";
import useStore from "@/services/store";
import ButtonCommon from "@/components/common/ButtonCommon.vue";
import LightButton from "../buttons/LightButton.vue";
import SoundButton from "../buttons/SoundButton.vue";
import { AuthInfo } from "@/interfaces";

export default defineComponent({
  components: {
    ButtonCommon,
    LightButton,
    SoundButton,
  },
  setup() {
    const store = useStore();
    const auth = new Web3AuthAPI(WEB3AUTH_CID);
    onMounted(async () => {
      if (await auth.initAPI()) {
        console.log("Web3AuthAPI initialized");
      } else {
        console.log(
          "Web3AuthAPI failed to initialize. User already connected."
        );
        // console.log("USER AUTH", await auth.userAuth());
      }
    });
    const onConnect = async () => {
      const userToken = await auth.loginUser();
      if (!store.auth.newUser) {
        console.log("USER TOKEN: ", userToken);
        userAuthSocket(socket, store.auth.userInput, userToken);
      } else {
        const authInfo = {} as AuthInfo;
        authInfo.username = store.auth.userInput;
        authInfo.token = userToken;
        createUserSocket(socket, authInfo);
      }
    };
    return {
      store,
      auth,
      socket,
      usernameSocket,
      createUserSocket,
      onConnect,
    };
  },
  data() {
    return {
      logo: require("@/assets/img/logos/games-for-a-living.png"),
    };
  },
});
</script>
<template>
  <teleport to="body">
    <notifications position="top left" class="mt-2" animation-type="velocity" />
    <div v-if="store.auth.state">
      <router-link to="/home" class="hidden" />
    </div>
    <div v-if="store.ui.modals.login">
      <div
        ref="modal-backdrop"
        class="fixed inset-0 overflow-y-auto bg-opacity-50"
        :class="
          store.ui.dark
            ? 'bg-black/80 text-white/80'
            : 'bg-white/80 text-gray-700'
        "
      >
        <div class="flex items-center justify-center min-h-screen text-center">
          <div
            class="absolute p-4 m-6 lg:w-1/3 rounded-xl text-center overflow-hidden border border-white/30 shadow-md shadow-pink-400/80 flex flex-col justify-center"
            :class="
              store.ui.dark
                ? 'bg-black/70 text-gray-100'
                : 'bg-white/70 text-gray-700'
            "
          >
            <div class="h-24 p-4 mt-8 w-full flex justify-center">
              <img :src="logo" alt="G4AL logo" class="h-10 lg:h-12" />
            </div>
            <div class="h-44">
              <!-- <h1 class="mb-12">Welcome to G4AL Portal!</h1> -->
              <!-- <p
                class="mt-6 mb-4 text-xs sm:text-sm text-gray-400 animate-pulse"
              >
                INSERT
                <span class="text-pink-400/80 font-bold">G4AL</span>
                NAME
              </p> -->
              <div class="w-full flex justify-center my-4 px-4">
                <input
                  autofocus
                  type="text"
                  v-on="usernameSocket(socket)"
                  v-model="store.auth.userInput"
                  :placeholder="'INSERT YOUR GFAL USERNAME'"
                  class="py-1 px-4 w-72 mx-10 text-sm text-center tracking-widest rounded-3xl border inner shadow-inner bg-clip-text text-transparent bg-gradient-to-r"
                  :class="[
                    `from-${store.ui.primaryColor} to-${store.ui.secondaryColor}`,
                    `border-${store.ui.primaryColor} shadow-${store.ui.secondaryColor}`,
                    `hover:border-${store.ui.secondaryColor} hover:shadow-${store.ui.secondaryColor}`,
                    store.auth.userInput ? 'animate-none' : 'animate-pulse',
                  ]"
                />
              </div>
              <div v-if="store.auth.userInput" class="h-20">
                <p
                  v-if="store.auth.newUser"
                  class="px-8 uppercase text-[11px] tracking-widest text-white/50"
                >
                  CREATE USER
                  <span
                    class="lowercase bg-transparent text-transparent bg-clip-text bg-gradient-to-l from-pink-600 to-purple-400"
                    >@{{ store.auth.userInput }}</span
                  >
                </p>
                <p
                  v-else
                  class="px-8 uppercase text-xs tracking-widest text-white/50"
                >
                  LOGIN WITH USER
                  <span
                    class="lowercase bg-transparent text-transparent bg-clip-text bg-gradient-to-l from-pink-600 to-purple-400"
                    >@{{ store.auth.userInput }}</span
                  >
                </p>
                <ButtonCommon
                  class="mt-7"
                  :click="onConnect"
                  :text="store.auth.newUser ? 'SIGN UP' : 'LOGIN'"
                />
              </div>
              <div v-else class="h-24 flex w-full justify-center">
                <div class="w-64 flex justify-center pt-4">
                  <LightButton />
                  <SoundButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<style scoped>
input {
  display: flex;
  text-align: center;
  justify-content: center;
}
input:focus {
  outline: none !important;
}
input:active {
  outline: none !important;
}
input::placeholder {
  font-size: 11px !important;
  margin-bottom: -20px !important;
  color: rgb(201, 14, 170) !important;
}
::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder {
  text-align: center;
}
</style>
