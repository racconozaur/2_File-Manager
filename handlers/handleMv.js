import fs from 'fs'
import handleCurrentDir from './handleCurrentDir.js'

async function handleMv([cuurentDir, newDir]){
    try {
        let myReadStream = fs.createReadStream(cuurentDir, 'utf8')
        let myWriteStream = fs.createWriteStream(newDir)
        myReadStream.on('data', (chunk) => {
            myWriteStream.write(chunk)
            fs.unlink(cuurentDir, (err) => {})
            handleCurrentDir()
        })
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleMv