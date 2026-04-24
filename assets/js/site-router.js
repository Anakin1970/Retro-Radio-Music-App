const pageCache = new Map();

const homeMain = document.querySelector("#main-content");
const homeTitle = document.title;
const homeDescription =
  document.querySelector('meta[name="description"]')?.content || "";

let dynamicMain = null;

const ROUTES = {
  "index.html": "index.html",
  "about.html": "assets/about.html",
  "stations.html": "assets/stations.html",
  "schedule.html": "assets/schedule.html",
  "contact.html": "assets/contact.html",
};

const INTERNAL_PAGE_NAMES = Object.keys(ROUTES);

function getAppRoot() {
  const path = window.location.pathname;
  const assetsIndex = path.indexOf("/assets/");

  if (assetsIndex !== -1) {
    return path.slice(0, assetsIndex + 1);
  }

  return path.slice(0, path.lastIndexOf("/") + 1);
}

const APP_ROOT = getAppRoot();

function getPageNameFromHref(href) {
  if (!href) return null;
  if (href.startsWith("#")) return null;
  if (href.startsWith("mailto:")) return null;
  if (href.startsWith("tel:")) return null;

  let url;

  try {
    url = new URL(href, window.location.href);
  } catch (error) {
    return null;
  }

  if (url.origin !== window.location.origin) return null;

  const pageName = url.pathname.split("/").pop();

  if (!INTERNAL_PAGE_NAMES.includes(pageName)) return null;

  return pageName;
}

function getRouteFromHref(href) {
  const pageName = getPageNameFromHref(href);
  return pageName ? ROUTES[pageName] : null;
}

function getBrowserUrlFromRoute(route) {
  return `${APP_ROOT}${route}`;
}

function getFetchUrlFromRoute(route) {
  return `${APP_ROOT}${route}`;
}

function isInternalPageLink(anchor) {
  if (!anchor) return false;
  if (anchor.target === "_blank") return false;
  if (anchor.hasAttribute("download")) return false;

  return Boolean(getRouteFromHref(anchor.getAttribute("href")));
}

function updateActiveNav(route) {
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkRoute = getRouteFromHref(link.getAttribute("href"));
    link.classList.toggle("active", linkRoute === route);
  });
}

function updateMeta(title, description) {
  document.title = title;

  const descriptionTag = document.querySelector('meta[name="description"]');

  if (descriptionTag && description) {
    descriptionTag.setAttribute("content", description);
  }
}

function getSafeImagePath(src) {
  if (!src) return src;

  if (
    src.startsWith("http") ||
    src.startsWith("data:") ||
    src.startsWith("blob:") ||
    src.startsWith("/")
  ) {
    return src;
  }

  if (src.startsWith("assets/")) {
    return `${APP_ROOT}${src}`;
  }

  if (src.startsWith("img/")) {
    return `${APP_ROOT}assets/${src}`;
  }

  if (src.startsWith("../")) {
    return `${APP_ROOT}${src.replace("../", "")}`;
  }

  return `${APP_ROOT}${src}`;
}

function rewriteAssetPaths(container) {
  container.querySelectorAll("img[src]").forEach((img) => {
    const src = img.getAttribute("src");
    img.setAttribute("src", getSafeImagePath(src));
  });

  container.querySelectorAll("a[href]").forEach((link) => {
    const route = getRouteFromHref(link.getAttribute("href"));

    if (!route) return;

    link.setAttribute("href", getBrowserUrlFromRoute(route));
  });
}

async function fetchPage(route) {
  if (pageCache.has(route)) {
    return pageCache.get(route);
  }

  const response = await fetch(getFetchUrlFromRoute(route));

  if (!response.ok) {
    throw new Error(`Could not load ${route}`);
  }

  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const pageData = {
    title: doc.title,
    description: doc.querySelector('meta[name="description"]')?.content || "",
    main: doc.querySelector("#main-content")?.innerHTML || "",
  };

  pageCache.set(route, pageData);

  return pageData;
}

function showHomePage() {
  if (dynamicMain) {
    dynamicMain.remove();
    dynamicMain = null;
  }

  homeMain.hidden = false;

  updateMeta(homeTitle, homeDescription);
  updateActiveNav("index.html");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function showInternalPage(route) {
  if (route === "index.html") {
    showHomePage();
    return;
  }

  const page = await fetchPage(route);

  if (!dynamicMain) {
    dynamicMain = document.createElement("main");
    dynamicMain.id = "dynamic-main-content";
    homeMain.insertAdjacentElement("afterend", dynamicMain);
  }

  homeMain.hidden = true;
  dynamicMain.innerHTML = page.main;

  rewriteAssetPaths(dynamicMain);

  updateMeta(page.title, page.description);
  updateActiveNav(route);

  document.dispatchEvent(
    new CustomEvent("musicmixx:page-loaded", {
      detail: { route },
    })
  );

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", async (event) => {
  const anchor = event.target.closest("a");

  if (!isInternalPageLink(anchor)) return;

  event.preventDefault();

  const route = getRouteFromHref(anchor.getAttribute("href"));

  if (!route) return;

  try {
    await showInternalPage(route);

    history.pushState(
      { route },
      "",
      getBrowserUrlFromRoute(route)
    );
  } catch (error) {
    console.error(error);
    window.location.href = getBrowserUrlFromRoute(route);
  }
});

window.addEventListener("popstate", async (event) => {
  const route =
    event.state?.route || getRouteFromHref(window.location.href) || "index.html";

  try {
    await showInternalPage(route);
  } catch (error) {
    console.error(error);
    window.location.href = getBrowserUrlFromRoute(route);
  }
});

history.replaceState(
  { route: getRouteFromHref(window.location.href) || "index.html" },
  "",
  window.location.href
);