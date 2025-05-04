// --- Seamless Random Marquee Text (4 Copies) ---
document.addEventListener('DOMContentLoaded', function() {
  const marqueeText1 = document.getElementById('marquee-text-1');
  const marqueeText2 = document.getElementById('marquee-text-2');
  const marqueeText3 = document.getElementById('marquee-text-3'); // Added
  const marqueeText4 = document.getElementById('marquee-text-4'); // Added

  // Ensure all four elements exist before proceeding
  if (marqueeText1 && marqueeText2 && marqueeText3 && marqueeText4) {
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
    marqueeText3.textContent = randomMessage; // Added
    marqueeText4.textContent = randomMessage; // Added
  } else {
    console.error("One or more marquee text span elements not found!");
  }
});