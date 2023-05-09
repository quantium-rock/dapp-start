<script lang="ts">
import { defineComponent } from "vue";
import AuthModal from "@/components/modules/modals/AuthModal.vue";
import BgVideo from "@/components/modules/backgrounds/BgVideo.vue";
import useStore from "@/services/store";

export default defineComponent({
  components: {
    AuthModal,
    BgVideo,
  },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  data() {
    return {
      videoPath: require("@/assets/vid/elemental-raiders.mp4"),
    };
  },
});
</script>
<template>
  <div class="w-full h-screen m-auto">
    <BgVideo
      :src="videoPath"
      :autoplay="true"
      :sound="store.ui.sound"
      :controls="false"
      :loop="true"
    />
    <AuthModal />
  </div>
</template>
