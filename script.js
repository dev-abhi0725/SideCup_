var crsr = document.querySelector("#cursor");
var blr = document.querySelector("#blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x - 12 + "px";
  crsr.style.top = dets.y - 12 + "px";
  blr.style.left = dets.x - 250 + "px";
  blr.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
  height: "100px",
  backgroundColor: "#000",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroll: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroll: "body",
    markers: true,
    start: "top -20%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.to("");
