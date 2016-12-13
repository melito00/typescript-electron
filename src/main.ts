// import * as electron from 'electron';
import {app, BrowserWindow} from 'electron';

// const {app, BrowserWindow} = electron;
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

let mainWindow: Electron.BrowserWindow = null;

app.on("ready", () => {
  console.log("debug");
  mainWindow = new BrowserWindow();
  console.log(`file://${__dirname}/../index.html`);
  mainWindow.webContents.loadURL(`file://${__dirname}/../index.html`);
});

