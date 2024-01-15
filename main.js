const { app, BrowserWindow } = require('electron');


const createWindow = () => {
    const win = new BrowserWindow({
        width: 640,
        height: 420
    });

    win.loadFile('src/index.html')
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});