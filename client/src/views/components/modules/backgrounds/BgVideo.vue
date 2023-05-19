<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: String,
    autoplay: Boolean,
    sound: Boolean,
    controls: Boolean,
    loop: Boolean,
  },
});
</script>
<template>
  <video
    :autoplay="autoplay"
    :muted="!sound"
    :controls="controls"
    :loop="loop"
    class="fixed z-0 right-0 bottom-0 w-screen h-screen"
  >
    <source :src="src" type="video/mp4" />
  </video>
</template>
