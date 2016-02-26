var elem = null;

document.addEventListener("mousedown", function(event){
  if(event.button == 2) {
    elem = event.target;
  }
}, true);

//element.style.webkitTransform = "";
//element.style.MozTransform = "";
//element.style.msTransform = "";
//element.style.OTransform = "";
//element.style.transform = "";

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.method === "rotateClickedEl") {
    if (elem.style.transform.indexOf("rotate") > -1){
      var a = elem.style.transform.split('rotate(');
      var b = a[1].split('deg)');
      b[0] = parseInt(b[0]) + parseInt(request.value);
      b = b.join('deg)');
      elem.style.transform = a[0] + 'rotate(' + b;
    }
    else {
      elem.style.transform = ("rotate(" + request.value + "deg)");
    }
  }
});
