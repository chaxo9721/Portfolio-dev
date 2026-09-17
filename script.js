document.getElementById("year").textContent = new Date().getFullYear();

// Animation simple des barres de compétences à l'entrée dans l'écran
const bars = document.querySelectorAll(".bar i");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = "0";
      requestAnimationFrame(() => {
        entry.target.style.transition = "width 1.2s cubic-bezier(.2,.8,.2,1)";
        entry.target.style.width = width;
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.35 });

bars.forEach(bar => observer.observe(bar));
