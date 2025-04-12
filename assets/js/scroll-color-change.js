document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // --- Configuration --- 
  const lightStartHue = 0;    // Starting HSL hue for light color (0-360)
  const lightEndHue = 360;  // Ending HSL hue for light color (0-360)
  const lightSaturation = 100; // Saturation % for light color
  const lightLightness = 80;  // Lightness % for light color

  const darkStartHue = 0;     // Starting HSL hue for dark color (0-360)
  const darkEndHue = 360;   // Ending HSL hue for dark color (0-360)
  const darkSaturation = 100;  // Saturation % for dark color
  const darkLightness = 20;   // Lightness % for dark color
  // --- End Configuration ---

  let ticking = false;

  function updateColors() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Handle cases where scrollHeight might be equal to clientHeight (no scrollbar)
    const maxScroll = scrollHeight > clientHeight ? scrollHeight - clientHeight : 1; 
    const scrollProgress = Math.min(scrollTop / maxScroll, 1); // Clamp between 0 and 1

    // Calculate current hue based on scroll progress
    const currentLightHue = lightStartHue + (lightEndHue - lightStartHue) * scrollProgress;
    const currentDarkHue = darkStartHue + (darkEndHue - darkStartHue) * scrollProgress;

    // Construct HSL color strings
    const newLightColor = `hsl(${currentLightHue}, ${lightSaturation}%, ${lightLightness}%)`;
    const newDarkColor = `hsl(${currentDarkHue}, ${darkSaturation}%, ${darkLightness}%)`;

    // Update CSS variables
    root.style.setProperty('--light', newLightColor);
    root.style.setProperty('--dark', newDarkColor);

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateColors);
      ticking = true;
    }
  }

  // Initial call to set colors based on initial scroll position (often 0)
  requestTick(); 

  // Listen for scroll events
  window.addEventListener('scroll', requestTick, { passive: true });
  
  // Optional: Listen for resize events as clientHeight might change
  window.addEventListener('resize', requestTick, { passive: true });
}); 