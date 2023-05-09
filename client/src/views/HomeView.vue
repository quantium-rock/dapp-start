<script lang="ts">
import { defineComponent } from "vue";
import AuthModal from "@/components/modules/modals/AuthModal.vue";
import NavbarComp from "@/components/modules/NavbarComp.vue";
import FooterComp from "@/components/modules/FooterComp.vue";
import useStore from "@/services/store";

export default defineComponent({
  components: {
    AuthModal,
    NavbarComp,
    FooterComp,
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
  <div class="w-full h-screen m-auto">
    <notifications position="top left" class="mt-2" animation-type="velocity" />
    <AuthModal />
    <header>
      <NavbarComp />
    </header>
    <main>
      <div>Hello, {{ store.user.username }}</div>
    </main>
    <footer>
      <FooterComp />
    </footer>
  </div>
</template>
