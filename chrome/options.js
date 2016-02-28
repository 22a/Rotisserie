var iconPath = 'img/browsericons/icon';

function setIconColor(){
  var darkIcon = document.getElementById("darkIconCheckbox").checked;
  chrome.browserAction.setIcon({
    path: {
      19: (iconPath + '19' + (darkIcon?'_off':'') + '.png'),
      38: (iconPath + '38' + (darkIcon?'_off':'') + '.png'),
    }
  });
  chrome.storage.sync.set({'darkIcon': darkIcon});
};

document.getElementById("darkIconCheckbox").addEventListener("click",setIconColor);
chrome.storage.sync.get('darkIcon', function(res){
  document.getElementById("darkIconCheckbox").checked = res.darkIcon || false;
  setIconColor();
});
