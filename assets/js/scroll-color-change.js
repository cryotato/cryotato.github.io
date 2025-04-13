document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // --- Configuration --- 
  const lightStartHue = 0;    // Starting HSL hue for light color (0-360)
  const lightEndHue = 360;  // Not directly used for rate, but keeps range clear
  const lightSaturation = 34; // Saturation % for light color (Reduced from 60)
  const lightLightness = 90;  // Lightness % for light color

  const darkStartHue = 0;     // Starting HSL hue for dark color (0-360)
  const darkEndHue = 360;   // Not directly used for rate, but keeps range clear
  const darkSaturation = 100;  // Saturation % for dark color
  const darkLightness = 20;   // Lightness % for dark color

  const pixelsPerLightHueCycle = 10000; // Slower cycle for light color
  const pixelsPerDarkHueCycle = 7500;  // Faster cycle for dark color

  const easingFactor = 0.1; // Smaller = smoother/more lag (0 to 1)
  // --- End Configuration ---

  let virtualScrollTop = window.scrollY || document.documentElement.scrollTop;
  let isTouching = false;
  let touchStartY = 0;
  
  // Initialize current hues based on initial virtual scroll
  let currentLightHue = (lightStartHue + (virtualScrollTop / pixelsPerLightHueCycle) * 360);
  let currentDarkHue = (darkStartHue + (virtualScrollTop / pixelsPerDarkHueCycle) * 360);
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
    // Calculate TARGET hues based on virtual scroll position and INDIVIDUAL cycle lengths
    const targetLightHueOffset = (virtualScrollTop / pixelsPerLightHueCycle) * 360;
    const targetDarkHueOffset = (virtualScrollTop / pixelsPerDarkHueCycle) * 360;

    let targetLightHue = ((lightStartHue + targetLightHueOffset) % 360 + 360) % 360;
    let targetDarkHue = ((darkStartHue + targetDarkHueOffset) % 360 + 360) % 360;

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

  // --- Touch Event Handlers ---
  function handleTouchStart(event) {
    if (event.touches.length === 1) { // Handle single touch scrolling
      isTouching = true;
      touchStartY = event.touches[0].clientY;
    }
  }

  function handleTouchMove(event) {
    if (!isTouching || event.touches.length !== 1) return;

    const currentY = event.touches[0].clientY;
    const deltaY = touchStartY - currentY; // Calculate difference
    virtualScrollTop += deltaY; // Update virtual scroll
    touchStartY = currentY; // Update start position for next move event
    // No need to call requestTick, continuous loop handles updates.
  }

  function handleTouchEnd(event) {
    isTouching = false;
  }

  // --- Start the continuous animation loop --- 
  requestAnimationFrame(updateColors);

  // Listen for wheel events to update the virtual scroll position
  window.addEventListener('wheel', handleWheel, { passive: true });
  
  // --- Add Touch Event Listeners ---
  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: true });
  window.addEventListener('touchend', handleTouchEnd, { passive: true });
  window.addEventListener('touchcancel', handleTouchEnd, { passive: true }); // Handle cancellation too

  // Optional: Update colors on resize - loop handles the visual update
  window.addEventListener('resize', () => {
      // Maybe re-read initial scroll position or adjust virtualScrollTop?
      // For now, just lets the continuous loop adjust based on current virtualScrollTop.
  }, { passive: true });
}); 