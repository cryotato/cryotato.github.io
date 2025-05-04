// --- Seamless Random Marquee Text ---
document.addEventListener('DOMContentLoaded', function() {
  const marqueeText1 = document.getElementById('marquee-text-1');
  const marqueeText2 = document.getElementById('marquee-text-2');

  // Ensure both elements exist before proceeding
  if (marqueeText1 && marqueeText2) {
    const marqueeMessages = [
      "I saw a savior, a savior come my way, I thought I'd see it at the cold light of day, But now I realize that I'm only for me. If only I could see you turn myself to me, And recognize the poison in my heart. There is no other place, no one else I face, No remedy will agree with how I feel. Here in my reflecting, what more can I say? For I am guilty for the voice that I obey, Too scared to sacrifice a choice chosen for me. If only I could see you turn myself to me, And recognize the poison in my heart. There is no other place, no one else I face. No remedy to agree with how I feel.",
      "POWER IN MISERY TRAVERSING THE GRID OF DEATH",
      "MACHINE GUN MACHINE FUN!!",
      "NO!! RAT!!! YOU DON'T HAVE TO DO THIS!"
    ];

    // Select a random message
    const randomIndex = Math.floor(Math.random() * marqueeMessages.length);
    const randomMessage = marqueeMessages[randomIndex];

    // Set the text content for both spans
    marqueeText1.textContent = randomMessage + "\u00A0\u00A0\u00A0"; // Add spacing after text
    marqueeText2.textContent = randomMessage + "\u00A0\u00A0\u00A0"; // Add spacing after text
  } else {
    console.error("Marquee text span elements not found!");
  }
});