import fs from 'fs'
import handleCurrentDir from './handleCurrentDir.js'

async function handleRm(path){
    try {
        fs.unlink(path, (err) => {})
        handleCurrentDir()
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleRm