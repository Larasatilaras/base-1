listjadibot = [];

const { WAConnection, MessageType, WAMessageProto, generateMessageID, Presence, MessageOptions, WA_DEFAULT_EPHEMERAL, Mimetype, Browsers, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys")
const readline = require('readline');
const fs = require('fs')
let qrcode = require('qrcode')
const moment = require('moment-timezone')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss DD:MM:YYYY")
let apikey = JSON.parse(fs.readFileSync('./apikey.json'))
const {color} = require('./color')
const conn = new WAConnection()
const addsession = async(pushname, reply,client,id, arg = Date.now()) => {
	const klien = new WAConnection()
	klien.logger.level = 'warn'
    klien.version = [2, 2138, 13]
    klien.browserDescription = [ pushname, 'Mozilla', '3.0' ]
    klien.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await client.sendMessage(id,buffer,MessageType.image,{caption:'Scan QR Untuk menjadi bot'})
    	setTimeout(() => {
       	client.deleteMessage(id, bot.key)
       },30000)
    })
	fs.existsSync(`./jadibot/${arg}.json`) && klien.loadAuthInfo(`./jadibot/${arg}.json`)
    klien.on('connecting', () => {
        console.log('Connecting...')
    })
    klien.on('open', () => {
		console.log(JSON.stringify(klien.user,null,2))
    	reply(`wa.me/${klien.user.jid.split('@')[0]}`)
    	reply(`Berhasil connect!\n\nDevice:\n${JSON.stringify(klien.user,null,2)}`)
    })
    await klien.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./jadibot/${arg}.json`, JSON.stringify(klien.base64EncodedAuthInfo(), null, '\t'))
	console.log(klien.user.jid.split('@')[0])
}
	const jadibot = async(pushname, reply,client,id, arg = Date.now()) => {
	conn.logger.level = 'warn'
    conn.version = [2, 2138, 13]
    conn.browserDescription = [ pushname, 'Mozilla', '3.0' ]
    conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await client.sendMessage(id,buffer,MessageType.image,{caption:'Scan QR Untuk menjadi bot'})
    	setTimeout(() => {
       	client.deleteMessage(id, bot.key)
       },30000)
    })
	fs.existsSync(`./jadibot/${arg}.json`) && conn.loadAuthInfo(`./jadibot/${arg}.json`)
    conn.on('connecting', () => {
        console.log('Connecting...')
    })
    conn.on('open', () => {
		console.log(JSON.stringify(conn.user,null,2))
    	reply(`wa.me/${conn.user.jid.split('@')[0]}`)
    	reply(`Berhasil connect!\n\nDevice:\n${JSON.stringify(conn.user,null,2)}`)
    })
    await conn.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./jadibot/${arg}.json`, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
	console.log(conn.user.jid.split('@')[0])
	require('../msgHndlr')(conn, conn.user.name)
	}
	
const delsession = async (namases) => {
	let b = fs.readdirSync('./jadibot/')
	if (!b.includes(namases)) return 'Nama session tidak ada!'
	fs.unlinkSync(`./jadibot/${namases}.json`)
	return `*Session ${namases} telah di delete!*`
}
const listsession = async () => {
	return fs.readdirSync('./jadibot/')
}
const stopjadibot = (reply) => {
	conn.close()
	reply('Sukses stop jadibot')
}

module.exports = {
	addsession,
	delsession,
	listsession,
	jadibot,
	stopjadibot,
	listjadibot
}
