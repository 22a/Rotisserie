var elem = null;

document.addEventListener("mousedown", function(event){
  if(event.button == 2) {
    elem = event.target;
  }
}, true);

function updateRotateProperty(value, callback){
  var currentTrans = elem.style.transform;
  var str = '';
  var newValue = ''
  if (currentTrans.indexOf("rotate") > -1){
    var a = currentTrans.split('rotate(');
    var b = a[1].split('deg)');
    b[0] = (parseInt(b[0]) + parseInt(value))%360;
    newValue = b[0];
    b = b.join('deg)');
    str = a[0] + 'rotate(' + b;
  }
  else {
    str = (currentTrans!==''?currentTrans+' ':'') + " rotate(" + value + "deg)";
    newValue = parseInt(value);
  }
  callback(str,newValue);
};

function updateTranslateProperty(value, callback){
  var currentTrans = elem.style.transform;
  var str = '';
  var x = ([180,-180,270,-90].indexOf(value)>-1?-100:0);
  var y = ([180,-180,-270,90].indexOf(value)>-1?-100:0);
  if (currentTrans.indexOf("translate") > -1){
    var a = currentTrans.split('translate(');
    var b = a[1].split(')');
    b[0] = x + "%," + y + "%"
    b = b.join(')');
    str = a[0] + 'translate(' + b;
  }
  else {
    str = (currentTrans!==''?currentTrans+' ':'') + " translate(" + x + "%," + y + "%)";
    console.log(str);
  }
  callback(str);
};

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.method === "rotateClickedEl") {
    elem.style.transformOrigin = "top left";
    updateRotateProperty(request.value, function(rotate,newValue){
      elem.style.transform = rotate;
      updateTranslateProperty(newValue, function(translate) {
        elem.style.transform = translate;
      });
    });
  }
});
