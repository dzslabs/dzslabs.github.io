const menuButton = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");

const ANALYTICS_MEASUREMENT_ID = "G-TB36M1KMD2";
const ANALYTICS_CONSENT_KEY = "dzslabs_analytics_consent";
const ANALYTICS_SCRIPT_ATTRIBUTE = "data-dzs-analytics";
let analyticsConsentSession = null;

function readAnalyticsConsent() {
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : analyticsConsentSession;
  } catch (error) {
    return analyticsConsentSession;
  }
}

function writeAnalyticsConsent(value) {
  analyticsConsentSession = value;
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
  } catch (error) {
    // Analytics remains session-only when storage is unavailable.
  }
}

function clearAnalyticsCookies() {
  const cookieNames = ["_ga", `_ga_${ANALYTICS_MEASUREMENT_ID.replace(/^G-/i, "")}`];
  const domains = [window.location.hostname, `.${window.location.hostname}`];
  cookieNames.forEach((name) => {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
    });
  });
}

function loadAnalytics() {
  if (readAnalyticsConsent() !== "granted" || window.__dzsAnalyticsInitialized) {
    return;
  }

  window.__dzsAnalyticsInitialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_MEASUREMENT_ID);

  if (!document.querySelector(`script[${ANALYTICS_SCRIPT_ATTRIBUTE}]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_MEASUREMENT_ID}`;
    script.setAttribute(ANALYTICS_SCRIPT_ATTRIBUTE, "true");
    document.head.appendChild(script);
  }
}

function setAnalyticsConsent(value) {
  writeAnalyticsConsent(value);
  if (value === "granted") {
    loadAnalytics();
  } else {
    clearAnalyticsCookies();
  }
  document.dispatchEvent(new CustomEvent("dzs-analytics-consent", { detail: value }));
}

function createConsentBanner() {
  const existing = document.querySelector("[data-analytics-consent]");
  if (existing) return existing;

  const banner = document.createElement("section");
  banner.className = "analytics-consent";
  banner.setAttribute("data-analytics-consent", "true");
  banner.setAttribute("aria-labelledby", "analytics-consent-title");
  banner.setAttribute("role", "dialog");
  banner.hidden = true;

  const content = document.createElement("div");
  content.className = "analytics-consent-content";
  const title = document.createElement("h2");
  title.id = "analytics-consent-title";
  title.textContent = "Cookies";
  const body = document.createElement("p");
  body.textContent = "We use optional analytics technologies to understand how visitors use DZS Labs and improve the website. These technologies are not activated unless you accept.";
  const privacy = document.createElement("a");
  privacy.href = "/privacy.html";
  privacy.textContent = "Privacy Policy";
  body.append(" ", privacy);
  content.append(title, body);

  const actions = document.createElement("div");
  actions.className = "analytics-consent-actions";
  const accept = document.createElement("button");
  accept.className = "button";
  accept.type = "button";
  accept.textContent = "Accept cookies";
  const decline = document.createElement("button");
  decline.className = "button analytics-consent-secondary";
  decline.type = "button";
  decline.textContent = "Decline";
  actions.append(accept, decline);
  banner.append(content, actions);
  document.body.appendChild(banner);

  const close = (choice) => {
    setAnalyticsConsent(choice);
    banner.hidden = true;
  };
  accept.addEventListener("click", () => close("granted"));
  decline.addEventListener("click", () => close("denied"));
  return banner;
}

function showAnalyticsChoices() {
  const banner = createConsentBanner();
  banner.hidden = false;
  banner.querySelector("button")?.focus();
}

function setupAnalytics() {
  const consent = readAnalyticsConsent();
  if (consent === "granted") {
    loadAnalytics();
  } else if (!consent) {
    showAnalyticsChoices();
  }

  if (!document.querySelector("[data-privacy-choices]")) {
    const footerBottom = document.querySelector(".footer-bottom");
    if (footerBottom) {
      const wrapper = document.createElement("p");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "privacy-choices";
      button.setAttribute("data-privacy-choices", "true");
      button.textContent = "Privacy choices";
      button.addEventListener("click", showAnalyticsChoices);
      wrapper.appendChild(button);
      footerBottom.appendChild(wrapper);
    }
  }
}

document.querySelectorAll("[data-current-year]").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    mobileNav.classList.toggle("open", !open);
    document.body.classList.toggle("menu-open", !open);
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

setupAnalytics();
