function setupMobileMenu() {
  const menuButton = document.querySelector(".site-menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (!menuButton || !siteNav) return;

  const menuIcon = menuButton.querySelector("i");

  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    siteNav.classList.remove("is-open");

    if (menuIcon) {
      menuIcon.classList.remove("ri-close-line");
      menuIcon.classList.add("ri-menu-line");
    }
  }

  function openMenu() {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");
    siteNav.classList.add("is-open");

    if (menuIcon) {
      menuIcon.classList.remove("ri-menu-line");
      menuIcon.classList.add("ri-close-line");
    }
  }

  menuButton.addEventListener("click", function () {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  siteNav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupMobileMenu);
} else {
  setupMobileMenu();
}