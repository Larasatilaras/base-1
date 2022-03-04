const crypto = require('crypto')

const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

module.exports = createSerial