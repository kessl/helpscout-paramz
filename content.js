let isProcessingPaste = false;

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function addUtmParameter(url) {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('utm_content', 'added-on-paste');
    return urlObj.toString();
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
    const modifiedUrl = addUtmParameter(pastedData.trim());
    
    event.preventDefault();
    isProcessingPaste = true;
    
    await navigator.clipboard.writeText(modifiedUrl);
    
    setTimeout(() => {
      document.execCommand('paste');
      setTimeout(() => {
        isProcessingPaste = false;
      }, 100);
    }, 10);
  }
}

document.addEventListener('paste', handlePaste, true);
