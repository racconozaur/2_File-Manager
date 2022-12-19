import fs from ('fs')
import zlib from('zlib')
import handleCurrentDir from './handleCurrentDir.js'

async function handleCompress([pathFrom, pathTo]){
    try {
        if (pathFrom.trim() === '' || pathTo.trim() === '') {
            console.error('Wrong path')
        } else {
            const inp = fs.createReadStream(pathFrom)
            const out = fs.createWriteStream(pathTo)
            const brot = zlib.createBrotliCompress()
            inp.pipe(brot).pipe(out)
            console.log('Compression completed')
            handleCurrentDir()
        }
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleCompress