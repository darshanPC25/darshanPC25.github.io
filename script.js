const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

const themeToggle = document.querySelector(".theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const storedTheme = localStorage.getItem("portfolio-theme");

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  const themeText = themeToggle?.querySelector(".theme-toggle-text");
  if (themeText) {
    themeText.textContent = isDark ? "Light mode" : "Dark mode";
  }
};

if (storedTheme) {
  applyTheme(storedTheme);
} else {
  applyTheme(prefersDark.matches ? "dark" : "light");
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem("portfolio-theme", nextTheme);
  applyTheme(nextTheme);
});

document
  .querySelectorAll(".hero-copy, .hero-card, .section, .project-card, .skill-panel, .contact-card")
  .forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

const floatingCards = document.querySelectorAll("[data-float]");

window.addEventListener(
  "scroll",
  () => {
    const offset = Math.min(window.scrollY * 0.04, 14);
    floatingCards.forEach((card, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      card.style.setProperty("--float-y", `${offset * direction * 0.45}px`);
    });
  },
  { passive: true }
);

document.querySelectorAll(".project-card, .skill-panel, .certification-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const bounds = card.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -4;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
