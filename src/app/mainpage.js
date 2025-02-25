import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import KUTE from "kute.js";

gsap.registerPlugin(ScrollTrigger);
function generateRandomPath() {
  // const startX = 10;
  // const startY = 100;
  // const cp1X = Math.random() * 400; // Random control point
  // const cp1Y = Math.random() * 200;
  // const cp2X = Math.random() * 400;
  // const cp2Y = Math.random() * 200;
  // const endX = 390;
  // const endY = 100;
  // return `M${startX},${startY} C${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${endY}`;
  return 'M10,100 C367.2775488062284,70.1889197345682 121.56987173300769,27.14159997568806 390,100';
}

const path = document.getElementById("textPath");
path.setAttribute("d", generateRandomPath());

gsap.fromTo(
  path,
  { strokeDasharray: 300, strokeDashoffset: 300 },
  { strokeDashoffset: 0, duration: 3, ease: "power2.out" }
);

//
document.addEventListener("DOMContentLoaded", function () {
  let flower = document.getElementById("flower");

  gsap.to(flower, {
    rotation: 360,
    duration: 13,
    repeat: -1,
    ease: "linear",
    transformOrigin: "50% 75%",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let flower2 = document.getElementById("flower2");
  gsap.to(flower2, {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: "linear",
    transformOrigin: "50% 50%",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let flower2 = document.getElementById("flower2");
  gsap.from(flower2, {
    opacity: 0,
    y: -500,
    x: 500,
    stagger: 2,
    duration: 4,
    ease: "power3.out",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".About-1-p", {
    opacity: 0,
    x: -500,
    stagger: 2,
    duration: 4,
    ease: "power3.out",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".About-1-p2", {
    opacity: 0,
    x: -500,
    stagger: 2,
    duration: 4,
    ease: "power3.out",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let flower2 = document.getElementById("flower");
  gsap.from(flower2, {
    opacity: 0,
    y: 500,
    x: 500,
    stagger: 2,
    duration: 4,
    rotatex: 360,
    ease: "power2.out",
    scale: 2,
  });
});

gsap.from(".FirstMain-animation", {
  x: 1000,

  opacity: 0,
  duration: 3,
  ease: "elastic.inOut",
});
gsap.from(".list-item", {
  y: -100,

  opacity: 0,
  duration: 3,
  ease: "elastic.inOut",
});

gsap.from(".FirstMain-quote", {
  x: 200,

  opacity: 0,
  duration: 3,
  ease: "elastic.inOut",
});

const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 4000, yoyo: true }
);
tween.start();

const tline = gsap.timeline();

const tween2 = KUTE.fromTo(
  "#blob1c",
  { path: "#blob1c" },
  { path: "#blob2c" },
  { repeat: 999, duration: 4000, yoyo: true }
);
tween2.start();

tline.from(".FAROMO", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power1.out",
});
document.querySelectorAll(".afterF").forEach((L) => {
  tline.to(L, {
    color: "#752ECC",
    duration: 0.2,
    ease: "power3.out",
  });
});

tline.from("#F svg", {
    scale: 0.5,
    rotate: 720,
    duration: 1,
    ease: "power3.out",
  })
  .to("#F svg", {
    x: 500,

    color: "#752ECC",
    opacity: 0,
    duration: 1,

    rotate: 720,
  })
  .to("#F span", {
    opacity: 1,
  })
  .to("#F span", {
    color: "white",
  });

document.querySelectorAll(".afterF").forEach((L) => {
  tline.to(L, {
    color: "white",
    duration: 0.2,
    ease: "power3.out",
  });
});

const tlinedesign = gsap.timeline();
tlinedesign.from(".DESIGN", {
  opacity: 0,
  y: -100,
  duration: 1,
  ease: "power1.out",
});
document.querySelectorAll(".afterD").forEach((L) => {
  tlinedesign.to(L, {
    color: "#752ECC",
    duration: 0.2,
    ease: "power3.out",
  });
});
tlinedesign.set("#D svg", {
  x: -500,
});
tlinedesign.to("#D svg", {
  opacity: 1,
  x: -30,
  duration: 1,
  ease: "power3.out",
});
document.querySelectorAll(".afterD").forEach((L) => {
  tlinedesign.to(L, {
    color: "white",
    duration: 0.2,
    ease: "power3.out",
  });
});
tlinedesign.to("#D svg", {
  x: 500,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});
tlinedesign.to("#D span", {
  opacity: 1,
});

//cursor

gsap.set(".cursor", {
  xPercent: -50,
  yPercent: -50,
});
let cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, {
    x: mouseX,
    y: mouseY,
    duration: 0.2,
  });
});

document.querySelectorAll(".title").forEach((L) => {
  L.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 2,
      duration: 0.2,
    });
  });
});
document.querySelectorAll(".title").forEach((L) => {
  L.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1,
      duration: 0.2,
    });
  });
});
document
  .querySelector(".FirstMain-quote-h4")
  .addEventListener("mouseenter", () => {
    window.addEventListener("mousemove", onMouseMove);
  });

document
  .querySelector(".FirstMain-quote-h4")
  .addEventListener("mouseleave", () => {
    window.removeEventListener("mousemove", onMouseMove);
    gsap.to(".cursor-on-top svg", {
      duration: 0.2,
      opacity: 0,
    });
    gsap.to(".cursor", {
      opacity: 1,
    });
  });

function onMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(".cursor-on-top svg", {
    x: mouseX - 100,
    y: mouseY - 100,
    duration: 0.2,
    opacity: 0.9,
  });
  gsap.to(".cursor", {
    opacity: 0,
  });
}
