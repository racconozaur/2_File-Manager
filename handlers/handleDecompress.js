import fs from ('fs')
import zlib from('zlib')
import handleCurrentDir from './handleCurrentDir.js'

async function handleDecompress([pathFrom, pathTo]){
    try {
        if (pathFrom.trim() === '' || pathTo.trim() === '') {
            console.error('Wrong path')
        } else {
            const inp = fs.createReadStream(pathFrom)
            const out = fs.createWriteStream(pathTo)
            const brot = zlib.createBrotliDecompress()
            inp.pipe(brot).pipe(out)
            console.log('Decompression completed')
            handleCurrentDir()
        }
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleDecompress