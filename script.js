function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  function handleScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
