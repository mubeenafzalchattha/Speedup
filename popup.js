// popup.js
document.getElementById('speed1').addEventListener('click', () => setSpeed(1));
document.getElementById('speed1_5').addEventListener('click', () => setSpeed(1.5));
document.getElementById('speed2').addEventListener('click', () => setSpeed(2));
document.getElementById('speed3').addEventListener('click', () => setSpeed(3));
document.getElementById('enableButtons').addEventListener('click', () => enableButtons());

function setSpeed(speed) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'setSpeed', speed: speed});
  });
}

function enableButtons() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'enableButtons'});
  });
}