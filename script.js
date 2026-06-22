document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Chiudi il menu" : "Apri il menu");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Apri il menu");
    });
  });
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".hero-content, .hero-image-wrap, .trust-grid > div, .two-col > *, .section-heading, .card, .feature-card, .step, .centered-copy, .faq-grid > *, details, .contact-card > *"
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    if (index % 4 === 1) element.classList.add("delay-1");
    if (index % 4 === 2) element.classList.add("delay-2");
    if (index % 4 === 3) element.classList.add("delay-3");
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealTargets.forEach((element) => observer.observe(element));
}


/* V7 — Theme switcher, scroll progress and premium motion */
const header = document.querySelector(".site-header");
const progressBar = document.querySelector(".scroll-progress");
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const portraitCard = document.querySelector(".portrait-card");

const THEME_STORAGE_KEY = "ilaria-theme-preference";

function getAutoThemeByHour() {
  const hour = new Date().getHours();
  return hour >= 20 || hour < 7 ? "dark" : "light";
}

function applyTheme(choice) {
  const resolvedChoice = choice || "auto";
  const finalTheme = resolvedChoice === "auto" ? getAutoThemeByHour() : resolvedChoice;

  document.documentElement.dataset.theme = finalTheme;
  document.documentElement.dataset.themeChoice = resolvedChoice;

  themeButtons.forEach((button) => {
    const isActive = button.dataset.themeChoice === resolvedChoice;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function saveTheme(choice) {
  localStorage.setItem(THEME_STORAGE_KEY, choice);
  applyTheme(choice);
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "auto";
applyTheme(savedTheme);

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    saveTheme(button.dataset.themeChoice);
  });
});

// If automatic mode is selected, update softly while the page remains open.
setInterval(() => {
  const currentChoice = localStorage.getItem(THEME_STORAGE_KEY) || "auto";
  if (currentChoice === "auto") {
    applyTheme("auto");
  }
}, 60 * 1000);

function updateScrollEffects() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  if (header) {
    header.classList.toggle("is-scrolled", scrollTop > 12);
  }
}

window.addEventListener("scroll", updateScrollEffects, { passive: true });
window.addEventListener("resize", updateScrollEffects);
updateScrollEffects();

if (portraitCard && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
  portraitCard.addEventListener("mousemove", (event) => {
    const rect = portraitCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = y * -3.2;
    const rotateY = x * 3.2;

    portraitCard.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  });

  portraitCard.addEventListener("mouseleave", () => {
    portraitCard.style.transform = "";
  });
}


/* V8 — Subtle botanical parallax */
const botanicalParallaxItems = document.querySelectorAll(".botanical-parallax");

function updateBotanicalParallax() {
  if (prefersReducedMotion || !botanicalParallaxItems.length || !window.matchMedia("(pointer: fine)").matches) return;

  const y = window.scrollY || document.documentElement.scrollTop;
  botanicalParallaxItems.forEach((item, index) => {
    const speed = index % 2 === 0 ? 0.026 : -0.018;
    item.style.translate = `0 ${y * speed}px`;
  });
}

window.addEventListener("scroll", updateBotanicalParallax, { passive: true });
updateBotanicalParallax();


/* V9 — Draw botanical and zen lines on view */
const lineArtItems = document.querySelectorAll(".botanical-line, .zen-line");

if (!prefersReducedMotion && "IntersectionObserver" in window && lineArtItems.length) {
  const lineObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-drawn");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: "0px 0px -30px 0px"
  });

  lineArtItems.forEach((item) => lineObserver.observe(item));
} else {
  lineArtItems.forEach((item) => item.classList.add("is-drawn"));
}


/* V10 — Animated portrait lightbox and subtle cursor spotlight */
const portraitLightboxLink = document.querySelector("[data-lightbox-portrait]");
const portraitLightbox = document.querySelector("#portrait-lightbox");
const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close]");
let lastFocusedElement = null;

function openPortraitLightbox(event) {
  if (!portraitLightbox) return;
  event.preventDefault();

  lastFocusedElement = document.activeElement;
  portraitLightbox.hidden = false;
  document.body.style.overflow = "hidden";

  const closeButton = portraitLightbox.querySelector(".lightbox-close");
  if (closeButton) closeButton.focus();
}

function closePortraitLightbox() {
  if (!portraitLightbox || portraitLightbox.hidden) return;

  portraitLightbox.hidden = true;
  document.body.style.overflow = "";

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

if (portraitLightboxLink && portraitLightbox) {
  portraitLightboxLink.addEventListener("click", openPortraitLightbox);
  lightboxCloseButtons.forEach((button) => {
    button.addEventListener("click", closePortraitLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePortraitLightbox();
    }
  });
}

const spotlightElements = document.querySelectorAll(".card, .step, details");

if (!prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
  spotlightElements.forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      element.style.setProperty("--mx", `${x}%`);
      element.style.setProperty("--my", `${y}%`);
    });
  });
}
