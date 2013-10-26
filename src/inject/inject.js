chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
  	if (document.readyState === "complete") {
  		clearInterval(readyStateCheckInterval);

  		// This part of the script triggers when page is done loading
  		console.log("Howdy from Hemingway.");

      // Hemingway
      document.getElementById('padbody').classList.add('hemingway');


  	}
	}, 10);
});
