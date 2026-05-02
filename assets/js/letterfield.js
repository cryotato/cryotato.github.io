document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('letterfield');
  if (!container) return;

  // Edit your repeating lines here!
  const lines = [
    "KITTERCHORD 咪胡 ",
    "PHOTONIC HEX 咒灮 ",
    "OMNITONAL ORB 謳卜 "
  ];

  const charSize = 24; // Must match the width/height in your CSS
  let gridItems = [];
  let rect = container.getBoundingClientRect();
  let cols = 0;
  let rows = 0;

  // Mouse tracking state
  let mouse = { x: -1000, y: -1000 };
  let targetMouse = { x: -1000, y: -1000 };
  let isMouseActive = false;
  let mouseTimeout;

  function initGrid() {
    container.innerHTML = '';
    gridItems = [];
    rect = container.getBoundingClientRect();
    
    cols = Math.ceil(rect.width / charSize);
    rows = Math.ceil(rect.height / charSize);

    for (let y = 0; y < rows; y++) {
      // Pick the line of text based on the current row
      const str = lines[y % lines.length];
      // Array.from safely splits text, preventing Chinese characters from breaking
      const charArray = Array.from(str); 

      for (let x = 0; x < cols; x++) {
        // Pick the character based on the current column
        const char = charArray[x % charArray.length];
        
        const el = document.createElement('div');
        el.textContent = char;
        container.appendChild(el);

        gridItems.push({
          el: el,
          x: x * charSize + charSize / 2, // Center X of the character
          y: y * charSize + charSize / 2  // Center Y of the character
        });
      }
    }
  }

  // Handle Mouse Activity
  container.addEventListener('mousemove', (e) => {
    const bounds = container.getBoundingClientRect();
    targetMouse.x = e.clientX - bounds.left;
    targetMouse.y = e.clientY - bounds.top;

    isMouseActive = true;
    clearTimeout(mouseTimeout);
    
    // If the mouse stops moving for 1.5 seconds, go back to pulsing
    mouseTimeout = setTimeout(() => { isMouseActive = false; }, 1500);
  });

  container.addEventListener('mouseleave', () => {
    isMouseActive = false;
  });

  // Re-draw grid if window is resized
  window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(initGrid, 200);
  });

  initGrid();

  // Main Animation Loop
  function animate(time) {
    // Smoothly interpolate mouse position for fluid movement
    mouse.x += (targetMouse.x - mouse.x) * 0.1;
    mouse.y += (targetMouse.y - mouse.y) * 0.1;

    for (let i = 0; i < gridItems.length; i++) {
      const item = gridItems[i];
      let val = 0;

      // 1. Calculate Pulse Wave (originating from center)
      const cx = item.x - rect.width / 2;
      const cy = item.y - rect.height / 2;
      const cdist = Math.sqrt(cx * cx + cy * cy);
      // Creates a pulsing wave from 0 to 1
      const pulseVal = Math.sin(cdist * 0.01 - time * 0.002) * 0.5 + 0.5;

      if (isMouseActive) {
        // 2. Calculate Mouse Distance
        const dx = item.x - mouse.x;
        const dy = item.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // 250 is the radius of the cursor effect. Decrease/Increase to change size.
        const mouseVal = Math.max(0, 1 - dist / 250); 
        
        // Let the pulse softly happen in the background, but let the mouse dominate
        val = Math.max(pulseVal * 0.2, mouseVal);
      } else {
        val = pulseVal;
      }

      // Map our 0-1 value to a Font Weight (100 to 700)
      const weight = Math.round(100 + val * 600);

      // Apply the value for CSS color-mix, and the font-weight
      item.el.style.setProperty('--val', val.toFixed(3));
      item.el.style.fontWeight = weight;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});