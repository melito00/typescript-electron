// import * as electron from 'electron';
import {app, BrowserWindow} from 'electron';

// const {app, BrowserWindow} = electron;
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

class EApp {
  private static _app: Electron.App;
  private static _mainWindow: Electron.BrowserWindow = null;

  constructor(app: Electron.App) {
    EApp._app = app;
  }

  run(): void {
    console.log("debug");
    EApp._app.on("ready", () => {
      EApp._mainWindow = new BrowserWindow();
      console.log(`file://${__dirname}/../index.html`);
      EApp._mainWindow.webContents.loadURL(`file://${__dirname}/../index.html`);
    });
  }
}

let MyApp = new EApp(app);
MyApp.run();