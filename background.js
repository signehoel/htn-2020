chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#E8DAEF'}, function() {
      console.log('The color is green.');
    });
});