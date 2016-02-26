var elem = null;

document.addEventListener("mousedown", function(event){
  if(event.button == 2) {
    elem = event.target;
  }
}, true);

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.method === "rotateClickedEl") {
    elem.style.transform = ("rotate(" + request.value + "deg)");
  }
});
