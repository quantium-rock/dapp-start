<template>
  <div
    id="faux-terminal"
    class="w-full h-full z-40 fixed top-0 left-0 min-h-[51px]"
  >
    <div class="layer"></div>
    <div class="overlay"></div>
  </div>
</template>
<script></script>
<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1.001);
    opacity: 0.14;
  }

  8% {
    transform: scale(1);
    opacity: 0.13;
  }

  15% {
    transform: scale(1.004);
    opacity: 0.14;
  }

  30% {
    transform: scale(1.002);
    opacity: 0.11;
  }

  100% {
    transform: scale(1);
    opacity: 0.14;
  }
}

@keyframes glitch {
  0% {
    transform: scale(1, 1.002);
  }

  50% {
    transform: scale(1, 1.0001);
  }

  100% {
    transform: scale(1.001, 1);
  }
}
@keyframes vline {
  0% {
    top: 0px;
  }

  100% {
    top: 100%;
  }
}

#faux-terminal {
  pointer-events: none;
}
#faux-terminal:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 51px;
  z-index: 4010;
  background: -webkit-linear-gradient(#444 50%, #000 50%);
  background: linear-gradient(#444 50%, #000 50%);
  background-size: 100% 4px;
  background-repeat: repeat-y;
  opacity: 0.14;
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.8);
  -webkit-animation: pulse 5s linear infinite;
  animation: pulse 5s linear infinite;
}
#faux-terminal:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 51px;
  z-index: 4011;
  background-color: #00c853;
  background: -webkit-radial-gradient(
    center,
    black 0%,
    rgba(0, 0, 0, 0.62) 45%,
    rgba(0, 9, 4, 0.6) 47%,
    #00c853 100%
  );
  background: radial-gradient(
    ellipse at center,
    #000000 0%,
    rgba(0, 0, 0, 0.62) 45%,
    rgba(0, 9, 4, 0.6) 47%,
    #f7730f 100%
  );
  box-shadow: inset 0px 0px 4px 4px rgba(100, 100, 100, 0.5);
  opacity: 0.1;
}
#faux-terminal .layer {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 51px;
  z-index: 4001;
  box-shadow: inset 0px 0px 1px 1px rgba(64, 64, 64, 0.1);
  background: -webkit-radial-gradient(
    center,
    #00c351 0%,
    rgba(64, 64, 64, 0) 50%
  );
  background: radial-gradient(
    ellipse at bottom,
    #da71faab 0%,
    rgba(64, 64, 64, 0) 30%
  );
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transform: perspective(20px) rotateX(0.5deg) skewX(2deg) scale(1.03);
  transform: perspective(20px) rotateX(0.5deg) skewX(2deg) scale(1.03);
  -webkit-animation: glitch 1s linear infinite;
  animation: glitch 1s linear infinite;
  opacity: 0.8;
}
#faux-terminal .layer:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 51px;
  background: -web-kit-radial-gradient(
    center,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(64, 64, 64, 0) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(64, 64, 64, 0) 100%
  );
  opacity: 0.1;
}
#faux-terminal .overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: auto;
  top: 85%;
  left: 20%;
  right: 20%;
  width: 20%;
  min-width: 170px;
  height: 100px;
  min-height: 51px;
  z-index: 6000;
  background-color: transparent;
}
#faux-terminal .overlay:before {
  content: "";
  position: absolute;
  top: 0px;
  width: 100%;
  min-width: 100%;
  height: 5px;
  background: #fff;
  background: -webkit-linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0) 0%,
    snow 50%,
    rgba(255, 255, 255, 0.98) 51%,
    rgba(255, 0, 0, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0) 0%,
    snow 50%,
    rgba(255, 255, 255, 0.98) 51%,
    rgba(255, 0, 0, 0) 100%
  );
  opacity: 0.1;
  -webkit-animation: vline 1.25s linear infinite;
  animation: vline 1.25s linear infinite;
}
#faux-terminal .overlay:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-width: 100%;
  height: 51px;
  min-height: 51px;
}
</style>
