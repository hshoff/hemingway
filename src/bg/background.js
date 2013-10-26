// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  }
);

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    suggest([
      {content: "https://hackpad.com/ep/pad/newpad", description: "New Hackpad"},
      {content: "https://hackpad.com/ep/profile/", description: "My Hackpads"}
    ]);
  }
);


// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.update(tab.id, {url: text});
    });
  }
);
