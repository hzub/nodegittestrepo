import * as fs from 'fs'

fs.appendFileSync('./src/file1.txt', `\nNext iteration, time ${(new Date).toISOString()}`)
fs.appendFileSync('./src/file2.txt', `\nNext iteration, time ${(new Date).toISOString()}`)
fs.appendFileSync('./src/file3.txt', `\nNext iteration, time ${(new Date).toISOString()}`)