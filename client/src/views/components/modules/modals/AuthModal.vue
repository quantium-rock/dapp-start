<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import {
  usernameSocket,
  // userAuthSocket,
  // createUserSocket,
} from "@/services/sockets/user.sockets";
import socket from "@/services/sockets";
import useStore from "@/services/store";
import ButtonCommon from "@/views/components/common/ButtonCommon.vue";
import LightButton from "../buttons/LightButton.vue";
import SoundButton from "../buttons/SoundButton.vue";

export default defineComponent({
  components: {
    ButtonCommon,
    LightButton,
    SoundButton,
  },
  setup() {
    const store = useStore();
    const _userInput_: Ref<string> = ref("");
    const newUser: Ref<boolean> = ref(true);
    const onLogin = (): void => {
      if (_userInput_.value.length > 0) {
        return;
      }
    };

    return {
      store,
      // locals:
      _userInput_,
      newUser,
      onLogin,
      // imports:
      socket,
      usernameSocket,
    };
  },
  data() {
    return {
      logo: require("@/views/assets/img/logos/games-for-a-living.png"),
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
    <div v-if="store.sett.ui.modals.login">
      <div
        ref="modal-backdrop"
        class="fixed inset-0 overflow-y-auto bg-opacity-50"
        :class="
          store.sett.ui.dark
            ? 'bg-black/80 text-white/80'
            : 'bg-white/80 text-gray-700'
        "
      >
        <div class="flex items-center justify-center min-h-screen text-center">
          <div
            class="absolute p-4 m-6 lg:w-1/3 rounded-xl text-center overflow-hidden border border-white/30 shadow-md shadow-pink-400/80 flex flex-col justify-center"
            :class="
              store.sett.ui.dark
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
                  v-model="_userInput_"
                  :placeholder="'INSERT YOUR GFAL USERNAME'"
                  class="py-1 px-4 w-72 mx-10 text-sm text-center tracking-widest rounded-3xl border inner shadow-inner bg-clip-text text-transparent bg-gradient-to-r"
                  :class="[
                    `from-${store.sett.ui.primaryColor} to-${store.sett.ui.secondaryColor}`,
                    `border-${store.sett.ui.primaryColor} shadow-${store.sett.ui.secondaryColor}`,
                    `hover:border-${store.sett.ui.secondaryColor} hover:shadow-${store.sett.ui.secondaryColor}`,
                    _userInput_ ? 'animate-none' : 'animate-pulse',
                  ]"
                />
              </div>
              <div v-if="_userInput_" class="h-20">
                <p
                  v-if="newUser"
                  class="px-8 uppercase text-[11px] tracking-widest text-white/50"
                >
                  CREATE USER
                  <span
                    class="lowercase bg-transparent text-transparent bg-clip-text bg-gradient-to-l from-pink-600 to-purple-400"
                    >@{{ _userInput_ }}</span
                  >
                </p>
                <p
                  v-else
                  class="px-8 uppercase text-xs tracking-widest text-white/50"
                >
                  LOGIN WITH USER
                  <span
                    class="lowercase bg-transparent text-transparent bg-clip-text bg-gradient-to-l from-pink-600 to-purple-400"
                    >@{{ _userInput_ }}</span
                  >
                </p>
                <ButtonCommon
                  class="mt-7"
                  :click="onLogin"
                  :text="newUser ? 'SIGN UP' : 'LOGIN'"
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
