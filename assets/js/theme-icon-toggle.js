document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const themeIcon = themeToggleButton ? themeToggleButton.querySelector('i') : null;

  if (!themeToggleButton || !themeIcon) {
    console.error('Theme toggle button or icon not found.');
    return;
  }

  // Function to update the icon based on the current theme
  const updateIcon = () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    // Use 'far fa-moon' for light mode and 'fas fa-sun' for dark mode
    themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    // Update the title attribute as well
    themeToggleButton.title = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
  };

  // Set the initial icon on page load
  updateIcon();

  // Option 1: Update icon on button click (assumes theme script toggles class immediately)
  // themeToggleButton.addEventListener('click', () => {
  //   // Need a slight delay to ensure the class has been toggled by the theme's script
  //   setTimeout(updateIcon, 50);
  // });

  // Option 2: Use MutationObserver to detect theme changes reliably
  // This is more robust as it detects class changes regardless of how they happen.
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        updateIcon();
        break; // Only need to update once per batch of mutations
      }
    }
  });

  // Observe changes to the class attribute of the <html> element
  observer.observe(document.body, { attributes: true, childList: false, subtree: false });

  // Optional: Disconnect observer if the button is removed (unlikely but good practice)
  // You might need a more sophisticated way to handle DOM changes if the button can be dynamically removed/added.
});