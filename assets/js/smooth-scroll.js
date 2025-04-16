document.addEventListener('DOMContentLoaded', function() {
  // Select all anchor links with href starting with '#'
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent the default anchor link behavior
      e.preventDefault();

      const targetId = this.getAttribute('href');
      // Ensure the target is not just '#'
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Smoothly scroll to the target element
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      } else if (targetId === '#') {
        // Scroll to the top of the page if href is just '#'
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });
});