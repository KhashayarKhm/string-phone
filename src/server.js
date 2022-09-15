const net = require('net')
const readline = require('readline')
const { parseHost, parsePort } = require('./utils')
const [, , host, port] = process.argv

const options = {
  port: parsePort(port),
  host: parseHost(host)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const server = net.createServer(function (socket) {
  console.log('<< NEW CONNECTION! >>')

  rl.on('line', function (line) {
    socket.write(line)
  })

  socket.on('data', (buff) => {
    process.stdout.write(`CLIENT: ${buff.toString()}\n`)
  })
})

rl.on('close', () => {
  server.close()
})

server.on('close', () => {
  rl.close()
  console.log('<< CONNECTION CLOSED >>')
})

server.on('error', (err) => {
  console.log('<< CONNECTION ERROR >>')
  console.log(err.message)
})

server.listen(options)
