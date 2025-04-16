document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lenis
  const lenis = new Lenis({
    lerp: 0.06, // Adjust this value for smoothness (0.05 to 0.1 is common)
    // duration: 1.2, // Optional: Define scroll duration
    // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional: Custom easing function
    smoothWheel: true, // Enable smooth scrolling for mouse wheel
    smoothTouch: false, // Optional: Enable smooth scrolling for touch events
    touchMultiplier: 2, // Optional: Adjust touch scroll speed
  });

  // Integrate Lenis with the browser's scroll events
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Handle anchor link clicks
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default jump

      const targetSelector = this.getAttribute('href');

      // Use Lenis to scroll
      if (targetSelector === '#') {
        lenis.scrollTo(0, { // Scroll to top
          // offset: 0, // Optional offset
          // duration: 1.5, // Optional duration override for this specific scroll
          // easing: (t) => t, // Optional easing override
        });
      } else {
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
          lenis.scrollTo(targetElement, { // Scroll to target element
            // offset: 0, // Optional offset
            // duration: 1.5, // Optional duration override
            // easing: (t) => t, // Optional easing override
          });
        } else {
          console.warn(`Smooth scroll target not found: ${targetSelector}`);
        }
      }
    });
  });

  // Optional: Stop Lenis scrolling if the user scrolls manually
  // let isUserScrolling = false;
  // window.addEventListener('wheel', () => { isUserScrolling = true; }, { passive: true });
  // window.addEventListener('touchmove', () => { isUserScrolling = true; }, { passive: true });

  // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  //   if (velocity !== 0) { // If Lenis is scrolling
  //     if (isUserScrolling) {
  //       lenis.stop(); // Stop Lenis animation if user starts scrolling
  //       isUserScrolling = false; // Reset flag
  //     }
  //   } else {
  //     isUserScrolling = false; // Reset flag when Lenis stops
  //   }
  // });

});