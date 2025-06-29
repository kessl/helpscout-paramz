let isProcessingPaste = false;

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function addUtmParameters(url, utmParams) {
  try {
    const urlObj = new URL(url);
    
    // Parse UTM parameters from string like "utm_content=slay&utm_source=vibes"
    if (utmParams && utmParams.trim()) {
      const params = new URLSearchParams(utmParams);
      for (const [key, value] of params) {
        urlObj.searchParams.set(key, value);
      }
      return urlObj.toString();
    }
    
    // If no params set, return original URL unchanged
    return url;
  } catch (e) {
    return url;
  }
}

async function handlePaste(event) {
  if (isProcessingPaste) {
    return;
  }
  
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedData = clipboardData.getData('text/plain');
  
  if (pastedData && isValidUrl(pastedData.trim())) {
    event.preventDefault();
    isProcessingPaste = true;
    
    const originalUrl = pastedData.trim();
    
    // Get saved UTM parameters
    chrome.storage.sync.get(['utmParams'], function(result) {
      const modifiedUrl = addUtmParameters(originalUrl, result.utmParams);
      
      navigator.clipboard.writeText(modifiedUrl).then(() => {
        setTimeout(() => {
          document.execCommand('paste');
          setTimeout(() => {
            // Restore original clipboard content
            navigator.clipboard.writeText(originalUrl).then(() => {
              isProcessingPaste = false;
            });
          }, 100);
        }, 10);
      });
    });
  }
}

document.addEventListener('paste', handlePaste, true);
