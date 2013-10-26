chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
  	if (document.readyState === "complete") {
  		clearInterval(readyStateCheckInterval);
      var $ = jQuery;

  		// This part of the script triggers when page is done loading
  		console.log("Howdy from Hemingway.");

      // Hemingway
      var $body = $('#padbody'),
          $toolbar = $body.find('#mainbar'),
          $indentButton = $toolbar.find('#indentbutton'),
          $outdentButton = $toolbar.find('#outdentbutton');

      $body.addClass('hemingway');

      maestro.registerAll([{
        shortcut: 'alt+[',
        fn: function(event) {
          event.preventDefault();
          $outdentButton.click();
        }
      },{
        shortcut: 'alt+]',
        fn: function(event) {
          event.preventDefault();
          $indentButton.click();
        }
      }
    ]);

  	}
	}, 10);
});
