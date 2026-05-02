document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('letterfield');
  if (!container) return;

  const lines = [
    "KITTERCHORD 咪胡 ",
    "PHOTONIC HEX 咒灮 ",
    "OMNITONAL ORB 謳卜 "
  ];

  const charSize = 72; // Font size & grid cell size
  let gridItems = [];
  let rect = container.getBoundingClientRect();
  
  // Mouse tracking state
  let mouse = { x: -1000, y: -1000 };
  let targetMouse = { x: -1000, y: -1000 };
  let isMouseActive = false;
  let mouseTimeout;
  let idleFactor = 1; 

  function initGrid() {
    container.innerHTML = '';
    gridItems = [];
    rect = container.getBoundingClientRect();
    
    // Lock the container height to exactly the 3 rows
    container.style.height = `${lines.length * charSize}px`;
    
    // Calculate how many characters fit horizontally across the screen
    const cols = Math.ceil(rect.width / charSize) + 1;

    for (let y = 0; y < lines.length; y++) {
      const str = lines[y];
      const charArray = Array.from(str); 

      for (let x = 0; x < cols; x++) {
        const char = charArray[x % charArray.length];
        
        const el = document.createElement('div');
        el.className = 'lf-char'; // Use specific class to avoid CSS clashes
        el.textContent = char;
        
        // mathematically calculate exact pixel positioning
        const xPos = x * charSize;
        const yPos = y * charSize;
        
        el.style.left = `${xPos}px`;
        el.style.top = `${yPos}px`;
        
        container.appendChild(el);

        gridItems.push({
          el: el,
          x: xPos + (charSize / 2), // The center-point of the character
          y: yPos + (charSize / 2), 
          lastWeight: -1 // Cache to stop lag
        });
      }
    }
  }

  // Handle Mouse Tracking
  container.addEventListener('mousemove', (e) => {
    // Recalculate bounds in case user scrolled the page
    const bounds = container.getBoundingClientRect();
    targetMouse.x = e.clientX - bounds.left;
    targetMouse.y = e.clientY - bounds.top;

    isMouseActive = true;
    clearTimeout(mouseTimeout);
    
    // Idle fallback after 1.5s
    mouseTimeout = setTimeout(() => { isMouseActive = false; }, 1500);
  });

  container.addEventListener('mouseleave', () => {
    isMouseActive = false;
  });

  // Rebuild grid if window resizes
  window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(initGrid, 200);
  });

  initGrid();

  // Animation Loop
  function animate(time) {
    // Smoothly follow cursor
    mouse.x += (targetMouse.x - mouse.x) * 0.1;
    mouse.y += (targetMouse.y - mouse.y) * 0.1;

    // Fade between idle wave and mouse flashlight
    if (isMouseActive) {
      idleFactor = Math.max(0, idleFactor - 0.05); 
    } else {
      idleFactor = Math.min(1, idleFactor + 0.02); 
    }

    for (let i = 0; i < gridItems.length; i++) {
      const item = gridItems[i];
      
      // Idle sweeping wave effect
      const wavePulse = Math.sin(item.x * 0.005 - time * 0.002) * 0.5 + 0.5;

      // Mouse proximity effect
      const dx = item.x - mouse.x;
      const dy = item.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const mouseVal = Math.max(0, 1 - dist / 500); // 500 is the mouse flashlight radius
      
      // Blend the two states
      const val = (mouseVal * (1 - idleFactor)) + (wavePulse * idleFactor);

      // Convert 0.0-1.0 to Font Weight (100 to 700) rounded to tens
      let weight = Math.round((100 + val * 600) / 10) * 10;

      // Only update DOM if it visually changed (Huge lag fix)
      if (item.lastWeight !== weight) {
        item.el.style.fontWeight = weight;
        item.el.style.setProperty('--val', val.toFixed(2));
        item.lastWeight = weight;
      }
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});