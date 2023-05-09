<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../../services/store";

export default defineComponent({
  props: {
    text: String,
    click: Function,
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <button
    class="w-36 my-6 mx-2 p-3 rounded-3xl uppercase text-xs font-bold border border-gray-500 shadow-sm hover:shadow-yellow-500 hover:border-purple-600 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400"
    @click="click"
  >
    {{ text }}
  </button>
</template>
