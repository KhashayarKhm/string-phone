const net = require('net')

const parseHost = (host) => net.isIP(host) ? host : '127.0.0.1'

const parsePort = (port) => {
  const parsedPort = Number(port)
  return Number.isInteger(parsedPort) && parsedPort >= 0 && parsedPort < 65536
    ? parsedPort
    : 8080
}

module.exports = {
  parseHost,
  parsePort
}
