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

  let virtualScrollTop = window.scrollY || document.documentElement.scrollTop;
  let ticking = false;

  function updateColors() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    // Calculate the actual scrollable distance
    const maxScroll = scrollHeight > clientHeight ? scrollHeight - clientHeight : 1; 

    // Calculate progress based on virtual scroll position relative to actual scroll height
    // This progress can go below 0 or above 1 during overscroll
    const scrollProgress = virtualScrollTop / maxScroll;

    // Calculate current hue based on scroll progress, wrapping around using modulo
    let currentLightHue = (lightStartHue + (lightEndHue - lightStartHue) * scrollProgress);
    let currentDarkHue = (darkStartHue + (darkEndHue - darkStartHue) * scrollProgress);

    // Ensure hue stays within 0-360 range and handles negative modulo results
    currentLightHue = ((currentLightHue % 360) + 360) % 360;
    currentDarkHue = ((currentDarkHue % 360) + 360) % 360;

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

  function handleWheel(event) {
    // Update virtual scroll position based on wheel delta
    virtualScrollTop += event.deltaY;
    // Clamp virtual scroll top to prevent it going below 0 (optional, adjust if needed)
    virtualScrollTop = Math.max(0, virtualScrollTop);
    
    // Request an animation frame to update colors
    requestTick();
    
    // Note: We don't prevent default scrolling here, let the browser handle visual overscroll.
  }

  // Initial call to set colors based on initial scroll position
  requestTick(); 

  // Listen for wheel events instead of scroll events
  window.addEventListener('wheel', handleWheel, { passive: true });
  
  // Optional: Update colors on resize as clientHeight/scrollHeight might change
  // Note: Resizing might reset virtualScrollTop if desired, or recalculate progress based on new dimensions.
  // Current implementation just recalculates progress based on the existing virtualScrollTop.
  window.addEventListener('resize', requestTick, { passive: true });
}); 