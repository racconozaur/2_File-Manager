import fs from 'fs'
import handleCurrentDir from './handleCurrentDir.js'

async function handleAdd([path]){
    try {
        fs.writeFile(path, '', (err, data) => {})
        handleCurrentDir()
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleAdd