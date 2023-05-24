<script setup lang="ts">
import useStore from "@/services/store";
import InitColors from "@/views/components/colors/InitColors.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";

const store = useStore();

/** TODO - not very nice... */
const isAuthRoute = computed(() => {
  const route = useRoute();

  return route.matched.some((record) => record.meta.isAuthRoute);
});
</script>
<template>
  <div :class="store.user.ui.dark ? 'bg-black' : 'bg-secondary-900'">
    <InitColors />

    <MainLayout v-if="!isAuthRoute">
      <RouterView />
    </MainLayout>

    <RouterView v-else />
  </div>
</template>
