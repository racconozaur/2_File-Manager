import { cpus, EOL, userInfo } from 'node:os'
import { arch } from 'node:process'
import handleCurrentDir from './handleCurrentDir.js'

async function handleOs([param]){
    try {
        if (param.trim() === '') {
            console.error('enter the Parametr')
        } else {
            const { username, homedir } = userInfo()
            const cpu = cpus().map( e => {
                return `model: ${e.model}, speed: ${e.speed/1000}GHz`
            })

            const os = {
                '--EOL': JSON.stringify(EOL),
                '--cpus': cpu,
                '--homedir': homedir,
                '--username': username,
                '--architecture': arch,
              }
            
            console.log(os[param])
            handleCurrentDir()
        }
    } catch (error) {
        console.error('Operation failed')
    }
}

export default handleOs