 console.log("Portfolio Loaded!");

  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    navMenu.classList.toggle('active');
  });

  const glow = document.querySelector('.cursor-glow');

  document.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY + 20}px)`; // added 20px to Y to shift it down
  });

