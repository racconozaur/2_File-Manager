import fs from 'fs'
import handleCurrentDir from './handleCurrentDir.js'

async function handeCat([path]){
    try {
        let myReadStream = fs.createReadStream(path, 'utf8')
        myReadStream.on('data', (chunk) => {
            console.log(chunk)
            handleCurrentDir()
        })
        
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handeCat