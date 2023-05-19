<template>
  <div
    class="workspace absolute bottom-10 border-none text-white w-full flex z-40 justify-center align-middle text-center mx-auto bg-transparent"
  >
    <!-- <app-svg-spacetravel /> -->
    <div class="container-text w-full">
      <div id="appear1" style="display: none">
        <a href="/"
          >Connecting to Theia Systems...&nbsp;&nbsp;<span>&nbsp;</span></a
        >
      </div>
      <div id="appear2" style="display: none">
        <a href="/"
          >Confirming human identity...&nbsp;&nbsp;<span>&nbsp;</span></a
        >
      </div>
      <div id="appear3" style="display: none">
        <a href="/">Connected!&nbsp;&nbsp;<span>&nbsp;</span></a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let i = 1;
    const intervalId = setInterval(() => {
      const div = document.getElementById(`appear${i}`);
      if (div) {
        div.style.display = "block";
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 3000);
  },
});
</script>
<style scoped>
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: #fff;
  }
}

@keyframes typing {
  from {
    width: 100%;
  }

  to {
    width: 0;
  }
}

.workspace {
  font-family: "Orbitron", monospace;
  font-size: small;
  box-shadow: none !important;
}
a {
  color: #fff;
  opacity: 1 !important;
  position: relative;
  text-decoration: none;
}

a:hover {
  color: #fff;
  text-decoration: none;
}

a span {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0;
  background: black;
  border-left: 0.5em solid;
  box-sizing: border-box;
  -webkit-animation: typing 3s steps(13, end), blink-caret 1s step-end infinite;
  animation: typing 3s steps(13, end), blink-caret 1s step-end infinite;
}
</style>
