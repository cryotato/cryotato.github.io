document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('letterfield');
  if (!container) return;

  const lines = [
    "KITTERCHORD 咪胡 ",
    "PHOTONIC HEX 咒灮 ",
    "OMNITONAL ORB 謳卜 "
  ];

  const charSize = 24; 
  let gridItems = [];
  let rect = container.getBoundingClientRect();
  let cols = 0;
  let rows = 0;

  // Mouse tracking state
  let mouse = { x: -1000, y: -1000 };
  let targetMouse = { x: -1000, y: -1000 };
  let isMouseActive = false;
  let mouseTimeout;
  let idleFactor = 1; // 1 = idle pulse, 0 = mouse active

  function initGrid() {
    container.innerHTML = '';
    gridItems = [];
    rect = container.getBoundingClientRect();
    
    // Fill the width of the screen, but STRICTLY limit rows to the 3 lines
    cols = Math.ceil(rect.width / charSize);
    rows = lines.length; 

    for (let y = 0; y < rows; y++) {
      const str = lines[y];
      const charArray = Array.from(str); 

      for (let x = 0; x < cols; x++) {
        const char = charArray[x % charArray.length];
        
        const el = document.createElement('div');
        el.textContent = char;
        container.appendChild(el);

        gridItems.push({
          el: el,
          x: x * charSize + charSize / 2, 
          y: y * charSize + charSize / 2  
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
    
    // Return to pulse mode if mouse stops moving for 1.5s
    mouseTimeout = setTimeout(() => { isMouseActive = false; }, 1500);
  });

  container.addEventListener('mouseleave', () => {
    isMouseActive = false;
  });

  window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(initGrid, 200);
  });

  initGrid();

  function animate(time) {
    // Smoothly follow the mouse
    mouse.x += (targetMouse.x - mouse.x) * 0.1;
    mouse.y += (targetMouse.y - mouse.y) * 0.1;

    // Smoothly transition between Pulse mode and Mouse mode
    if (isMouseActive) {
      idleFactor = Math.max(0, idleFactor - 0.05); // Fade OUT pulse
    } else {
      idleFactor = Math.min(1, idleFactor + 0.02); // Fade IN pulse
    }

    for (let i = 0; i < gridItems.length; i++) {
      const item = gridItems[i];
      
      // 1. Gentle Idle Pulse (A very slow, sweeping wave left-to-right)
      const wavePulse = Math.sin(item.x * 0.005 - time * 0.002) * 0.5 + 0.5;

      // 2. Mouse Aura (250 is the radius of the cursor)
      const dx = item.x - mouse.x;
      const dy = item.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const mouseVal = Math.max(0, 1 - dist / 250); 
      
      // Interpolate between the two states cleanly
      const val = (mouseVal * (1 - idleFactor)) + (wavePulse * idleFactor);

      // Map our 0-1 value to a Font Weight (100 to 700)
      const weight = Math.round(100 + val * 600);

      item.el.style.setProperty('--val', val.toFixed(3));
      item.el.style.fontWeight = weight;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});