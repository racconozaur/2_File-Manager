import fs from 'fs'
import { pipeline } from 'node:stream/promises'
import handleCurrentDir from './handleCurrentDir.js'

async function handleCp([cuurentDir, newDir]){
    try {
        let myReadStream = fs.createReadStream(cuurentDir, 'utf8')
        let myWriteStream = fs.createWriteStream(newDir)
        myReadStream.on('data', (chunk) => {
            myWriteStream.write(chunk)
            handleCurrentDir()
        })
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleCp