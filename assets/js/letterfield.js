document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('letterfield');
  if (!container) return;

  const lines = [
    "KITTERCHORD咪胡 ",
    "ORB謳卜 ",
    "&",
    "HEX咒灮 ",
    "~",
    "OVXX ",
  ];

  const charSize = 72; // 3x bigger size!
  let gridItems = [];
  let rect = container.getBoundingClientRect();
  let cols = 0;
  let rows = lines.length;

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
    
    // Calculate how many characters fit across the screen
    cols = Math.ceil(rect.width / charSize) + 1; // +1 to ensure it reaches the edge

    for (let y = 0; y < rows; y++) {
      // Create a strict row container so lines never get jumbled
      const rowEl = document.createElement('div');
      rowEl.className = 'letter-row';
      container.appendChild(rowEl);

      const str = lines[y];
      const charArray = Array.from(str); 

      for (let x = 0; x < cols; x++) {
        const char = charArray[x % charArray.length];
        
        const el = document.createElement('div');
        el.textContent = char;
        rowEl.appendChild(el);

        gridItems.push({
          el: el,
          x: x * charSize + charSize / 2, 
          y: y * charSize + charSize / 2,
          lastWeight: -1 // Cache to stop lag
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
    mouse.x += (targetMouse.x - mouse.x) * 0.1;
    mouse.y += (targetMouse.y - mouse.y) * 0.1;

    if (isMouseActive) {
      idleFactor = Math.max(0, idleFactor - 0.05); 
    } else {
      idleFactor = Math.min(1, idleFactor + 0.02); 
    }

    for (let i = 0; i < gridItems.length; i++) {
      const item = gridItems[i];
      
      const wavePulse = Math.sin(item.x * 0.005 - time * 0.002) * 0.5 + 0.5;

      const dx = item.x - mouse.x;
      const dy = item.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Increased radius to 500 to compensate for larger letters
      const mouseVal = Math.max(0, 1 - dist / 500); 
      
      const val = (mouseVal * (1 - idleFactor)) + (wavePulse * idleFactor);

      // Map value to Font Weight (100 to 700) and round it to nearest 10 for performance
      let weight = Math.round((100 + val * 600) / 10) * 10;

      // LAG FIX: Only update the DOM if the weight actually changed
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