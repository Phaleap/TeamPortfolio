const links = document.querySelectorAll(".nav a");
const indicator = document.querySelector(".indicator");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    const rect = link.getBoundingClientRect();
    const navRect = link.parentElement.getBoundingClientRect();

    indicator.style.width = `${rect.width}px`;
    indicator.style.transform = `translateX(${rect.left - navRect.left}px)`;
    indicator.style.opacity = 1;
  });
});

document.querySelector(".nav").addEventListener("mouseleave", () => {
  indicator.style.opacity = 0;
});
