const {
    WAConnection: _WAConnection,
    MessageType,
    WAMessageProto,
    generateMessageID,
    Presence,
    MessageOptions,
    WA_DEFAULT_EPHEMERAL,
    Mimetype,
    Browsers,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime
} = require("@adiwajshing/baileys")
const readline = require('readline');
const simple = require('./lib/simple')
const fetch = require('node-fetch');
let WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const moment = require('moment-timezone')
const time = moment()
    .tz('Asia/Jakarta')
    .format("HH:mm:ss DD:MM:YYYY")
const {
    version,
    bugs
} = require('./package.json')
let apikey = JSON.parse(fs.readFileSync('./apikey.json'))
const {
    color
} = require('./lib/color')
const CFonts = require('cfonts')
const {
    getAllDirFiles,
    uncache,
    nocache
} = require('./functions/loader')
global.timestamp = {
    start: new Date
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const newclient = async (ses) => {
    const starts = async (client = new WAConnection()) => {
		console.clear()
        client.autoReconnect = ReconnectMode.onConnectionLost
        CFonts.say(`${ses.split('.json')[0].toUpperCase()}BOT`, {
            font: 'chrome',
            align: 'left',
            gradient: ['red', 'magenta']
        })
        console.log(color('=> Bot successfully loaded! Database:', 'yellow'), color(getAllDirFiles('./src')
            .length), color('Library:', 'yellow'), color(getAllDirFiles('./lib')
            .length), color('Function:', 'yellow'), color(getAllDirFiles('./functions')
            .length))
        console.log(color('=> Source code version:', 'yellow'), color(version))
        console.log(color('=> Bug? Error? Suggestion? Visit here:', 'yellow'), color(bugs.url))
        console.log(color(`[${ses.split('.json')[0].toUpperCase()}]`), color(`${ses.split('.json')[0].toUpperCase()}BOT is now online!`, 'yellow'))
        console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))
        nocache('../msgHndlr.js', (m) => console.log(color('[WATCH]', 'orange'), color(`=> '${m}'`, 'yellow'), 'file is updated!'))
        client.logger.level = 'warn'
        client.version = [2, 2138, 13]
        client.browserDescription = Browsers.ubuntu('Safari')
        client.on('qr', () => {
            console.log(`[ ${time} ] Sqan Qr`)
            console.log(color('B', 'green'), color('e', 'red'), color('n', 'yellow'), color('n', 'purple'), color('y', 'blue'), color('BOT', 'cyan'))
            console.log(color('SUPPORT by https://pecundang.herokuapp.com', 'cyan'))
        })
        fs.existsSync(`./${ses}.json`) && client.loadAuthInfo(`./${ses}.json`)
        client.on('credentials-updated', () => {
            console.log(color('[ WARNING ]'), color('credentials updated!', 'cyan'))
        })
        await client.connect({
            timeoutMs: 30 * 1000
        })
        fs.writeFileSync(`./${ses}.json`, JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        
        client.on('connecting', () => {
            console.log(color('Connecting...', 'yellow'))
        })
        client.on('open', () => {
            console.log(color('Connected!', 'lime'))
        })
        console.log(client.user.jid.split('@')[0])
        require('./msgHndlr')(client, client.user.name)
        client.on('error', client.logger.error)
        client.on('ws-close', () => {
            console.log(color('[ CLOSE ]', 'red'), color('Connection lost, trying to reconnect.', 'gold'))
        })
        client.on('close', () => {
            setTimeout(async () => {
                try {
                    if (client.state === 'close') {
                        await client.loadAuthInfo(`./${ses}.json`)
                        await client.connect()
                        global.timestamp.connect = new Date
                    }
                } catch (e) {
                    client.logger.error(e)
                }
            }, 5000)
        })
    }
    starts()
}
console.clear()
if (!process.argv[2]) {
    rl.question(color('Masukan nama session: ', 'magenta'), (answer) => {
        console.log('  ')
        if (!fs.existsSync(`./${answer}.json`)) {
            console.log(color('[ NEW CLIENT ]', 'lime'), color('Creating new session:', 'magenta') + answer)
        } else {
            console.log(color('[ CLIENT ]', 'lime'), color('Connecting to session: ', 'magenta') + answer)
        }
        sessionname = answer
        rl.close();
        newclient(sessionname)
    });
} else if (process.argv[2]) {
    sessionname = process.argv[2]
    console.log('  ')
    if (!fs.existsSync(`./${sessionname}.json`)) {
        console.log(color('[ NEW CLIENT ]', 'lime'), color('Creating new session:', 'magenta') + sessionname)
    } else {
        console.log(color('[ CLIENT ]', 'lime'), color('Connecting to session: ', 'magenta') + sessionname)
    }
    newclient(sessionname)
    rl.close();
}

module.exports = {
    newclient
}
