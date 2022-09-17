const net = require('net')
const readline = require('readline')
const { parsePort, parseHost } = require('./utils')
const [, , host, port] = process.argv

const options = {
  port: parsePort(port),
  host: parseHost(host),
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const client = net.connect(options, function () {
  console.log('<< CONNECTED! >>')
})

client.on('end', function () {
  rl.close()
  console.log('<< DISCONNECTED! >>')
})

rl.on('close', () => {
  client.end()
})

rl.on('line', function (line) {
  client.write(line)
})

client.on('data', function (data) {
  process.stdout.write(`SERVER: ${data.toString()}\n`)
})
