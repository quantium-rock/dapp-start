<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/services/store";

export default defineComponent({
  props: {
    on: Function,
    target: String,
    placeholder: String,
    primaryColor: String,
    secondaryColor: String,
    bgColor: String,
    textColor: String,
  },
  setup() {
    const store = useStore();
    return { store };
  },
});
</script>
<template>
  <div class="w-full flex justify-center my-4 px-4">
    <input
      autofocus
      type="text"
      v-on="on"
      v-model="store.user.username"
      :placeholder="placeholder"
      class="py-1 px-4 w-72 my-5 mx-10 text-lg text-center tracking-widest rounded-3xl border inner shadow-inner bg-clip-text bg-gradient-to-r"
      :class="[
        bgColor ? `bg-${bgColor}` : 'bg-transparent',
        textColor ? `text-${bgColor}` : 'text-transparent',
        `from-${primaryColor} to-${secondaryColor}`,
        `border-${primaryColor} shadow-${secondaryColor}`,
        `hover:border-${secondaryColor} hover:shadow-${secondaryColor}`,
      ]"
    />
  </div>
</template>
<style scoped>
input:focus {
  outline: none !important;
}

input:active {
  outline: none !important;
}
</style>
