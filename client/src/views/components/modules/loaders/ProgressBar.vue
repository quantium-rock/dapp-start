<template>
  <div class="out">
    <div class="fade-in flex">
      <div class="bar">
        <div class="progress"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  background: #161b29;
  margin: 0 auto;
  height: 300px;
  width: 300px;
  overflow: hidden;
}

.bar {
  width: 12vw;
  height: 0.25vw;
  z-index: 9999 !important;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  background: #e645d0;
}

.progress {
  width: 12vw;
  height: 0.5vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  background: #17e1e6;
}
.progress {
  animation: progress 10s ease;
  -moz-animation: progress 10s ease;
  /* Firefox */
  -webkit-animation: progress 10s ease;
  /* Safari and Chrome */
  -o-animation: progress 10s ease;
  /* Opera */
}

@keyframes progress {
  0% {
    left: -24vw;
  }
  10% {
    left: -20vw;
  }
  30% {
    left: -16vw;
  }
  50% {
    left: -12vw;
  }
  65% {
    left: -10vw;
  }
  80% {
    left: -4vw;
  }
  100% {
    left: 0;
  }
}

.fade-in {
  animation: fade-in 2s ease;
  -moz-animation: fade-in 2s ease;
  /* Firefox */
  -webkit-animation: fade-in 2s ease;
  /* Safari and Chrome */
  -o-animation: fade-in 2s ease;
  /* Opera */
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.out {
  animation: out 2s 15s ease;
  -moz-animation: out 2s 15s ease;
  /* Firefox */
  -webkit-animation: out 2s 15s ease;
  /* Safari and Chrome */
  -o-animation: out 2s 15s ease;
  /* Opera */
}

@keyframes out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
