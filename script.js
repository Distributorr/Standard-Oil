/* =======================================================
   SCRIPT.JS — Interaktivität für die Standard Oil Website
   ======================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------------
     1. PRELOADER ANIMATION / ENTFERNUNG
  --------------------------------------------- */
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    if (preloader) {
      preloader.classList.add("fade-out");
      setTimeout(() => preloader.remove(), 600);
    }
  });

  /* ---------------------------------------------
     2. MOBILE MENÜ / BURGER-ICON
  --------------------------------------------- */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !expanded);
      mobileNav.hidden = expanded;
      mobileNav.classList.toggle("show");
    });

    // Menü automatisch schließen, wenn ein Link angeklickt wird
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.hidden = true;
        mobileNav.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------
     3. SANFTES SCROLLEN (Fallback für ältere Browser)
  --------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });

  /* ---------------------------------------------
     4. TIMELINE-DETAILS / MODALFENSTER
  --------------------------------------------- */
  const timelineItems = document.querySelectorAll(".timeline-item");
  const modal = document.getElementById("timeline-modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = modal?.
