<script setup lang="ts">
import AppHeader from "@/views/components/common/AppHeader.vue";
import AppFooter from "@/views/components/common/AppFooter.vue";
</script>
<template>
  <div class="h-screen flex flex-col justify-between">
    <AppHeader />

    <slot />

    <AppFooter />
  </div>
</template>
