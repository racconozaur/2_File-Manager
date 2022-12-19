import fs from 'fs'
import crypto from 'node:crypto'
import handleCurrentDir from './handleCurrentDir.js'

async function handeHash([path]){
    try {
        fs.readFile(path, 'utf8', (err, data) => {
            const hash = crypto.createHash('sha256').update(data).digest('hex');
            console.log(hash)
            handleCurrentDir()
        });
        
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handeHash