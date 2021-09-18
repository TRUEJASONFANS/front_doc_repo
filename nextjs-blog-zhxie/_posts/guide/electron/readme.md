# Electron

## Well-known apps
* Slack desktop
* Visual Studio Code

## Installation

better to use the popular like [electron quick start](https://github.com/electron/electron-quick-start) instead of introducing dependency by youself.

## Process Model
![electron process](./electron-process.png)


## 主进程与渲染进程的区别

### 主进程
具备node.js上下文，可以访问I/O 以及一些electron 内置对象 例如app


#### BrowserWindow 对象
创建一个窗口并加载github 官网
```js
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 1500 })
win.loadURL('https://github.com')

const contents = win.webContents
console.log(contents)
```
#### app 对象

app 对象是应用程序的抽象，通过监听其生命周期事件进行拓展。
```js
app.whenReady().then(createWindow).catch(console.log);

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

```

Electron exposes various modules that control native desktop functionality, such as menus, dialogs, and tray icons.

For a full list of Electron's main process modules, check out our API documentation.


### 渲染进程
1个 browserwindow 对应一个渲染进程， 渲染器负责按照web 标准渲染每个browserwindow的页面。

