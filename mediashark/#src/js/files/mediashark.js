gsap.registerPlugin(ScrollTrigger);

// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tl.from(".purple p", {scale: 1.4, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".letter-1", {translateX: -500,translateY: -500,rotate: 180, ease: "none"}, 0)
  .from(".letter-2", {translateX: -300,translateY: -700,rotate: 260, ease: "none"}, 0)
  .from(".letter-3", {translateX: 100,translateY: -300,rotate: 160, ease: "none"}, 0)
  .from(".letter-4", {translateX: 500,translateY: -200,rotate: 360, ease: "none"}, 0)
  .from(".letter-5", {translateX: 1000,translateY: 200,rotate: 260, ease: "none"}, 0)
  .from(".letter-6", {translateX: 500,translateY: 500,rotate: 260, ease: "none"}, 0)
  .from(".letter-7", {translateX: 300,translateY: 700,rotate: 260, ease: "none"}, 0)
  .from(".letter-8", {translateX: 600,translateY: 1000,rotate: 260, ease: "none"}, 0)
  .from(".letter-9", {translateX: 900,translateY: 500,rotate: 260, ease: "none"}, 0)
  .from(".letter-10", {translateX: 400,translateY: 300,rotate: 260, ease: "none"}, 0)
  .from(".letter-11", {translateX: 100,translateY: 300,rotate: 260, ease: "none"}, 0);


