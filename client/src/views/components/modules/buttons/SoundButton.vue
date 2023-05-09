<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      colorModal: false,
      sound_black: require("@/assets/img/ico/sound-black.png"),
      sound_white: require("@/assets/img/ico/sound-white.png"),
      mute_black: require("@/assets/img/ico/mute-black.png"),
      mute_white: require("@/assets/img/ico/mute-white.png"),
    };
  },
});
</script>
<template>
  <!-- Sound & Recording Button -->
  <div class="flex justify-center">
    <button
      class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl"
      @click="store.switchSound()"
      :class="
        store.ui.dark
          ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
          : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
      "
    >
      <img
        alt="Sound"
        v-if="store.ui.sound"
        :src="store.ui.dark ? sound_white : sound_black"
        class="h-4 w-4"
      />
      <img
        alt="Sound"
        v-else
        :src="store.ui.dark ? mute_white : mute_black"
        class="h-4 w-4"
      />
    </button>
  </div>
</template>
