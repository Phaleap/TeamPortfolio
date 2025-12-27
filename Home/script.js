// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".panel");

const totalPanelWidth = panels.reduce((total, panel, index) => {
    return total + (index < panels.length - 1? panel.offsetWidth:0)
}, 0)

// Set up the GSAP animation timeline
gsap.to(".horizontal-sections", {
    // Animate the 'x' property (horizontal movement) to the negative of the total scroll width
    x: `-${totalPanelWidth}px`, 
    ease: "none", // Linear movement
    
    scrollTrigger: {
        trigger: ".horizontal-sections-wrapper", // The tall container that drives the scroll
        pin: true, // Pin the horizontal-sections to the viewport
        scrub: 1, // Smoothly link scroll to animation
        // Start: when the top of the wrapper hits the top of the viewport
        start: "top top", 
        // End: when the bottom of the wrapper hits the top of the viewport
        end: "bottom top", 
        // Optional: shows scroll-trigger markers for debugging
        // markers: true, 
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
