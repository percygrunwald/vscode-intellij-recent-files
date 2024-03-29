# vscode-intellij-recent-files

This plugin adds a command that makes the VSCode `quickOpen` command behave like the `Recent Files` command in IntelliJ. The only difference between the two behaviors is that **the IntelliJ behavior allows you to switch to the previously open file with a single keypress by skipping the currently open file**. This is the only behaviour that makes sense to me: why would I possibly want to open the file that I already have open?

This plugin allows for the quick "alt-tab" style of switching back and forth between your currently open file and the previous one, which pleases me greatly.

![vscode-intellij-recent-files alt-tab GIF](./vscode-intellij-recent-files-alt-tab.gif)

Using the keybindings below allows you to scroll back and forth like in IntelliJ.

![vscode-intellij-recent-files scroll GIF](./vscode-intellij-recent-files-scroll.gif)

## Using the extension

Make sure the following bindings are in your `keybindings.json` (adjust for your preferred keys as required):

```json
    ...
    {
        "key": "cmd+e",
        "command": "-workbench.action.openRecent"
    },
    {
        "key": "cmd+e",
        "command": "extension.intellijRecentFiles",
        "when": "!inQuickOpen"
    },
    {
        "key": "cmd+e",
        "command": "workbench.action.quickOpenNavigateNext",
        "when": "inQuickOpen"
    },
    {
        "key": "shift+cmd+e",
        "command": "workbench.action.quickOpenNavigatePrevious",
        "when": "inQuickOpen"
    },
    ...
```

### Settings

The following settings can be added to your user `settings.json` to modify the behavior of the extension:

#### intellijRecentFiles.navigate

```
# settings.json

"intellijRecentFiles.navigate": [true|false]
```

Valid values: `true` (default), `false`

When set to `true`, pressing the keybinding will navigate to the selected file immediately after releasing the modifier key (e.g. `cmd`) allowing for "alt+tab style" behavior.

When set to `false`, pressing the keybinding will open the recent files dialogue, navigate to the second item in the list, but won't navigate to the file after releasing the modifier key. The dialogue box stays open, allowing you to search the list.

## Development

Install tools with [asdf](http://asdf-vm.com/):

```
asdf install
```

Install `node` dependencies:

```
npm install
```

`Start Debugging` in VS Code with `F5`.

Follow [these instructions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) to publish the extension.
