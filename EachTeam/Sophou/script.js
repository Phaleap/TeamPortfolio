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

const navElement = document.querySelector('.nav');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navElement.classList.add('hide');
  } else {
    navElement.classList.remove('hide');
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

const teams = document.querySelectorAll('.team');
const preview = document.querySelector('.team-preview');
const previewImg = preview.querySelector('img');

teams.forEach(team => {
  team.addEventListener('mouseenter', () => {
    const imgSrc = team.getAttribute('data-image');
    previewImg.src = imgSrc;
    preview.classList.add('show');
  });

  team.addEventListener('mouseleave', () => {
    preview.classList.remove('show');
  });

  team.addEventListener('mousemove', (e) => {
    preview.style.left = e.clientX + 30 + 'px';
    preview.style.top = e.clientY + 30 + 'px';
  });
});
