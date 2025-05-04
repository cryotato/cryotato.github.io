// --- Random Marquee Text ---
document.addEventListener('DOMContentLoaded', function() {
  const marqueeElement = document.getElementById('random-marquee');

  if (marqueeElement) { // Check if the element exists on the page
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

    // Set the marquee text
    marqueeElement.textContent = randomMessage;
  }
});