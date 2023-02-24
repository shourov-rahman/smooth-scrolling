/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

// import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.6,
  easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
