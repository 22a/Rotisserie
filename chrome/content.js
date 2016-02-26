var elem = null;

document.addEventListener("mousedown", function(event){
  if(event.button == 2) {
    elem = event.target;
  }
}, true);

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.method === "rotateClickedEl") {
    var currentTrans = elem.style.transform;
    var res = '';
    if (currentTrans.indexOf("rotate") > -1){
      var a = currentTrans.split('rotate(');
      var b = a[1].split('deg)');
      b[0] = (parseInt(b[0]) + parseInt(request.value))%360;
      b = b.join('deg)');
      res = a[0] + 'rotate(' + b;
    }
    else {
      res = (currentTrans!==''?currentTrans+' ':'') + " rotate(" + request.value + "deg)";
    }
    elem.style.transform = (res);
  }
});
