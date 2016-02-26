function rotate(info,tab) {
  chrome.tabs.sendMessage(tab.id, {"method": "rotateClickedEl", "value": info.menuItemId});
}

chrome.contextMenus.create({
  id: "parent",
  title: "Rotate Image",
  contexts: ["image"]
});
chrome.contextMenus.create({
  parentId: "parent",
  id: "90",
  title: "90° Clockwise",
  contexts: ["image"]
});
chrome.contextMenus.create({
  parentId: "parent",
  id: "-90",
  title: "90° Counter Clockwise",
  contexts: ["image"]
});
chrome.contextMenus.create({
  parentId: "parent",
  id: "180",
  title: "180°",
  contexts: ["image"]
});

chrome.contextMenus.onClicked.addListener(rotate);
