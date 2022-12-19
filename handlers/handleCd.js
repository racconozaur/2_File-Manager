import { chdir } from 'node:process'
import handleCurrentDir from './handleCurrentDir.js'

async function handleCd([path]){
    try {
        chdir(path)
        handleCurrentDir()
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleCd