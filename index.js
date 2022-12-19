import { cwd } from 'node:process'
import { homedir } from 'node:os'
import { argv, chdir, stdin as input, stdout as output,  exit } from 'node:process'
import EventEmitter from 'node:events'
import * as readline from 'node:readline'

import handleCurrentDir from './handlers/handleCurrentDir.js'
import handleUp from './handlers/handleUp.js'
import handleCd from './handlers/handleCd.js'
import handleLs from './handlers/handleLs.js'
import handeCat from './handlers/handleCat.js'
import handleAdd from './handlers/handleAdd.js'
import handleRn from './handlers/handleRn.js'
import handleCp from './handlers/handleCp.js'
import handleMv from './handlers/handleMv.js'
import handleRm from './handlers/handleRm.js'
import handeHash from './handlers/handleHash.js'
import handleOs from './handlers/handleOs.js'
import handleCompress from './handlers/handleCompress.js'
import handleDecompress from './handlers/handleDecompress.js'

chdir(homedir())


const args = Object.fromEntries(
    argv.slice(2).map((arg) => {
      const [key, value] = arg.split('=')
      return [key, value]
    })
  )
const user = args['--username']

console.log(`Welcome to the File Manager, ${user}!`)
handleCurrentDir()

const eventEmitter = new EventEmitter()
eventEmitter.setMaxListeners(0)

eventEmitter
    .on('up', handleUp)
    .on('cd', handleCd)
    .on('ls', handleLs)
    .on('cat', handeCat)
    .on('add', handleAdd)
    .on('rn', handleRn)
    .on('cp', handleCp)
    .on('mv', handleMv)
    .on('rm', handleRm)
    .on('hash', handeHash)
    .on('os', handleOs)
    .on('compress', handleCompress)
    .on('decompress', handleDecompress)
    


function handleLine(eventEmitter, line) {
    try {
      line = line.trim()
      let [command, ...args] = line.split(' ')
  
      if (/"|'/g.test(args)) {
        args = args
          .join(' ')
          .split(/["'] | ["']/)
          .map((arg) => arg.replace(/"|'/g, ''))
      }
  
      if (/^(?:cd|cat|add|rm|os|hash)$/.test(command) && args.length === 1) {
        eventEmitter.emit(command, args)
      } else if (
        /^(?:rn|cp|mv|compress|decompress)$/.test(command) &&
        args.length === 2
      ) {
        eventEmitter.emit(command, args)
      } else if (/^(?:up|ls)$/.test(line)) {
        eventEmitter.emit(command)
      } else if (/^\.exit$/.test(command)) {
        this.close()
      } else {
        throw new Error('Invalid input')
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const rl = readline.createInterface({
    input,
    output,
  })
  
  rl.on('line', handleLine.bind(rl, eventEmitter))
    .on('SIGINT', () => rl.close())
    .on('close', () => {
      console.log(`Thank you for using File Manager, ${user}!`)
      setTimeout(() => exit(), 100)
    })




