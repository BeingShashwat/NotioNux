# NotioNux

A lightweight desktop client for Notion on Linux built with Electron.

## Features

* Persistent login sessions
* Single-instance protection
* System tray integration
* Hide to tray on close
* Global keyboard shortcut support
* AppImage distribution
* External links open in the default browser
* Secure Electron configuration

## Installation

### Run AppImage

```bash
chmod +x NotioNux.AppImage
./NotioNux.AppImage
```

## Build From Source

### Prerequisites

* Node.js
* npm

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

### Build

```bash
npm run build
```

The generated AppImage will be available in:

```text
dist/
```

## Tray Behavior

### Close Button

Closing the window hides the application to the system tray.

### Tray Icon

* Show/Hide window
* Quit application

## Keyboard Shortcut

Current shortcut:

```text
Ctrl + Numpad 0
```

Behavior:

* Hidden → Show window
* Visible → Hide window

## Security

Electron is configured with:

```js
nodeIntegration: false
contextIsolation: true
sandbox: true
```

## Disclaimer

NotioNux is an independent project and is not affiliated with Notion Labs, Inc.
