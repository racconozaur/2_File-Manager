import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import handleCurrentDir from './handleCurrentDir.js'

async function handleLs(){
    try {
        const files = await readdir(cwd())
        console.table(files)
        handleCurrentDir()
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleLs