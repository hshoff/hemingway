Hemingway
=========

A Chrome browser extension for hacking hackpad with custom hackpadery.

## Easy Install

1. Clone the repo to some `~/PATH/`
2. Navigate to `chrome://extensions/` ([extensions](chrome://extensions/))
3. Check `Developer Mode` checkbox in the upper right if not already
4. Click `Load unpacked extensions...`
5. Select `~/PATH/hemingway`
6. Write the next great American novel

## Keyboard Shortcuts

Hemingway uses  `cmd` as the modifier. This overrides some regular Chrome browser shortcuts.

- Indent: `cmd+]`
- Outdent: `cmd+[`
- Comment: `cmd+/`
- Toggle Focus Mode: `cmd+shift+f`

## Threaded Comments

Indent your comment to reply to the parent.
Hackpad doesn't nest `<ul>`s which is frustrating. Instead it applies classes to each `<ul>` to indicate nesting. `.list-comment1`, `.list-comment2`, `.list-comment3`

## Inline code

Using backticks to wrap `code`  styles code like github flavored markdown does.
