// --- Seamless Random Marquee Text (JavaScript Animation) ---
document.addEventListener('DOMContentLoaded', function() {
  const marqueeContainer = document.querySelector('.masthead__marquee');
  const marqueeContent = document.querySelector('.seamless-marquee__content');
  const marqueeText1 = document.getElementById('marquee-text-1');
  const marqueeText2 = document.getElementById('marquee-text-2');

  if (!marqueeContainer || !marqueeContent || !marqueeText1 || !marqueeText2) {
    console.error("Marquee elements not found!");
    return; // Exit if elements are missing
  }

  const marqueeMessages = [
    "I saw a savior, a savior come my way, I thought I'd see it at the cold light of day, But now I realize that I'm only for me. If only I could see you turn myself to me, And recognize the poison in my heart. There is no other place, no one else I face, No remedy will agree with how I feel. Here in my reflecting, what more can I say? For I am guilty for the voice that I obey, Too scared to sacrifice a choice chosen for me. If only I could see you turn myself to me, And recognize the poison in my heart. There is no other place, no one else I face. No remedy to agree with how I feel.",
    "POWER IN MISERY TRAVERSING THE GRID OF DEATH     POWER IN MISERY TRAVERSING THE GRID OF DEATH     POWER IN MISERY TRAVERSING THE GRID OF DEATH     POWER IN MISERY TRAVERSING THE GRID OF DEATH     POWER IN MISERY TRAVERSING THE GRID OF DEATH     POWER IN MISERY TRAVERSING THE GRID OF DEATH     POWER IN MISERY TRAVERSING THE GRID OF DEATH",
    "MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!     MACHINE GUN MACHINE FUN!!",
    "NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!    NO!! RAT!!! YOU DON'T HAVE TO DO THIS!",
    "I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART      I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART      I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART      I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART      I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART      I'M AN ARTIST FROM ISRAHELL AND THIS IS MY ART"

  ];

  // --- Configuration ---
  const pixelsPerSecond = 30; // Adjust speed here

  // --- State Variables ---
  let currentPosition = 0;
  let lastTimestamp = 0;
  let animationFrameId = null;
  let isPaused = false;
  let spanWidth = 0; // To store the width of one text span

  // --- Setup ---
  function setupMarquee() {
    // Pick random message
    const randomIndex = Math.floor(Math.random() * marqueeMessages.length);
    const randomMessage = marqueeMessages[randomIndex] + "\u00A0\u00A0\u00A0"; // Add spacing

    // Set text for both spans
    marqueeText1.textContent = randomMessage;
    marqueeText2.textContent = randomMessage;

    // Ensure styles are applied and get width *after* text is set
    // Use setTimeout to allow browser rendering time
    setTimeout(() => {
        spanWidth = marqueeText1.offsetWidth;
        if (spanWidth === 0) {
            console.error("Could not measure marquee span width. Animation might not work correctly.");
            // Optionally try again or set a default width?
            return;
        }
        // Reset position and start animation
        currentPosition = 0;
        marqueeContent.style.transform = `translateX(${currentPosition}px)`;
        lastTimestamp = performance.now(); // Use high-resolution timer
        startAnimation();
    }, 0);
  }

  // --- Animation Loop ---
  function animate(timestamp) {
    if (isPaused || spanWidth === 0) {
      animationFrameId = null; // Stop requesting frames if paused or width unknown
      return;
    }

    const deltaTime = (timestamp - lastTimestamp) / 1000; // Time elapsed in seconds
    lastTimestamp = timestamp;

    // Calculate movement
    const moveDistance = pixelsPerSecond * deltaTime;
    currentPosition -= moveDistance;

    // Check if the first span is completely off-screen
    // We check if the negative currentPosition exceeds the spanWidth
    if (currentPosition <= -spanWidth) {
      // Reset position by adding the width of one span
      // This makes the start of the second span appear exactly where the first one started
      currentPosition += spanWidth;
    }

    // Apply the new position
    marqueeContent.style.transform = `translateX(${currentPosition}px)`;

    // Request the next frame
    animationFrameId = requestAnimationFrame(animate);
  }

  // --- Control Functions ---
  function startAnimation() {
    if (!animationFrameId && !isPaused) { // Only start if not already running and not paused
        lastTimestamp = performance.now(); // Reset timestamp when resuming
        animationFrameId = requestAnimationFrame(animate);
    }
  }

  function pauseAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  // --- Event Listeners ---
  marqueeContainer.addEventListener('mouseenter', () => {
    isPaused = true;
    pauseAnimation();
  });

  marqueeContainer.addEventListener('mouseleave', () => {
    isPaused = false;
    startAnimation(); // Restart animation loop
  });

  // --- Initial Setup ---
  setupMarquee();

});