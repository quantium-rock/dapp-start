<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  },
});
</script>
<template>
  <div class="flex justify-center">
    <!-- Dark/Light button -->
    <button
      class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl"
      @click="
        [
          store.switchDark(),
          store.sett.ui.primaryColor.includes('white') && !store.sett.ui.dark
            ? store.setPrimaryColor(
                store.sett.ui.primaryColor.replace('white', 'black')
              )
            : '',
          store.sett.ui.primaryColor.includes('black') && store.sett.ui.dark
            ? store.setPrimaryColor(
                store.sett.ui.primaryColor.replace('black', 'white')
              )
            : '',
        ]
      "
      :class="
        store.sett.ui.dark
          ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
          : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
      "
    >
      <svg
        v-if="store.sett.ui.dark"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  </div>
</template>
