import fs from 'fs'
import handleCurrentDir from './handleCurrentDir.js'

async function handleRn([path, name]){
    try {
        fs.rename(path, name, () =>{})
        handleCurrentDir()
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleRn