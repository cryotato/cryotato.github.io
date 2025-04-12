document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // --- Configuration --- 
  const lightStartHue = 0;    // Starting HSL hue for light color (0-360)
  const lightEndHue = 360;  // Not directly used for rate, but keeps range clear
  const lightSaturation = 60; // Saturation % for light color
  const lightLightness = 80;  // Lightness % for light color

  const darkStartHue = 0;     // Starting HSL hue for dark color (0-360)
  const darkEndHue = 360;   // Not directly used for rate, but keeps range clear
  const darkSaturation = 100;  // Saturation % for dark color
  const darkLightness = 20;   // Lightness % for dark color

  const pixelsPerHueCycle = 10000; // Pixels scrolled for one full 360deg hue cycle. Adjust for sensitivity.
  const easingFactor = 0.1; // Smaller = smoother/more lag (0 to 1)
  // --- End Configuration ---

  let virtualScrollTop = window.scrollY || document.documentElement.scrollTop;
  
  // Initialize current hues based on initial virtual scroll
  let currentLightHue = (lightStartHue + (virtualScrollTop / pixelsPerHueCycle) * 360);
  let currentDarkHue = (darkStartHue + (virtualScrollTop / pixelsPerHueCycle) * 360);
  currentLightHue = ((currentLightHue % 360) + 360) % 360;
  currentDarkHue = ((currentDarkHue % 360) + 360) % 360;
  
  // Helper function for hue interpolation with wrap-around
  function lerpHue(current, target, factor) {
    let diff = target - current;
    // Adjust difference for shortest path around the 0-360 circle
    if (diff > 180) {
      diff -= 360;
    } else if (diff < -180) {
      diff += 360;
    }
    // Apply easing
    let next = current + diff * factor;
    // Ensure the result wraps around correctly
    return ((next % 360) + 360) % 360;
  }

  function updateColors() {
    // Calculate TARGET hue based on virtual scroll position
    const targetHueOffset = (virtualScrollTop / pixelsPerHueCycle) * 360;
    let targetLightHue = ((lightStartHue + targetHueOffset) % 360 + 360) % 360;
    let targetDarkHue = ((darkStartHue + targetHueOffset) % 360 + 360) % 360;

    // Interpolate CURRENT hue towards the target hue
    currentLightHue = lerpHue(currentLightHue, targetLightHue, easingFactor);
    currentDarkHue = lerpHue(currentDarkHue, targetDarkHue, easingFactor);

    // Construct HSL color strings using CURRENT interpolated hues
    const newLightColor = `hsl(${currentLightHue}, ${lightSaturation}%, ${lightLightness}%)`;
    const newDarkColor = `hsl(${currentDarkHue}, ${darkSaturation}%, ${darkLightness}%)`;

    // Construct the full shadow strings using the new colors
    const newLightShadow = `-1px -1px 0 ${newLightColor}, 0 -1px 0 ${newLightColor}, 1px -1px 0 ${newLightColor}, 1px 0 0 ${newLightColor}, 1px 1px 0 ${newLightColor}, 0 1px 0 ${newLightColor}, -1px 1px 0 ${newLightColor}, -1px 0 0 ${newLightColor}`;
    const newDarkShadow = `-1px -1px 0 ${newDarkColor}, 0 -1px 0 ${newDarkColor}, 1px -1px 0 ${newDarkColor}, 1px 0 0 ${newDarkColor}, 1px 1px 0 ${newDarkColor}, 0 1px 0 ${newDarkColor}, -1px 1px 0 ${newDarkColor}, -1px 0 0 ${newDarkColor}`;

    // Update CSS variables for colors AND shadows
    root.style.setProperty('--light', newLightColor);
    root.style.setProperty('--dark', newDarkColor);
    root.style.setProperty('--l-shadow', newLightShadow);
    root.style.setProperty('--d-shadow', newDarkShadow);
    
    // Keep the animation loop running
    requestAnimationFrame(updateColors);
  }

  function handleWheel(event) {
    virtualScrollTop += event.deltaY;
    // No need to call requestTick here, loop is continuous
  }

  // --- Start the continuous animation loop --- 
  requestAnimationFrame(updateColors);

  // Listen for wheel events to update the virtual scroll position
  window.addEventListener('wheel', handleWheel, { passive: true });
  
  // Optional: Update colors on resize - loop handles the visual update
  window.addEventListener('resize', () => {
      // Maybe re-read initial scroll position or adjust virtualScrollTop?
      // For now, just lets the continuous loop adjust based on current virtualScrollTop.
  }, { passive: true });
}); 