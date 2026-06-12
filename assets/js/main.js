const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 12);
});

menuToggle?.addEventListener('click', () => {
  menu?.classList.toggle('open');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => menu?.classList.remove('open'));
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealEls.forEach((el) => observer.observe(el));

const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');
    tabs.forEach((item) => item.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`[data-panel="${target}"]`)?.classList.add('active');
  });
});

const demoLogin = document.querySelector('[data-demo-login]');
demoLogin?.addEventListener('click', () => {
  document.querySelector('#dashboard-demo')?.scrollIntoView({ behavior: 'smooth' });
});

const formButton = document.querySelector('[data-form-button]');
const formMessage = document.querySelector('[data-form-message]');
formButton?.addEventListener('click', () => {
  if (formMessage) {
    formMessage.textContent = 'Solicitação registrada no modelo visual. Para produção, integre este formulário com e-mail, WhatsApp ou backend.';
  }
});

// ── View Toggle (Desktop / Mobile) ────────────────────
const viewBtns = document.querySelectorAll('[data-view]');
const viewDesktop = document.getElementById('view-desktop');
const viewMobile = document.getElementById('view-mobile');

viewBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-view');
    viewBtns.forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    if (target === 'mobile') {
      viewDesktop.hidden = true;
      viewMobile.hidden = false;
      viewMobile.classList.add('view-toggle-enter');
      viewMobile.addEventListener('animationend', () => viewMobile.classList.remove('view-toggle-enter'), { once: true });
    } else {
      viewMobile.hidden = true;
      viewDesktop.hidden = false;
      viewDesktop.classList.add('view-toggle-enter');
      viewDesktop.addEventListener('animationend', () => viewDesktop.classList.remove('view-toggle-enter'), { once: true });
    }
  });
});

// ── Mobile tab navigation ──────────────────────────────
const mobileNavBtns = document.querySelectorAll('[data-mobile-tab]');
const mobilePanels = document.querySelectorAll('[data-mobile-panel]');

mobileNavBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-mobile-tab');
    mobileNavBtns.forEach((b) => b.classList.remove('active'));
    mobilePanels.forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`[data-mobile-panel="${target}"]`)?.classList.add('active');
  });
});
