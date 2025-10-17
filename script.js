document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeBtn");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const body = document.body;

  // Set tema awal
  if (prefersLight) body.classList.add("light-theme");

  themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    themeBtn.textContent = body.classList.contains("light-theme") ? "🌞" : "🌙";
  });

  // Animasi fade-in pas scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  console.log("🔥 Portfolio aktif, tampil gaya di GitHub Pages!");
});
