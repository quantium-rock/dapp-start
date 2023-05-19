<script lang="ts">
import { defineComponent } from "vue";
import AuthModal from "@/views/components/modules/modals/AuthModal.vue";
import BgVideo from "@/views/components/modules/backgrounds/BgVideo.vue";
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
      videoPath: require("@/views/assets/videos/elemental-raiders.mp4"),
    };
  },
});
</script>
<template>
  <div class="w-full h-screen m-auto">
    <BgVideo
      :src="videoPath"
      :autoplay="true"
      :sound="store.sett.ui.sound"
      :controls="false"
      :loop="true"
    />
    <AuthModal />
  </div>
</template>
