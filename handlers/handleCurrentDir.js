import { cwd } from 'node:process'

function handleCurrentDir(){
    console.info(`You are currently in ${cwd()}`)
}

export default handleCurrentDir