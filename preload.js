const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api',{
    title: "The Note app",
    createNote: (data) => ipcRenderer.invoke('create-file', data)
})