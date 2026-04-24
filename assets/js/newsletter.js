function initNewsletterForm() {
  const form = document.querySelector("[data-newsletter-form]");
  const emailInput = document.querySelector("[data-newsletter-email]");
  const message = document.querySelector("[data-newsletter-message]");

  if (!form || !emailInput || !message || form.dataset.initialized === "true") return;

  form.dataset.initialized = "true";

  const STORAGE_KEY = "musicmixx_newsletter_emails";

  function showMessage(text, type = "") {
    message.textContent = text;
    message.className = "newsletter-message";

    if (type) {
      message.classList.add(type);
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function getSavedEmails() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Could not read newsletter emails from localStorage:", error);
      return [];
    }
  }

  function emailAlreadyExists(email, savedEmails) {
    return savedEmails.some((entry) => {
      if (typeof entry === "string") {
        return entry.toLowerCase() === email.toLowerCase();
      }

      if (entry && typeof entry.email === "string") {
        return entry.email.toLowerCase() === email.toLowerCase();
      }

      return false;
    });
  }

  function saveEmail(email) {
    try {
      const savedEmails = getSavedEmails();

      if (emailAlreadyExists(email, savedEmails)) {
        return { success: true, reason: "duplicate" };
      }

      savedEmails.push({
        email,
        subscribedAt: new Date().toISOString(),
      });

      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedEmails));

      return { success: true, reason: "new" };
    } catch (error) {
      console.error("Could not save newsletter email to localStorage:", error);
      return { success: false, reason: "storage-error" };
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
      showMessage("Please enter your email address.", "error");
      emailInput.focus();
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      emailInput.focus();
      return;
    }

    const result = saveEmail(email);

    if (!result.success) {
      showMessage("Could not save your email right now. Please try again.", "error");
      return;
    }

    if (result.reason === "duplicate") {
      showMessage("Welcome Back Subscriber", "success");
      form.reset();
      return;
    }

    showMessage("Thank you for subscribing!", "success");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", initNewsletterForm);
document.addEventListener("musicmixx:page-loaded", initNewsletterForm);