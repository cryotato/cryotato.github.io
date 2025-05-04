// --- Seamless Random Marquee Text ---
document.addEventListener('DOMContentLoaded', function() {
  const marqueeText1 = document.getElementById('marquee-text-1');
  const marqueeText2 = document.getElementById('marquee-text-2');

  // Ensure both elements exist before proceeding
  if (marqueeText1 && marqueeText2) {
    const marqueeMessages = [
      "Welcome to the cryotato site!", // Example message 1
      "Check out the latest portfolio items!", // Example message 2
      "Don't forget to subscribe to the mailing list!", // Example message 3
      "This text is randomly selected!", // Example message 4
      "Have a look around the shop maybe?" // Example message 5
      // Add more messages here if you like
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