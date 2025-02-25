import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
  wheelMultiplier: 1.2,
  infinite: false,
});

// Ensure Lenis runs on every frame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Sync Lenis with GSAP ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

// Select elements
const horizontalSection = document.querySelector(".container");
const content = document.querySelector(".content");

// Get the total scroll distance needed for horizontal scrolling
const horizontalScrollLength = content.scrollWidth - window.innerWidth;

// Set correct body height for smooth scrolling
document.body.style.height = `${window.innerHeight + horizontalScrollLength}px`;

// Initially hide the final section (below viewport)
const tl = gsap.timeline({});

// Horizontal Scroll Animation
tl.to(content, {
  scrollTrigger: {
    trigger: horizontalSection,
    start: "top top",
    end: `+=${horizontalScrollLength}`,
    scrub: 2,
    pin: true,
    anticipatePin: 1,
  },
  x: () => -horizontalScrollLength,
  ease: "power2.out",
});

// Ensure correct height on resize
window.addEventListener("resize", () => {
  document.body.style.height = `${
    window.innerHeight + content.scrollWidth - window.innerWidth
  }px`;
});
const path = document.getElementById("textPath2");
path.setAttribute("d", "M 10,100 C 150,50 250,150 390,100");


const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".descriptionBox-text",
    start: "top center",
    end: "top 100px",
    onLeaveBack: () => tl2.restart(true),
  },
});

// 2D
tl2
  .from("#D2", {
    ScrollTrigger: {
      trigger: "#D2",
      start: "top center",
      end: "top 100px",
      scrub: 1,
      opacity: 0,
    },
    rotateY: 360,
    y: 200,
    scale: 4,
    duration: 1,
    ease: "power3.inOut",
  })
  .to("#D2", {
    color: "#752ECC",

    ease: "power3.out",
  })
  .from("#F2", {
    rotateZ: 360,
    x: 1000,
    y: 1000,
    color: "#752ECC",
    duration: 1,
    ease: "power3.out",
  })
  .from("#ideas-svg", {
    y: () => `+=${document.getElementById("ideas").offsetHeight}`,
    opacity: 0,
    scale: 0.5,
    rotate: 720,
    duration: 1,
    ease: "power3.out",
  });
//beforeHL
let letters = document.querySelectorAll(".beforeHL");
letters.forEach((letter, time) => {
  tl2.from(letter, {
    rotationX: 180,
    color: "#752ECC",
    duration: 0.1,
    stagger: 0.2,
    ease: "power2.inOut",
  },);
});
tl2.fromTo(
  path,
  { strokeDasharray: 300, strokeDashoffset: 300 ,opacity:0},
  { strokeDashoffset: 0, duration: 3, ease: "power2.out", opacity:1},1
);
//higher level

let lettersHL = document.querySelectorAll(".HL");
lettersHL.forEach((letter) => {
  tl2.set(letter, {
    y: 100,

    opacity: 0,
    scale: 0.5,

    direction: 0.01,
  });
  tl2.to(letter, {
    y: 0,
    color: "white",
    opacity: 1,
    scale: 1,

    duration: 0.25,

    ease: "power2",
  });
});
tl2
  .to("#ideas-svg", {
    y: () => `+=${document.getElementById("ideas").offsetHeight}`,
    opacity: 0,
    scale: 0.5,
    rotate: 180,
    duration: 1,
    ease: "power3.out",
  })
  .to("#ideas-svg", {
    x: () =>
      (window.innerWidth - document.getElementById("ideas-svg").offsetWidth) /
      2,
    y: () =>
      (window.innerHeight - document.getElementById("ideas-svg").offsetHeight) /
      2,
    duration: 1,
    ease: "power3.out",
    scale: 2,
    rotate: 360,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  })
  .to("#ideas-svg", {
    x: -100,
    y: 100,
    color: "#752ECC",
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scale: 3,
    rotate: 720,
  });
gsap.from("#Graphic_Designer", {
  y: -1000,
  opacity: 0,
  scale: 0.2,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".descriptionBox-text",
    start: "top center",
    end: "top 100px",
  },
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-loader",
    start: "top 15vh",
    end: "top 100vh",
  },
});

tl3
  .from(".card-loader", {
    x: 1000,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
  })
  .from(".main-contain", {
    x: 1000,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
  });

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cube-container",
    start: "top 0",
    end: "buttom 100vh",
  },
});
tl4
  .from(".servicesBox-tittle", {
    x: 1000,
    opacity: 0,
    duration: 3,
    ease: "power3.out",
  })
  .to(".servicesBox-tittle", {
    color: "#752ECC",
    duration: 1,
    ease: "power3.out",
  })
  .from(".cube", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

gsap.from(".form-container", {
  y: 1000,
  opacity: 0,
  duration: 3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".letsTalkBox",
    start: "top -1000vh",
    end: "buttom 500vh",
  },
});

document.getElementById("about-me").addEventListener("click", function () {
  lenis.scrollTo(document.querySelector(".descriptionBox"), { duration: 2 });
});

document.getElementById("projects").addEventListener("click", function () {
  lenis.scrollTo(1300, { duration: 2 });
});

document.getElementById("Services").addEventListener("click", function () {
  lenis.scrollTo(2000, { duration: 2 });
});

document.getElementById("letstalk").addEventListener("click", function () {
  lenis.scrollTo(3500, { duration: 2 });
});

lenis.on("scroll", ({ scroll }) => {
  if (scroll >= 2500) {


    
  }
});

gsap.from(".tittle-lst", {
  color: "#752ECC",
  duration: 0.7,
  ease: "power1",
  yoyo: true,
  repeat: -1,
  
});
gsap.from(".letsTalkBox-OR h2", {
  scale: 1.5,
  duration: 2,
  ease: "power1",
  yoyo: true,
  repeat: -1,
  rotate: 360,
  
  repeatDelay: 1.5,
});
