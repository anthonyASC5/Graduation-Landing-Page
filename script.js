const BOOKING_URL =
  document.body.dataset.bookingUrl || "https://shotbylall.pixieset.com/booking/graduationshotbyall";

document.querySelectorAll("[data-booking-link]").forEach((link) => {
  link.href = BOOKING_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const items = document.querySelectorAll(".fade");

items.forEach((el, i) => {
  setTimeout(() => {
    el.classList.add("show");
  }, i * 80);
});

const nav = document.querySelector(".site-nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

nav.classList.toggle("scrolled", window.scrollY > 20);

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const trigger = item.querySelector(".faq-trigger");
  const panel = item.querySelector(".faq-panel");

  trigger.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    faqItems.forEach((entry) => {
      entry.classList.remove("open");
      entry.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
      entry.querySelector(".faq-panel").style.maxHeight = "";
    });

    if (!isOpen) {
      item.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeTargets = document.querySelectorAll(".lightbox-backdrop, .lightbox-close");
const galleryButtons = document.querySelectorAll("[data-lightbox-src]");
let activeTrigger = null;

const closeLightbox = () => {
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.classList.remove("lightbox-open");
  activeTrigger?.focus();
};

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTrigger = button;
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    lightboxImage.src = button.dataset.lightboxSrc;
    lightboxImage.alt = button.dataset.lightboxAlt || "";
    document.body.classList.add("lightbox-open");
  });
});

closeTargets.forEach((target) => {
  target.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});
