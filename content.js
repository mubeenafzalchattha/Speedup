chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'setSpeed') {
      const videos = document.getElementsByTagName('video');
      for (let video of videos) {
        video.playbackRate = request.speed;
      }
    } else if (request.action === 'enableButtons') {
      // Enable all matching buttons
      const buttons = document.querySelectorAll('button.btn.btn-sm.d-none.d-md-block');
      buttons.forEach(button => {
        // Remove disabled attribute
        button.removeAttribute('disabled');
        
        // Also remove disabled class if it exists
        button.classList.remove('disabled');
        
        // Make button clickable
        button.style.pointerEvents = 'auto';
        button.style.cursor = 'pointer';
      });
    }
  });
  
  // Auto-run when page loads
  function autoEnableButtons() {
    setInterval(() => {
      const buttons = document.querySelectorAll('button.btn.btn-sm.d-none.d-md-block');
      buttons.forEach(button => {
        if (button.disabled) {
          button.removeAttribute('disabled');
          button.classList.remove('disabled');
          button.style.pointerEvents = 'auto';
          button.style.cursor = 'pointer';
        }
      });
    }, 1000); // Check every second
  }
  
  // Start the auto-enable function
  autoEnableButtons();