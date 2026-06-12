const path = require("path");
const { app, BrowserWindow, shell, Tray, Menu, globalShortcut} = require("electron");

const gotLock = app.requestSingleInstanceLock();

if (!gotLock) {
    app.quit();
}

let mainWindow;
let tray;

app.setPath(
    "userData",
    path.join(app.getPath("home"), ".notionux")
);

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1440,
        height: 900,
        autoHideMenuBar: true,
        title: "NotioNux",
        webPreferences: {
            partition: "persist:${profileName}",
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true
        }
    });

    mainWindow.loadURL("https://www.notion.com");

    const iconPath = path.join(__dirname, "../assets/icon.png");

tray = new Tray(iconPath);

// Remove the context menu entirely
const contextMenu = Menu.buildFromTemplate([
    {
        label: "Show NotioNux",
        click: () => {
            mainWindow.show();
            mainWindow.focus();
        }
    },
    { type: "separator" },
    {
        label: "Quit",
        click: () => {
            app.isQuitting = true;
            app.quit();
        }
    }
]);

mainWindow.on("minimize", (event) => {
    event.preventDefault();
    mainWindow.hide();
});

tray.setContextMenu(contextMenu);

    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: "deny" };
    });
}

app.whenReady().then(() => {
    createWindow();

    globalShortcut.register("Control+Alt+N", () => {
        if (!mainWindow) {
            return;
        }

        if (mainWindow.isVisible() && mainWindow.isFocused()) {
            mainWindow.hide();
        } else {
            mainWindow.show();
            mainWindow.focus();
        }
    });
});

app.on("will-quit", () => {
    globalShortcut.unregisterAll();
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});