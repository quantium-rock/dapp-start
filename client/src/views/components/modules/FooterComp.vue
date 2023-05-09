<script lang="ts">
import { defineComponent, ref } from "vue";
import { getTime, getDate } from "@/utils";
import FooterButtons from "./buttons/FooterButtons.vue";
import useStore from "@/services/store";

export default defineComponent({
  components: {
    FooterButtons,
  },
  setup() {
    const store = useStore();
    const time = ref("");
    const date = ref("");

    setInterval(() => {
      time.value = getTime();
      date.value = getDate();
    }, 1000);
    return {
      store,
      time,
      date,
    };
  },
});
</script>
<template>
  <div
    class="z-50 relative bottom-0 -mt-4 pt-2 w-full text-center text-xs text-gray-400"
    :class="
      store.ui.dark
        ? 'bg-black shadow-gray-700 border-gray-200 text-gray-200'
        : 'bg-white shadow-gray-300 border-gray-900 text-gray-800'
    "
  >
    <FooterButtons class="pt-12" />
    <!-- UTC datetime -->
    <!-- <div class="-mt-2 py-2 text-[12px]">{{ date }} {{ time }} UTC</div> -->
    <!-- Credits -->
    <div class="py-4 pl-6">
      <span class="mr-3">Made with</span>
      <!-- <span class="ml-6">{{ store.ui.heart1 }}</span>
      <span class="mr-4 pl-5">{{ store.heart2 }}</span> -->
      <span class="ml-2">
        by
        <a href="https://github.com/theia-ailabs" target="_blank"
          ><span :class="`text-${store.ui.primaryColor}`"> Theia </span
          ><span :class="`text-${store.ui.secondaryColor}`"> AI Labs </span></a
        ></span
      >
    </div>
    <div class="flex justify-center mt-4 pb-6 uppercase text-2xs">
      <!-- Legal -->
      <div
        class="mt-1 mb-2 mx-2 pl-4"
        :class="`hover:text-${store.ui.primaryColor}`"
      >
        <router-link to="/legal">Legal</router-link>
      </div>
      <!-- Privacy -->
      <div
        class="mt-1 mb-2 mx-2 pl-4"
        :class="`hover:text-${store.ui.secondaryColor}`"
      >
        <router-link to="/privacy">Privacy</router-link>
      </div>
    </div>
  </div>
</template>
