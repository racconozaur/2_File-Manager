import { chdir } from 'node:process'
import handleCurrentDir from './handleCurrentDir.js'

async function handleUp(){
    try {
        chdir('..')
        handleCurrentDir()
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleUp