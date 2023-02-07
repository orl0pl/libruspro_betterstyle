document.addEventListener('DOMContentLoaded', function() {
    var select = document.getElementById('css-style');
    select.addEventListener('change', function() {
      var cssFile = select.value;
      chrome.tabs.insertCSS({ file: cssFile });
    });
  });
  