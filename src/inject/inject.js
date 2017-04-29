chrome.extension.sendMessage({}, response => {
	var readyStateCheckInterval = setInterval(() => {
  	if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // Hemingway
      var $ = jQuery;

      var $body = $('#padbody');
      var $toolbar = $body.find('#mainbar');
      var $indentButton = $toolbar.find('#indentbutton');
      var $outdentButton = $toolbar.find('#outdentbutton');
      var $commentButton = $toolbar.find('#commentbutton');

      $body.addClass('hemingway');

      maestro.registerAll([{
        shortcut: 'cmd+[',
        fn(event) {
          event.preventDefault();
          $outdentButton.click();
        }
      },{
        shortcut: 'cmd+]',
        fn(event) {
          event.preventDefault();
          $indentButton.click();
        }
      },{
        shortcut: 'cmd+/',
        fn(event) {
          event.preventDefault();
          $commentButton.click();
        }
      },{
        shortcut: 'cmd+shift+f',
        fn(event) {
          event.preventDefault();
          $body.toggleClass('focus');
        }
      },{
        shortcut: 'esc',
        fn(event) {
          event.preventDefault();
          $body.removeClass('focus');
        }
      }
    ]);
    }
	}, 10);
});
