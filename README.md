# NotioNux

A lightweight, privacy-friendly Linux desktop client for Notion built with Electron.

NotioNux wraps the official Notion web application in a native desktop experience while adding Linux-focused quality-of-life improvements such as system tray support, persistent sessions, global shortcuts, and AppImage distribution.

---

## Features

* Persistent login sessions
* AppImage distribution (no installation required)
* System tray integration
* Hide-to-tray behavior
* Single-instance protection
* Global keyboard shortcut support
* External links open in the default browser
* Sandboxed Electron configuration
* Lightweight and minimal architecture
* Linux-first experience

---

## Screenshots

> Add screenshots here after the first stable release.

| Main Window | Tray Integration |
| ----------- | ---------------- |
| Screenshot  | Screenshot       |

---

## Architecture

```text
┌─────────────────────┐
│     NotioNux        │
├─────────────────────┤
│ Electron Main       │
│ ├─ Window Manager   │
│ ├─ Tray Manager     │
│ ├─ Shortcut Manager │
│ └─ Session Manager  │
├─────────────────────┤
│ Chromium Renderer   │
├─────────────────────┤
│ Notion Web App      │
└─────────────────────┘
```

### Design Principles

* Minimal dependencies
* No custom backend
* No credential storage
* Native Linux workflows
* Small maintenance surface
* Open source and transparent

---

## Security

NotioNux does not store your Notion credentials.

Authentication is handled entirely by Notion. Session persistence relies on Electron's encrypted local storage and cookie management.

Electron is configured with:

```javascript
nodeIntegration: false
contextIsolation: true
sandbox: true
```

External URLs are opened in the system browser rather than inside the application.

---

## Installation

### Download AppImage

Download the latest release from the Releases page.

```bash
chmod +x NotioNux.AppImage
./NotioNux.AppImage
```

### Create Desktop Launcher

```bash
mkdir -p ~/Applications
mv NotioNux.AppImage ~/Applications/

chmod +x ~/Applications/NotioNux.AppImage
```

Example desktop entry:

```ini
[Desktop Entry]
Version=1.0
Type=Application
Name=NotioNux
Exec=/home/<user>/Applications/NotioNux.AppImage
Icon=/home/<user>/.local/share/icons/notionux.png
Terminal=false
Categories=Office;Productivity;
```

---

## Global Shortcuts

| Shortcut        | Action                     |
| --------------- | -------------------------- |
| Ctrl + Numpad 0 | Toggle NotioNux visibility |

The shortcut can be customized in the source code.

---

## Tray Behavior

| Action                 | Result            |
| ---------------------- | ----------------- |
| Close Window           | Hide to tray      |
| Minimize Window        | Hide to tray      |
| Double-click Tray Icon | Toggle visibility |
| Tray Menu → Quit       | Exit application  |

---

## Development

### Clone

```bash
git clone https://github.com/BeingShashwat/NotioNux.git
cd NotioNux
```

### Install Dependencies

```bash
npm install
```

### Run

```bash
npm start
```

### Build AppImage

```bash
npm run build
```

Generated artifacts:

```text
dist/
├── NotioNux-x.y.z.AppImage
└── linux-unpacked/
```

---

## Project Structure

```text
NotioNux/
├── assets/
│   └── icon.png
├── src/
│   └── main.js
├── package.json
└── README.md
```

---

## Contributing

Issues, suggestions, and pull requests are welcome.

If you encounter a bug or have an idea that improves the Linux desktop experience for Notion users, feel free to open an issue.

---

## License

This project is currently unlicensed.

A license may be added in a future release.

---

## Disclaimer

NotioNux is an independent open-source project and is not affiliated with, endorsed by, or sponsored by Notion Labs, Inc.

Notion is a trademark of Notion Labs, Inc.
