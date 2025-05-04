// --- Seamless Random Marquee Text (4 Copies, Consistent Speed) ---
document.addEventListener('DOMContentLoaded', function() {
  const marqueeText1 = document.getElementById('marquee-text-1');
  const marqueeText2 = document.getElementById('marquee-text-2');
  const marqueeText3 = document.getElementById('marquee-text-3');
  const marqueeText4 = document.getElementById('marquee-text-4');
  // Get the container for the animated content
  const marqueeContent = document.querySelector('.seamless-marquee__content');

  // Ensure all elements exist before proceeding
  if (marqueeText1 && marqueeText2 && marqueeText3 && marqueeText4 && marqueeContent) {
    const marqueeMessages = [
      "I saw a savior, a savior come my way, I thought I'd see it at the cold light of day, But now I realize that I'm only for me. If only I could see you turn myself to me, And recognize the poison in my heart. There is no other place, no one else I face, No remedy will agree with how I feel. Here in my reflecting, what more can I say? For I am guilty for the voice that I obey, Too scared to sacrifice a choice chosen for me. If only I could see you turn myself to me, And recognize the poison in my heart. There is no other place, no one else I face. No remedy to agree with how I feel.",
      "POWER IN MISERY TRAVERSING THE GRID OF DEATH",
      "MACHINE GUN MACHINE FUN!!",
      "NO!! RAT!!! YOU DON'T HAVE TO DO THIS!"
      // Add more messages here if you like
    ];

    // Select a random message
    const randomIndex = Math.floor(Math.random() * marqueeMessages.length);
    // Add spacing (non-breaking spaces) after the message for visual separation
    const randomMessage = marqueeMessages[randomIndex] + "\u00A0\u00A0\u00A0";

    // Set the text content for all four spans
    marqueeText1.textContent = randomMessage;
    marqueeText2.textContent = randomMessage;
    marqueeText3.textContent = randomMessage;
    marqueeText4.textContent = randomMessage;

    // --- Calculate and set dynamic duration ---
    // Define desired speed in pixels per second
    const pixelsPerSecond = 50; // Adjust this value to change speed

    // Get the width of one text span (offsetWidth includes padding/border)
    // We need the width *after* the text is rendered
    // Using setTimeout ensures rendering is complete before measuring
    setTimeout(() => {
        const spanWidth = marqueeText1.offsetWidth;

        if (spanWidth > 0) {
            // Total distance covered in one animation cycle is width of 2 spans
            const animationDistance = spanWidth * 2;
            // Calculate duration in seconds
            const duration = animationDistance / pixelsPerSecond;

            // Set the animation duration dynamically
            marqueeContent.style.animationDuration = duration + 's';
            // Ensure animation is running (in case it was paused before calculation)
            marqueeContent.style.animationPlayState = 'running';
        } else {
             console.error("Could not get marquee span width to calculate duration.");
             // Fallback or default duration could be set here if needed
             // marqueeContent.style.animationDuration = '40s'; // Example fallback
        }
    }, 0); // setTimeout with 0 delay pushes execution after rendering

  } else {
    console.error("One or more marquee elements not found!");
  }
});