document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('utmParams');
  const button = document.getElementById('saveButton');
  
  // Load saved parameters
  chrome.storage.sync.get(['utmParams'], function(result) {
    if (result.utmParams) {
      input.value = result.utmParams;
    }
  });
  
  // Save parameters
  button.addEventListener('click', function() {
    const params = input.value.trim();
    chrome.storage.sync.set({ utmParams: params }, function() {
      // Visual feedback
      button.textContent = 'Saved!';
      setTimeout(() => {
        button.textContent = 'Save';
      }, 1000);
    });
  });
  
  // Save on Enter key
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      button.click();
    }
  });
});