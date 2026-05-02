document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('letterfield');
  if (!container) return;

  const lines = [
    "KITTER咪 ",
    "CHORD 胡 ",
    "の ",
    "ORB謳卜 ",
    " &",
    "HEX咒光 ",
    "COMING ",
    "SOON "
  ];

  const charSize = 72; 
  let gridItems = [];
  let rect = container.getBoundingClientRect();
  
  // Mouse tracking state
  let mouse = { x: -1000, y: -1000 };
  let targetMouse = { x: -1000, y: -1000 };
  let isMouseActive = false;
  let mouseTimeout;
  let idleFactor = 1; 
  
  // --- TWEAK THIS VALUE: How long to wait before returning to idle (in milliseconds) ---
  const IDLE_DELAY_MS = 13500; // 3.5 seconds

  function initGrid() {
    container.innerHTML = '';
    gridItems = [];
    rect = container.getBoundingClientRect();
    
    container.style.height = `${lines.length * charSize}px`;
    const cols = Math.ceil(rect.width / charSize) + 1;

    for (let y = 0; y < lines.length; y++) {
      const str = lines[y];
      const charArray = Array.from(str); 

      for (let x = 0; x < cols; x++) {
        const char = charArray[x % charArray.length];
        
        const el = document.createElement('div');
        el.className = 'lf-char'; 
        el.textContent = char;
        
        const xPos = x * charSize;
        const yPos = y * charSize;
        
        el.style.left = `${xPos}px`;
        el.style.top = `${yPos}px`;
        
        container.appendChild(el);

        gridItems.push({
          el: el,
          x: xPos + (charSize / 2), 
          y: yPos + (charSize / 2), 
          lastWeight: -1 
        });
      }
    }
  }

  container.addEventListener('mousemove', (e) => {
    const bounds = container.getBoundingClientRect();
    targetMouse.x = e.clientX - bounds.left;
    targetMouse.y = e.clientY - bounds.top;

    isMouseActive = true;
    clearTimeout(mouseTimeout);
    
    // Set the delay for when the mouse stops moving
    mouseTimeout = setTimeout(() => { isMouseActive = false; }, IDLE_DELAY_MS);
  });

  container.addEventListener('mouseleave', () => {
    clearTimeout(mouseTimeout);
    // Also use the delay when the mouse leaves the box entirely
    mouseTimeout = setTimeout(() => { isMouseActive = false; }, IDLE_DELAY_MS);
  });

  window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(initGrid, 200);
  });

  initGrid();

  function animate(time) {
    mouse.x += (targetMouse.x - mouse.x) * 0.1;
    mouse.y += (targetMouse.y - mouse.y) * 0.1;

    if (isMouseActive) {
      idleFactor = Math.max(0, idleFactor - 0.05); 
    } else {
      idleFactor = Math.min(1, idleFactor + 0.02); 
    }

    // Calculate center of the container once per frame for the pulse math
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    for (let i = 0; i < gridItems.length; i++) {
      const item = gridItems[i];
      
      // 1. Center Pulse Effect (Radial Wave)
      const cx = item.x - centerX;
      const cy = item.y - centerY;
      const distFromCenter = Math.sqrt(cx * cx + cy * cy);
      // Change the 0.01 to make the rings tighter/wider, and 0.002 for speed
      const centerPulse = Math.sin(distFromCenter * 0.01 - time * 0.002) * 0.5 + 0.5;

      // 2. Mouse Proximity Effect
      const dx = item.x - mouse.x;
      const dy = item.y - mouse.y;
      const distFromMouse = Math.sqrt(dx * dx + dy * dy);
      const mouseVal = Math.max(0, 1 - distFromMouse / 500); 
      
      // Blend the two states
      const val = (mouseVal * (1 - idleFactor)) + (centerPulse * idleFactor);

      let weight = Math.round((100 + val * 600) / 10) * 10;

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