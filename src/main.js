const {app, BrowserWindow, shell} = require("electron");

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1440,
        height: 900,
        autoHideMenuBar: true,
        title: "NotioNux",
        webPreferences: {
            partition: "persist:notionux"
        }
    });

    const NOTION_URL = "https://www.notion.com";

    mainWindow.loadURL(NOTION_URL) ;

    mainWindow.webContents.setWindowOpenHandler(({ url }) =>{
        shell.openExternal(url);
        return {action:deny};
    });
}

app.whenReady().then(createWindow);
app.on("window-all-closed", ()=>{
    app.quit();
})