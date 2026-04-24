const THEME_STORAGE_KEY = "musicmixx-current-theme-v1";

export function saveTheme(theme) {
  if (!theme) return;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  document.body.dataset.theme = theme;
}

export function applySavedTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme) {
    document.body.dataset.theme = savedTheme;
  }
}

document.addEventListener("DOMContentLoaded", applySavedTheme);