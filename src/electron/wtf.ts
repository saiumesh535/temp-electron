import { ipcMain } from 'electron';
import { spawn } from 'child_process';

export const HAHAHA = () => {
    ipcMain.on('Command', (event, arg) => {
        const ls = spawn("npm", ["start"], {
            cwd: '/Users/saiumeshdhanewar/Desktop/programming/react/my-app'
        });

        ls.stdout.on("data", data => {
            event.reply('ON_COMMAND', data.toString());
        });

        ls.stderr.on("data", data => {
            event.reply('ON_COMMAND', data.toString());
        });

        ls.on('error', (error) => {
            event.reply('ON_COMMAND', 'error'+error.message);
        });

        ls.on("close", code => {
            event.reply('ON_COMMAND', 'exited' +code);
        });
    })
}