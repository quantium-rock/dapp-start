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
});
</script>
<template>
  <div class="flex" :class="store.sett.ui.dark ? 'bg-black' : 'bg-white'">
    template
  </div>
</template>
