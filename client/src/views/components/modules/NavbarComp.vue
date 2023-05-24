<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/services/store";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  data() {
    return {};
  },
});
</script>
<template>
  <nav
    class="fixed py-2 flex justify-center w-full top-0"
    :class="store.sett.ui.dark ? 'bg-black/90' : 'bg-white/90'"
  >
    <img class="h-6 lg:h-8 my-2" :src="logo" alt="G4AL logo" />
  </nav>
</template>
