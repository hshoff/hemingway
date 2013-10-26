chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
  	if (document.readyState === "complete") {
  		clearInterval(readyStateCheckInterval);

      // Hemingway
      var $ = jQuery,
          $body = $('#padbody'),
          $toolbar = $body.find('#mainbar'),
          $indentButton = $toolbar.find('#indentbutton'),
          $outdentButton = $toolbar.find('#outdentbutton'),
          $commentButton = $toolbar.find('#commentbutton');

      $body.addClass('hemingway');

      maestro.registerAll([{
        shortcut: 'cmd+[',
        fn: function(event) {
          event.preventDefault();
          $outdentButton.click();
        }
      },{
        shortcut: 'cmd+]',
        fn: function(event) {
          event.preventDefault();
          $indentButton.click();
        }
      },{
        shortcut: 'cmd+/',
        fn: function(event) {
          event.preventDefault();
          $commentButton.click();
        }
      },{
        shortcut: 'cmd+shift+f',
        fn: function(event) {
          event.preventDefault();
          $body.toggleClass('focus');
        }
      },{
        shortcut: 'esc',
        fn: function(event) {
          event.preventDefault();
          $body.removeClass('focus');
        }
      }
    ]);

  	}
	}, 10);
});
