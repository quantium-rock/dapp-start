<script lang="ts">
import { defineComponent } from "vue";
import LightButton from "./LightButton.vue";
import SoundButton from "./SoundButton.vue";

export default defineComponent({
  components: {
    LightButton,
    SoundButton,
  },
});
</script>
<template>
  <div class="flex justify-center my-4 pt-4">
    <!-- Dark/Light button -->
    <LightButton />
    <!-- Sound button -->
    <SoundButton />
  </div>
</template>
