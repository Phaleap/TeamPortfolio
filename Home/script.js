// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".horizontal-sections .panel");


// total horizontal distance we need to scroll
const totalWidth =
  panels.reduce((sum, panel) => sum + panel.offsetWidth, 0) - window.innerWidth;

gsap.to(".horizontal-sections", {
  x: () => `-${totalWidth}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections-wrapper",
    pin: true,
    scrub: 1,
    start: "top top",
    end: () => `+=${totalWidth}`, 
  }
});

gsap.to(".panel1 .center h1", {
    x: 400,
    ease: "none",
    scrollTrigger: {
        trigger: ".panel2",
        start: "top top",
        end: "bottom top",
        scrub:1
    }
})

gsap.to(".panel1 .last h1", {
    x: -400,
    ease: "none",
    scrollTrigger: {
        trigger: ".panel2",
        start: "top top",
        end: "bottom top",
        scrub:1
    }
})
gsap.to(".highlight-animate", {
    backgroundSize: "100% 100%",   // fills the text from left → right
    ease: "none",
    scrollTrigger: {
        trigger: ".panel2",
        start: "top center",
        end: "bottom top",
        scrub: 1,
    }
});



document.querySelectorAll(".hover-follow").forEach(link => {
    const icon = link.querySelector("span");

    link.addEventListener("mousemove", (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        icon.style.transform =
            `translate(${x * 0.4}px, ${y * 0.4}px) scale(1.5)`;
    });

    link.addEventListener("mouseleave", () => {
        icon.style.transform = "translate(0, 0)";
    });
});

const video = document.getElementById('hoverVideo');

video.addEventListener('mouseenter', () => {
    video.play();
});

video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; 
});
document.querySelectorAll(".hoverVideo").forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play().catch(() => {});
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});





