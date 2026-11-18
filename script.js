/* BIBOTOL — interacciones de la página de descarga */

// Cerrar las demás preguntas al abrir una (comportamiento acordeón).
document.querySelectorAll('.faq details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

// Resaltar suavemente el enlace del menú según la sección visible.
const links = [...document.querySelectorAll('.topbar nav a')];
const sections = links
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--cyan)' : '';
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => observer.observe(s));
}

// Pequeña confirmación al pulsar un botón de descarga.
document.querySelectorAll('a[download]').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(.96)' }, { transform: 'scale(1)' }],
      { duration: 220 }
    );
  });
});
