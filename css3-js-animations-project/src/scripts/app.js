// JavaScript to handle localStorage and animation trigger
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');
  
    // Retrieve stored color preference
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
      button.style.backgroundColor = savedColor;
    }
  
    // Function to trigger animation and store preference
    button.addEventListener('click', () => {
      // Change button color dynamically
      const newColor = button.style.backgroundColor === 'rgb(69, 160, 73)' ? '#4CAF50' : '#45a049';
      button.style.backgroundColor = newColor;
  
      // Store the new color preference
      localStorage.setItem('buttonColor', newColor);
  
      // Trigger a CSS animation by toggling a class
      button.classList.add('clicked-animation');
      setTimeout(() => {
        button.classList.remove('clicked-animation');
      }, 1000); // Duration matches animation length
    });
  });
  