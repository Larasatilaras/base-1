const { WAConnection, MessageType, WAMessageProto, generateMessageID, Presence, MessageOptions, WA_DEFAULT_EPHEMERAL, Mimetype, Browsers, WALocationMessage, WA_MESSAGE_STUB_TYPE, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys")
const Constants_1 = require(process.cwd()+'/node_modules/@adiwajshing/baileys/lib/WAConnection/Constants')
const fs = require("fs")
const { color, bgcolor } = require('./lib/color')
const hxz = require('./lib/hxz-api')
const { jadibot, stopjadibot, delsession, addsession, listsession, listjadibot} = require('./lib/jadibot')
const qrcode = require("qrcode-terminal")
const {getLockCmd, getAlasan, getPahlawanPosition, getLockCmdPosition} = require('./lib/lockcmd')
let antivo = JSON.parse(fs.readFileSync('./src/antivo.json'))
const { Shadow, Romantic, Smoke, BurnPapper, Naruto, LoveMsg, MsgGrass, Glitch, DoubleHeart, CoffeCup, LoveText, Butterfly } = require('./lib/photooxy')
const qrcodes = require("qrcode")
const moment = require("moment-timezone")
let apikey = JSON.parse(fs.readFileSync('./apikey.json'))
let pahlawan = JSON.parse(fs.readFileSync('./src/pahlawan.json'))
const FileType = require('file-type')
const Utils_1 = require('./lib/utils')
const {jadwaltv} = require('./lib/jadwaltv')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { addBadword, checkBadword, deleteBadword } = require('./lib/badword')
const commandsDB = JSON.parse(fs.readFileSync('./src/autoresp.json'))
const badwordDB = JSON.parse(fs.readFileSync('./src/badword.json'))
const ms = require('parse-ms')
let { isWarn, addWarn, getWarn, addWarning, checkWarn, delWarn } = require('./functions/warning')
let pren = 'composing'
const toMs = require('ms')
let {herodetails} = require('./lib/herodetail')
var util = require('util')
const {setGame, validmove} = require('./lib/tictactoe')
const crypto = require('crypto')
let lukey = JSON.parse(fs.readFileSync('./src/lolkey.json'))
const fetch = require('node-fetch')
const loggc = JSON.parse(fs.readFileSync('./src/loggc.json'))
const { donasi } = require('./lib/donasi')
let ttcdb = JSON.parse(fs.readFileSync('./src/game/tictactoe.json'))
let sudb = JSON.parse(fs.readFileSync('./src/game/suitpvp.json'))
let asdb = JSON.parse(fs.readFileSync('./src/game/asahotak.json'))
let mtdb = JSON.parse(fs.readFileSync('./src/game/math.json'))
let spdb = JSON.parse(fs.readFileSync('./src/game/siapakahaku.json'))
let tndb = JSON.parse(fs.readFileSync('./src/game/tebakanime.json'))
let tudb = JSON.parse(fs.readFileSync('./src/game/tebaklagu.json'))
let fadb = JSON.parse(fs.readFileSync('./src/game/family100.json'))
let cadb = JSON.parse(fs.readFileSync('./src/game/caklontong.json'))
let tidb = JSON.parse(fs.readFileSync('./src/game/tebakkata.json'))
let tkdb = JSON.parse(fs.readFileSync('./src/game/tekateki.json'))
let tldb = JSON.parse(fs.readFileSync('./src/game/tebaklirik.json'))
let tgdb = JSON.parse(fs.readFileSync('./src/game/tebakgambar.json'))
let tbdb = JSON.parse(fs.readFileSync('./src/game/tebakbendera.json'))
let tddb = JSON.parse(fs.readFileSync('./src/game/tebakkabupaten.json'))
let tadb = JSON.parse(fs.readFileSync('./src/game/tebakkalimat.json'))
let warning = JSON.parse(fs.readFileSync('./src/warning.json'))
let ttdb = JSON.parse(fs.readFileSync('./src/game/tebaktebakan.json'))
let tmdb = JSON.parse(fs.readFileSync('./src/game/tebakkimia.json'))
let skdb = JSON.parse(fs.readFileSync('./src/game/susunkata.json'))
const { fetchJson, fetchText, uploadImages } = require('./lib/fetcher')
const { uploadimg } = require('./lib/uploadimage')
const { webp2mp4Url, webp2gifFile, reverseVideoFile, voiceremover } = require('./lib/ezgif')
const { recognize } = require('./lib/ocr')
const os = require('os')
const PasteGG = require('paste.gg')
const {getGempa, tek, speedText, parseMention, uploadimgs, resepnya, jagoKata, alay, kbbiSearch, addCmd, getCommandPosition, getCmd, checkSCommand, mediafireDl, sleep, getBuffer, carigrup, getBaper, isFiltered, addFilter, formatDate, jadwalSolat, uploadBerkas, uploadMedia, wikiSearch, kusonime, ArtiNama, ArtiMimpi} = require('./lib/function')
const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient('50bcf0925ccd566144dff12dde796ac252034d9d');
const pasteGG = new PasteGG()
const { wait, simih, kepo, getGroupAdmins, getRandom, banner, custom, zodiac, halah, hilih, huluh, speeds, heleh, holoh, start, info, success, close, convertSticker } = require('./lib/functions')
const igdl = require('instagram-scraping')
const { yta, ytv } = require('./lib/ytdl')
const igdls = require('instagram-url-direct')
const cheerio = require('cheerio')
const infotlp = require('no-telp')
const { addbot, addBot } = require('./lib/addbot')
const ytdl = require('ytdownload')
const ytsearch = require('scrape-youtube').default;
const brainly = require('brainly-scraper-v2')
const axios = require("axios")
const request = require('request')
const igstalk = require('instatouch')
const sID = process.env.sID;
const rumus = require('rumus-bdr')
const angkab = require('@develoka/angka-terbilang-js')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64');
let bangsat = JSON.parse(fs.readFileSync('./src/bangsat.json'))
const base64ToImage = require('base64-to-image');
var base64Img = require('base64-img');
const { removeBackgroundFromImageFile, RemoveBgResult, RemoveBgError, removeBackgroundFromImageUrl } = require('remove.bg')
const kasar = JSON.parse(fs.readFileSync('./src/antibadword.json'))
const ls = fs.readdirSync('./')
const virus = JSON.parse(fs.readFileSync('./src/antivirus.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autosticker.json'))
const autobulet = JSON.parse(fs.readFileSync('./src/autobulet.json'))
const _autostick = JSON.parse(fs.readFileSync('./src/autostickpc.json'))
const kotor = JSON.parse(fs.readFileSync('./src/kasar.json'))
const mimic = JSON.parse(fs.readFileSync('./src/mimic.json'))
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const antihidetag = JSON.parse(fs.readFileSync('./src/antihidetag.json'))
const antiwame = JSON.parse(fs.readFileSync('./src/antiwame.json'))
const Exif = require('./lib/exifs')
const exif = new Exif()
const register = require('./functions/register')
const reminder = require('./functions/reminder')
const _reminder = JSON.parse(fs.readFileSync('./src/reminder.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const anlink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const anfklink = JSON.parse(fs.readFileSync('./src/antifakelink.json'))
let ownerNumber = JSON.parse(fs.readFileSync('./setting.json'))
const _premium = JSON.parse(fs.readFileSync('./src/premium.json'))
let antibuggc = JSON.parse(fs.readFileSync('./src/antibuggc.json'))
let antispam = JSON.parse(fs.readFileSync('./src/antispam.json'))
const _sewa = JSON.parse(fs.readFileSync('./src/sewa.json'))
let lockcmd = JSON.parse(fs.readFileSync('./src/lockcmd.json'))
let errorcmd = JSON.parse(fs.readFileSync('./src/errorcmd.json'))
const kickarea = JSON.parse(fs.readFileSync('./src/kickarea.json'))
const audel = JSON.parse(fs.readFileSync('./src/audel.json'))
const _ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const _bot = JSON.parse(fs.readFileSync('./src/bot.json'))
const _afk = JSON.parse(fs.readFileSync('./src/afk.json'))
const limit = require('./functions/limit')
let _limit = JSON.parse(fs.readFileSync('./src/limit.json'))
const botHit = JSON.parse(fs.readFileSync('./src/botHit.json'))
const jadwas = require('./lib/jadwalsholat')
let pi = JSON.parse(fs.readFileSync('./src/antibc.json'))
let xnxx = []
let xvideos = []
let xhamster = []
let tebakbendera = []
let math = []
let tebakgambar = []
let tebakanime = []
let suitpvp = []
let tebaklagu = []
let siapakahaku = []
let tebakkimia = []
let tebaklirik = []
let tebakkalimat = []
let caklontong = []
let family100 = []
let tebakkabupaten = []
let tebakkata = []
let asahotak = []
let tebaktebakan = []
let tekateki = []
let susunkata = []
const hit = require('./functions/hit')
const _hit = JSON.parse(fs.readFileSync('./src/userhit.json'))
let jaso = JSON.parse(fs.readFileSync('./lib/jadwalsolat.json'))
const premium = require('./functions/premium')
const sewa = require('./functions/sewa')
const afk = require('./functions/afk')
const {jadwalAdzan} = require('./lib/jadwaladzan')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const antitroli = JSON.parse(fs.readFileSync('./src/antitroli.json'))
const antibaileys = JSON.parse(fs.readFileSync('./src/antibaileys.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
let adzani = JSON.parse(fs.readFileSync('./src/adzan.json'))
const Math_js = require('mathjs')
const speed = require('performance-now')
const getLocationData = require('./lib/location')
const speedTest = require('@lh2020/speedtest-net');
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss DD:MM:YYYY")
const cron = require('node-cron')
let buatadzan = moment().tz('Asia/Jakarta').format("HH:mm").toString()
const { exec, spawn, execSync } = require("child_process")
moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = benny = async(benny, namabot) => {

async function sendGambar(to, buffer) {
	let a = await Utils_1.generateProfilePicture(buffer)
	benny.sendMessage(to, a.img, MessageType.image)
}

const buatwel = async(pushname, namagrup, nomor) => {
	global.tekx
	if (tekx.includes('namagroup')) tekx = tekx.replace('namagroup', namagrup)
	if (tekx.includes('@user')) tekx = tekx.replace('@user', `@${nomor.split('@')[0]}`)
	if (tekx.includes('namauser')) tekx = tekx.replace('namauser', pushname)
	return tekx
}
const buatlea = async(pushname, namagrup, nomor) => {
	global.texk
	if (texk.includes('namagroup')) texk = texk.replace('namagroup', namagrup)
	if (texk.includes('@user')) texk = texk.replace('@user', `@${nomor.split('@')[0]}`)
	if (texk.includes('namauser')) texk = texk.replace('namauser', pushname)
	return texk
}

async function toggleDisappearingMessages(jid, ephemeralExpiration, opts = { waitForAck: true }) {
        const message = benny.prepareMessageFromContent(jid, benny.prepareDisappearingMessageSettingContent(ephemeralExpiration), {});
        await benny.relayWAMessage(message, opts);
        return message;
}

function running(img, duration = 10, fps = 60) {
  return new Promise((resolve, reject) => {
	  let path = require('path')
let tmp = path.join(__dirname, './src/')
    let layers = [
      `color=s=512x512:d=${duration}:r=${fps}[bg]`,
      '[0:v]scale=-2:512[img]',
      `[bg][img]overlay=x='(w+h)*((n/${fps})*-1/${duration})+h'`
    ]

    let n = + new Date + 'run.jpg'
    let i = path.join(tmp, n)
    fs.writeFileSync(i, img)
    console.log(img)
    let o = path.join(tmp, n + '.mp4')
    let args = [
      '-y',
      '-i', i,
      '-t', duration.toString(),
      '-filter_complex', layers.join(';'),
      '-pix_fmt', 'yuv420p',
      '-crf', '18',
      o
    ]
    console.log('ffmpeg', ...args)
    spawn('ffmpeg', args, { stdio: 'inherit' })
      .on('error', reject)
      .on('close', () => {
        try {
          fs.unlinkSync(i)
          resolve(fs.readFileSync(o))
          fs.unlinkSync(o)
        } catch (e) {
          reject(e)
        }
      })
  })
}

async function updateProfilePicture(jid, img) {
        jid = Utils_1.whatsappID(jid);
        const data = await Utils_1.generateProfilePicture(img);
        const tag = benny.generateMessageTag();
        const query = [
            'picture',
            { jid: jid, id: tag, type: 'set' },
            [
                ['image', null, data.img],
                ['preview', null, data.preview]
            ]
        ];
        const response = await benny.setQuery([query], [Constants_1.WAMetric.picture, 136], tag);
        if (jid === benny.user.jid)
            benny.user.imgUrl = response.eurl;
        else if (benny.chats.get(jid)) {
            benny.chats.get(jid).imgUrl = response.eurl;
            benny.emit('chat-update', { jid, imgUrl: response.eurl });
        }
        return response;
    }

const getPP = async (jid) => {
	try {
					ppnya = await benny.getProfilePicture(jid)
				} catch {
					ppnya = 'https://telegra.ph/Benny-10-28'
				}
				return ppnya
}

const ppWel = async (jid) => {
	try {
		ppoi = await benny.getProfilePicture(jid)
		pol = await getBuffer(ppoi)
		fs.writeFileSync('./welcome.jpeg', pol)
		kuli = await uploadMedia('./welcome.jpeg')
		pald = kuli.files[0].url
	} catch {
		pald = 'https://telegra.ph/Benny-10-28'
	}
	return pald
}

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var d = new Date(new Date + 3600000)
        var weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
		var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var haris = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            switch(waktoo){
                case 0: waktoo = "Tengah Malam🌚 - Tidur Kak:)"; break;
                case 1: waktoo = "Tengah Malam🌚 - Tidur Kak:)"; break;
                case 2: waktoo = "Dini Hari🌒 - Tidur Kak:)"; break;
                case 3: waktoo = "Dini Hari🌓 - Tidur Kak:)"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Selamat Pagi🌝"; break;
                case 7: waktoo = "Selamat Pagi🌝"; break;
                case 8: waktoo = "Selamat Pagi🌝"; break;
                case 9: waktoo = "Selamat Pagi"; break;
                case 10: waktoo = "Selamat Pagi🌞"; break;
                case 11: waktoo = "Selamat Siang🌞"; break;
                case 12: waktoo = "Selamat Siang🌞"; break;
                case 13: waktoo = "Selamat Siang🌞"; break;
                case 14: waktoo = "Selamat Siang🌞"; break;
                case 15: waktoo = "Selamat Sore🌝"; break;
                case 16: waktoo = "Selamat Sore🌝"; break;
                case 17: waktoo = "Selamat Sore🌖"; break;
                case 18: waktoo = "Magrib🌘"; break;
                case 19: waktoo = "Magrib🌚"; break;
                case 20: waktoo = "Selamat Malam🌚"; break;
                case 21: waktoo = "Selamat Malam🌚"; break;
                case 22: waktoo = "Selamat Malam🌚"; break;
                case 23: waktoo = "Tengah Malam🌚 - Tidur Kak:)"; break;
            }
            var tampilTanggal = "" + hari + ' ' + weton + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilHari = "" + waktoo;
            var tampilWaktu = moment().tz('Asia/Jakarta').format("HH:mm:ss");
            var tampilWaktus = moment().tz('Asia/Makassar').format("HH:mm:ss");
            var tampilWaktuss = moment().tz('Asia/Jayapura').format("HH:mm:ss");

prefix2 = '#'
baterai = {
	battery: "" || "Tidak terdeteksi",
	isCharge: "" || false
}
numbernye = '0@s.whatsapp.net'
fake = `SELFBOT`
presen = false
teroli = 99*124e3
namastc = `./src/iri.mp3`
targetprivate = '0'
blocked = []            
banChats = true
autoreadgc = false
autoreadsw = true
autoreadpc = false
autojoin = false
antitag = true
autoblock = false
autodemote = false
autoread = false
autoget = false
modewel = 'location'
autoklir = false
creator = ['6285709331584@s.whatsapp.net']
banChat = false
tebakgamb = false
gconly = false
pconly = false
setgrup = "6289636006352-1606097314@g.us"
alasanoff = 'Mengtidur'
antispams = false
simple = false
monospace = '```'
gamewaktu = '35'
logprofile = false
blockcall = false
harganya = '150000000'
totalhit = 0
auspon = false
auspons = false
auspona = false
setthumb = fs.readFileSync('./src/sticker/keseltag.webp')
waktuafk = `${time}`
reason = 'Nothing'
tekx = `*Hai* *@user*\n*Welcome in group:*\n*namagroup*`
texk = `Soyonara @user`
adadeh = ''
waktuoff = `${time}`
const limitCount = 9999
const warningCount = 0
const hitCount = 9873
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
let scmd = JSON.parse(fs.readFileSync('./src/command.json'))
const bulan = arrayBulan[moment().format('MM') - 1]

function joinGroup(link) {
	benny.query({
json:["action", "invite", `${link.replace('https://chat.whatsapp.com/','')}`]
})
}

function getName(jid) {
      let chat
      let v = jid.endsWith('@g.us') ? (chat = benny.chats.get(jid) || {}) && chat.metadata || {} : jid === '0@s.whatsapp.net' ? {
        jid,
        vname: 'WhatsApp'
      } : jid === benny.user.jid ?
        benny.user :
        benny.contactAddOrGet(jid)
      return v.subject || v.vname || v.notify || `+${jid.replace('@s.whatsapp.net', '')}`
    }

async function groupInfo(link) {
	const gcinfo = await benny.query({
json:["query", "invite", link.replace('https://chat.whatsapp.com/','')]
})
console.log(gcinfo)
return gcinfo
}
benny.on('CB:Chat,cmd:action', async (mek) => {
	if (loggc.includes(mek[1].id)) {
	const groupMetadata = await benny.groupMetadata(mek[1].id)
	const groupMembers = groupMetadata.participants
	const groupAdmins = getGroupAdmins(groupMembers)
	const isBotGroupAdmins = groupAdmins.includes(benny.user.jid)
	console.log(mek[1])
	if (mek[1].data[0] == 'announce') {
	if (mek[1].data[0] == 'announce' && mek[1].data[2] == true && isBotGroupAdmins) return benny.sendMessage(mek[1].id, `*Group telah ditutup oleh admin:* @${mek[1].data[1].split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
	if (mek[1].data[0] == 'announce' && mek[1].data[2] == false) return benny.sendMessage(mek[1].id, `*Group telah dibuka oleh admin:* @${mek[1].data[1].split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
	} else if (mek[1].data[0] == 'subject') {
	benny.sendMessage(mek[1].id, `*Nama group telah diubah oleh admin:* @${mek[1].data[1].split('@')[0]} *menjadi:* ${mek[1].data[2].subject}`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
	} else if (mek[1].data[0] == 'ephemeral') {
	if (mek[1].data[0] == 'ephemeral' && mek[1].data[2] == 604800 && isBotGroupAdmins) return benny.sendMessage(mek[1].id, `*Admin* @${mek[1].data[1].split('@')[0]} *Telah menyalakan pesan sementara*`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
	if (mek[1].data[0] == 'ephemeral' && mek[1].data[2] == 0) return benny.sendMessage(mek[1].id, `*Admin* @${mek[1].data[1].split('@')[0]} *Telah mematikan pesan sementara*`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
} else if (mek[1].data[0] == 'desc_add') {
	if (mek[1].data[0] == 'desc_add') return benny.sendMessage(mek[1].id, `*Admin* @${mek[1].data[1].split('@')[0]} *Telah mengubah deskripsi group menjadi:*\n${mek[1].data[2].desc}`, MessageType.text, {contextInfo: {mentionedJid: [mek[1].data[1].replace('c.us', 's.whatsapp.net')]}})
}
	}
})

benny.on('CB:Cmd,type:picture', async (BTS) => {
	benny.setProfilePicture(BTS[1])
	if (!logprofile) return
	console.log(BTS)
	if (BTS[1].jid == '6282299784421@c.us') return
	try {
					ppimg = await benny.getProfilePicture(BTS[1].jid.split('@')[0] + '@s.whatsapp.net')
				} catch {
					ppimg = 'https://telegra.ph/Benny-10-28'
				}
	buffer = await getBaper(ppimg)
	benny.sendMessage(BTS[1].jid.split('@')[0] + '@s.whatsapp.net', buffer, MessageType.image, {caption: '*Anda telah mengubah profile picture*'})
})

benny.on('CB:Status,status', async (lol) => {
	if (!logprofile) return
	console.log(lol)
	benny.sendMessage(lol[1].id.replace('c.us', 's.whatsapp.net'), `*Anda telah mengubah bio menjadi:* ${lol[1].status}`, MessageType.text, {quoted: ben})
})

benny.on("CB:action,,battery", async (bat) => {
	console.log(bat[2])
	  const battery = bat[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = bat[2][0][1].live
})


benny.on("CB:Call", json => {
	 if (blockcall === false) return
	  let call;
	  calling = JSON.parse(JSON.stringify(json))
	  call = calling[1].from
	  for (let i = 0; i < 1; i++) {
		  benny.sendMessage(call, `*Maaf ${benny.user.name} tidak bisa menerima panggilan.*\n*Nelfon = Block!*`, MessageType.text)
	  }
		 benny.blockUser(call, "add")

})

benny.on('group-participants-update', async (anu) => {
	const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType
		try {
			console.log(anu)
			const from = anu.jid
			const mdata = await benny.groupMetadata(anu.jid)
			if (anu.action == 'add') {
				const mdata = await benny.groupMetadata(anu.jid)
				if (kickarea.includes(anu.jid)) {
					num = anu.participants[0]
					if (!num.startsWith('62')) {
		console.log(color('[KICK]', 'red'), color('Received a foreign participant', 'yellow'))
		teks = 'Maaf Group Ini Khusus Warga +62'
		benny.sendMessage(mdata.id, teks, MessageType.text)
		await sleep(2000)
		benny.sendMessage(mdata.id, `Maaf Saya Harus Kick Kamu @${num.split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: ben})
		await sleep(2000)
		benny.groupRemove(anu.jid, [num])
		}
				}
	if (!welkom.includes(anu.jid)) return
				num = anu.participants[0]
				pushnames = await getName(num)
			try {
					ppimgs = await benny.getProfilePicture(from)
				} catch {
					ppimgs = 'https://i.ibb.co/p4RfDn5/gambar-Wa-1.png'
				}
				try {
					ppimg = await benny.getProfilePicture(num)
				} catch {
					ppimg = 'https://i.ibb.co/p4RfDn5/gambar-Wa-1.png'
				}
				buff = await getBuffer(ppimg)
				buffs = await getBaper(ppimgs)
					data = await uploadImages(buff)
					datas = await uploadImages(buffs)
					console.log(data)
			buffu = await getBaper(`https://telegra.ph/file/881e0365ac0f72d53e541.jpg`)
				if (modewel === 'image') {
				benny.sendMessage(mdata.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, caption: await buatwel(pushnames, mdata.subject, num), quoted: { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: {"groupInviteMessage": { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", thumbnail: setthumb, "groupName": "Tes", "caption": `+${num.split('@')[0]} Joined` }}}})
				} else if(modewel === 'text') {
					benny.sendMessage(mdata.id, await buatwel(pushnames, mdata.subject, num), MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: {"groupInviteMessage": { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", thumbnail: setthumb, "groupName": "Tes", "caption": `+${num.split('@')[0]} Joined` }}}})
				} else if(modewel === 'location') {
					gbutsan = [
    {buttonId: '#welcome disable', buttonText: {displayText: 'Disable Welcome'}, type: 'RESPONSE'},
    {buttonId: '#sewabot', buttonText: {displayText: 'Rent A bot'}, type: 'RESPONSE'},
      {buttonId: '#menu', buttonText: {displayText: 'Command Bot'}, type: 'RESPONSE'}
]
					mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, jpegThumbnail: buffu}, location, {quoted: adadeh, thumbnail: buffu})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
buttons: gbutsan,
    contentText: await buatwel(pushnames, mdata.subject, num),
    footerText: 'Created By Demonic',
    headerType: 'LOCATION'
}
					benny.sendMessage(mdata.id, gbuttonan, buttonsMessage, {contextInfo: {mentionedJid: [num]}, thumbnail: buffu, quoted: { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: {"groupInviteMessage": { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", thumbnail: setthumb, "groupName": "Tes", "caption": `+${num.split('@')[0]} Joined` }}}})
				}
				
				} else if (anu.action == 'remove') {
					if (!welkom.includes(anu.jid)) return
					const mdata = await benny.groupMetadata(anu.jid)
				num = anu.participants[0]
				isName = num.includes(benny.user.name) //Ubah nomor lu
				pushnames = await getName(num)
				try {
					ppimgs = await benny.getProfilePicture(from)
				} catch {
					ppimgs = 'https://i.ibb.co/p4RfDn5/gambar-Wa-1.png'
				}
				try {
					ppimg = await benny.getProfilePicture(num)
				} catch {
					ppimg = 'https://i.ibb.co/p4RfDn5/gambar-Wa-1.png'
				}
				buff = await getBaper(ppimg)
				buffs = await getBaper(ppimgs)
					data = await uploadImages(buff)
					datas = await uploadImages(buffs)
					console.log(data)
				console.log(ppimg)
					buffu = await getBaper(`https://telegra.ph/file/881e0365ac0f72d53e541.jpg`)
				gbutsan = [
  {buttonId: '#welcome enable', buttonText: {displayText: 'enable Welcome'}, type: 'RESPONSE'},
    {buttonId: '#sewabot', buttonText: {displayText: 'Rent A bot'}, type: 'RESPONSE'},
      {buttonId: '#menu', buttonText: {displayText: 'Command Bot'}, type: 'RESPONSE'}
]
					mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, jpegThumbnail: buffu}, location, {quoted: adadeh, thumbnail: buffu})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
buttons: gbutsan,
    contentText: await buatlea(pushnames, mdata.subject, num),
    footerText: 'Created By Demonic',
    headerType: 'LOCATION'
}
					benny.sendMessage(mdata.id, gbuttonan, buttonsMessage, {contextInfo: {mentionedJid: [num]}, thumbnail: buffu, quoted: { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: {"groupInviteMessage": { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", thumbnail: setthumb, "groupName": "Tes", "caption": `+${num.split('@')[0]} Joined` }}}})
				}
				else if (anu.action == 'promote') {
					num = anu.participants[0]
			const mdata = await benny.groupMetadata(anu.jid)
			if (autodemote) {
			console.log(color('[AUTO DEMOTE]', 'cyan'), color('BRING ME THE HORIZON 2011', 'yellow'))
			for (let i of mdata.participants) {
				if (i.jid && !i.jid.includes(benny.user.jid)) {
				benny.groupDemoteAdmin(anu.jid, [i.jid])
				}
				}
			}
			if (!welkom.includes(anu.jid)) return
			ppimg = await getPP(anu.participants[0])
			let buff = await getBaper(ppimg)
			teks = `*PROMOTE DETECT*\n*╠❏* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*╚❏* *@${num.split('@')[0]}*`
			benny.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: adadeh})
		} else if (anu.action == 'demote') {
			if (!welkom.includes(anu.jid)) return
			num = anu.participants[0]
			const mdata = await benny.groupMetadata(anu.jid)
			let ppimg = await getPP(anu.participants[0])
			let buff = await getBaper(ppimg)
			teks = `*DEMOTE DETECT*\n*╠❏* *Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*╚❏* *@${num.split('@')[0]}*`
			benny.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: adadeh})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

benny.on('chat-update', async (ben) => {
	try {
		if (!ben.hasNewMessage) return
        ben = ben.messages.all()[0]
		if (presen) {
		benny.updatePresence(ben.key.remoteJid, pren)
		}
		if (autoklir) {
			let cog = await benny.chats.all()
			if (cog.length >= 15) {
				for (let i = 0; i < cog.length; i++) {
				benny.modifyChat(cog[i].jid, 'clear')
				}
			}
		}
		if (ben.key.id.startsWith('3EB0') && ben.key.id.length === 12) return
		ben.message = (Object.keys(ben.message)[0] === 'ephemeralMessage') ? ben.message.ephemeralMessage.message : ben.message
		if ( ben.message && ben.message.protocolMessage && ben.message.protocolMessage.type && ben.message.protocolMessage.type === 'EPHEMERAL_SETTING' && isAntiBuggc && !ben.key.fromMe) {
		nums = ben.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        benny.groupRemove(ben.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        benny.sendMessage(ben.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
		let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(ben)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan >= 1000) {
			infoMSG.splice(infoMSG.indexOf(ben), 10)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
		const getVoice = async (benny, ben) => {
		const requests = require('node-fetch');
	const FormData = require('form-data');
    const fil = await benny.downloadAndSaveMediaMessage(ben)
    const stream = fs.createReadStream(fil);
    const form = new FormData();
    form.append('audio', stream);
    const UrL = await requests('http://hujanapi.xyz/api/stt?apikey=januari', { method: 'POST', body: form })
    const ret =  await UrL.json()
    const voiceMsg = ret.result ? ret.result : 'Tidak terdeteksi'
	return voiceMsg
		}
		global.blocked
		const content = JSON.stringify(ben.message)
		var from = ben.key.remoteJid
		const type = Object.keys(ben.message)[0]
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const barbarkey = '--'
		const naufalkey = 'YunitaGanteng'
		let lolkey = apikey.lolkey
		let vhtearkey = apikey.vhtearkey
		const hujankey = apikey.hujankey
		
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss DD:MM:YYYY')
		budy = (type === 'conversation') ? ben.message.conversation : (type === 'extendedTextMessage') ? ben.message.extendedTextMessage.text : ''
		let prefix = /^[°•.'":÷×¶?£¢€¥®™?=;~ |!+<?#$%^&\/\\©^]/.test(budy) ? budy.match(/^[°•.'":÷×¶?£¢€¥®™?=;~ |!+<?#$%^&\/\\©^]/gi)[0] : '#'
		 button = (type == 'buttonsResponseMessage') ? ben.message.buttonsResponseMessage.selectedButtonId : ''
		 template = (type === "templateButtonReplyMessage") && ben.message.templateButtonReplyMessage.selectedId ? ben.message.templateButtonReplyMessage.selectedId : ''
	body = (type === 'conversation' && ben.message.conversation.startsWith(prefix)) ? ben.message.conversation : (type == 'imageMessage') && ben.message[type].caption.startsWith(prefix) ? ben.message[type].caption : (type == 'videoMessage') && ben.message[type].caption.startsWith(prefix) ? ben.message[type].caption : (type == 'extendedTextMessage') && ben.message[type].text.startsWith(prefix) ? ben.message[type].text : (type === "templateButtonReplyMessage") && ben.message.templateButtonReplyMessage.selectedId ? ben.message.templateButtonReplyMessage.selectedId : (type == 'listResponseMessage') && ben.message[type].singleSelectReply.selectedRowId ? ben.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && ben.message[type].selectedButtonId ? ben.message.buttonsResponseMessage.selectedButtonId : (type == 'stickerMessage') && (getCmd(ben.message[type].fileSha256.toString('base64')) !== null && getCmd(ben.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(ben.message[type].fileSha256.toString('base64')) : (type === "audioMessage") && ben.message.audioMessage ? `${prefix}${await getVoice(benny, ben)}` : ""
let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
	const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const arg = body.slice(command.length+2)
		
		mess = {
			wait: '      _*📩 𝑫𝒂𝒕𝒂 𝑰𝒏 𝑷𝒓𝒐𝒄𝒆𝒔𝒔, 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆.*_    ',
			success: '          *Succes ',
			error: {
				stick: 'Maaf, terjadi kesalahan saat convert gambar ke sticker',
				Iv: 'Link Yang Anda Berikan Mokad',
				api: 'Maaf Permintaan Anda Tidak Bisa Di Akses'
			},
			only : {
				pc: 'Perintah ini hanya bisa digunakan di private chat saja!',
				Registered: `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${prefix}verify*\n\nNote:\nHarap save nomor ku agar bisa mendapatkan serial!!`,
				group: 'Mohon Maaf Fitur Ini Khusus Fi Group.',
				ownerG: 'Fitur Ini Khusus Owner Me',
				ownerB: 'Fitur Ini Khusus Owner Me',
				creator: 'Fitur Ini Khusus Owner Me',
				admin: '*Fitur Ini Dapat Digunakan Oleh Admin Group*',
				premium: `Fitur Ini Khusus Premium ,\nMau jadi user premium?\nChat bit.ly/♡MasF`,
				Badmin: 'Jadikan bot admin terlebih dahulu!'
			}
		}

		const botNumber = benny.user.jid
		const buattag = botNumber.replace('@s.whatsapp.net', '')
		const devNumber = [botNumber] // ganti nomer lu
		const isGroup = from.endsWith('@g.us')
		const isStatus = from.includes('status@broadcast')
		let sender = ben.key.fromMe ? benny.user.jid : isGroup ? ben.participant : ben.key.remoteJid
		const totalchat = await benny.chats.all()
        const nameReq = isGroup ? ben.participant : ben.key.remoteJid
		pushname = await getName(sender)
		const groupMetadata = isGroup ? await benny.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isRegistered = register.checkRegisteredUser(sender, _registered)
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntilink = isGroup ? anlink.includes(from) : false
		const isAntiFakeLink = isGroup ? anfklink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isKasar = isGroup ? kasar.includes(from) : false
		const isTroli = isGroup ? antitroli.includes(from) : false
		let isikey = apikey.isikey
		const isAntiVo = antivo.includes(from)
		const isBot = isGroup ? _bot.includes(from) : false
		const isVirus = isGroup ? virus.includes(from) : false
		const isAutoSticker = isGroup ? autostick.includes(from) : false
		const isAutoBulet = isGroup ? autobulet.includes(from) : false
		const isAutoStick = _autostick.includes(from)
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isAntiBaileys = isGroup ? antibaileys.includes(from) : false
		const isSpam = isGroup ? antispam.includes(from) : false
		const isAntiBuggc = isGroup ? antibuggc.includes(from) : false
		const isBangsat = isGroup ? bangsat.includes(from) : false
		const isSimi = isGroup ? samih.includes(from) : false
		const isAntiHT = isGroup ? antihidetag.includes(from) : false
		const isAntiWaMe = isGroup ? antiwame.includes(from) : false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isCreator = creator.includes(sender)
		const isAdzan = adzani.includes(from)
		const isDev = devNumber.includes(sender)
		const isBanned = _ban.includes(sender)
		const isAfk = _afk.includes(sender)
		const isPremium = premium.checkPremiumUser(sender, _premium)
		const isSewa = sewa.checkPremiumUser(from, _sewa)
        const chats = type == 'conversation' || type == 'extendedTextMessage'
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}

const isQuotedMedia = type === 'extendedTextMessage' && content.includes('imageMessage') || type === 'extendedTextMessage' && content.includes('stickerMessage') || type === 'extendedTextMessage' && content.includes('videoMessage') || type === 'extendedTextMessage' && content.includes('audioMessage') || type === 'extendedTextMessage' && content.includes('documentMessage')

       const menuben = async() => {
       biomu = await benny.getStatus(sender)
		   let dateIslamic = Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
	spek = await benny.user.phone
	l = 1
	let u = []
				let giip = []
				for (mem of totalchat){
					u.push(mem.jid)
				}
				for (let id of u){
					if (id && id.includes('g.us')){
						giip.push(id)
					}
				}
                var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = benny.user.phone
                var bulanpuasa = Math.floor(56 - moment().format('DD'))
	  return `\`\`\`Hai Jangan Lupa Mampir api.ashborns.site\`\`\`

🌍 *Data Statistik*)
*⨳* _${tampilWaktu} Wib_

 *Menuju Bulan Puasa*
_${bulanpuasa} Hari Lagi_

*✘ Informasi User*
Nama: ${pushname}
*ꪵ ⃝⃕ 進 Tag:* _@${sender.split('@')[0]}_
*ꪵ ⃝⃕ 進 Limit:* _${isPremium ? 'Unlimited' : limit.getLimit(sender, _limit, limitCount)}_
*ꪵ ⃝⃕ 進 Status:* _${isOwner ? 'Owner' : 'User'}_
*ꪵ ⃝⃕ 進 Premium:* _${isPremium ? 'Premium' : 'Free'}_
*ꪵ ⃝⃕ 進 Group Admin:* _${isGroupAdmins ? 'Admin' : 'Not Admin'}_
*ꪵ ⃝⃕ 進 Bio User:* _${biomu.status}_


*✘ INFORMASI BOT*
*ꪵ ⃝⃕ 進 Group WhatsApp: https://chat.whatsapp.com/H4QLZdTUgeB7ErmR9e6xdm*
*ꪵ ⃝⃕ 進 Name :* _${benny.user.name}_
*ꪵ ⃝⃕ 進 Browser :* _${benny.browserDescription[1]}_
*ꪵ ⃝⃕ 進 Server :* _${benny.browserDescription[0]}_
*ꪵ ⃝⃕ 進 Version :* _${benny.browserDescription[2]}_
*ꪵ ⃝⃕ 進 Total hit :* _${botHit.length}_
*ꪵ ⃝⃕ 進 Total user :* _${_registered.length}_
*ꪵ ⃝⃕ 進 Group Chat :* _${giip.length}_
*ꪵ ⃝⃕ 進 Personal Chat :* _${totalchat.length - giip.length}_
*ꪵ ⃝⃕ 進 Total Chat :* _${totalchat.length}_
*ꪵ ⃝⃕ 進 User hit :* _${hit.getHit(sender, _hit, hitCount)}_ Command`
	   }
		const downloadM = async (path) => {
			if (!isQuotedMedia) throw 'Reply Media!'
			path ? path : Date.now()
const buat = JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const dia = await benny.downloadAndSaveMediaMessage(buat, path)
return dia
}

if (ben.key.remoteJid == 'status@broadcast') from = 'status@broadcast'

switch (button) {
	case 'menusimple':{
	 menunye = `${await menuben()}

${require('./src/teks/help').simple(prefix, l, pushname)}`
ppimg = await getPP(sender)
gambar = await getBuffer(ppimg)
gbutsan = [
  {buttonId: 'OWNER', buttonText: {displayText: 'OWNER'}, type: 'RESPONSE'},
  {buttonId: '#listmenu', buttonText: {displayText: 'LIST MENU'}, type: 'RESPONSE'}
]
mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, jpegThumbnail: gambar}, location, {thumbnail: gambar})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
    contentText: menunye,
    footerText: pushname,
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben, contextInfo:{externalAdReply:{title: namabot, body: '', previewType: 'PHOTO', thumbnail: setthumb, sourceUrl: 'https://wa.me/6285709331584?text=Assalamualaikum'}, mentionedJid: [sender]}})
	}
		break
		case 'menutroli':{
		 menunye = `${await menuben()}

${require('./src/teks/help').help(prefix, l, pushname)}`
spt = WAMessageProto.Message.fromObject({
						orderMessage: WAMessageProto.OrderMessage.fromObject({
							sellerJid: numbernye,
							itemCount: 999,
							orderTitle: `*Hai ${pushname}* ? `,
							thumbnail: await getBuffer(await getPP(sender)),
							status: 0,
						    surface: 0,
							message: menunye
						})
					});
					let scd = benny.prepareMessageFromContent(from, spt, {quoted: ben, contextInfo:{mentionedJid: [sender]}});
					benny.relayWAMessage(scd)
	}
break
case 'REST API':
benny.sendMessage(from, 'https://cililitan2.herokuapp.com', text, {quoted: ben})
break
case 'SELF':
if (!isOwner && !ben.key.fromMe) return
	banChats = true
	benny.sendMessage(from, '*[ SELF MODE ]*', text, {quoted: ben})
break
case 'PUBLIC':
if (!isOwner && !ben.key.fromMe) return
	banChats = false
benny.sendMessage(from, '*[ PUBLIC MODE ]*', text, {quoted: ben})
break
}
		const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('Done..');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					benny.sendMessage(to, media, type, { quoted: ben, mimetype: mime, caption: text })
					
					fs.unlinkSync(filename)
				});
			}
			if (banChats == false) fake = namabot
			if (banChats == true) fake = 'SELFBOT'
const textImg = (teks) => {
           benny.sendMessage(from, teks, text, {quoted: ben, contextInfo: {"mentionedJid": [sender, "0@s.whatsapp.net"]},thumbnail: fs.readFileSync('./src/sticker/keseltag.webp')})
        }
			const reply = (teks) => {
			benny.sendMessage(from, teks, text, {quoted: ben})
		}
			
			const cmd = budy.toLowerCase().split(" ")[0] || "";

let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

 if (ttcdb.includes(from)) {
     if (fs.existsSync(`./src/tictactoe/${from}.json`)) {
          const boardnow = setGame(`${from}`);

          if (budy == "Cex") return reply("why");

          if (

               budy.toLowerCase() == "y" ||

               budy.toLowerCase() == "yes" ||

               budy.toLowerCase() == "ya"

          ) {

               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {

                    if (boardnow.status)

                         return reply(`Game telah dimulai sebelumnya!`);

                    const matrix = boardnow._matrix;

                    boardnow.status = true;

                    fs.writeFileSync(

                         `./src/tictactoe/${from}.json`,

                         JSON.stringify(boardnow, null, 2)

                    );

                    const chatAccept = `*${decodeURI('%F0%9F%8E%AE')} Tictactoe Game*



❌ : @${boardnow.X}

⭕ : @${boardnow.O}



Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}



     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}

     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}

     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}



`;

                    benny.sendMessage(from, chatAccept, MessageType.text, {

                         quoted: ben,

                         contextInfo: {

                              mentionedJid: [

                                   boardnow.X + "@s.whatsapp.net",

                                   boardnow.O + "@s.whatsapp.net",

                              ],

                         },

                    });

               } else {

                    benny.sendMessage(from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,

                         MessageType.text, {

                         quoted: ben,

                         contextInfo: {

                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],

                         },

                    }

                    );

               }

          } else if (

               budy.toLowerCase() == "n" ||

               budy.toLowerCase() == "no" ||

               budy.toLowerCase() == "tidak"

          ) {

               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {

                    if (boardnow.status)

                         return reply(`Game telah dimulai sebelumnya!`);

                    fs.unlinkSync(`./src/tictactoe/${from}.json`);

                    benny.sendMessage(from,
                         `Sayangnya tantangan @${boardnow.X} ditolak ❌�`,

                         MessageType.text, {

                         quoted: ben,

                         contextInfo: {

                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],

                         },

                    }

                    );

               } else {

                    benny.sendMessage(from,
                         `Opsi ini hanya untuk @${boardnow.O} !`,

                         MessageType.text, {

                         quoted: ben,

                         contextInfo: {

                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],

                         },

                    }

                    );

               }

          }

     }



     if (arrNum.includes(cmd)) {

          const boardnow = setGame(`${from}`);

          if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)

          if (

               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=

               sender.replace("@s.whatsapp.net", "")

          )

               return;

          const moving = validmove(Number(budy), `${from}`);

          const matrix = moving._matrix;

          if (moving.isWin) {

               if (moving.winner == "SERI") {

                    const chatEqual = `*${decodeURI('%F0%9F%8E%AE')} Tictactoe Game*



Game berakhir seri �

`;

                    reply(chatEqual);

                    fs.unlinkSync(`./src/tictactoe/${from}.json`);

                    return;

               }

               const winnerJID = moving.winner == "O" ? moving.O : moving.X;

               const looseJID = moving.winner == "O" ? moving.X : moving.O;

               const limWin = Math.floor(Math.random() * 20) + 10;

               const limLoose = Math.floor(Math.random() * 10) + 5;

               const chatWon = `*${decodeURI('%F0%9F%8E%AE')} Tictactoe Game*



_Telah dimenangkan oleh_ @${winnerJID} ��

`;
               benny.sendMessage(from, chatWon, MessageType.text, { quoted: ben, contextInfo: { mentionedJid: [moving.winner == "O" ? moving.O + "@s.whatsapp.net" : moving.X + "@s.whatsapp.net", ], }, });
  fs.unlinkSync(`./src/tictactoe/${from}.json`);
} else {
const chatMove = `*${decodeURI('%F0%9F%8E%AE')} Tictactoe Game*



❌ : @${moving.X}

⭕ : @${moving.O}



Giliran : @${moving.turn == "X" ? moving.X : moving.O}





     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}

     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}

     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}





`;

               benny.sendMessage(from, chatMove, MessageType.text, { quoted: ben, contextInfo: { mentionedJid: [ moving.X + "@s.whatsapp.net", moving.O + "@s.whatsapp.net"], }, });
  }
 }
 }
		
		const reply2 = (jid, text, quoted, options) => {
        benny.sendMessage(jid, text, MessageType.extendedText, { quoted, ...options })
       }
		const sendMess = (hehe, teks) => {
			benny.sendMessage(hehe, teks, text, { quoted: ben})
		}
		
		if (adzani.length >= 1) {
			let adzan = await jadwalSolat('jakarta-timur')
		let subuh = adzan.shubuh
		let dzuhur = adzan.zuhur
		let ashar = adzan.ashar
		let maghrib = adzan.magrib
		let isya = adzan.isya
		let nama = 'Jakarta'
		setInterval(() => {
		if (buatadzan === isya) {
			for (let i = 0; i < adzani.length; i++) {
				sleep(3000)
			benny.sendMessage(adzani[i], `Telah Masuk Waktu sholat Isya\nUntuk ${nama} dan sekitarnya\nPukul: ${buatadzan}\n             ${namabot}`, text, {quoted: ben})
			}
		} else if (buatadzan === subuh) {
			for (let i = 0; i < adzani.length; i++) {
				sleep(3000)
					benny.sendMessage(adzani[i], `Telah Masuk Waktu sholat Shubuh\nUntuk ${nama} dan sekitarnya\nPukul: ${buatadzan}\n             ${namabot}`, text, {quoted: ben})
			}
			} else if (buatadzan === dzuhur) {
				for (let i = 0; i < adzani.length; i++) {
				sleep(3000)
		benny.sendMessage(adzani[i], `Telah Masuk Waktu sholat Dzuhur\nUntuk ${nama} dan sekitarnya\nPukul: ${buatadzan}\n             ${namabot}`, text, {quoted: ben})
		}
		} else if (buatadzan === ashar) {
			for (let i = 0; i < adzani.length; i++) {
				sleep(3000)
			benny.sendMessage(adzani[i], `Telah Masuk Waktu sholat Ashar\nUntuk ${nama} dan sekitarnya\nPukul: ${buatadzan}\n             ${namabot}`, text, {quoted: ben})
		}
		} else if (buatadzan === maghrib) {
			for (let i = 0; i < adzani.length; i++) {
				sleep(3000)
			benny.sendMessage(adzani[i], `Telah Masuk Waktu sholat Maghrib\nUntuk ${nama} dan sekitarnya\nPukul: ${buatadzan}\n             ${namabot}`, text, {quoted: ben})
		}
		}
		  }, 1000)
		}
		
		const acak = (teks) => {
			teks[Math.floor(Math.random() * teks.length)]
		}
		const sendPesan = (hehe, teks) => {
			benny.sendMessage(hehe, teks, text, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: ben})
		}
		 let m = require('./lib/simple').smsg(benny, ben)
		 
		 if (!ben.key.fromMe && !isOwner && isAntiBuggc) {
			switch (m.messageStubType) {
      case WA_MESSAGE_STUB_TYPE.CHANGE_EPHEMERAL_SETTING:
          benny.sendMessage(from, +m.messageStubParameters[0] ?
            'Pesan Sementara ON' :
            'Pesan Sementara OFF'
            , 'extendedTextMessage')
        break
			}
			switch (m.mtype) {
      case 'protocolMessage':
        switch (m.msg.type) {
          case 3:
            if (m.isGroup) {
              let log = {
                key: m.key,
                content: m.msg,
                sender: m.sender
              }
              benny.sendMessage(m.chat, ('*BUG GRUP TERDETEKSI, JANGAN SCROLL KEATAS! HAPUS CHAT INI BIAR GA EROR!!!*\n\n' + require('util').format(log)).padEnd(65536, '\n'), 'extendedTextMessage')
              // benny.modifyChat(m.chat, 'clear', {
              //     includeStarred: false
              // }).catch(console.error)
              benny.reply('6285709331584@s.whatsapp.net', `
Pelaku pengirim bug gc @${m.sender.split`@`[0]}
ID: ${m.isGroup ? m.chat : m.sender}
Nama: ${m.isGroup ? getName(m.chat) : getName(m.sender)}
`.trim(), ben, { contextInfo: { mentionedJid: [m.sender] } })
            }
            break
        }
        break
			}
			}
		
		 
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? benny.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : benny.sendMessage(from, teks.trim(), extendedText, { quoted: ben, contextInfo: { "mentionedJid": memberr } })
		}
		const sendGif = (to, buffer, caption) => {
			benny.sendMessage(to, buffer, video, {quoted: ben, caption: caption, mimetype: 'video/gif'})
		}
		const sendPtt = (to, buffer, caption) => {
			benny.sendMessage(to, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
		}
		
		const telestick = async (to, url, wm = namabot, wm2 = '') => {
			exif.create(wm, wm2)
let packName = url.replace("https://t.me/addstickers/", "");
 
let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } } );
 
let json = await gas.json();
let po = fs.readdirSync('./src/sticker')
let pa = po.length
let pe = pa++
 
console.log(json)
for(let i of json.result.stickers) {
let fileId = i.thumb.file_id;
 
let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
 
let jisin = await gasIn.json();
console.log(jisin)
 buffer = await getBaper("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path)
 fs.writeFileSync(`./src/sticker/${pe}.webp`, buffer)
 exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${pe}.webp -o ./src/sticker/${pe}.webp`, async (error) => {
benny.sendMessage(to, fs.readFileSync(`./src/sticker/${pe}.webp`), sticker).then(() => fs.unlinkSync(`./src/sticker/${pe}.webp`))
 })
}
}

async function sendGroupV4Invite(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', options = {}) {
      let msg = WAMessageProto.Message.fromObject({
        groupInviteMessage: WAMessageProto.GroupInviteMessage.fromObject({
          inviteCode,
          inviteExpiration: parseInt(inviteExpiration) || + new Date(new Date + (3 * 86400000)),
          groupJid: jid,
          groupName: getName(jid),
          caption
        })
      })
      let message = await benny.prepareMessageFromContent(participant, msg, options)
      await benny.relayWAMessage(message)
      return message
    }

		const msgs = (message) => {
            if (body.startsWith(prefix))  {
                if (message.length >= 10){
                    return `${message.substr(0, 10)}`
                }else{
                    return `${message}`
                }
            }
        }
		
		const msga = (message) => {
                if (message.length >= 8){
                    return `${message.substr(0, 8)}`
                }else{
                    return `${message}`
                }
        }
		
		const msgss = (message) => {
                if (message.length >= 10){
                    return `${message.substr(0, 10)}`
                }else{
                    return `${message}`
                }
        }
		
		const getUserLimit = (userId) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].limitCount
            }
        }
		
		const sendSticker = async(to, file) => {
			ran = getRandom('.webp')
							exif.create(namabot, '')
		await ffmpeg(`${file}`)
									.input(file)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(file)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(to, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: ben})
											fs.unlinkSync(file)	
											fs.unlinkSync(`./src/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)						
						}
const sendStickerKotak = async(to, file) => {
	ran = getRandom('.webp')
							exif.create(namabot, '')
							exec(`ffmpeg -i ${file} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ran}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${ran} -o ${ran}`, async (err) => {
								if (err) return reply('error')
								benny.sendMessage(to, fs.readFileSync(ran), sticker, {quoted: ben})
								})
							})
}

async function sendMessageFromContent(jid,obj,opt={}){
     let prepare = await benny.prepareMessageFromContent(jid,obj,opt)
    await benny.relayWAMessage(prepare)
    return prepare
     }
	
		async function sendStickerFromUrl(id, url, quoted = '') {
			let file = await getRandom('.png')
						let bag = await getBuffer(url)
						fs.writeFileSync(file, bag)
						let webp = await getRandom('.webp')
						exif.create(namabot, '')
		await ffmpeg(`${file}`)
									.input(file)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(file)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
											benny.sendMessage(id, fs.readFileSync(webp), sticker, {quoted: quoted})
											fs.unlinkSync(file)	
											fs.unlinkSync(webp)	
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(webp)
						}
			
			

offline = process.uptime()
waktuoff = `${tek(offline)}`
		const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
		
		const isQuotedImages = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedStickers = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
		
		if (isGroup && isAutoBulet) {
			if (ben.message && ben.message.imageMessage) {
							const encmedia = isQuotedImages ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.png')
							exec(`ffmpeg -hide_banner  -i "${media}" -i "./buletan.png" -filter_complex [0]scale=400:400[ava];[1]alphaextract[alfa];[ava][alfa]alphamerge ${ran}`, async(err) => {
						if (err) return reply('error')
						sendSticker(from, ran)
					})
			}
		}
		if (isGroup && isAutoSticker) {
			if (ben.message && ben.message.imageMessage) {
							const encmedia = isQuotedImages ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							sendSticker(from, media)
			}
		}
		
	if (isAntiVo && ben.message.viewOnceMessage && !ben.key.fromMe){
var msg = {...ben}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage

typenya["viewOnce"] = false

typenya["caption"] = `\`\`\`Anti ViewOnce\n\n\nCaption : ${(typenya.caption === '') ? '' : typenya.caption}\`\`\``

let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: ben.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: ben.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }

let pe = await benny.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})

await benny.relayWAMessage(pe)
}
		
		
    if (!isGroup && isAutoStick) {
			if (ben.message && ben.message.imageMessage) {
							const encmedia = isQuotedImages ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							sendSticker(from, media)
			}
		}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isQuotedText = type === 'extendedTextMessage'
		const isQuotedLink = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
		const isQuotedLiveLocation = type === 'extendedTextMessage' && content.includes('liveLocationMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	
	    //Ignore ban user
		    if (isBanned && !isGroup && !isCmd) console.log(color(time, "gold"), color("[ BAN ]", "red"), color(msgss(budy)), color("from", "pink"), color(sender.split('@')[0].slice(0, 5), "yellow"))
            if (isBanned && isGroup && !isCmd) console.log(color(time, "gold"), color("[ BAN ]", "red"), color(msgss(budy)), color("from", "pink"), color(sender.split('@')[0].slice(0, 5), "yellow"), color("in", "purple"), color(groupName, "yellow"))
            if (isBanned && !isGroup && isCmd) console.log(color(time, "gold"), color("[ BAN ]", "red"), color(msgs(command)), color("from", "pink"), color(sender.split('@')[0].slice(0, 5), "blue"))
			
	    //Message
	        if (!isStatus && !isGroup && isCmd) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ COMMAND ]", "aqua"), color(msgs(command)), color("from", "pink"), color('+' + sender.split('@')[0].slice(0, 5)+` ( ${msga(pushname)} )`, "lime"))
		    if (!isStatus && !isGroup && !isCmd) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ PRIVATE ]", "aqua"), color(msgss(ben.text)), color("from", "pink"), color('+' + sender.split('@')[0].slice(0, 5)+` ( ${msga(pushname)} )`, "lime"))
	        if (!isStatus && isGroup && isCmd) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ COMMAND ]", "aqua"), color(msgs(command)), color("from", "pink"), color('+' + sender.split('@')[0].slice(0, 5)+` ( ${msga(pushname)} )`, "lime"), color("in", "purple"), color(groupName, "yellow"))
	        if (!isStatus && isGroup && !isCmd) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ GROUP ]", "aqua"), color(msgss(ben.text)), color("from", "pink"), color('+' + sender.split('@')[0].slice(0, 5)+` ( ${msga(pushname)} )`, "lime"), color("in", "purple"), color(groupName, "yellow"))
	        if (isStatus) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ STATUS ]", "aqua"), color(msgss(ben.text)), color("from", "pink"), color('+' + sender.split('@')[0].slice(0, 5), "lime"))
          
		 //Anti spam
		 if (antispams) {
		    if (isCmd && isFiltered(from) && !isGroup && !isOwner && !ben.key.fromMe) return console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ SPAM ]", "red"), color(msgs(command)), color("from", "pink"), color('+' + sender.split('@')[0].slice(0, 5), "lime"))
		   if (isCmd && isFiltered(from) && isGroup && !isOwner && !ben.key.fromMe) return console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ SPAM ]", "red"), color(msgs(command)), color("from", "pink"), color('+' + sender.split('@')[0].slice(0, 5), "lime"), color("in", "purple"), color(groupName, "yellow"))
	        if (isCmd && !isOwner && !ben.key.fromMe) addFilter(from)
		 }
			
			if (!ben.key.fromMe) {
		if (ben.message.extendedTextMessage != null || ben.message.extendedTextMessage != undefined) {
	if (ben.message.extendedTextMessage.contextInfo != null || ben.message.extendedTextMessage.contextInfo != undefined) {
	if (ben.message.extendedTextMessage.contextInfo.quotedMessage != null || ben.message.extendedTextMessage.contextInfo.quotedMessage != undefined) {
	if (ben.message.extendedTextMessage.contextInfo.quotedMessage.orderMessage) {
		benny.modifyChat(from, 'clear')
	}
	}
		}
			}
			}
	
	if (isGroup && isTroli && !ben.key.fromMe) {
		if (ben.message.extendedTextMessage != null || ben.message.extendedTextMessage != undefined) {
	if (ben.message.extendedTextMessage.contextInfo != null || ben.message.extendedTextMessage.contextInfo != undefined) {
	if (ben.message.extendedTextMessage.contextInfo.quotedMessage != null || ben.message.extendedTextMessage.contextInfo.quotedMessage != undefined) {
	if (ben.message.extendedTextMessage.contextInfo.quotedMessage.orderMessage) {
		if (isBotGroupAdmins) {
		benny.groupRemove(from, [sender])
		benny.sendMessage(from, `*[ ANTI TROLI ]*`+`\n`.repeat(5000), text, {quoted: ben})
		}
	}
	}
		}
			}
	}
	if (!ben.key.fromMe && isGroup && isAntiBaileys && m.isBaileys) {
		if (isGroupAdmins) return reply('Kamu admin grup jadi ngga di kick :)')
		console.log(color('[KICK]', 'red'), color('Received a fake link!', 'yellow'))
		reply(`[ *PETUGAS PEMBERSIH* ]\n\nBaileys Terdeteksi!\nMaaf aku harus mengeluarkan kamu...\nSelamat tingal~`, text, {quoted: ben}).then(() => benny.groupRemove(from, [sender]))
	}
	
	if (!ben.key.fromMe && isGroup && isSpam) {
		addFilter(sender)
		if (isFiltered(sender)) {
			benny.sendMessage(from, `*[ PETUGAS PEMBERSIH ]*\n*Jangan spam!*\nSelamat tingal~`, text, {quoted: ben}).then(() => benny.groupRemove(from, [sender]))
		}
	}
		
	
	if (!ben.key.fromMe && isGroup && isAntilink) {
	if (budy.includes("://chat.whatsapp.com/")) {
		let openbo = await groupInfo(budy)
		if (openbo.status == 200) {
		if (isGroupAdmins) return reply('Kamu admin grup jadi ngga di kick :)')
		console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
		benny.sendMessage(from, `[ *PETUGAS PEMBERSIH* ]\n\nKamu nakal si! Ngapain kirim link grup lain? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`, text, {quoted: ben}).then(() => benny.groupRemove(from, [sender]))
}
	}
	}
	if (!ben.key.fromMe && isGroup && isAntiFakeLink) {
	if (budy.includes("://chat.whatsapp.com/")) {
		let openbo = await groupInfo(budy)
		if (openbo.status == 410) {
		if (isGroupAdmins) return reply('Kamu admin grup jadi ngga di kick :[==========)')
		console.log(color('[KICK]', 'red'), color('Received a fake link!', 'yellow'))
		benny.sendMessage(from, `[ *PETUGAS PEMBERSIH* ]\n\nKamu nakal si! Ngapain kirim fake link grup\nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`).then(() => benny.groupRemove(from, [sender]))
}
	}
	}
					
	if (!ben.key.fromMe && isCmd && isGroup && banChat == true) {
			reply(`*Mohon Maaf ${namabot} Sedang Offline!*\n\n• *Alasan:* ${alasanoff}\n• *Sejak:* ${waktuoff}\n\nSilahkan hubungi lagi setelah *10 menit*`)
					}
					
	if (!ben.key.fromMe && !isGroup && autoblock) {
			if (!sender.startsWith('62')) {
			benny.blockUser(sender, "add")
			}
					}
					
	if (autoread) {
		benny.chatRead(from)
	}
	
	if (!ben.key.fromMe && autojoin) {
	if (budy.includes("://chat.whatsapp.com/")) {
		console.log(color('[AUTO JOIN]', 'cyan'), color('BRING ME THE HORIZON 2011', 'yellow'))
				 benny.query({
json:["action", "invite", `${budy.replace('https://chat.whatsapp.com/','')}`]
})
}
	}
	
	
	if (!ben.key.fromMe && banChat) {
			if (ben && ben.message && ben.message[type] && ben.message[type].contextInfo && ben.message[type].contextInfo.mentionedJid && ben.message[type].contextInfo.mentionedJid.includes(botNumber)) {
			reply(`*Mohon Maaf ${namabot} Sedang Offline!*\n\n• *Alasan:* ${alasanoff}\n• *Sejak:* ${waktuoff}\n\nSilahkan hubungi lagi setelah *10 menit*`)
			}
			}
		
	if (autoreadgc) {
		if (from.includes('@g.us')) {
		benny.chatRead(from)
	}
	}
	if (autoreadsw) {
		if (from === 'status@broadcast') {
		benny.chatRead(from)
	}
	}
	
	if (autoreadpc) {
		if (from.includes('@s.whatsapp.net')) {
		benny.chatRead(from)
	}
	}
	
	let panggilbot = ["f","g","o"]
	if (!banChats && panggilbot.includes(budy.toLowerCase())) {
		 gbutsan = [
  {buttonId: '#menu', buttonText: {displayText: `MENU ALL ${decodeURI('%F0%9F%93%96')}`}, type: 'RESPONSE'},
  {buttonId: 'menusimple', buttonText: {displayText: `MENU SIMPLE ${decodeURI('%F0%9F%93%9A')}`}, type: 'RESPONSE'},
  {buttonId: 'menutroli', buttonText: {displayText: `MENU TROLI ${decodeURI('%F0%9F%9B%92')}`}, type: 'RESPONSE'}
]
mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, address: tek(process.uptime()), jpegThumbnail: await getBuffer(await getPP(sender))}, location, {thumbnail: await getBuffer(await getPP(sender))})
 gbuttonan = {
	locationMessage: mhan.message.locationMessage,
    contentText: `*Hai, ${pushname}* ${decodeURI('%F0%9F%91%8B')} \n*Perkenalkan nama aku adalah:*\n*${benny.user.name}*\n*Aku adalah bot whatsapp yang dibuat menggunakan bahasa javascript.*`,
    footerText: '*WhatsApp By @0*',
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben, contextInfo:{mentionedJid: ['0@s.whatsapp.net']}})
	}
		
	if (auspons && budy) {
		anu = fs.readdirSync('./src/sticker/')
		for (let i = 0; i < 1; i++) {
			if (anu.includes(budy+'.webp')) {
				benny.sendMessage(from, fs.readFileSync(`./src/sticker/${budy}.webp`), sticker, {quoted: ben})
			}
		}
	}
	if (auspona && budy) {
		anu = fs.readdirSync('./src/audio/')
		for (let i = 0; i < 1; i++) {
			if (anu.includes(budy+'.mp3')) {
				benny.sendMessage(from, fs.readFileSync(`./src/audio/${budy}.mp3`), audio, {ptt:true, mimetype: 'audio/mp3', filename: budy+'.mp3', quoted: ben})
			}
		}
	}
	
	for (var lc = 0; lc < errorcmd.length; lc++) {
		if (command === errorcmd[lc].cmd) {
			if (command === errorcmd[lc].cmd) {
				let alscmd = await getAlasan(command, errorcmd)
		return reply(`*Maaf kak ${pushname} command ${command} sedang error!*\n*Alasan:* ${alscmd}`)
			}
		}
	}
	for (var lc = 0; lc < lockcmd.length; lc++) {
		if (!ben.key.fromMe && !isOwner && !banChats && command === lockcmd[lc].cmd) {
			if (command === lockcmd[lc].cmd) {
				let alscmd = await getAlasan(command, lockcmd)
		return reply(`*Maaf kak ${pushname} command ${command} sedang dilock/dikunci oleh owner dengan alasan:*\n${alscmd}`)
			}
		}
	}
	
	if (auspon && budy && !banChats) {
	for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
	}
	if (!ben.key.fromMe && isGroup && isVirus && budy) {
	for (var i = 0; i < badwordDB.length ; i++) {
				if (budy.includes(badwordDB[i].badword)) {
					if (isGroupAdmins) return reply('Kamu admin grup jadi ngga di kick :)')
				 reply(`? *PETUGAS PEMBERSIH* ?\n\nKamu nakal si! Ngapain ngomong kotor? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a badword!', 'yellow'))
					benny.groupRemove(from, [sender])
				}
			}
	}
	
	if (isGroup && antitag) {
	if (ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.mentionedJid && ben.message.extendedTextMessage.contextInfo.mentionedJid.includes(botNumber)) {
		    if (isGroup) console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ TAG ]", "aqua"), color('Received a tag'), color("from", "pink"), color(sender.split('@')[0], "blue"), color("in", "purple"), color(groupName, "yellow"))
		benny.chatRead(from)
		}
	}
	
	if (isGroup && !ben.key.fromMe && !isOwner && isAntiHT) {
	if (ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.mentionedJid && ben.message.extendedTextMessage.contextInfo.mentionedJid) {
		if (ben.message.extendedTextMessage.contextInfo.mentionedJid.length === groupMembers.length) {
			reply(`*[ ANTI HIDETAG ]*\n\nKamu akan di kick karena mengirim hidetag`)
			await benny.groupRemove(from, [sender])
		}
		}
	}
			
	if (isGroup && !ben.key.fromMe && !isOwner && isAntiWaMe) {
	if (budy.toLowerCase().includes('wa.me')) {
			reply(`*[ ANTI WAME ]*\n\nKamu akan di kick karena mengirim hidetag`)
			await benny.groupRemove(from, [sender])
		}
	}
			
		//Anti virus function
		if (isGroup && !ben.key.fromMe && isKasar && isBotGroupAdmins) {
		    if (budy.length >= 1500) {
				if (isGroupAdmins) return reply('Kamu admin grup jadi ngga di kick :)')
				reply(`[ *PETUGAS PEMBERSIH* ]\n\nKamu nakal si! Ngapain kirim virus? \nMaaf tapi aku harus mengeluarkan kamu...\nSelamat tingal~`)
				 console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
				 benny.groupRemove(from, [sender])
				}
		}
		
		if (!ben.key.fromMe) {
		    if (budy.length >= 3000) {
				 console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
				 benny.clearMessage(ben.key)
				}
			}
			
			if (ben.message.stickerMessage && autoget) {
					benny.starMessage(ben.key)
			}
			
			
			if (isGroup && isCmd && !isGroupAdmins && !isOwner && !ben.key.fromMe && isSimi) return reply(`*Kalau mau pakai bot minta tolong admin untuk mematikan modesimi*\n*Contoh:* ${prefix}modesimi off`)
			if (isCmd) {
		  hit.addHit(sender, _hit)
			}
			
			if (isGroup && isSimi && !ben.key.fromMe && ben.message.conversation && ben.message.extendedTextMessage) {
				anu = await fetchJson(`https://api.simsimi.net/v2/?text=${encodeURIComponent(budy)}&lc=id`)
				ben.reply(anu.success)
			}
			
			if (isGroup && fs.existsSync(`./src/warning/${from}.json`)) {
	let dir = JSON.parse(fs.readFileSync(`./src/warning/${from}.json`))
	let pua = await getWarn(sender, dir)
	if (pua >= 3) {
		ben.reply('Selamat tinggal').then(() => benny.groupRemove(from, [sender]))
	ben.reply(`Kamu dikeluarkan dari group ${groupMetadata.subject} karena telah mendapat 3 kali warn`, sender) 
	}
}
			
			
			//Public&Self Function
		    if (!isOwner && !ben.key.fromMe && banChats) return 
			
			if (!isOwner && !ben.key.fromMe && isBangsat) return 
		
		if (gconly && !ben.key.fromMe && !isOwner && from.endsWith('@s.whatsapp.net')) return
		
	      if (pconly && !ben.key.fromMe && !isOwner && from.endsWith('@g.us')) return
		
	        // Automate
             premium.expiredCheck(_premium)
			 cron.schedule('0 0 * * *', () => {
            const reset = []
            _limit = reset
            console.log('Resetting user limit...')
            fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
            console.log('Success!')
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        })
		 
		 
		//On off function
		if (isGroup && isBot) {
			if (!isGroupAdmins && !ben.key.fromMe) return 
		}
		    //Ban function
			if (isCmd && isBanned && !isOwner && !ben.key.fromMe) return
			// AFK by Slavyan
            if (isGroup) {
            if (afk.checkAfkUser(sender, _afk) && !isCmd) {
                _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                fs.writeFileSync('./src/afk.json', JSON.stringify(_afk))
						   benny.sendMessage(from, `*@${sender.split('@')[0]}* telah kembali dari AFK! Selamat datang kembali~`, text, {contextInfo: {mentionedJid: [sender]}})
            }
        }
			
			//On off function
		   
		   if (isCmd) {
		  botHit.push(sender)
		  fs.writeFileSync('./src/botHit.json', JSON.stringify(botHit))
		   }
		   
		   /**if (isCmd && !ben.key.fromMe && !isRegistered) {
			   umur = Math.floor(Math.random() * 30)
				serial = crypto.randomBytes(10).toString('hex').slice(0, 10)
				console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Age:', color(umur, 'cyan'), 'Serial:', color(serial, 'cyan'))
			   register.addRegisteredUser(sender, pushname, umur, time, serial, _registered)
			   benny.sendMessage(botNumber, `@${sender.split('@')[0]}`, text, {contextInfo:{mentionedJid: [sender]}})
			   benny.sendMessage(botNumber, serial, text)
		   }*/
		   if (ben.key.fromMe && isOwner && budy.startsWith('>')){
				var code = budy.slice(2)
					try {
                if (!code) return reply('No JavaScript Code')
                let evaled;
 
                if (code.includes("--silent") && code.includes("--async")) {
                code = code.replace("--async", "").replace("--silent", "");
                return await eval(`(async () => { ${code} })()`)
                } else if (code.includes("--async")) {
                code = code.replace("--async", "");
                evaled = await eval(`(async () => { ${code} })()`);
                } else if (code.includes("--silent")) {
                code = code.replace("--silent", "");
                return await eval(code);
                } else evaled = await eval(code);
              if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
            let output = clean(evaled);
            benny.sendMessage(from, output, text, {quoted: ben})
            } catch(err) {
                outerr = clean(err)
                reply(`Error: ${outerr}`)
            }
			}
		
			if (budy.toLowerCase() === 'nyerah') {
			   await reply(`*Yah kamu menyerah, cemen!*`)
				tebakgambar = []
				tebakkabupaten = []
				susunkata = []
				tebakkata = []
				tekateki = []
				tebaktebakan = []
				tebakbendera = []
				tebaklagu = []
				suitpvp = []
				tebakkimia = []
				tebakkalimat = []
				tebaklirik = []
				sudb.splice(sudb)
				fs.writeFileSync('./src/game/suitpvp.json', JSON.stringify(sudb))
				tgdb.splice(tgdb)
				fs.writeFileSync('./src/game/tebakgambar.json', JSON.stringify(tgdb))
				tmdb.splice(tmdb)
				fs.writeFileSync('./src/game/tebakkimia.json', JSON.stringify(tmdb))
				tldb.splice(tldb)
				fs.writeFileSync('./src/game/tebaklirik.json', JSON.stringify(tldb))
				tudb.splice(tudb)
				fs.writeFileSync('./src/game/tebaklagu.json', JSON.stringify(tudb))
				tndb.splice(tndb)
				fs.writeFileSync('./src/game/tebakanime.json', JSON.stringify(tndb))
				tbdb.splice(tbdb)
				fs.writeFileSync('./src/game/tebakbendera.json', JSON.stringify(tbdb))
				tddb.splice(tddb)
				fs.writeFileSync('./src/game/tebakkabupaten.json', JSON.stringify(tddb))
				ttdb.splice(ttdb)
				fs.writeFileSync('./src/game/tebaktebakan.json', JSON.stringify(ttdb))
				tadb.splice(tadb)
				fs.writeFileSync('./src/game/tebakkalimat.json', JSON.stringify(tadb))
				mtdb.splice(mtdb)
				fs.writeFileSync('./src/game/math.json', JSON.stringify(mtdb))
				tidb.splice(tidb)
				fs.writeFileSync('./src/game/tebakkata.json', JSON.stringify(tidb))
				tkdb.splice(tkdb)
				fs.writeFileSync('./src/game/tekateki.json', JSON.stringify(tkdb))
				skdb.splice(skdb)
				fs.writeFileSync('./src/game/susunkata.json', JSON.stringify(skdb))
           asdb.splice(asdb)
				fs.writeFileSync('./src/game/asahotak.json', JSON.stringify(asdb))
           cadb.splice(cadb)
				fs.writeFileSync('./src/game/caklontong.json', JSON.stringify(cadb))
          fadb.splice(fadb)
				fs.writeFileSync('./src/game/family100.json', JSON.stringify(fadb))
          spdb.splice(spdb)
				fs.writeFileSync('./src/game/siapakahaku.json', JSON.stringify(spdb))
            }
			if (tgdb.includes(from)) {
				if (ben && ben.quoted && ben.quoted.id === tebakgambar[0].sender) {
            if (!isCmd && budy.toLowerCase() === tebakgambar[0].jawaban) {
				 gbutsan = [
  {buttonId: '#tebakgambar', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebakgambar[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebakgambar = []
				tgdb.splice(tgdb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebakgambar.json', JSON.stringify(tgdb))
            } else if (!isCmd && budy.toLowerCase() !== tebakgambar[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
			}
		if (tmdb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === tebakkimia[0].sender) {
            if (!isCmd && budy.toLowerCase() === tebakkimia[0].jawaban ) {
               	 gbutsan = [
  {buttonId: '#tebakkimia', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebakkimia[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebakkimia = []
				tmdb.splice(tmdb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebakkimia.json', JSON.stringify(tmdb))
            } else if (!isCmd && budy.toLowerCase() !== tebakkimia[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
          if (tldb.includes(from)) {
			  if (ben && ben.quoted && ben.quoted.id === tebaklirik[0].sender) {
            if (!isCmd && budy.toLowerCase() === tebaklirik[0].jawaban ) {
                gbutsan = [
  {buttonId: '#tebaklirik', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebaklirik[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebaklirik = []
				tldb.splice(tldb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebaklirik.json', JSON.stringify(tldb))
           } else if (!isCmd && budy.toLowerCase() !== tebaklirik[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
			  }
        }
		if (tudb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === tebaklagu[0].sender) {
            if (!isCmd && budy.toLowerCase().includes(tebaklagu[0].jawaban)) {
             gbutsan = [
  {buttonId: '#tebaklagu', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebaklagu[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebaklagu = []
				tudb.splice(tudb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebaklagu.json', JSON.stringify(tudb))
           } else if (!isCmd && budy.toLowerCase() !== tebaklagu[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (mtdb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === math[0].sender) {
            if (!isCmd && budy.toLowerCase() === math[0].jawaban) {
                 gbutsan = [
  {buttonId: math[0].command, buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${math[0].jawaban}\n\nIngin bermain lagi? kirim *${math[0].command}*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				math = []
				mtdb.splice(mtdb.indexOf(from), 1)
				fs.writeFileSync('./src/game/math.json', JSON.stringify(mtdb))
           } else if (!isCmd && budy.toLowerCase() !== math[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (sudb.includes(from)) {
		if (ben && ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId === suitpvp[0].id) {
			if (sender === suitpvp[0].pemain2 && budy.toLowerCase() === 'y') {
				ben.reply('*Game dimulai!*')
			} else if (sender === suitpvp[0].pemain2 && budy.toLowerCase() === 'n') {
				suitpvp = []
				ben.reply('*Game dibatalkan!*')
		}
				}
		}
		if (tbdb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === tebakbendera[0].sender) {
            if (!isCmd && budy.toLowerCase() === tebakbendera[0].jawaban) {
                 gbutsan = [
  {buttonId: '#tebakbendera', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebakbendera[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebakbendera = []
				tbdb.splice(tbdb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebakbendera.json', JSON.stringify(tbdb))
           } else if (!isCmd && budy.toLowerCase() !== tebakbendera[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (tndb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === tebakanime[0].sender) {
            if (!isCmd && tebakanime[0].jawaban.includes(budy.toLowerCase())) {
                 gbutsan = [
  {buttonId: '#tebakanime', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebakanime[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebakanime = []
				tndb.splice(tndb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebakanime.json', JSON.stringify(tndb))
           } else if (!isCmd && !tebakanime[0].jawaban.includes(budy.toLowerCase())) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (tddb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === tebakkabupaten[0].sender) {
            if (!isCmd && budy.toLowerCase() === tebakkabupaten[0].jawaban) {
               gbutsan = [
  {buttonId: '#tebakkabupaten', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebakkabupaten[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebakkabupaten*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebakkabupaten = []
				tddb.splice(tddb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebakkabupaten.json', JSON.stringify(tddb))
            } else if (!isCmd && budy.toLowerCase() !== tebakkabupaten[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (ttdb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === tebaktebakan[0].sender) {
            if (!isCmd && budy.toLowerCase() === tebaktebakan[0].jawaban) {
                gbutsan = [
  {buttonId: '#tebaktebakan', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebaktebakan[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebaktebakan = []
				ttdb.splice(ttdb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebaktebakan.json', JSON.stringify(ttdb))
            } else if (!isCmd && budy.toLowerCase() !== tebaktebakan[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (tadb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === tebakkalimat[0].sender) {
            if (!isCmd && budy.toLowerCase() === tebakkalimat[0].jawaban) {
                gbutsan = [
  {buttonId: '#tebakalimat', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebakkalimat[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebakkalimat*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebakkalimat = []
				tadb.splice(tadb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebakkalimat.json', JSON.stringify(tadb))
           } else if (!isCmd && budy.toLowerCase() !== tebakkalimat[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (asdb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === asahotak[0].sender) {
            if (!isCmd && budy.toLowerCase() === asahotak[0].jawaban) {
                 gbutsan = [
  {buttonId: '#asahotak', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${asahotak[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}asahotak*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				asahotak = []
				asdb.splice(asdb.indexOf(from), 1)
				fs.writeFileSync('./src/game/asahotak.json', JSON.stringify(asdb))
            } else if (!isCmd && budy.toLowerCase() !== asahotak[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (fadb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === family100[0].sender) {
            if (!isCmd && family100[0].jawaban.includes(budy.toLowerCase())) {
                 gbutsan = [
  {buttonId: '#family100', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${family100[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}family100*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				family100 = []
				fadb.splice(fadb.indexOf(from), 1)
				fs.writeFileSync('./src/game/family100.json', JSON.stringify(fadb))
            } else if (!isCmd && !family100[0].jawaban.includes(budy.toLowerCase())) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (spdb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === siapakahaku[0].sender) {
            if (!isCmd && budy.toLowerCase() === siapakahaku[0].jawaban) {
                 gbutsan = [
  {buttonId: '#siapakahaku', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${siapakahaku[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}siapakahaku*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				siapakahaku = []
				spdb.splice(spdb.indexOf(from), 1)
				fs.writeFileSync('./src/game/siapakahaku.json', JSON.stringify(spdb))
           } else if (!isCmd && budy.toLowerCase() !== siapakahaku[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (cadb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === caklontong[0].sender) {
            if (!isCmd && budy.toLowerCase() === caklontong[0].jawaban) {
                 gbutsan = [
  {buttonId: '#caklontong', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${caklontong[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}caklontong*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				caklontong = []
				cadb.splice(cadb.indexOf(from), 1)
				fs.writeFileSync('./src/game/caklontong.json', JSON.stringify(cadb))
            } else if (!isCmd && budy.toLowerCase() !== caklontong[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (tidb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === tebakkata[0].sender) {
            if (!isCmd && budy.toLowerCase() === tebakkata[0].jawaban) {
                 gbutsan = [
  {buttonId: '#tebakkata', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tebakkata[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tebakkata = []
				tidb.splice(tidb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tebakkata.json', JSON.stringify(tidb))
           } else if (!isCmd && budy.toLowerCase() !== tebakkata[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
		if (tkdb.includes(from)) {
			if (ben && ben.quoted && ben.quoted.id === tekateki[0].sender) {
            if (!isCmd && budy.toLowerCase() === tekateki[0].jawaban ) {
                gbutsan = [
  {buttonId: '#tekateki', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${tekateki[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}tekateki*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				tekateki = []
				tkdb.splice(tkdb.indexOf(from), 1)
				fs.writeFileSync('./src/game/tekateki.json', JSON.stringify(tkdb))
            } else if (!isCmd && budy.toLowerCase() !== tekateki[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		}
           if (skdb.includes(from)) {
			   if (ben && ben.quoted && ben.quoted.id === susunkata[0].sender) {
            if (!isCmd && budy.toLowerCase() === susunkata[0].jawaban) {
                gbutsan = [
  {buttonId: '#susunkata', buttonText: {displayText: 'MAIN LAGI'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: `*Selamat jawaban kamu benar*\n*Jawaban :* ${susunkata[0].jawaban}\n\nIngin bermain lagi? kirim *${prefix}susunkata*`,
    footerText: '',
    buttons: gbutsan,
    headerType: 'EMPTY'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
				susunkata = []
				skdb.splice(tgdb.indexOf(from), 1)
				fs.writeFileSync('./src/game/susunkata.json', JSON.stringify(skdb))
           } else if (!isCmd && budy.toLowerCase() !== susunkata[0].jawaban) {
				reply('*Jawaban Salah!*')
			}
        }
		   }
        if (isGroup && mimic.includes(from)) {
			ben.copyNForward(from, true)
		}
		if (isGroup && ben.key.fromMe && audel.includes(from)) {
			benny.deleteMessage(from, { id: ben.key.id, remoteJid: from, fromMe: true })
		}
	
			switch(command) {
				case 'math':
				if (mtdb.includes(from)) return reply('Masih ada soal yang belum di selesaikan')
			tengahan = ['+','*',':','-']
		kali = tengahan[Math.floor(Math.random() * tengahan.length)]
					if (arg == 'easy') {
						esy = Math.floor(Math.random() * 100)
						easy = Math.floor(Math.random() * 100)
						soalan = esy + kali + easy
						let pao = await benny.sendMessage(from, `Berapa Hasil dari ${soalan.toString()} ?\n\n*Reply soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
						let anih = await Math_js.evaluate(soalan)
						math.push({jawaban: anih.toString(), sender: pao.key.id, command: budy})
						console.log(math)
						mtdb.push(from)
						fs.writeFileSync('./src/game/math.json', JSON.stringify(mtdb))
					} else if (arg == 'medium') {
						esy = Math.floor(Math.random() * 1000)
						easy = Math.floor(Math.random() * 1000)
						soalan = esy + kali + easy
						let pao = await benny.sendMessage(from, `Berapa Hasil dari ${soalan.toString()} ?\n\n*Reply soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
						let anih = await Math_js.evaluate(soalan)
						math.push({jawaban: anih.toString(), sender: pao.key.id, command: budy})
						console.log(math)
						mtdb.push(from)
						fs.writeFileSync('./src/game/math.json', JSON.stringify(mtdb))
					} else if (arg == 'hard') {
						esy = Math.floor(Math.random() * 10000)
						easy = Math.floor(Math.random() * 10000)
						soalan = esy + kali + easy
						let pao = await benny.sendMessage(from, `Berapa Hasil dari ${soalan.toString()} ?\n\n*Reply soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
						let anih = await Math_js.evaluate(soalan)
						math.push({jawaban: anih.toString(), sender: pao.key.id, command: budy})
						console.log(math)
						mtdb.push(from)
						fs.writeFileSync('./src/game/math.json', JSON.stringify(mtdb))
					} else if (arg == 'extreme') {
						esy = Math.floor(Math.random() * 100000)
						easy = Math.floor(Math.random() * 100000)
						soalan = esy + kali + easy
						let pao = await benny.sendMessage(from, `Berapa Hasil dari ${soalan.toString()} ?\n\n*Reply soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
						let anih = await Math_js.evaluate(soalan)
						math.push({jawaban: anih.toString(), sender: pao.key.id, command: budy})
						console.log(math)
						mtdb.push(from)
						fs.writeFileSync('./src/game/math.json', JSON.stringify(mtdb))
					}
					break
			case 'wa.me':  case 'wame':
  benny.updatePresence(from, Presence.composing) 
      const palal = {
          text: `SELF WHATSAPP\n\n_Request by_ : @${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    benny.sendMessage(from, palal, text,{ caption: text, contextInfo: { participant: groupId, quotedMessage: { conversation: '*_WA ME_*' } } }) 
				break
			case 'tampar':sendStickerFromUrl(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
					break
		case 'dadu':
			        random = Math.floor(Math.random() * 6)
					sendStickerFromUrl(from, `https://www.random.org/dice/dice${random}.png`)
					break

				case 'hidetag':
				if (!isGroup) return reply(mess.only.group)
				if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
					benny.sendMessage(from, arg, text, {quoted: ben, contextInfo:{mentionedJid: members_id}})
					break
					case 'cekbot':if (!isGroup) return reply(mess.only.group)
											if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					mems = []
					teks = `*LIST BOT DI GROUP INI*\n\n`
					for (let mem of groupMembers){
					console.log(mem)
					woilo = mem.jid
					l = 1
					namadia = await getName(woilo)
					mems.push({jid: woilo, name: namadia})
					}
					memss = []
					korbannama = ['bot','Bot','BOT','bOt','boT']
					console.log(mems)
					for (let e = 0; e < korbannama.length; e++) {
					for (let i = 0; i < mems.length; i++) {
						if (mems[i].name.includes(korbannama[e])) {
							memss.push(mems[i].jid)
						}
					}
					}
					for (let p of memss) {
					teks += `*${l++}.* @${p.split('@')[0]}\n`
					}
					teks += `Total: ${memss.length}`
					benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid: memss}, quoted: ben})
					break
					case 'kickadmin':
					if (!isGroup) return reply(mess.only.group)
			        if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						for (let i = 0; i < groupMembers.length; i++) {
							if (groupMembers && groupMembers[i].isAdmin && !groupMembers[i].jid.includes(benny.user.jid)) {
								await sleep(3000)
								benny.groupRemove(from, [groupMembers[i].jid])
							}
						}
						break
						case 'autodelchatbot':{
							if (!isGroup) return reply(mess.only.group)
								if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
								if (arg === 'on') {
									audel.push(from)
									fs.writeFileSync('./src/audel.json', JSON.stringify(audel))
									reply('*Done!*')
								} else if (arg === 'off') {
									audel.splice(audel.indexOf(from), 1)
									fs.writeFileSync('./src/audel.json', JSON.stringify(audel))
									reply('*Done!*')
								} else {
									reply('Pilih on atau off!')
								}
						}
								break
					case 'kickmember':
					if (!isGroup) return reply(mess.only.group)
			        if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						for (let i = 0; i < groupMembers.length; i++) {
							if (groupMembers && !groupMembers[i].isAdmin && !groupMembers[i].isSuperAdmin && !groupMembers[i].jid.includes(benny.user.jid)) {
								await sleep(3000)
								benny.groupRemove(from, [groupMembers[i].jid])
							}
						}
						break
					case 'kickbot':if (!isGroup) return reply(mess.only.group)
											if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					mems = []
					teks = `*LIST BOT DI GROUP INI*\n\n`
					for (let mem of groupMembers){
					console.log(mem)
					woilo = mem.jid
					l = 1
					namadia = await getName(woilo)
					mems.push({jid: woilo, name: namadia})
					}
					memss = []
					korbannama = ['bot','Bot','BOT','bOt','boT']
					console.log(mems)
					for (let e = 0; e < korbannama.length; e++) {
					for (let i = 0; i < mems.length; i++) {
						if (mems[i].name.includes(korbannama[e])) {
							memss.push(mems[i].jid)
						}
					}
					}
					for (let p of memss) {
					teks += `*${l++}.* @${p.split('@')[0]}\n`
					}
					benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid: memss}, quoted: ben})
					for (let u = 0; u < memss.length; u++) {
						await sleep(2000)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					benny.groupRemove(from, [memss[u]])
					}
					console.log(memss)
					break
					case 'carinama':	if (!isGroup) return reply(mess.only.group)
					tex = body.slice(10)
					ap = []
					teks = ''
					tekss = 1
					for (let an of groupMembers) {
						anp = await getName(an.jid)
						ap.push({jid: an.jid, name: anp})
					}
					console.log(ap)
				for (let o = 0; o < ap.length; o++) {
						if (ap[o].name.toLowerCase().includes(tex)) {
						teks += `*${tekss++}.* *${ap[o].name}* ( @${ap[o].jid.split('@')[0]} )\n`
					}
				}
					benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid: parseMention(teks)}, quoted: ben})
					break
					case 'bcloc':
					if (!ben.key.fromMe && !isOwner) return
					let bcsg = await benny.chats.all()
							for (let i = 0; i < bcsg.length; i++) {
								await sleep(3000)
							benny.sendMessage(bcsg[i].jid, {name: `_*[ BROADCAST ]*_`, address: arg, jpegThumbnail: await getBuffer(await getPP(sender))}, location, {quoted: ben})
							}
							break
					case 'bcstick':
					case 'bcsticker':
					case 'stickbc':
					if (!ben.key.fromMe && !isOwner) return
					if (isQuotedSticker) {
						let bcg = await benny.chats.all()
							let avj = await downloadM()
							for (let i = 0; i < bcg.length; i++) {
								await sleep(3000)
							benny.sendMessage(bcg[i].jid, fs.readFileSync(avj), sticker, {quoted: ben})
							}
					} else {
						reply(`Reply Sticker dengan caption ${prefix+command} <Text>`)
					} break
					case 'bugkontak':
					let bugk = []
					top = ''
					for (let i = 0; i < 500; i++) {
						top += `TEL;type=Casa;type=Casa;waid=${i}:+${i}\n`
					}
					const vcardv = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${namabot} \n` // GANTI NAMA LU
            + `ORG:${namabot};\n`
            + top // GANTI NOMOR LU
            + `END:VCARD`
					benny.sendMessage(from, {displayName: namabot, vcard: vcardv}, contact)
					break
					case 'bcvideo':
					case 'bcvid':
					case 'videobc':
					if (!ben.key.fromMe && !isOwner) return
					if (ben.message.videoMessage || isQuotedVideo) {
						let bcg = await benny.chats.all()
							let ak = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							let avj = await benny.downloadAndSaveMediaMessage(ak)
					let teks = `*_[ BROADCAST ]_*\n\n${arg}`
							for (let i = 0; i < bcg.length; i++) {
								await sleep(3000)
							benny.sendMessage(bcg[i].jid, fs.readFileSync(avj), video, {quoted: ben, caption: teks})
							}
					} else {
						reply(`Kirim video dengan caption ${prefix}bcvideo <Text> / Reply Video dengan caption ${prefix+command} <Text>`)
					} break
					case 'bcimage':
					case 'bcgambar':
					case 'imagebc':
					if (!ben.key.fromMe && !isOwner) return
					if (ben.message.imageMessage || isQuotedImage) {
						let bcg = await benny.chats.all()
							let ak = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							let avj = await benny.downloadAndSaveMediaMessage(ak)
					let teks = `*_[ BROADCAST ]_*\n\n${arg}`
							for (let i = 0; i < bcg.length; i++) {
								await sleep(3000)
							benny.sendMessage(bcg[i].jid, fs.readFileSync(avj), image, {quoted: ben, caption: teks})
							}
					} else {
						reply(`Kirim gambar dengan caption ${prefix}bcvideo <Text> / Reply gambar dengan caption ${prefix+command} <Text>`)
					} break
					case 'bc':
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					teks = `❉──────────────────❉
        *_BROADCAST_*
❉──────────────────❉\n\n${arg}`
					let p = await benny.chats.all()
					for (let i = 0; i < p.length; i++) {
						if (p && !pi.includes(p[i].jid)) {
						await sleep(2000)
						benny.sendMessage(p[i].jid, teks, text, {quoted: ben})
						}
					} break
					case 'getallbio':{	if (!isGroup) return reply(mess.only.group)
					alp = []
					let p = 1
					teks = ''
					for (let o of groupMembers) {
						alo = await benny.getStatus(o.jid)
						alp.push({status: alo.status, jid: o.jid})
						teks += `*${p++}.* ${alo.status} ( @${o.jid.split('@')[0]} )\n`
					}
					benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid: parseMention(teks)}, quoted: ben})
					} break
					case 'getallname':{	if (!isGroup) return reply(mess.only.group)
					alp = []
					let p = 1
					teks = ''
					for (let o of groupMembers) {
						alo = await getName(o.jid)
						alp.push({name: alo, jid: o.jid})
						teks += `*${p++}.* ${alo} ( @${o.jid.split('@')[0]} )\n`
					}
					benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid: parseMention(teks)}, quoted: ben})
					} break
					case 'towameall':case 'getallwame':{	if (!isGroup) return reply(mess.only.group)
					let p = 1
					teks = ''
					for (let o of groupMembers) {
						teks += `*${p++}.* wa.me/${o.jid.split('@')[0]} ( @${o.jid.split('@')[0]} )\n`
					}
					benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid: parseMention(teks)}, quoted: ben})
					} break
					case 'bcpc':{
					if (!ben.key.fromMe && !isOwner) return
					teks = `_*[ BROADCAST PRIVATE CHAT ]*_\n\n${arg}`
					let p = await benny.chats.all()
					for (let i = 0; i < p.length; i++) {
						if (p && p[i].jid.endsWith('@s.whatsapp.net') && !pi.includes(p[i].jid)) {
						await sleep(2000)
						benny.sendMessage(p[i].jid, teks, text, {quoted: ben})
						}
					}
					} break
					case 'delttc':
			if (!ttcdb.includes(from)) return reply(`Tidak ada sesi yg berlangsung, mohon ketik ${prefix}tictactoe`)
					ttcdb.splice(ttcdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tictactoe.json', JSON.stringify(ttcdb))
                    if (fs.existsSync("./src/tictactoe/" + from + ".json")) {
                         fs.unlinkSync("./src/tictactoe/" + from + ".json");
                         reply(`Berhasil menghapus sesi di grup ini!`);
                    } else {
                         reply(`Tidak ada sesi yg berlangsung, mohon ketik ${prefix}tictactoe`);
                    }
                    break
					case 'warning':
					case 'warn':
					if (!isGroup) return reply(mess.only.group)
				    if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (arg === 'on') {
							if (fs.existsSync(`./src/warning/${from}.json`)) return reply('*Sudah aktif!*')
							fs.writeFileSync(`./src/warning/${from}.json`, "[]")
							ben.reply('*Mode warning berhasil diaktifkan di group ini!*')
						} else if (arg === 'off') {
							if (!fs.existsSync(`./src/warning/${from}.json`)) return reply('*Belum aktif!*')
							fs.unlinkSync(`./src/warning/${from}.json`)
							ben.reply('*Mode warning berhasil dinonaktifkan di group ini!*')
						} else {
							reply('Pilih on atau off!')
						}
						break
					case 'addwarn':
					case 'addwarning':{
					if (!isGroup) return reply(mess.only.group)
				    if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
						if (!fs.existsSync(`./src/warning/${from}.json`)) return reply(`Silahkan mengaktifkan mode warning dahulu!\nDengan cara:\n${prefix}${command}warning on`)
							if (!ben.mentionedJid[0]) return reply(from, `Format salah!\nContoh: ${prefix}${command} @buattag`, text, {quoted: ben, contextInfo:{mentionedJid: [botNumber]}})
				let warno = JSON.parse(fs.readFileSync(`./src/warning/${from}.json`))
				let wano = await checkWarn(ben.mentionedJid[0], warno)
				if (!wano) {
					addWarning(ben.mentionedJid[0], `./src/warning/${from}.json`, warno)
					benny.reply(ben.chat, `⚠️ *WARNING +1*`, ben)
            ben.reply('Kamu mendapatkan warn dari admin, total warn kamu sekarang *' + getWarn(ben.mentionedJid[0], warno) + '* warn, Jika kamu mendapat warn *3 kali*, kamu akan dikeluarkan dari grup', ben.mentionedJid[0])
				} else if (wano) {
					addWarn(ben.mentionedJid[0], `./src/warning/${from}.json`, warno)
					benny.reply(ben.chat, `⚠️ *WARNING +1*`, ben)
            ben.reply('Kamu mendapatkan warn dari admin, total warn kamu sekarang *' + getWarn(ben.mentionedJid[0], warno) + '* warn, Jika kamu mendapat warn *3 kali*, kamu akan dikeluarkan dari grup', ben.mentionedJid[0])
				}
			}
					break
case 'daftar':
				case 'verify':
                if (isRegistered) return reply('Nomor kamu sudah tedaftar')
				umur = Math.floor(Math.random() * 100)
				try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				buffu = await getBaper(ppimg)
				serial = crypto.randomBytes(15).toString('hex').slice(0, 15)
				teks = ` ુོ꙰➪ *REGISTER BERHASIL*

*Nama:* ${pushname}
*Umur:* ${umur}
*Tag:* @${sender.split('@')[0]}
*Nomor:* ${sender.replace('@s.whatsapp.net', '')}
*ID:* wa.me/${sender.replace('@s.whatsapp.net', '')}
*Serial:* ${serial}
				
*Catatan:*
Jangan pernah menyebarkan data *serial* ke pada siapapun!
Ketik *${prefix}rules* terlebih dahulu ya`
register.addRegisteredUser(sender, pushname, umur, time, serial, _registered)
gbutsan = [
  {buttonId: `.cekserial ${serial}`, buttonText: {displayText: 'Check Serial'}, type: 'RESPONSE'},
    {buttonId: '.rules', buttonText: {displayText: 'Rules Bot'}, type: 'RESPONSE'},
      {buttonId: '#menu', buttonText: {displayText: 'Command Bot'}, type: 'RESPONSE'}
]
					mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, jpegThumbnail: buffu}, location, {quoted: adadeh, thumbnail: buffu})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
buttons: gbutsan,
    contentText: teks,
    footerText: 'Terimah Kasih Telah Daftar',
    headerType: 'LOCATION'
}
					benny.sendMessage(from, gbuttonan, buttonsMessage, {contextInfo: {mentionedJid: [sender]}, thumbnail: buffu, quoted: { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: {"groupInviteMessage": { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", thumbnail: setthumb, "groupName": "Tes", "caption": `+${sender.split('@')[0]} Joined` }}}})
				
			  console.log(color('Waduh Ada Yang Daftar Tu'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Age:', color(umur, 'cyan'), 'Serial:', color(serial, 'cyan'))
			  benny.sendMessage(`6285709331584@s.whatsapp.net`, `New Registrasi @${sender.split('@')[0]}`, text, {contextInfo:{mentionedJid: [sender]}})
			   benny.sendMessage(sender, `Ini Kak Serial Kak Jangan Lupa Cek serial ${serial}`, text)
            break
case 'rules':
reply(`Rules To Bot

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!
    `)
    break
					case 'tiktokstalk':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					   if (!q) return reply(`Masukan Username`)
					anu = await fetchJson(`https://api-xcoders.xyz/api/stalk/tiktok?username=${q}&apikey=XSIHcH8N7B`)
				   teks = `{\n"UserName": "${anu.result.username}\n "followers": "${anu.result.followers}"\n  "verified": "${anu.result.verified}"\n"VideoCount": "${anu.result.videoCount}\n"heartsCount": "${anu.result.heartsCount}"\n"Status Akun": "${anu.result.privateAccount}"\n}`
				   buffer = await getBaper(anu.result.profile)
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
						
		break
					case 'delwarn':
					case 'delwarning':{
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!isGroup) return reply(mess.only.group)
				    if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
						if (!fs.existsSync(`./src/warning/${from}.json`)) return reply(`Silahkan mengaktifkan mode warning dahulu!\nDengan cara:\n${prefix}${command}warning on`)
							if (!ben.mentionedJid[0]) return reply(from, `Format salah!\nContoh: ${prefix}${command} @buattag`, text, {quoted: ben, contextInfo:{mentionedJid: [botNumber]}})
				let warno = JSON.parse(fs.readFileSync(`./src/warning/${from}.json`))
				let wano = await checkWarn(ben.mentionedJid[0], warno)
				if (!wano) {
					delWarn(ben.mentionedJid[0], `./src/warning/${from}.json`, warno)
					benny.reply(ben.chat, `⚠️ *WARNING -1*`, ben)
            ben.reply('Admin telah menghapus 1 warn kamu, total warn kamu sekarang *' + getWarn(ben.mentionedJid[0], warno) + '* warn, Jika kamu mendapat warn *3 kali*, kamu akan dikeluarkan dari grup', ben.mentionedJid[0])
				} else if (wano) {
					delWarn(ben.mentionedJid[0], `./src/warning/${from}.json`, warno)
					benny.reply(ben.chat, `⚠️ *WARNING -1*`, ben)
            ben.reply('Admin telah menghapus 1 warn kamu, total warn kamu sekarang *' + getWarn(ben.mentionedJid[0], warno) + '* warn, Jika kamu mendapat warn *3 kali*, kamu akan dikeluarkan dari grup', ben.mentionedJid[0])
				}
					}
					break
					case 'tictactoe':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
			if (!arg) return benny.sendMessage(from, `*Tag lawannya!*\n*Contoh:* ${prefix}${command} @${buattag}`, text, {quoted: ben, contextInfo:{mentionedJid: [benny.user.jid]}})
					ttcdb.push(from)
					fs.writeFileSync('./src/game/tictactoe.json', JSON.stringify(ttcdb))
                    if (fs.existsSync(`./src/tictactoe/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*${decodeURI('%F0%9F%8E%AE')} Tictactoe Game*

     Sedang ada sesi permainan digrup ini\n\n@${boardnow.X} VS @${boardnow.O}

     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}

     Giliran : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}


          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


     `;
                         benny.sendMessage(from, chatMove, MessageType.text, {
                              quoted: ben,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (args.length === 0)
                         return reply(
                              `Tag yang ingin jadi lawan anda!\n\nPenggunaan : *${prefix}tictactoe <@TagMember>*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = args[0].replace("@", "");
                    fs.writeFileSync(
                         `./src/tictactoe/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*� Memulai game tictactoe �*

     @${sender.split('@')[0]} menantang anda untuk menjadi lawan game

     _[ @${ben.mentionedJid[0].split('@')[0]} ] Ketik Y/N (Y)untuk menerima (N)menolak permainan_`;
                    benny.sendMessage(from, strChat, MessageType.text, {
                         quoted: ben,
                         contextInfo: {
                              mentionedJid: [sender, arg.replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                    break
					case 'antibc':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						if (args.length === 2) {
							if (args[0] === 'on') {
								pi.push(args[1])
								fs.writeFileSync('./src/antibc.json', JSON.stringify(pi))
								reply('*Done!*')
							} else if (args[0] === 'off') {
								pi.splice(pi.indexOf(args[1]), 1)
								fs.writeFileSync('./src/antibc.json', JSON.stringify(pi))
							reply('*Done!*')
							}
						} else if (args.length === 1) {
							if (args[0] === 'on') {
								pi.push(from) 
									fs.writeFileSync('./src/antibc.json', JSON.stringify(pi))
									reply('*Done!*')
								} else if (args[0] === 'off') {
									pi.splice(pi.indexOf(from), 1)
									fs.writeFileSync('./src/antibc.json', JSON.stringify(pi))
									reply('*Done!*')
								}
							}
							break
					case 'bcgc':{
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!ben.key.fromMe && !isOwner) return
					teks = `_*[ BROADCAST GROUP ]*_\n\n${arg}`
					let p = await benny.chats.all()
					for (let i = 0; i < p.length; i++) {
						if (p && p[i].jid.endsWith('@g.us') && !pi.includes(p[i].jid)) {
						await sleep(2000)
						benny.sendMessage(p[i].jid, teks, text, {quoted: ben})
						}
						}
					} break
					case 'product':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (isQuotedImage) {
					anu = await downloadM()
imagej = (await benny.prepareMessageMedia(fs.readFileSync(anu),'imageMessage')).imageMessage
sendMessageFromContent(from,{"productMessage":{
"product":{
"productImage":imagej,
"productImageCount": 999,
"title": arg.split('|')[0],
"description": arg.split('|')[1], 
"currencyCode": "IDR",
"priceAmount1000": arg.split('|')[2],
"productId": "150453297177375"
},
"businessOwnerJid": benny.user.jid}})
					} else if (isQuotedSticker) {
						anu = await downloadM()
						ran = getRandom('.png')
						exec(`ffmpeg -i ${anu} ${ran}`, async (err) => {
						
imagej = await (await benny.prepareMessageMedia(fs.readFileSync(ran),'imageMessage')).imageMessage
 
sendMessageFromContent(from,{"productMessage":{
"product":{
"productImage":imagej,
"productImageCount": 1,
"title": arg.split('|')[0],
"description": arg.split('|')[1], 
"currencyCode": "IDR",
"priceAmount1000": arg.split('|')[2],
"productId": "150453297177375"
},
"businessOwnerJid": benny.user.jid}})
						}) 
					} else { 
					reply('Reply Image/Sticker nya!')
					} break
					case 'renungan':{
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						let re = JSON.parse(fs.readFileSync('./src/renungan.json'))
					let nu = re[Math.floor(Math.random() * re.length)]
					let ng = await getBuffer(nu)
					benny.sendMessage(from, ng, image, {quoted: ben})
					}
					break
					case 'renungansw':{
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						let re = JSON.parse(fs.readFileSync('./src/renungan.json'))
					let nu = re[Math.floor(Math.random() * re.length)]
					let ng = await getBuffer(nu)
					benny.sendMessage('status@broadcast', ng, image, {quoted: ben})
					}
					break
					case 'reqfitur':{
					if (!arg) return reply('Mau request fitur apa?')
						if (arg.length > 200) return reply('Kepanjangan!')
						let teks = `*[ REQUEST FITUR ]*\n*Dari: @${sender.split('@')[0]}*\n\n${arg}`
						for (let o = 0; o<ownerNumber.length; o++) {
							await sleep(1000)
							benny.sendMessage(ownerNumber[o], teks, text, {contextInfo:{mentionedJid: parseMention(teks)}})
						}
						await reply(`Request fitur ${arg} telah dikirim ke owner!`)
					}
						break
					case 'addcmd':
           case 'setcmd':
              if (isQuotedSticker) {
              if (!arg) return reply(`Mana teks nya ?`)
              var kodenya = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, arg)
              reply('Berhasil!')
              } else {
              reply('tag stickenya')
			  }
              break
			  case 'setgconly':
			  if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				  gconly = true
			  reply('*Berhasil!*\n*Sekarang bot hanya merespon didalam grup!*')
			  break
			  case 'setpconly':
			  if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				  pconly = true
			  reply('*Berhasil!*\n*Sekarang bot hanya merespon didalam private chat!*')
			  break
			  case 'setall':
			   if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				     gconly = false
				  pconly = false
			  reply('*Berhasil!*\n*Sekarang bot merespon disemua pesan!*')
			  case 'presence':
			  if (!ben.key.fromMe && !isOwner) return
			  if (arg === 'on') {
				  presen = true
				  await reply('*Berhasil mengaktifkan mode presence!*')
			  } else if (arg === 'off') {
				  presen = false
				  await reply('*Berhasil mematikan mode presence!*')
			  }
			  break
       case 'delcmd':
       if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
              if (!isQuotedSticker) return reply(`Reply Stickernya!`)
              var kodenya = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
             scmd.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./src/command.json', JSON.stringify(scmd))
              reply('Berhasil')
              break
			  case 'cekcmd':{
				  if (!isQuotedSticker) return reply('Reply Stickernya!')
let teks = await getCmd(ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64'))
reply(teks)
			  }
break	  
       case 'listcmd':
              let teksnyee = `*[ LIST STICKER CMD ]*\n`
              let cemde = [];
              for (let i of scmd) {
              cemde.push(i.id)
              teksnyee += `\n\n? *ID :* ${i.id}\n? *Cmd* : ${i.chat}`
}
              mentions(teksnyee, cemde, true)
              break
			  case 'bctroli':
			  if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				  let bctr = await benny.chats.all()
			  for (let i = 0; i<bctr.length; i++) {
				  await sleep(2000)
			  let ttr = `*[ BROADCAST TROLI ]*\n\n${arg}`
				  spt = WAMessageProto.Message.fromObject({
						orderMessage: WAMessageProto.OrderMessage.fromObject({
							sellerJid: numbernye,
							itemCount: 0,
							orderTitle: pushname,
							thumbnail: await getBuffer(await getPP(sender)),
							status: 0,
						    surface: 0,
							message: ttr
						})
					});
					let scd = benny.prepareMessageFromContent(bctr[i].jid, spt, {quoted: ben});
					benny.relayWAMessage(scd)
			}
			break
					case 'bctrolipc':
			  if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				  let bctrs = await benny.chats.all()
			  for (let i = 0; i<bctrs.length; i++) {
				  if (bctrs && bctrs[i].jid.endsWith('@s.whatsapp.net')) {
				  await sleep(2000)
			  let ttr = `*[ BROADCAST TROLI PRIVATE ]*\n\n${arg}`
				  spt = WAMessageProto.Message.fromObject({
						orderMessage: WAMessageProto.OrderMessage.fromObject({
							sellerJid: numbernye,
							itemCount: 0,
							orderTitle: pushname,
							thumbnail: await getBuffer(await getPP(sender)),
							status: 0,
						    surface: 0,
							message: ttr
						})
					});
					let scd = benny.prepareMessageFromContent(bctrs[i].jid, spt, {quoted: ben});
					benny.relayWAMessage(scd)
			}
			  }
			break
					case 'bctroligc':
			  if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				  let bctrss = await benny.chats.all()
			  for (let i = 0; i<bctrss.length; i++) {
				  if (bctrss && bctrss[i].jid.endsWith('@g.us')) {
				  await sleep(2000)
			  let ttr = `*[ BROADCAST TROLI GROUP ]*\n\n${arg}`
				  spt = WAMessageProto.Message.fromObject({
						orderMessage: WAMessageProto.OrderMessage.fromObject({
							sellerJid: numbernye,
							itemCount: 0,
							orderTitle: pushname,
							thumbnail: await getBuffer(await getPP(sender)),
							status: 0,
						    surface: 0,
							message: ttr
						})
					});
					let scd = benny.prepareMessageFromContent(bctrss[i].jid, spt, {quoted: ben});
					benny.relayWAMessage(scd)
			}
			  }
			break
					case 'troli2':apas = body.slice(8)
					if (!Number(apas.split('|')[1])) return reply('Jumlah harus berupa angka!')
					if (isQuotedMedia) {
					anu = await downloadM()
					spt = WAMessageProto.Message.fromObject({
						orderMessage: WAMessageProto.OrderMessage.fromObject({
							sellerJid: numbernye,
							itemCount: apas.split('|')[1],
							orderTitle: 'no',
							thumbnail: fs.readFileSync(anu),
							status: 0,
						    surface: 0,
							message: apas.split('|')[0]
						})
					});
					let scd = benny.prepareMessageFromContent(from, spt, {quoted: ben});
					benny.relayWAMessage(scd)
					} else if (!isQuotedMedia) {
					anu = await getPP(sender)
					anus = await getBaper(anu)
					apas = body.slice(8)
					spt = WAMessageProto.Message.fromObject({
						orderMessage: WAMessageProto.OrderMessage.fromObject({
							sellerJid: numbernye,
							itemCount: apas.split('|')[1],
							orderTitle: 'no',
							thumbnail: anus,
							status: 0,
						    surface: 0,
							message: apas.split('|')[0]
						})
					});
					let scd = benny.prepareMessageFromContent(from, spt, {quoted: ben});
					benny.relayWAMessage(scd)
					} break
				case 'shota':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						var items = ['shota anime', 'anime shota'];
						var nime = items[Math.floor(Math.random() * items.length)];
						var url = "http://fdciabdul.tech/api/pinterest/?keyword=" + nime;
					
						axios.get(url)
						  .then((result) => {
							var n = JSON.parse(JSON.stringify(result.data));
							var nimek = n[Math.floor(Math.random() * n.length)];
							imageToBase64(nimek)
							.then(
								(response) => {
						var buf = Buffer.from(response, 'base64');
						benny.sendMessage(from, buf, MessageType.image, { caption: `*SHOTA!*`, quoted: ben })
								}
							)
							.catch(
								(error) => {
									console.log(error);
								}
							)
						
						});
						} break
				case 'hidetag2':var value = text.replace(text.split(' ')[0], `${body.slice(9)}`)
					var group = await benny.groupMetadata(from)
					var member = group['participants']
					var ids = []
					member.map( async adm => {
					ids.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionsss = {
					text: value,
					contextInfo: { mentionedJid: ids },
					quoted: ben
					}
					benny.sendMessage(from, optionsss, MessageType.text)
					break
					case 'reminderbc':if (!ben.key.fromMe && !isOwner) return
						teks = body.slice(12)
                const messR = teks.split('|')[0]
				const timeR = teks.split('|')[1]
                const parsedT = ms(toMs(timeR))
                reminder.addReminder(sender, messR, 'text', timeR, _reminder)
                benny.sendMessage(from, `
*-- ? REMINDER BROADCAST ? --*
    
Reminder berhasil diaktifkan!
? *Pesan*: ${messR}
? *Durasi*: ${parsedT.hours} jam ${parsedT.minutes} menit ${parsedT.seconds} detik
    `, text, {quoted: ben})
                const intervR = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						anu = await benny.chats.all()
                        for (let p of anu) {
							await sleep(2000)
							benny.sendMessage(p.jid, `_*BROADCAST*_\n\n${messR}`, text, {quoted: ben})
						}
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervR)
                    }
                }, 1000)
				break
				case 'brainly':var teks = body.slice(9)
					anu = await brainly(teks, 5, 'id')
					console.log(anu.data[0].jawaban)
					teks = `*BRAINLY*\n\n`
					for (let o of anu.data) {
					for (let i of o.jawaban) {
						teks += `Pertanyaan: ${o.pertanyaan}\nJawaban: ${i.text}\n==============================\n`
					}
					}
					console.log(anu)
					reply(teks.trim())
				break
				case 'publicgc':
				if (!isGroup) return reply(mess.only.group)
					if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							benny.groupSettingChange(from, GroupSettingChange.settingsChange, false).then(() => reply('*Sukses public group*'))
						break
				case 'privategc':
				case 'privatgc':
				if (!isGroup) return reply(mess.only.group)
					if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							benny.groupSettingChange(from, GroupSettingChange.settingsChange, true).then(() => reply('*Sukses private group*'))
						break
				case 'opengc':
				if (!isGroup) return reply(mess.only.group)
					if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							benny.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => reply('*Sukses open group*'))
						break
				case 'closegc':
				if (!isGroup) return reply(mess.only.group)
					if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							benny.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => reply('*Sukses close group*'))
						break
				case 'group':case 'grup':if (!isGroup) return reply(mess.only.group)
					if (args[0] === 'open') {
					reply(`? *SUCCES OPEN GRUP* ?`)
					benny.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
					await benny.groupSettingChange(from, GroupSettingChange.messageSend, true)
					reply(`? *SUCCES CLOSE GRUP* ?`)
					} break
				case 'infogempa':
				anu = await getGempa()
				teks = `*${anu.waktu}*\n?? *Lokasi* : *${anu.lokasi}*\n?? *Kedalaman* : *${anu.kedalaman}*\n?? *Magnitudo* : *${anu.magnitudo}*\n?? *Potensi* : *${anu.tsunami}*\n?? *Koordinat* : *${anu.koordinat}*`
				buffer = await getBaper(anu.gambar)
				benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
				break
				case 'cuaca':
				if (arg.length < 1) return reply('Masukan nama kota!')
				tekss = body.slice(7)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${tekss}?apikey=${lolkey}`)
				   teks = `*╚❏* *CUACA*\n*╠❏*\n*╠❏* *Kota:* ${anu.result.tempat}\n*╠❏* *Cuaca:* ${anu.result.cuaca}\n*╠❏* *Suhu:* @${anu.result.suhu}\n*╠❏* *Kelembapan:* ${anu.result.kelembapan}\n*╠❏* *Angin:* ${anu.result.angin}\n*╠❏* *Latitude:* ${anu.result.latitude}\n*╚❏* *Longitude:* ${anu.result.longitude}`
                   reply(teks)
		break
		case 'covid':
				   anu = await fetchJson(`https://coronavirus-19-api.herokuapp.com/countries/${body.slice(7)}`)
				   p = anu
				   teks = `*╚❏* *INFO COVID ${body.slice(7)}*\n*╠❏*\n*╠❏* *Positif:* ${p.cases}\n*╠❏* *Sembuh:* ${p.recovered}\n*╠❏* *Meninggoy:* ${p.deaths}\n*╚❏* *Dirawat:* ${p.testsPerOneMillion}`
                   reply(teks)
		break
		case 'covidindo':
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
				   p = anu.result
				   teks = `*╚❏* *INFO COVID*\n*╠❏*\n*╠❏* *Positif:* ${p.positif}\n*╠❏* *Sembuh:* ${p.sembuh}\n*╠❏* *Meninggoy:* ${p.meninggal}\n*╚❏* *Dirawat:* ${p.dirawat}`
                   reply(teks)
		break
		case 'upswteks':
		if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					benny.updatePresence(from, Presence.composing)
					benny.sendMessage('status@broadcast', {text: body.slice(10), jpegThumbnail: setthumb}, extendedText)
					reply(`Sukses Up story wea teks ${q}`)
					break
				case 'upswimage':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					benny.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
						cihcih = await benny.downloadMediaMessage(swsw)
						benny.sendMessage('status@broadcast', cihcih, image, { caption: `${body.slice(11)}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					benny.sendMessage(from, bur, text, {quoted: ben})
					break
				case 'upswstick':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					benny.updatePresence(from, Presence.composing)
					if (isQuotedSticker) {
						const swsw = JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
						cihcih = await benny.downloadMediaMessage(swsw)
						benny.sendMessage('status@broadcast', cihcih, sticker)
					}
					bur = `Sukses Upload Story Sticker`
					benny.sendMessage(from, bur, text, {quoted: ben})
					break
				case 'upswvideo':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					benny.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
						cihcih = await benny.downloadMediaMessage(swsw)
						benny.sendMessage('status@broadcast', cihcih, video, { caption: `${arg}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${body.slice(11)}`
					benny.sendMessage(from, bur, text, {quoted: ben})
					break  						
		case 'ssvid':if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
						cihcih = await benny.downloadAndSaveMediaMessage(swsw)
						ran = getRandom('.jpg')
                      exec(`ffmpeg -i ${cihcih} -ss ${args[0]} -vframes 1 ${ran}`, async(err) => {
					benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: ben, caption: 'Neh..'})
					  })
					} break  						
		case 'wmvid':if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
						cihcih = await benny.downloadAndSaveMediaMessage(swsw)
						ran = getRandom('.mp4')
                      exec(`ffmpeg -i "${cihcih}"
 -vf "drawtext=text='${args[0]}':x=10:y=H-th-10:
               fontfile=./src/segoe.ttf:fontsize=12:fontcolor=white:
               shadowcolor=black:shadowx=5:shadowy=5"
			   "${ran}"`, async(err) => {
					benny.sendMessage(from, fs.readFileSync(ran), video, {quoted: ben, caption: 'Neh..'})
					  })
					} break  			
				case 'get':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			      if (arg.length < 1) return reply('Mau get apa jir')
				  teks = body.slice(5)
				  anu = await fetchJson(teks)
				  reply(JSON.stringify(anu))
				  break
				case 'fetch':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			      if (arg.length < 1) return reply('Mau get apa jir')
  let res = await fetch(body.slice(7))
  if (!/text|json/.test(res.headers.get('content-type'))) return benny.sendMessage(from, body.slice(7), text, {quoted: ben})
  let txtf = await res.buffer()
  try {
    txtf = util.format(JSON.parse(txtf+''))
  } catch (e) {
    txtf = txtf + ''
  } finally {
    reply(txtf.slice(0, 65536) + '')
  }
				break
		case 'cuaca2':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://mnazria.herokuapp.com/api/bmkg-cuaca`)
				   teks = `*╚❏* *${anu.result.title}*\n*╠❏*\n`
				   for (let o of anu.result.desc) {
					   teks += `*╠❏* *Info:* ${o.info}\n======================\n`
				   }
				   reply(teks.trim())
		break
		case 'quotesislami':
		case 'quotesislam':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
		anu = await fetchJson(`https://cililitan2.herokuapp.com/api/randomquote/muslim?apikey=adadeh`)
		reply(anu.result.text_id)
		break
		case 'quotesimage':case 'qoutesimage':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await getBaper(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
				   reply(mess.wait)
				   benny.sendMessage(from, anu, image, {contextInfo: {mentionedJid: [sender]}, quoted: ben, caption: 'Neh..'})
		break
		case 'darkjokes':
		case 'darkjoke':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   reply(mess.wait)
					anu = await getBaper(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Dark Jokes'})
		break
		case 'estetik':
		case 'aestetik':
				   reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.me/api/estetikpic?apikey=YunitaGanteng`)
					buffer = await getBaper(anu.result.result)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Estetik'})
		break
		case 'puisiimage':
				   reply(mess.wait)
					buffer = await getBaper(`https://api.vhtear.com/puisi_image&apikey=${vhtearkey}`)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Estetik'})
		break
				  case 'pantun':
				   anu = await fetchJson(`https://pencarikode.xyz/api/pantun?apikey=pais`)
				   teks = `- *Pantun* : ${anu.pantun}`
				   reply(teks)
		break
				  case 'fakta':
				   anu = await fetchJson(`https://videfikri.com/api/fakta/`)
				   teks = `- *Fakta* : ${anu.result.fakta}`
				   reply(teks)
		break
		case 'style':
		anu = require('./lib/fancytext')
		pao = await anu.fancy(body.slice(7))
			reply(pao.result)
		break
		case 'findhost':
				teks = body.slice(10)
				   anu = await fetchJson(`https://api.banghasan.com/domain/hostsearch/${teks}`)
				   if (anu.hasil == 'API count exceeded - Increase Quota with Membership') return
				   reply(anu.hasil)
		break
		case 'cekping':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				teks = body.slice(10)
				   anu = await fetchJson(`https://api.banghasan.com/domain/nping/${teks}`)
				   if (anu.hasil == 'API count exceeded - Increase Quota with Membership') return
				   reply(anu.hasil)
		break
		case 'cekdns':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				teks = body.slice(10)
				   anu = await fetchJson(`https://api.banghasan.com/domain/dnslookup/${teks}`)
				   if (anu.hasil == 'API count exceeded - Increase Quota with Membership') return
				   reply(anu.hasil)
		break
		case 'bioskop':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				 tekss = body.slice(9)
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/bioskop?kota=${tekss}&apikey=undefined`)
				teks = `*╚❏* *BIOSKOP*\n\n`
				for (let o of anu.result) {
					 teks += `*Nama:* ${o.title}\n*Alamat:* ${o.alamat}\n*Bintang:* ${o.bintang}\n*Link:* ${o.url}\n============================\n`
				buffer = await getBaper(o.img)
				}
				  benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'kisahnabi':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				 tekss = body.slice(11)
				   anu = await fetchJson(`https://cililitan2.herokuapp.com/api/kisahnabi?nabi=${tekss}`)
				if (anu.status == false) return reply(`Masukan nama nabi yang benar! jangan main-main!`)
				nabi = anu.result.nabi
				buffer = await getBaper(nabi.image)
				teks = `*╚❏* *KISAH NABI*\n*╠❏* *Nama* : ${nabi.nabi}\n*╠❏* *Lahir* : ${nabi.lahir}\n*╠❏* *Umur* : ${nabi.umur}\n*╠❏* *Kota* : ${nabi.tempat}\n*╚❏* *Kisah* : ${nabi.kisah}\n`
                 benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
		break
		case 'niatshalat':
		case 'niatsholat':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://cililitan2.herokuapp.com/api/muslim/niatshalat?apikey=adadeh`)
				   teks = `*╚❏* *NIAT SHALAT*\n\n`
				   for (let o of anu.result) {
					  teks += `*${o.name}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.terjemahan}\n=============================\n`
				   }
				   reply(teks)
		break
		case 'cnnindo':
		case 'cnnindonesia':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
				   teks = `*╚❏* *CNN INDONESIA*\n\n\n===========================\n`
				   for (let o of anu.result) {
					   buffer = await getBaper(o.poster)
					  teks += `*${o.judul}*\n*Tipe:* ${o.tipe}\n*Waktu:* ${o.waktu}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'merdeka':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://pencarikode.xyz/news/merdeka?apikey=pais`)
				   teks = `*╚❏* *MERDEKA DOT COM*\n\n\n===========================\n`
				   g = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.thumb)
					  teks += `*${g++}. ${o.judul}*\n*Waktu:* ${o.uptime}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'liputan6':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://api.zeks.me/api/liputan6?apikey=${vhtearkey}`)
				   teks = `*LIPUTAN6 NEWS*\n\n\n────────────────────────\n`
				   j = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.thumb)
					  teks += `*${j++}. ${o.title}*\n*Ket:* ${o.ket}\n*Kategori:* ${o.category}\n*Waktu:* ${o.time}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'foxnews':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://api.zeks.me/api/foxnews?apikey=YunitaGanteng`)
				   teks = `*FOX NEWS*\n\n\n=────────────────────────\n`
				   v = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.thumb)
					  teks += `*${v++}. ${o.title}*\n*Ket:* ${o.content}\n*Negara:* ${o.country}\n*Waktu:* ${o.time}\n*Link:* ${o.url}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'neonime':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/neonimeongoing?apikey=Tobzzz17`)
				   teks = `*FOX NEWS*\n\n\n=────────────────────────\n`
				   v = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.image)
					  teks += `*${v++}. ${o.title}*\n*Desc:* ${o.desc}\n*Link:* ${o.link}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'tribunnews':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://api.zeks.me/api/tribunews?apikey=YunitaGanteng`)
				   teks = `*TRIBUN NEWS*\n\n\n────────────────────────\n`
				   h = 1
				   for (let o of anu.result) {
					  teks += `*${h++}. ${o.title}*\n*Ket:* ${o.ket}\n*Waktu:* ${o.time}\n*Link:* ${o.url}\n=============================\n`
				   }
				   reply(teks.trim())
		break
		case 'antaranews':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://pencarikode.xyz/news/merdeka?apikey=pais`)
				   teks = `*ANTARA NEWS*\n\n\n────────────────────────\n`
				   h = 1
				   for (let o of anu.result) {
					  teks += `*${h++}. ${o.title}*\n*Info:* ${o.uptime}\n*Link:* ${o.link}\n=============================\n`
				   }
				   reply(teks.trim())
		break
		case 'palingmurah':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://pencarikode.xyz/api/palingmurah?apikey=pais`)
				   teks = `*╚❏* *PALING MURAH*\n\n\n===========================\n`
				   y = 1
				   for (let o of anu.result) {
					  teks += `*${y++}. ${o.barang}*\n*Harga:* ${o.harga}\n*Penjual:* ${o.penjual}\n*Link:* ${o.url}\n=============================\n`
				   }
				   reply(teks.trim())
		break
		case 'berita':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolkey}`)
				   teks = `*BERITA TERBARU*\n\n`
				   op = 1
				   for (let o of anu.result) {
					   buffer = await getBaper(o.urlToImage)
					  teks += `*${p++}. ${o.source.name}*\n*Judul:* ${o.title}\n*Deskripsi:* ${o.description}\n*Author:* ${o.author}\n*Waktu:* ${o.publishedAt}\n*Link:* ${o.url}\n===========================\n`
				   }
				   benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
		break
		case 'shopee':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				tekss = body.slice(8)
				   anu = await fetchJson(`https://api.vhtear.com/shopee?query=${tekss}&count=10&apikey=${vhtearkey}`)
				   teks = `*SOPE ID*\n\n`
				   op = 1
				   for (let o of anu.result.items) {
					  teks += `*${p++}. ${o.nama}*\n*Harga:* ${o.harga}\n*Terjual:* ${o.terjual}\n*Lokasi toko:* ${o.shop_location}\n*Link:* ${o.link_product}\n===========================\n`
				   }
				   reply(teks.trim())
		break
		case 'doaharian':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://cililitan2.herokuapp.com/api/muslim/doaharian?apikey=adadeh`)
				   teks = `*DOA HARIAN*\n\n`
				   for (let o of anu.result.data) {
					  teks += `*${o.title}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.translation}\n=============================\n`
				   }
				   reply(teks)
		break
		case 'doatahlil': if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://cililitan2.herokuapp.com/api/muslim/tahlil`)
				   teks = `*DOA TAHLIL*\n\n`
				   for (let o of anu.result.data) {
					  teks += `*${o.title}*\n*Arab:* ${o.arabic}\n*Terjemah:* ${o.translation}\n=============================\n`
				   }
				   reply(teks)
		break
		case 'bacaanshalat':
		case 'bacaansholat':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://cililitan2.herokuapp.com/api/muslim/bacaanshalat`)
				   teks = `*BACAAN SHALAT*\n\n`
				   for (let o of anu.result) {
					  teks += `*${o.name}*\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.translation}\n=============================\n`
				   }
				   reply(teks)
		break
		 case 'asmaulhusna':   
		 if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
 let alhusna = JSON.parse(fs.readFileSync('./src/asmaulhusna.json'))
 let uhs = `          ASMAUL HUSNA          \n\n`
 for (let i of alhusna) {
 uhs += `*Urutan:* ${i.urutan}\n*Latin:* ${i.latin}\n*Arab:* ${i.arab}\n*Arti:* ${i.arti}\n\n`
 }
 reply(uhs)
                    break
		case 'doawirid':
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   anu = await fetchJson(`https://cililitan2.herokuapp.com/api/muslim/wirid`)
				   teks = `*DOA WIRID*\n\n`
				   for (let o of anu.result.data) {
					  teks += `*${o.id}* ${o.arabic}\n────────────────────────\n`
				   }
				   reply(teks)
		break
		case 'hadits':
				if (!Number(args[0])) return reply('Hadits berupa nomor!')
				tekss = body.slice(8)
				   anu = await fetchJson(`https://cililitan2.herokuapp.com/api/hadits?kitab=bukhari&nomor=${tekss}&apikey=undefined`)
				    o = anu.result.data
					teks = `*H.R BUKHORI*\n\n*${o.name}*\n*Arab:* ${o.contents.arab}\n*Latin:* ${o.contents.id}\n=============================\n`
				   reply(teks)
		break
		case 'ayatkursi':
				tekss = body.slice(8)
				   anu = await fetchJson(`https://cililitan2.herokuapp.com/api/muslim/ayatkursi`)
				    o = anu.result.data
					teks = `*AYAT KURSI*\n\n*Arab:* ${o.arabic}\n*Latin:* ${o.latin}\n*Terjemah:* ${o.translation}`
				   reply(teks)
		break
		case 'tolol':
		
		teks = body.slice(7)
		anu = await getBaper(`http://api.lolhuman.xyz/api/toloserti?apikey=${lolkey}&name=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: ben})
		break
		case 'youtuber':
		
		teks = body.slice(10)
		anu = await getBaper(`http://www.rzky.net/docs/api/YoutuberSerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: ben})
		break
		case 'jamet':
		
		teks = body.slice(7)
		anu = await getBaper(`http://www.rzky.net/docs/api/GoodBoySerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: ben})
		break
		case 'surga':
		
		teks = body.slice(7)
		anu = await getBaper(`http://www.rzky.net/docs/api/SurgaSerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: ben})
		break
		case 'badboy':
		
		teks = body.slice(8)
		anu = await getBaper(`http://www.rzky.net/docs/api/BadBoySerti/img.php?nama=${teks}`)
		benny.sendMessage(from, anu, image, {quoted: ben})
		break
	
		case 'bucin':
				   ono = JSON.parse(fs.readFileSync('./src/bucin.json'))
  randIndex = ono[Math.floor(Math.random() * ono.length)]
				   reply(randIndex)
		break
		case 'bucin2':
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=${lolkey}`)
				   teks = `*${anu.result}*`
				   reply(teks)
		break
case 'stalkff':
if (!q) return reply(`.stalkff id epep`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${q}?apikey=${lolkey}`)
teks = `Ini Nick Name Epepnya : ${anu.result}`
textImg (teks)
break
		case 'kodepos':
				if (arg.length < 1) return reply('*Kelurahan nya mana?*')
				 tekss = body.slice(9)
				   anu = await fetchJson(`https://videfikri.com/api/kodepos/?query=${tekss}`)
				   teks = `*╚❏* *KODE POS*\n*╠❏*\n*╠❏* *Kelurahan:* ${anu.result.kelurahan}\n*╠❏* *Kecamatan:* ${anu.result.kelurahan}\n*╠❏* *Kode pos:* ${anu.result.kodepos}\n*╠❏* *Provinsi:* ${anu.result.provinsi}\n*╚❏* *Kota:* ${anu.result.kota}`
				   textImg(teks)
		break
		case 'balikhuruf':
				if (arg.length < 1) return textImg('*Hurufnya mana?*')
				 tekss = body.slice(12)
				 teks = tekss.split('').reverse().join('')
				   textImg(teks)
		break
		case 'dewabatch':
				if (arg.length < 1) return textImg('*Hurufnya mana?*')
				 tekss = body.slice(11)
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/dewabatch?q=${tekss}`)
				   teks = `${anu.sinopsis}`
				   buffer = await getBaper(anu.thumb)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
			break
			case 'kusonime':
				if (arg.length < 1) return reply('*Hurufnya mana?*')
				 tekss = body.slice(10)
				   anu = await kusonime(tekss)
				   console.log(anu)
				   buffer = await getBaper(anu.img)
				   teks = `*Judul:* ${anu.judul}\n*Genre:* ${anu.genre}\n*Durasi:* ${anu.duration}\n*Total eps:* ${anu.total_eps}\n*Link:* ${anu.link}`
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
			break
			case 'wattpad':
				if (arg.length < 1) return textImg('*Judulnya apa?*')
				 tekss = body.slice(9)
				 o = 1
				   anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/wattpad_search?q=${tekss}`)
				   teks = `*╚❏* *WATTPAD SEARCH*\n\n`
	         for (let ok of anu.result) {
				 buffer = await getBaper(ok.thumb)
				   teks += `*${o++}. ${ok.title}*\n*Dibaca:* ${ok.reads}\n*Votes:* ${ok.votes}\n===========================\n`
			 }
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
			break
			case 'drakor':
				 t = 1
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
				   teks = `*╚❏* *DERAMA KOREA*\n\n`
	         for (let o of anu.result) {
				 buffer = await getBaper(o.thumbnail)
				   teks += `*${t++}. ${o.title}*\n*Episode:* ${o.total_episode}\n*Genre:* ${o.genre}\n*Tahun:* ${o.year}\n===========================\n`
			 }
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
			break
		case 'ceritahorror':
		case 'ceritahoror':
				   anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=${naufalkey}`)
				   teks = `*╚❏* *CERITA HORROR*\n*╠❏*\n*╠❏* *Judul:* ${anu.result.title}\n*╚❏* *Cerita:* ${anu.result.story}`
				   reply(teks)
		break
		case 'fml':
		case 'fuckmylife':
				   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=Tobzzz17`)
				   anu1 = await fetchJson(`https://hujanapi.herokuapp.com/api/translate?lang=en&tr=id&query=${anu.result}&apikey=AdelwinNL`)
				   teks = `- *Fuck my life* : ${anu1.result.output}`
				   reply(teks)
		break
		case 'motivasi':
				   anu = await fetchJson(`https://pencarikode.xyz/api/motivasi?apikey=pais`)
				   teks = `- *Fakta* : ${anu.message}`
				   reply(teks)
		break
				 case 'quotesnime': 
				   anu = await fetchJson(`https://api-zefian.glitch.me/api/quotesnime/random`)
				   teks = `- *Anime* : ${anu.data.anime}\n- *Karakter* : ${anu.data.character}\n- *Quotes* : ${anu.data.quote} `
				   reply(teks)
		break
				case 'wiki':if (arg.length < 1) return reply('Mau cari apa?')
					var teks = body.slice(6)
						reply(mess.wait)
						try {
						anu = await wikiSearch(teks)
						console.log(anu)
						reply(`*Judul:* ${anu.judul}\n\n*Hasil:* ${anu.wiki}`)
						} catch (err) {
							reply(`Wiki ${teks} tidak ditemukan!`)
						} break
					case 'jagokata':if (arg.length < 1) return reply('Mau cari apa?')
					var teks = body.slice(10)
						reply(mess.wait)
						try {
						anu = await jagoKata(teks)
						console.log(anu)
						reply(`*By:* ${anu.by}\n\n*Kata:* ${anu.isi}`)
						} catch (err) {
							reply(`Jago kata ${teks} tidak ditemukan!`)
						} break
					case 'find':reply('[WAIT] Sedang mencari partner...')
					ono = fs.readFileSync('./src/.dat/msg.data.json')
  jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
  randKey = jsonData[randIndex]
  okelas = randKey.participant
					benny.sendMessage(okelas, `*Hai kamu diajak ngobrol sama* @${sender.split('@')[0]}`, text, {contextInfo: { mentionedJid: [sender] }})
					benny.sendMessage(from, `*Berhasil menemukan partner!* @${okelas.split('@')[0]}`, text, {contextInfo: { mentionedJid: [okelas] }, quoted: ben })
					break
				case 'kartukredit': 
					anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
			teks = `*KARTU KREDIT* ?\n\n*Card* : \n? *Network* : ${anu.result.card.network}\n? *Number* : ${anu.result.card.number}\n? *CVV* : ${anu.result.card.cvv}\n? *PIN* : ${anu.result.card.pin}\n? *Balance* : ${anu.result.card.balance}\n\n*Customer* :\n? *Name* : ${anu.result.customer.name}\n? *Address* : ${anu.result.customer.address}\n? *Country* : ${anu.result.customer.country}`
			reply(teks)
			break
			     case 'cerpen': 
					fetchJson('https://masgi.herokuapp.com/api/cerpen').then((res) => {
						reply(mess.wait)
					let hasilnya = `Cerpen:\n${res.data}`;
						reply(hasilnya)
					 })
					break
				case 'lirik':
				tekss = body.slice(7)
				anu = await fetchJson(`https://scrap.terhambar.com/lirik?word=${tekss}`)
				teks = `- *Lagu* : ${tekss}\n- *Lirik* : ${anu.result.lirik}`
				reply(teks)
					break
				case 'chord':
				tekss = body.slice(7)
				anu = await fetchJson(`https://scrap.terhambar.com/lirik?word=${tekss}`)
				teks = `- *Lagu* : ${tekss}\n- *Lirik* : ${anu.result.lirik}`
				reply(teks)
					break
				case 'katasenja': 
					anu = await fetchJson(`https://pencarikode.xyz/api/katasenja?apikey=pais`)
					teks = `*Kata-kata senja:*\n${anu.message}`
					reply(teks)
					break
				case 'katadilan':anu = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
				reply(anu.result)
				break
				case 'katabijak': 
					fetchJson('https://pencarikode.xyz/api/katabijak?apikey=pais').then((res) => {
						reply('[ WAIT ] Searching...? silahkan tunggu')
						hasilnya = `*Katabijak* : ${res.message}`;
						reply(hasilnya)
					})
		break
		case 'cekinv':
		case 'cekinvite':
		case 'cekcode':
		anu = await groupInfo(`${args[0]}`)
		anu1 = await pasteGG.post({
  name: namabot, // Optional
		description: `PasteGG by ${namabot}`, // Optional
  expires: "2025-12-30T02:25:56.428Z", // Optional
  files: [{
    name: `${namabot}.txt`, // Optional
    content: {
      format: "text",
      value: anu.desc
    }
  }]
})
teks = `*Subject:* ${anu.subject}\n*ID:* ${anu.id.replace('@g.us', '')}\n*Desc:*\n${anu1.result.url}\n*Jumlah Member:* ${anu.size}`
reply(teks)
		console.log(anu)
		break
				case 'gcname':benny.groupUpdateSubject(from, `${body.slice(8)}`)
					reply(`? *CHANGE TO ${body.slice(8)}* ?`)
					break
				case 'gcdesk':benny.groupUpdateDescription(from, `${body.slice(8)}`)
					reply(`? *CHANGE TO ${body.slice(8)}* ?`)
					break
				case 'images':anu = await hxz.pinterest(`${body.slice(7)}`)
				reply(mess.wait)
						const imgs = anu[Math.floor(Math.random() * anu.length)]
				buffer = await getBaper(imgs)
				benny.sendMessage(from, buffer, image, {quoted: ben})
				break
			case 'gambar':if (arg.length < 1) return reply('Gambar apa?')
				teks = body.slice(8)
				buffer = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${teks}`)
				reply(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: `Gambar: ${teks}`})
				break
				case 'wallnime':if (arg.length < 1) return reply('Wallpaper apa?')
				buffer = await getBaper(`http://api.lolhuman.xyz/api/random/wallnime?apikey=${lolkey}`)
				reply(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: `*Wallpaper Anime*`})
				break
				case 'wallpaper':if (arg.length < 1) return reply('Wallpaper apa?')
				teks = body.slice(1)
				wallpap = body.slice(11)
				buffer = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=wallpaper+${wallpap}`)
				reply(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: `Wallpaper: ${wallpap}`})
				break
				case 'wallpaper2':if (arg.length < 1) return reply('Wallpaper apa?')
				wallpap = body.slice(12)
				buffer = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=wallpaper+${wallpap}`)
				reply(mess.wait)
			benny.sendMessage(from, buffer, image, {quoted: ben, caption: `Wallpaper: ${wallpap}`})
				break
				case 'wallpaper3':if (arg.length < 1) return reply('Wallpaper apa?')
				teks = body.slice(1)
				wallpap = body.slice(12)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolkey}&query=&query=wallpaper+${wallpap}`)
		let aof = anu.result[Math.floor(Math.random() * anu.result.length)]
		buffer = await getBaper(aof)
		benny.sendMessage(from, buffer, image, {quoted: ben, caption: `Wallpaper: ${wallpap}`})
				break
				case 'naruto':case 'minato':case 'boruto':case 'hinata':case 'sasuke':case 'sakura':case 'kaneki':case 'toukachan':case 'rize':case 'akira':case 'itori':case 'kurumi':case 'miku':reply(mess.wait)
					nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`)
					benny.sendMessage(from, nye, image, { caption: `${command}!!`, quoted: ben })
					break 
// akhir fitur anime
				case 'anjing':nye = await getBaper(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=anjing`)
					reply(mess.wait)
					benny.sendMessage(from, pok, image, {quoted: ben})
					break
				case 'forward':if (budy.length > 8) {
                const msk = body.slice(9)
                benny.sendMessage(from, msk, text, { "contextInfo": {"forwardingScore": 999,"isForwarded": true}, quoted: ben})
				} else if (arg.length < 1) {
				const msk = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                benny.sendMessage(from, msk, text, { "contextInfo": {"forwardingScore": 999,"isForwarded": true}, quoted: ben})
				}
				break
				case 'readmore':
				if (arg) {
                const mskp = body.slice(9)
                benny.sendMessage(from, `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${mskp}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`, text, {quoted: ben})
				} else if (!arg) {
				const mskp = m.quoted.text
                benny.sendMessage(from, `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${mskp}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏`, text, {quoted: ben})
				}
				break
				case 'artinama':if (arg.length < 1) return reply('Nama nya mana?')
				var tkst = await ArtiNama(body.slice(10))
				benny.sendMessage(from, tkst, text, {quoted: ben})
				break
				case 'artimimpi':if (arg.length < 1) return reply('Nama nya mana?')
				var tkst = await ArtiMimpi(body.slice(11))
				benny.sendMessage(from, tkst, text, {quoted: ben})
				break
				case 'runtime':runtime = process.uptime()
					teks = `${tek(runtime)}`
					reply(teks)
					break
					case 'imagerun':if (isQuotedImage) {
					anu = await downloadM()
					buffer = await running(fs.readFileSync(anu))
			benny.sendMessage(from, buffer, video, {mimetype:'video/mp4', quoted: ben})
					}
			break
			case 'xnxx':{
			if (!arg) return reply('Apa judulnya?')
			let no = 1
				let bo = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${arg.toLowerCase()}`)
			let te = `           *_XNXX SEARCH_*        \n\n`
			for (let i of bo.result) {
				xnxx.push({nomor: no++, title: i.title, views: i.views, uploader: i.uploader, link: i.link, thumbnail: i.thumbnail})
			}
			for (let i of xnxx) {
				te += `*Urutan:* ${i.nomor}\n*Title:* ${i.title}\n*Ditonton:* ${i.views}\n*Uploader:* ${i.uploader}\n*Link:* ${i.link}\n=================================\n`
				}
			benny.sendFileFromUrl(from, xnxx[0].thumbnail, 'image.jpg', te, ben)
			}
			break
			case 'getxnxx':{
			if (!Number(arg)) return reply('Urutan harus berupa angka!')
	        if (xnxx.length === 0) return reply(`Silahkan ketik ${prefix}${command.split('t')[1]} <Judul> untuk menggunakan perintah ini`)
			let o = arg - 1
		    let n = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${xnxx[o].link}`)
			reply('*[ WAIT ]* Mohon tunggu sekitar 1 menit <>')
			benny.sendFileFromUrl(from, n.result.link[0].link, 'video.mp4', 'Selamat menonton', ben)
			xnxx = []
			}
			break
		 case 'xvideos':{
			if (!arg) return reply('Apa judulnya?')
			let no = 1
				let bo = await fetchJson(`https://hujanapi.herokuapp.com/api/xvideos?query=${arg.toLowerCase()}&apikey=${hujankey}`)
			let te = `*[ XVIDEOS SEARCH ]*\n\n`
			for (let i of bo.result) {
				xvideos.push({nomor: no++, title: i.title, views: i.views, uploader: i.channel, link: i.link, thumbnail: i.image})
			}
			for (let i of xvideos) {
				te += `*Urutan:* ${i.nomor}\n*Title:* ${i.title}\n*Ditonton:* ${i.views}\n*Uploader:* ${i.uploader}\n*Link:* ${i.link}\n=================================\n`
				}
			benny.sendFileFromUrl(from, xvideos[0].thumbnail, 'image.jpg', te, ben)
			}
			break
			case 'getxvideos':{
			if (!Number(arg)) return reply('Urutan harus berupa angka!')
	        if (xvideos.length === 0) return reply(`Silahkan ketik ${prefix}${command.split('t')[1]} <Judul> untuk menggunakan perintah ini`)
			let o = arg - 1
		    let n = await fetchJson(`https://hujanapi.herokuapp.com/api/xvideosdl?url=${xvideos[o].link}&apikey=${hujankey}`)
			reply('*[ WAIT ]* Mohon tunggu sekitar 1 menit <>')
			benny.sendFileFromUrl(from, n.vid, 'video.mp4', 'Selamat menonton', ben)
			xvideos = []
			}
			break
		 case 'pornhub':{
			if (!arg) return reply('Apa judulnya?')
			let no = 1
				let bo = await fetchJson(`https://api.lolhuman.xyz/api/pornhubsearch?apikey=${lolkey}&query=${arg.toLowerCase()}`)
			let te = `*[ PORNHUB SEARCH ]*\n\n`
			for (let i of bo.result) {
				xhamster.push({nomor: no++, title: i.title, views: i.views,  link: i.link, thumbnail: i.thumbnail})
			}
			for (let i of xhamster) {
				te += `*Urutan:* ${i.nomor}\n*Title:* ${i.title}\n*Ditonton:* ${i.views}\n*Link:* ${i.link}\n=================================\n`
				}
			benny.sendFileFromUrl(from, xhamster[0].thumbnail, 'image.jpg', te, ben)
			}
			break
			case 'getpornhub':{
			if (!Number(arg)) return reply('Urutan harus berupa angka!')
	        if (xhamster.length === 0) return reply(`Silahkan ketik ${prefix}${command.split('t')[1]} <Judul> untuk menggunakan perintah ini`)
			let o = arg - 1
		    let n = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${lolkey}&url=${xhamster[o].link}`)
			reply('*[ WAIT ]* Mohon tunggu sekitar 1 menit <>')
			benny.sendFileFromUrl(from, n.result["144p"], 'video.mp4', 'Selamat menonton', ben)
			xhamster = []
			}
			break
			case 'fbdl':{
				if (!arg) return reply('*Mana link nya?*')
				if (!isUrl(arg)) return reply('Link tidak valid!')
				let io = await fetchJson(`https://api.vhtear.com/fbdl?link=${arg}&apikey=${vhtearkey}`)
			reply(mess.wait)
			benny.sendFileFromUrl(from, io.result.VideoUrl, 'video.mp4', 'Nehh..', ben)
			}
			break
		 case 'asupan':{	if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
		  buffer = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=ChOkYbOT8`)
						console.log(buffer)
						anu = await getBaper(buffer.result)
						reply(mess.wait)
				gbutsan = [
  {buttonId: '#asupan', buttonText: {displayText: 'Qhubeka'}, type: 'RESPONSE'}
]
mhan = await benny.prepareMessage('0@s.whatsapp.net', buffer, video, {quoted: ben, mimetype: 'video/mp4'})
 gbuttonan = {
videoMessage: mhan.message.videoMessage,
    contentText: '\n                   Asupan Nih                     \n',
    footerText: 'Klik next untuk cari yang lain',
    buttons: gbutsan,
    headerType: 'VIDEO'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben, contextInfo:{externalAdReply:{title: namabot, body: '', previewType: 'PHOTO', thumbnail: anu, sourceUrl: 'https://wa.me/6285709331584?text=Assalamualaikum'}, mentionedJid: [sender, '0@s.whatsapp.net']}})
		 }
							break
					case 'spamcall':	if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
					if (args[0].startsWith('62')) return reply('Salah! contoh: 81234567890')
					if (!isOwner && args[0].startsWith('89636006352')) return reply('Tidak bisa spam call owner!')
					anu = await fetchJson(`https://api-jojo.herokuapp.com/api/spamcall?no=${body.slice(10)}`)
					anu = await fetchJson(`https://api-jojo.herokuapp.com/api/spamcall?no=${body.slice(10)}`)
					anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${body.slice(10)}`)
					anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${body.slice(10)}`)
					reply(anu.logs)
					break
					case 'unread':
					benny.modifyChat(from, 'unread')
					break
					case 'spamsms':	if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
					toti = args[0]
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${toti}`)
					reply(anu.result)
					break
										case 'imagewanted':				
                                     apo = await downloadM()
					 anu = await uploadMedia(apo)
                                        teks = `${anu.files[0].url}`
										buffer = await getBaper(`https://cililitan2.herokuapp.com/api/wanted?url=${teks}`)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										break
					case 'petemoji':
					case 'petmoji':   if (arg.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} ??`)
                    buffer = await fetchJson(`https://cililitan2.herokuapp.com/api/emojitopng?emoji=${args[0]}`)
					console.log(buffer)
                    sendStickerFromUrl(from, `https://buatpet.herokuapp.com/?url=${buffer.result[4].url}`)
                    break
					case 'semoji':   if (arg.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} emoji`)
                    buffer = await fetchJson(`https://cililitan2.herokuapp.com/api/emojitopng?emoji=${args[0]}`)
					console.log(buffer)
                    sendStickerFromUrl(from, buffer.result[4].url)
                    break
					case 'gtav':				
									if (arg.length < 1) return reply('Nama file nya mau apa?')
                                     var imgbb = require('imgbb-uploader')
                                         if (isMedia && !ben.message.videoMessage || isQuotedImage) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: ben, caption: 'nih'})
										 }
										break
										case 'stickcartoon':				
                                     var imgbb = require('imgbb-uploader')
									 if (!isQuotedSticker) return reply('Reply sticker nya om')
                                         if (isQuotedSticker) {
											 ran = getRandom('.png')
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 anu = await uploadImages(fs.readFileSync(ran), sender)
										anuan = await fetchJson(`https://naufalhoster.xyz/tools/photo_cartoon?apikey=${naufalkey}&url=${anu}`)
										sendStickerFromUrl(from, anuan.result.image)
					})
										 }
										break
										case 'imagecartoon':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://naufalhoster.xyz/tools/photo_cartoon?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										 }
										break
										case 'endgc':
										benny.endGroup(from)
										break
										case 'imagecomic':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_comic?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										 }
										break
										case 'stickcomic':				
                                     var imgbb = require('imgbb-uploader')
                                         if (isQuotedSticker) {
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 anu = await uploadImages(fs.readFileSync(ran), sender)
										anuan = await fetchJson(`https://turuapi.org/tools/photo_comic?apikey=${naufalkey}&url=${anu}`)
										sendStickerFromUrl(from, anuan.result.image)
					})
										 }
										break
										case 'imagefire':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_fire?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										 }
										break
										case 'stickfire':				
                                     var imgbb = require('imgbb-uploader')
									 if (!isQuotedSticker) return reply('Reply sticker nya om')
                                         if (isQuotedSticker) {
											 ran = getRandom('.png')
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 anu = await uploadImages(fs.readFileSync(ran), sender)
										anuan = await fetchJson(`https://turuapi.org/tools/photo_fire?apikey=${naufalkey}&url=${anu}`)
										sendStickerFromUrl(from, anuan.result.image)
					})
										 }
										break
										case 'sangecek':					if (arg.length > 1) {
				mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat kesangean @${mentioned[0].split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: [mentioned[0]]}})
										} else if (arg.length < 1) {
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat kesangean @${sender.split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: [sender]}})
										} break
					case 'ppstick':case 'stickpp':if (arg.length >= 1) {
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
			    anu = await getPP(mentioned)
				sendStickerFromUrl(from, anu)
					} else if (arg.length < 1) {
					mentioned = ben.message.extendedTextMessage.contextInfo.participant
			    anu = await getPP(mentioned)
				sendStickerFromUrl(from, anu)
				}
				break
                case 'ppstickbulet':ran = getRandom('.png')
				ranw = getRandom('.png')
					if (arg.length >= 1) {
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
			    anu = await getPP(mentioned)
				buffer = await getBaper(anu)
				fs.writeFileSync(ran, buffer)
				exec(`ffmpeg -hide_banner  -i "${ran}" -i "./buletan.png" -filter_complex [0]scale=400:400[ava];[1]alphaextract[alfa];[ava][alfa]alphamerge ${ranw}`, async(err) => {
				sendSticker(from, ranw)
				})
					} else if (arg.length < 1) {
					mentioned = ben.message.extendedTextMessage.contextInfo.participant
			    anu = await getPP(mentioned)
				buffer = await getBaper(anu)
				fs.writeFileSync(ran, buffer)
				exec(`ffmpeg -hide_banner  -i "${ran}" -i "./buletan.png" -filter_complex [0]scale=400:400[ava];[1]alphaextract[alfa];[ava][alfa]alphamerge ${ranw}`, async(err) => {
				sendSticker(from, ranw)
				})
					}
				break
                case 'gaycek':		
                if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
                 if (arg.length > 1) {
				mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat gay @${mentioned[0].split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: [mentioned[0]]}})
										} else if (arg.length < 1) {
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat gay @${sender.split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: [sender]}})
										} break
                case 'lesbicek': 
                if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
                if (arg.length > 1) {
				mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat lesbi @${mentioned[0].split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: [mentioned[0]]}})
										} else if (arg.length < 1) {
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat lesbi @${sender.split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: [sender]}})
										} break
					case 'ghfollowing':case 'followinggh':
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					anu = await fetchJson(`https://api.github.com/users/${body.slice(13)}/following`)
					if (anu.message == 'Not Found') return reply('User tidak ditemukan')
					teks = `*Following Github:* ${body.slice(13)}\n\n`
					buffer = await getBaper(anu[0].avatar_url)
					for (let i of anu) {
						teks += `*Username:* ${i.login}\n*Link:* ${i.html_url}\n                            \n`
					}
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
			break
					case 'ghfollower':case 'followergh':
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					anu = await fetchJson(`https://api.github.com/users/${body.slice(12)}/followers`)
					if (anu.message == 'Not Found') return reply('User tidak ditemukan')
					teks = `*Followers Github:* ${body.slice(12)}\n\n`
					buffer = await getBaper(anu[0].avatar_url)
					for (let i of anu) {
						teks += `*Username:* ${i.login}\n*Link:* ${i.html_url}\n                             \n`
					}
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
			break
			case 'ghstalk':case 'stalkgh':
			if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
			anu = await fetchJson(`https://api.github.com/users/${body.slice(9)}`)
					if (anu.message == 'Not Found') return reply('User tidak ditemukan')
					ano = anu.created_at.split('Z')[0]
					teks = `Halo Kak ${sender.split('@')[0]}  Data Sudah Di Dapatkan\n\n*Username:* ${anu.login}\n*Followers:* ${anu.followers}\n*Following:* ${anu.following}\n*Repository:* ${anu.public_repos}\n*Created At:* ${ano.replace('T', ' ')}\n*Link:* ${anu.html_url}\n`
					buffer = await getBaper(anu.avatar_url)
					gbutsan = [
  {buttonId: '.sewabot', buttonText: {displayText: 'Sewa Bot'}, type: 'RESPONSE'},
  {buttonId: '.owner', buttonText: {displayText: 'Creator Bot'}, type: 'RESPONSE'}
]
mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, jpegThumbnail: buffer}, location, {thumbnail: buffer})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
    contentText: teks,
    footerText: '@0',
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben, contextInfo:{externalAdReply:{title: namabot, body: '', previewType: 'PHOTO', thumbnail: buffer, sourceUrl: 'https://wa.me/6285709331584?text=Assalamualaikum'}, mentionedJid: [sender]}})
	
		break
                case 'gantengcek':
                if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
                if (!isGroup) return reply(mess.only.group)
				mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat kegantengan @${mentioned[0].split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: mentioned}})
					break
		case 'cantikcek': 
		if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
		if (arg.length > 1) {
				mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat kecantikan @${mentioned[0].split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: [mentioned[0]]}})
										} else if (arg.length < 1) {
					sangen = Math.floor(Math.random() * 100)
					teks = `Tingkat kecantikan @${sender.split('@')[0]} Adalah ${sangen}%`
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: [sender]}})
										} break
					case 'culikmem':
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
			for (let i = 0; i < arg.split('|')[1]; i++) {
							await sleep(2000)
							benny.groupAdd(arg.split('|')[0], [groupMembers[i].jid])
			}
			await reply('*Done!*')
			break
		case 'watak':const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+command+'*\n\nJawaban : '+ tak, text, {quoted: ben})
				        break
		case 'hobby':const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+command+'*\n\nJawaban : '+ by, text, {quoted: ben})
					break
										case 'imagepencil':					case 'imagepensil':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 exec(`ffmpeg -i ${owgi} -vf "edgedetect=enable='gt(mod(t,60),57)',negate" -c:a copy ${ran}`, async(err) => {
										anuan = fs.readFileSync(ran)
										benny.sendMessage(from, anuan, image, {quoted: ben})
					 })
										 }
										break
									
										case 'imageburik':					case 'image8bit':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
			 		owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`http://api.lolhuman.xyz/api/editor/pixelate?apikey=${lolkey}&img=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: ben})
										 }
										break
	case 'karakter':{
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${arg}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await reply('Error :(')
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[Math.floor(Math.random() * parsed.results.length)]
            const content = `*Character found!*
*Name:* ${name}
*Nickname:* ${alternative_names}
*Link*: ${url}`
           sendMediaURL(from, image_url, content)
           } catch (err) {
             console.error(err.message)
           }
	}
          break
										case 'manga':{
										 if (!arg) return reply(`Masukkan query!`)
 let res = await fetch(`https://api.jikan.moe/v3/search/manga?q=${arg}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
let mangaingfo = `*Title:* ${title}
*Chapters:* ${chapters}
*Volumes:* ${volumes}
*Score:* ${score}
*Synopsis:* ${synopsis}
*Link*: ${url}`
ap = await getBuffer(image_url)
benny.sendMessage(from, ap, image, {quoted: ben, caption:mangaingfo})
										}
  break
										case 'imageinvert':					case 'invertimage':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: ben})
										 }
										break
										case 'listonline':

if (!isGroup) return reply(mess.only.group)
        		if (!isOwner && !ben.key.fromMe) return
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(benny.chats.get(ido).presences), benny.user.jid]
			    benny.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: ben,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
										case 'imagejail':					case 'imagepenjara':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`https://naufalhoster.xyz/textmaker/jail?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: ben})
										 }
										break
										case 'stickjail':				
                                     var imgbb = require('imgbb-uploader')
									 if (!isQuotedSticker) return reply('Reply sticker nya om')
                                         if (isQuotedSticker) {
											 ran = getRandom('.png')
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 anu = await uploadImages(fs.readFileSync(ran), sender)
										sendStickerFromUrl(from, `https://naufalhoster.xyz/textmaker/jail?apikey=${naufalkey}&url=${anu}`)
					})
										 }
										break
										case 'imagedelete':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await getBaper(`https://naufalhoster.xyz/textmaker/windows_delete_file?apikey=${naufalkey}&url=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: ben})
										 }
										break
										case 'masak':		if (arg.length < 1) return reply('Nama makanan nya apa?')
										anu = await resepnya(arg)
										var apo = anu.results
										teks = `*Judul:* ${apo.title}\n*Porsi:* ${apo.servings}\n*Waktu:* ${apo.times}\n*Bahan:* ${apo.ingredient}\n*Kesulitan:* ${apo.dificulty}\n*Langkah:* ${apo.step}\n*Desc:* ${apo.desc}*\n`
										reply(teks)
										break
										case 'imagewasted':				
                                     ano = await downloadM()
									 anu = await uploadMedia(ano)
                                        teks = `${anu.files[0].url}`
										buffer = await getBaper(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${teks}`)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										break
case 'rip2':
ano = await downloadM()
									 anu = await uploadMedia(ano)
                                        teks = `${anu.files[0].url}`
										buffer = await getBaper(`https://zynfx.herokuapp.com/api/canvas/rip?image=${teks}`)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										break
case 'triggered':
ano = await downloadM()
									 anu = await uploadMedia(ano)
                                        teks = `${anu.files[0].url}`
										buffer = await getBaper(`https://api.lolhuman.xyz/api/editor/triggered?apikey=${lolkey}&img=${teks}`)
										benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben})
										break
							
case 'imagespongbob':				
                                     ano = await downloadM()
									 anu = await uploadMedia(ano)
                                        teks = `${anu.files[0].url}`
										buffer = await getBaper(`https://zynfx.herokuapp.com/api/canvas/spongebob?image=${teks}`)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										break
							case 'imagefisheye':  reply(mess.wait)
					owgi = await downloadM()
					 anu = await uploadMedia(owgi)
                                        teks = `${anu.files[0].url}`
			anuan = await getBaper(`https://api.lolhuman.xyz/api/editor/fisheye?apikey=${lolkey}&img=${teks}`)
										benny.sendMessage(from, anuan, image, {quoted: ben})
										break
							case 'imagegrafitti':		case 'imagegrafiti':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/photo_grafitti?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										 }
										break
										case 'imagenegative':		case 'imagenegatif':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/negative?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										 }
										break
										case 'randomwallpaper':					
										ono = JSON.parse(fs.readFileSync('./src/randomwall.json'))
	anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpcyberspace':					
										ono = JSON.parse(fs.readFileSync('./src/cyberspace.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpgunung':					
										ono = JSON.parse(fs.readFileSync('./src/wallgunung.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpneon':					
										ono = JSON.parse(fs.readFileSync('./src/wallneon.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'vntotext':
										case 'audtotext':{
										if (!isQuotedAudio) return reply('Reply Audionya!')
											const requests = require('node-fetch');
	const FormData = require('form-data');
    const fil = await benny.downloadAndSaveMediaMessage(JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
	reply(mess.wait)
    const stream = fs.createReadStream(fil);
    const form = new FormData();
    form.append('audio', stream);
    const UrL = await requests('http://hujanapi.xyz/api/stt?apikey=januari', { method: 'POST', body: form })
    const ret =  await UrL.json()
    const voiceMsg = ret.result ? ret.result : 'Tidak terdeteksi'
										reply(voiceMsg)
										}
										break
										case 'wpml':					
										ono = JSON.parse(fs.readFileSync('./src/wallml.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wphacker':					
										ono = JSON.parse(fs.readFileSync('./src/wallhack.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'quotes':					
										ono = fs.readFileSync('./src/quotes.json')
jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
 randKey = jsonData[randIndex]
										reply(`*Author:* ${randKey.by}\n*Quotes:* ${randKey.quote}`)
										break
										case 'waifu':					
										ono = fs.readFileSync('./src/waifu.json')
  jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
  randKey = jsonData[randIndex]
  buffer = await getBaper(randKey.image)
  teks = `*${randKey.teks}*`
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
										break
										case 'getserial':					
										anu = await register.getRegisteredSerialFromId(sender, _registered)
										benny.sendMessage(from, anu, text, {quoted: ben})
										break
										case 'serial':					
										ono = fs.readFileSync('./src/registered.json')
  jsonData = JSON.parse(ono)
  randIndex = Math.floor(Math.random() * jsonData.length)
  randKey = jsonData[randIndex]
										benny.sendMessage(from, randKey.serial, text, {quoted: ben})
										break
										 case 'wancak':   buffer = await getBaper(`http://api.lolhuman.xyz/api/onecak?apikey=${lolkey}`)
                    benny.sendMessage(from, buffer, image, {quoted: ben})
                    break
										case 'wpcode':					
										ono = JSON.parse(fs.readFileSync('./src/wallcode.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpff':					
										ono = JSON.parse(fs.readFileSync('./src/wallff.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wppubg':					
										ono = JSON.parse(fs.readFileSync('./src/wallpubg.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
										case 'wpprogrammer':					case 'wprogrammer':					case 'wpprogram':					case 'wprogram':					
										ono = JSON.parse(fs.readFileSync('./src/wallprogram.json'))
  anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
							case 'imagedistortion':		case 'imagedt':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/distortion?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										 }
										break
							case 'imagenightvision':		case 'imagenv':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                       reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										anuan = await fetchJson(`https://turuapi.org/tools/night_vision?apikey=${naufalkey}&url=${teks}`)
										buffer = await getBaper(anuan.result.image)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										 }
										break
					case 'rip':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {

                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										buffer = await getBaper(`https://cililitan2.herokuapp.com/api/rip?url=${teks}`)
										benny.sendMessage(from, buffer, image, {quoted: ben})
										 }
										break
									case 'imagetourl':				
                                     var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										reply(teks)
										 }
										break
										case 'imagetourl2':                        if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
                                        var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										reply(teks)
										 }
										break
										case 'imagetourl3':                        if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
                                        var uploade = await uploadImages(fs.readFileSync(owgi), sender)
										console.log(uploade)
										reply(uploade)
										 }
										break
										case 'togif':                  if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true) {
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						memek = await webp2gifFile(media)
						reply(mess.wait)
						console.log(memek)
					   anu = await getBaper(memek.result)
					   benny.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: 'Nih..', quoted: ben})
					}
						break
						case 'togif2':                  if (!isQuotedSticker) return reply('Reply stiker nya')
								   if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
				       ran = getRandom('.mp4')
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						exec(`ffmpeg -loop 1 -i ${media} -t 5 ${ran}`, async (err) => {
    if (err) return console.log(err)
						reply(mess.wait)
					   benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/gif', caption: 'Nih..', quoted: ben})
						})
						break
						case 'tovid3':                  if (!isQuotedSticker) return reply('Reply stiker nya')
								   if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
				       ran = getRandom('.mp4')
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						exec(`ffmpeg -loop 1 -i ${media} -t 5 ${ran}`, async (err) => {
    if (err) return console.log(err)
						reply(mess.wait)
					   benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4', caption: 'Nih..', quoted: ben})
						})
						break
								case 'tovid':				
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						memek = await webp2gifFile(media)
						reply(mess.wait)
						console.log(memek)
					   sendMediaURL(from, memek.result, 'Neh..')
						break
								case 'tovid2':				
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						const uploady = await uploadMedia(media)
						console.log(uploady)
						memek = await webp2mp4Url(uploady.files[0].url)
						reply(mess.wait)
						console.log(memek)
					   sendMediaURL(from, memek.result, 'Neh..')
						break
						case 'imageflip':	encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.jpg')
						exec(`ffmpeg -i ${media} -filter:v "hflip, vflip" -c:a copy ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), image)
						})
						break
						case 'imagetovid':	case 'imagetomp4':	encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
			exec(`ffmpeg -loop 1 -i ${media} -c:v libx264 -t 30 -pix_fmt yuv420p ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						break
						case 'bikinvideo':	case 'makevideo':	encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -i ./src/audio -acodec copy ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						break
						case 'setaudio':	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await benny.downloadAndSaveMediaMessage(encmedia, './src/audio')
						reply('Berhasil..')
						break
						case 'ngomong':	ran = getRandom('.mp3')
						exec(`ffmpeg -f lavfi -i flite=text='${body.slice(9)}' ${ran}`, async(err) => {
							if (err) return reply('Error')
							benny.sendMessage(from, fs.readFileSync(ran), audio, {mimetype: 'audio/mp3', ptt:true})
							fs.unlinkSync(ran)
						})
						break
						case 'vidglow':	case 'glowvid':	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -filter_complex "[1]format=yuv420p[in2];[in2][0]scale2ref[in2][in1];[in1][in2]blend=screen" ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						
						break						
						case 'vidburik':	case 'burikvid':	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -filter_complex xfade=transition=pixelize:duration=5:offset=0 ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						break
						break						
						case 'videopencil':	case 'mp4pencil':	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -vf "edgedetect=enable='gt(mod(t,60),57)',negate" -c:a copy ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						break
						break
						case 'cropvid':	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						teks = body.slice(9)
						teks1 = teks.split('|')[0]
						teks2 = teks.split('|')[1]
						ran = getRandom('.mp4')
			exec(`ffmpeg -i ${media} -filter:v "crop=${teks1}:${teks2}:200:100" -c:a copy -qp 0 ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
						break
									case 'cropimage':	encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadAndSaveMediaMessage(encmedia)
						teks = body.slice(11)
						teks1 = teks.split('|')[0]
						teks2 = teks.split('|')[1]
						ran = getRandom('.png')
			exec(`ffmpeg -i ${media} -vf "crop=${teks1}:ih:${teks2}:0" ${ran}`, (err) => {
							if (err) return reply('eror')
							benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: ben})
						})
						break
										case 'tovid3':				
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadMedia(media)
						console.log(upload)
						reply(mess.wait)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.files[0].url}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result, 'Nih')
					         break
							 case 'tovid4':				
                                   if (!isQuotedSticker) return reply('Reply stiker nya')
					if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						 ran = getRandom('.mp4')
						reply(mess.wait)
						exec(`ffmpeg -loop 1 -i ${media} -c:v libx264 -t 2 -pix_fmt yuv420p ${ran}`, (err) => {
						benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
						})
					         break
							 case 'speed':		 
							 teks = await speeds(benny, baterai)
							 console.log(teks)
							 reply(teks)
							 break
							 case 'speedtest':
					const speedTst = await speedTest({acceptLicense: true, acceptGdpr: true})
					const speer = `    ? *Connection Server* ?
 
?? *Server :* *${speedTst.isp}*
					 
?? *Ping :* *${speedTst.ping.latency}Ms*
					 
?? *Upload :* *${speedText(speedTst.upload.bandwidth)}*
					 
?? *Download :* *${speedText(speedTst.download.bandwidth)}*
					 
? *${fake}* ?`
					reply(speer)
					break
					case 'zodiac':anu = await zodiac(body.slice(8), prefix, command)
					reply(anu)
			break
					case 'listgc':case 'listgroup':case 'grouplist':teks = benny.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
					reply(`*LIST GROUP DI BOT INI:*\n\n*${teks}*`)
					break
					case 'searchpc':if (!ben.key.fromMe && !isOwner) return
					let db = []
					teks = ''
					tekz = body.slice(10)
					anu = await benny.chats.all()
					for (let u of anu) {
					if (u && u.jid.endsWith('s.whatsapp.net')) {
					ani = await getName(u.jid)
						db.push({name: ani, jid: u.jid})
					}
					}
					console.log(db)
					for (let o of db) {
					if (o.name.toLowerCase().includes(tekz)) {
					teks += `*${o.name}*\n@${o.jid.split('@')[0]}\nwa.me/${o.jid.split('@')[0]}\n==============================\n`
					}
					}
					benny.sendMessage(from, teks, text, {quoted: ben, contextInfo:{mentionedJid: parseMention(teks)}})
					break
					case 'once':if (isQuotedImage) {
						anu = await downloadM()
						benny.sendMessage(from, fs.readFileSync(anu), image, {quoted: ben, viewOnce: true})
					} else if (isQuotedVideo) {
						anu = await downloadM()
						benny.sendMessage(from, fs.readFileSync(anu), video, {mimetype: 'video/mp4', quoted: ben, viewOnce: true})
					} break
					case 'autoclearall':
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						if (arg === 'on') {
							autoklir = true
							reply('*Done!*')
						} else if (arg === 'off') {
							autoklir = false 
							reply('*Done!*')
						} else {
							reply('*Pilih on atau off!*')
						} 
						break
					case 'stopjadibot':{
						let po = require('./lib/jadibot')
						await po.stopjadibot(reply)
					} break
					case 'listjadibot':{
						let po = require('./lib/jadibot')
						teks = ''
						for (let i of po.listjadibot) {
							teks += `${JSON.stringify(i, null, 2)}\n\n`
						}
						reply(teks)
					} break
					case 'listsession':
					let paok = await listsession()
					let toks = `*[ LIST SESSION ]*\n\n`
					let v = 1
					for (let i of paok) {
					toks += `*${v++}.* ${i.split('.json')[0]}\n`
			}
			toks += `\n*Total:* ${paok.length}`
			reply(toks)
			break
					case 'addsession':
					if (!ben.key.fromMe && !isOwner) return
					if (!arg) return reply('*Masukan nama session yang ingin ditambahkan!*')
					addsession(await getName(sender), reply, benny, from, arg)
					break
					case 'delsession':
					if (!ben.key.fromMe && !isOwner) return
						let sesi = await delsession(arg)
						reply(sesi)
					break
					case 'jadibot':
					if (isGroup) return reply('Command ini khusus chat pribadi!')
						try {
						await jadibot(await getName(sender), reply, benny, from, arg ? arg : sender.split('@')[0])
						} catch {
							reply('Tidak dapat membuat bot didalam bot!')
						} break
					case 'compress':anu = await downloadM()
					buffer = await Utils_1.compressImage(fs.readFileSync(anu), arg.split('|')[0], arg.split('|')[1])
					benny.sendMessage(from, buffer, image)
					break
					case 'searchgc':if (!ben.key.fromMe && !isOwner) return
					let dbs = []
					teks = ''
					tekz = body.slice(10)
					anu = await benny.chats.all()
					for (let u of anu) {
					if (u && u.jid.endsWith('g.us')) {
						ani = await benny.contacts[u.jid].name
						dbs.push({name: ani, jid: u.jid})
					}
					}
					console.log(dbs)
					for (let o of dbs) {
					if (o.name.toLowerCase().includes(tekz)) {
						teks += `*${o.name}*\n${o.jid}\n==============================\n`
					}
					}
					benny.sendMessage(from, teks, text, {quoted: ben})
					break
							 case 'botstat':
                let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                var timestampi = speed();
				var latensii = speed() - timestampi
                var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = benny.user.phone
                anu = process.uptime()
                teskny = `*Host :* ${os.hostname()}
*Platfrom :* ${os.platform()}
*Core :* ${os.cpus().length}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*CPU :* ${os.cpus()[0].model}

*V. Whatsapp :* ${wa_version}
*Baterai :* ${baterai.battery}
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}

*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${tek(anu)}`
                reply(teskny)
                break
				case 'jumlahhuruf':if (arg.length > 1) {
				teks = body.slice(13)
				reply(`${teks.length}`)
				} else if (arg.length < 1) {
					teks = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					reply(`${teks.length}`)
				}
				break
				case 'inspect':{
					if (!ben.key.fromMe && !isOwner) return
					if (arg) {
					teks = body.slice(9)
				let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
  let [, code] = teks.match(linkRegex) || []
  if (!code) return reply('Link invalid')
  let res = await benny.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) return reply(res)
  let caption = `
-- [Group Link Inspector] --
${res.id}
*Judul:* ${res.subject}
*Dibuat* oleh @${res.id.split('-')[0]} pada *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
*Judul diubah* oleh @${res.subjectOwner.split`@`[0]} pada *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
*Deskripsi diubah* oleh @${res.descOwner.split`@`[0]} pada *${formatDate(res.descTime * 1000)}*` : ''}
*Jumlah Member:* ${res.size}
*Member yang diketahui join*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `*Deskripsi:*
${res.desc}` : '*Tidak ada Deskripsi*'}
*JSON Version*
\`\`\`${JSON.stringify(res, null, 1)}\`\`\`
`.trim()
  let pp = await getPP(res.id)
  let ppd = await getBaper(pp)
  benny.sendMessage(from, ppd, image, {contextInfo:{mentionedJid: parseMention(caption)}, caption: caption, quoted: ben})
} else if (!arg) {
					teks = m.quoted.text
				let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
  let [, code] = teks.match(linkRegex) || []
  if (!code) return reply('Link invalid')
  let res = await benny.query({
    json: ["query", "invite", code],
    expect200: true
  })
  if (!res) return reply(res)
  let caption = `
-- [Group Link Inspector] --
${res.id}
*Judul:* ${res.subject}
*Dibuat* oleh @${res.id.split('-')[0]} pada *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `
*Judul diubah* oleh @${res.subjectOwner.split`@`[0]} pada *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `
*Deskripsi diubah* oleh @${res.descOwner.split`@`[0]} pada *${formatDate(res.descTime * 1000)}*` : ''}
*Jumlah Member:* ${res.size}
*Member yang diketahui join*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `*Deskripsi:*
${res.desc}` : '*Tidak ada Deskripsi*'}
*JSON Version*
\`\`\`${JSON.stringify(res, null, 1)}\`\`\`
`.trim()
  let pp = await getPP(res.id)
  let ppd = await getBaper(pp)
  benny.sendMessage(from, ppd, image, {contextInfo:{mentionedJid: parseMention(caption)}, caption: caption, quoted: ben})
}
				}
break
				case 'jumlahangka':if (arg.length > 1) {
				teks = body.slice(13)
				if (!Number(teks)) return reply('Angka harus berupa nomor!')
				reply(`${teks.length}`)
				} else if (arg.length < 1) {
					teks = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					if (!Number(teks)) return reply('Angka harus berupa nomor!')
				reply(`${teks.length}`)
				}
				break
										case 'vidmirror':					case 'mirrorvid':				if (!isQuotedVideo) return reply('videonya mana')
					if (isQuotedVideo) {
			ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await benny.downloadAndSaveMediaMessage(ger)
							ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -vf crop=iw:ih:0:0,split[left][tmp];[tmp]hflip[right];[left]pad=iw*2[a];[a][right]overlay=w ${ran}`, async(err) => {
						if (err) return reply('Error')
						benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4', quoted: ben, caption: 'Neh..'})
					})
					} else {
						reply('Mana video nya?')
					}
									break
									case 'vidfisheye':					case 'fisheyevid':				if (!isQuotedVideo) return reply('videonya mana')
					if (isQuotedVideo) {
			ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await benny.downloadAndSaveMediaMessage(ger)
							ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -vf "lenscorrection=cx=0.5:cy=0.5:k1=1:k2=1" ${ran}`, async(err) => {
						if (err) return reply('Error')
						benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4', quoted: ben, caption: 'Neh..'})
					})
					} else {
						reply('Mana video nya?')
					}
									break
									case 'vidmirrorstick':					case 'mirrorvidstick':				if (!isQuotedVideo) return reply('videonya mana')
					if (isQuotedVideo) {
			ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await benny.downloadAndSaveMediaMessage(ger)
							ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -vf crop=iw:ih:0:0,split[left][tmp];[tmp]hflip[right];[left]pad=iw*2[a];[a][right]overlay=w ${ran}`, async(err) => {
						if (err) return reply('Error')
						sendSticker(from, ran)
					})
					} else {
						reply('Mana video nya?')
					}
									break
								case 'imagemirror':					case 'mirrorimage':				if (!isQuotedImage) return reply('gambarnya mana')
					if (isQuotedImage) {
			ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    media = await benny.downloadAndSaveMediaMessage(ger)
							ran = getRandom('.png')
					exec(`ffmpeg -i ${media} -vf crop=iw:ih:0:0,split[left][tmp];[tmp]hflip[right];[left]pad=iw*2[a];[a][right]overlay=w ${ran}`, async(err) => {
						if (err) return reply('Error')
						benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: ben, caption: 'Neh'})
					})
					} else {
						reply('Mana gambar nya?')
					}
									break
										case 'sticknobg':				if (!isQuotedSticker) return reply('stickernya mana')
					if (isQuotedSticker) {
												 if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
	fs.writeFileSync('sticknobg.png', fs.readFileSync(ran))
						if (err) return reply('Error om')
							ranp = getRandom('.png')
					keyrmbg = 'z7PetGk6n8bJZyaz6xLMX6pg'
							removeBackgroundFromImageFile({path: 'sticknobg.png', apiKey: keyrmbg, size: 'auto', type: 'auto', ranp})
							.then(res => {
								let buffur = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffur)
								var imgbb = require('imgbb-uploader')
								reply(mess.wait)
								imgbb("1c6ba6abae298c0d9b9bfaa811101466", ranp)
								.then(anu => {
								sendStickerFromUrl(from, anu.display_url)
								})
							})
					})
					} else {
						reply('Mana sticker nya?')
					}
									break
					case 'gambarbulet':case 'imagebulet':if (isQuotedImage) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -hide_banner  -i "${owgi}" -i "./buletan.png" -filter_complex [0]scale=400:400[ava];[1]alphaextract[alfa];[ava][alfa]alphamerge ${ran}`, async(err) => {
						if (err) return reply('error')
						benny.sendMessage(from, fs.readFileSync(ran), image, {caption: 'Subcribe https://youtube.com/c/FaxBotz', mimetype: 'image/png', quoted: ben})
					})
					} else if (isQuotedSticker) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async(err) => {
						if (err) return reply('error')
						ranp = getRandom('.png')
					exec(`ffmpeg -hide_banner  -i "${ran}" -i "./buletan.png" -filter_complex [0]scale=400:400[ava];[1]alphaextract[alfa];[ava][alfa]alphamerge ${ranp}`, async(err) => {
						if (err) return reply('error')
						benny.sendMessage(from, fs.readFileSync(ranp), image, {caption: 'Subcribe https://youtube.com/c/FaxBotz', mimetype: 'image/png', quoted: ben})
					})
					})
					} break
					case 'vidbulet':if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.mp4')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf "movie=./buletan.png [watermark]; [in] [watermark] overlay=0:0 [out]" -strict -2 ${ran}`, async(err) => {
						if (err) return reply('error')
						sendSticker(from, ran)
					})
					} break
					case 'stickbulet':if (isQuotedImage) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -hide_banner  -i "${owgi}" -i "./buletan.png" -filter_complex [0]scale=400:400[ava];[1]alphaextract[alfa];[ava][alfa]alphamerge ${ran}`, async(err) => {
						if (err) return reply('error')
						sendSticker(from, ran)
					})
					} else if (isQuotedSticker) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, async(err) => {
						if (err) return reply('error')
						ranp = getRandom('.png')
					exec(`ffmpeg -hide_banner  -i "${ran}" -i "./buletan.png" -filter_complex [0]scale=400:400[ava];[1]alphaextract[alfa];[ava][alfa]alphamerge ${ranp}`, async(err) => {
						if (err) return reply('error')
						sendSticker(from, ranp)
					})
					})
					} break
					 case 'editstick':				
									 var ghs = body.slice(11)
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/welcomeimage?apikey=${lolkey}&img=${teks}&text=${ghs}`
										sendStickerFromUrl(from, buffer, ben)
									break
									case 'pencilvid':				case 'vidpencil':				 ran = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf "edgedetect=enable='gt(mod(t,60),57)',negate" -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
})
									 }
	break
									case 'sepiavidstick':				case 'vidsepiastick':				 ran = getRandom('.mp4')
									 ranw = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -b 200k ${ranw}`, async(err)=>{
					exec(`ffmpeg -i ${ranw} -vf hue=s=0 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	sendSticker(from, ran)
})
					})
									 }
	break
									case 'sepiavid':				case 'vidsepia':				 ran = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf hue=s=0 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), video)
})
									 }
	break
	case 'colorfulvid':				case 'vidcolorful':				 ran = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf eq=brightness=0.06:saturation=3 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), video)
})
									 }
	break
	case 'cahayavid':				case 'vidcahaya':				 ran = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf eq=brightness=0.5:saturation=1 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), video)
})
									 }
	break
	case 'imagecolorful':	case 'imgcolorful':				 ran = getRandom('.jpg')
									 if (isQuotedImage) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf eq=brightness=0.06:saturation=3 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), image)
})
									 }
	break
	case 'githubdl':{
		if(!isUrl(args[0]) && !args[0].includes('github')) return reply(mess.error.Iv)
		try {
		let lah = arg.split('github.com/')[1]
		let link = `https://codeload.github.com/${lah.split('/')[0]}/${lah.split('/')[1]}/zip/refs/heads/main?token=ASYIN4BATRKW6SSUY6I2SGTBQOQNE`
		benny.sendFileFromUrl(from, link, `${lah.split('/')[1]}.zip`, '', ben)
		} catch {
			reply('Error!')
		}
	}
		break
		case 'ghsearch':{
    if (!arg) throw 'Cari apa?'
    let res = await fetch(`https://api.github.com/search/repositories?q=${arg}`)
    let json = await res.json()
    if (res.status !== 200) return reply(JSON.stringify(json, null, 2))
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
    }).join('\n\n')
    m.reply(str)
}
break
	case 'gitclone':{
		let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
		if(!isUrl(args[0]) && !args[0].includes('github')) return reply(mess.error.Iv)
		if (!args[0]) throw 'link githubnya mana? contoh: https://github.com/Bintang73/botst4rz'

    if (!regex.test(args[0])) return reply('link salah!')

    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filename=Nurutomo-wabot-aq-v2.5.1-251-g836cccd.zip'
    m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
    benny.sendFile(m.chat, url, filename, null, m)
	}
		break
	case 'imagecahaya':	case 'imgcahaya':				 ran = getRandom('.jpg')
									 if (isQuotedImage) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf eq=brightness=0.5:saturation=1 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), image)
})
									 }
	break
	case 'stickcolorful':	case 'colorfulstick':				 ran = getRandom('.webp')
	if (isQuotedSticker) {
	if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == false) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf eq=brightness=0.06:saturation=2 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), sticker)
})
									 } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true) {
							encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						memek = await webp2gifFile(media)
						reply('Tunggu sekitar 1 menit!')
						console.log(memek)
						ran = getRandom('.mp4')
						anj = await getBaper(memek.result)
						ani = Date.now()+'.mp4'
						fs.writeFileSync(ani, anj)
						exec(`ffmpeg -i ${ani} -vf eq=brightness=0.06:saturation=2 -c:a copy ${ran}`, async (err) => {
							sendStickerKotak(from, ran)
									})
									 }
	}
	break
	case 'stickcahaya':	case 'cahayastick':				 ran = getRandom('.webp')
	if (isQuotedSticker) {
	if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == false) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf eq=brightness=0.5:saturation=1 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), sticker)
})
									 } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true) {
							encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						memek = await webp2gifFile(media)
						reply('Tunggu sekitar 1 menit!')
						console.log(memek)
						ran = getRandom('.mp4')
						anj = await getBaper(memek.result)
						ani = Date.now()+'.mp4'
						fs.writeFileSync(ani, anj)
						exec(`ffmpeg -i ${ani} -vf eq=brightness=0.5:saturation=1 -c:a copy ${ran}`, async (err) => {
							sendStickerKotak(from, ran)
									})
									 }
	}
	break
	case 'vidfast':				case 'fastvid':				 ran = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
									 exec(`ffmpeg -i ${owgi} -filter:v "setpts=0.5*PTS" ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), video)
})
									 }
	break
	case 'resizevid':
	anu = await downloadM()
	ran = getRandom('.mp4')
			exec(`ffmpeg -i ${anu} -b 200k ${ran}`, async(err)=>{
		if(err) return reply('error')
		benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4', quoted: ben})
	})
	break
	case 'imagebig':
	anu = await downloadM()
	ran = getRandom('.tiff')
			exec(`ffmpeg -i ${anu} -b ${args[0]}m ${ran}`, async(err)=>{
		if(err) return reply('error')
		benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: ben})
	})
	break
		case 'cleandb':{
		if (!ben.key.fromMe && !isOwner) return
		let a = fs.readdirSync('.')
		for (let i of a) {
			if (i && i.includes(args[0])) {
				fs.unlinkSync(i)
			}
		}
		}
		break
	case 'vidfaststick':				case 'fastvidstick':				 ran = getRandom('.mp4')
									 ranw = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -b 200k ${ranw}`, async(err)=>{
									 exec(`ffmpeg -i ${ranw} -filter:v "setpts=0.5*PTS" ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), video)
})
					})
									 }
	break
	case 'vidslowmostick':				case 'slowmovidstick':				 ran = getRandom('.mp4')
									 ranw = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -b 200k ${ranw}`, async(err)=>{
									 exec(`ffmpeg -i ${ranw} -filter:v "setpts=3*PTS" ${ran}`, async(err) => {
	if (err) return reply('Error')
	sendSticker(from, ran)
									 })
})
									 }
	break
	case 'vidslowmo':				case 'slowmovid':				 ran = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
									 exec(`ffmpeg -i ${owgi} -filter:v "setpts=3*PTS" ${ran}`, async(err) => {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), video)
})
									 }
	break
	case 'sticksepia':				case 'sepiastick':				 ran = getRandom('.mp4')
									 if (isQuotedVideo) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf hue=s=0 -c:a copy ${ran}`, async(err) => {
	if (err) return reply('Error')
	sendSticker(from, ran)
})
									 }
	break
					case 'stickburik':				
									 var ghs = body.slice(11)
									 ran = getRandom('.jpg')
									 if (isQuotedSticker) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} ${ran}`, (err) => {
					 uploadMedia(ran)
					 .then(uploade => {
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/deepfry?apikey=${lolkey}&img=${teks}`
										sendStickerFromUrl(from, buffer, ben)
					 })
					})
									 } else if (isMedia || isQuotedImage) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/deepfry?apikey=${lolkey}&img=${teks}`
										sendStickerFromUrl(from, buffer, ben)
									 }
									break
									case 'stickfisheye':				
									if (isQuotedSticker) {
										let p = await downloadM()
										let o = getRandom('.png')
									exec(`ffmpeg -i ${p} ${o}`, async (err) => {
									let po = await uploadMedia(o)
									sendStickerFromUrl(from, `https://cililitan2.herokuapp.com/api/fisheye?url=${po.files[0].url}`)
									})
									} else {
										reply('Reply Stickernya!')
									}
									break
									case 'stickquote2':				
									 var ghs = body.slice(13)
									if (isMedia || isQuotedImage) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/quotemaker3?apikey=${lolkey}&text=${ghs}&img=${teks}`
										sendStickerFromUrl(from, buffer, ben)
									 } else if (isQuotedSticker) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/quotemaker3?apikey=${lolkey}&text=${ghs}&img=${teks}`
										sendStickerFromUrl(from, buffer, ben)
									 }
									break
									case 'autorespond': {
										if (!ben.key.fromMe && !isOwner) return
										if (arg === 'on') {
											auspon = true
											await reply('*Done!*')
										} else if (arg === 'off') {
											auspon = false
											await reply('*Done!*')
										} else {
											reply('Pilih on atau off!')
										}
									}
									break
									case 'autorespondvn': 
									case 'autorespondaudio': {
										if (!ben.key.fromMe && !isOwner) return
										if (arg === 'on') {
											auspona = true
											await reply('*Done!*')
										} else if (arg === 'off') {
											auspona = false
											await reply('*Done!*')
										} else {
											reply('Pilih on atau off!')
										}
									}
									break
									case 'autorespondstick': {
										if (!ben.key.fromMe && !isOwner) return
										if (arg === 'on') {
											auspons = true
											await reply('*Done!*')
										} else if (arg === 'off') {
											auspons = false
											await reply('*Done!*')
										} else {
											reply('Pilih on atau off!')
										}
									}
									break
									case 'stickpencil':				
									 var ghs = body.slice(11)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
										ran = getRandom('.png')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf "edgedetect=enable='gt(mod(t,60),57)',negate" -c:a copy ${ran}`, (err) => {
										sendSticker(from, ran)
					})
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/editor/pencil?apikey=${lolkey}&img=${teks}`
										sendStickerFromUrl(from, buffer, ben)
									 }
									break
									case 'videoflip':				if (isQuotedVideo && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.mp4')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 exec(`ffmpeg -i ${owgi} -filter:v "hflip" ${ran}`, async (err) => {
						if (err) return reply('error')
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
					 } break
									case 'videoflip2':				if (isQuotedVideo && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ran = getRandom('.mp4')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 exec(`ffmpeg -i ${owgi} -filter:v "vflip" ${ran}`, async (err) => {
						if (err) return reply('error')
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
					 } break
									case 'slowvid':				
									 var ghs = body.slice(11)
									if (isQuotedVideo) {
										ran = getRandom('.mp4')
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -filter:v "minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=30'" ${ran}`, async (err) => {
						if (err) return reply(err)
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
									} break
					case 'vidflip':				case 'flipvid':				
									 var ghs = body.slice(11)
									if (isQuotedVideo) {
										ran = getRandom('.mp4')
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf hflip -c:a copy ${ran}`, async (err) => {
						if (err) return reply(err)
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
									} break
					case 'vidrgba':				case 'rgbavid':				
									 var ghs = body.slice(11)
									if (isQuotedVideo) {
										ran = getRandom('.mp4')
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf rgbashift=rh=15:bv=15:gh=-15 -pix_fmt yuv420p ${ran}`, async (err) => {
						if (err) return reply(err)
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
									} break
					case 'vidblur':				case 'blurvid':				
									 var ghs = body.slice(11)
									if (isQuotedVideo) {
										ran = getRandom('.mp4')
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf gblur=sigma=42:steps=6 -pix_fmt yuv420p ${ran}`, async (err) => {
						if (err) return reply(err)
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
									} break
					case 'vidflip2':				case 'flipvid2':				
									 var ghs = body.slice(11)
									if (isQuotedVideo) {
										ran = getRandom('.mp4')
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf vflip -c:a copy ${ran}`, async (err) => {
						if (err) return reply(err)
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
									} break
					case 'reversevid':case 'vidreverse':				
									 var ghs = body.slice(11)
									if (isQuotedVideo) {
										ran = getRandom('.mp4')
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf reverse -af areverse ${ran}`, async (err) => {
						if (err) return reply(err)
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
									} break
					
					case 'reversevid2':case 'vidreverse2':				
									 var ghs = body.slice(11)
									if (isQuotedVideo) {
										ran = getRandom('.mp4')
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -vf reverse ${ran}`, async (err) => {
						if (err) return reply(err)
										benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4'})
					})
									} break
					case 'stickflip':if (!isQuotedSticker) return reply('Reply stickernya!')
									if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true) {
							encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						 media = await benny.downloadAndSaveMediaMessage(encmedia)
						memek = await webp2gifFile(media)
						reply('Tunggu sekitar 1 menit!')
						console.log(memek)
						ran = getRandom('.mp4')
						anj = await getBaper(memek.result)
						ani = Date.now()+'.mp4'
						fs.writeFileSync(ani, anj)
						exec(`ffmpeg -i ${ani} -vf hflip -c:a copy ${ran}`, async (err) => {
							sendStickerKotak(from, ran)
									})
									 } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == false) {
										 ran = getRandom('.png')
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 exec(`ffmpeg -i ${owgi} -filter:v "hflip" ${ran}`, async (err) => {
						if (err) return reply(String(err))
										sendStickerKotak(from, ran)
					})
									 }
									break
									case 'antispam': 
									if (!isGroup) return reply(mess.only.group)
										if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												if (arg === 'on') {
													if (isSpam) return reply('*Sudah Aktif!*')
														antispam.push(from)
												fs.writeFileSync('./src/antispam.json', JSON.stringify(antispam))
												await reply('*Done!*')
												} else if (arg === 'off') {
													if (!isSpam) return reply('*Belum Aktif!*')
														antispam.splice(antispam.indexOf(from), 1)
												fs.writeFileSync('./src/antispam.json', JSON.stringify(antispam))
												await reply('*Done!*')
												} else {
													reply('Pilih on atau off!')
												}
												break
									case 'antispambot': 
										if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
												if (arg === 'on') {
													if (antispams) return reply('*Sudah Aktif!*')
														antispams = false
												await reply('*Done!*')
												} else if (arg === 'off') {
													if (!antispams) return reply('*Belum Aktif!*')
														antispams = true
												await reply('*Done!*')
												} else {
													reply('Pilih on atau off!')
												}
												break
									case 'antibaileys': 
									if (!isGroup) return reply(mess.only.group)
										if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												if (arg === 'on') {
													if (isAntiBaileys) return reply('*Sudah Aktif!*')
														antibaileys.push(from)
												fs.writeFileSync('./src/antibaileys.json', JSON.stringify(antibaileys))
												await reply('*Done!*')
												} else if (arg === 'off') {
													if (!isAntiBaileys) return reply('*Belum Aktif!*')
														antibaileys.splice(antibaileys.indexOf(from), 1)
												fs.writeFileSync('./src/antibaileys.json', JSON.stringify(antibaileys))
												await reply('*Done!*')
												} else {
													reply('Pilih on atau off!')
												}
												break
									 case 'getexif':{
    if (!isQuotedSticker) return reply('Tag stikernya!')
	anu = await downloadM()
	ran = getRandom('.exif')
	exec(`webpmux -get exif ${anu} -o ${ran}`, async(err, stdout) => {
	reply(JSON.stringify(JSON.parse(fs.readFileSync(ran).toString().slice(22)), null, 2))
	})
									 }
									 break
									case 'stickflip2':				
									 var ghs = body.slice(11)
									 ran = getRandom('.png')
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					exec(`ffmpeg -i ${owgi} -filter:v "vflip" ${ran}`, async (err) => {
						if (err) return reply(err)
										sendSticker(from, ran)
					})
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 exec(`ffmpeg -i ${owgi} -filter:v "vflip" ${ran}`, async (err) => {
						if (err) return reply(err)
										sendSticker(from, ran)
					})
									 }
									break
									case 'getcaption':
									if (!isQuotedImage && !isQuotedVideo) return reply('Reply Video/Image nya!')
										reply(m.quoted.text)
									break
									case 'stickinvert':				
									 if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${teks}`
										sendStickerFromUrl(from, buffer, ben)
									 } else if (isQuotedSticker) {
										   ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${teks}`
										sendStickerFromUrl(from, buffer, ben)
									 }
									break
									case 'suitpvp':{
									if (!ben.mentionedJid[0]) return ben.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya.. Contoh\n\n${prefix}suitpvp @${buattag}`, ben.chat, { contextInfo: { mentionedJid: [buattag + '@s.whatsapp.net'] } })
								if (!isGroup) return reply(mess.only.group)
									let pao = await benny.sendMessage(from, `*[ SUIT PVP ]*\n\n@${ben.sender.split`@`[0]} menantang @${ben.mentionedJid[0].split`@`[0]} untuk bermain suit\nSilahkan @${ben.mentionedJid[0].split`@`[0]}\nKetik "Y" untuk memulai suit Ketik "N" untuk menolak`, text, {quoted: ben, contextInfo:{mentionedJid: [sender, ben.mentionedJid[0]]}})
									suitpvp.push({pemain1: sender, pemain2: ben.mentionedJid[0], id: pao.key.id})
									sudb.push(from)
								fs.writeFileSync('./src/game/suitpvp.json', JSON.stringify(sudb))
									}
									break
								case 'update':
									if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
									let stdout = execSync('git remote set-url origin https://github.com/bennysolo/botwa.git && git pull' + (isOwner && arg ? ' ' + arg : ''))
    if (isOwner) require('fs').readdirSync('./')
    ben.reply(stdout.toString())
									case 'stickcolor':				
									 var ghs = body.slice(11)
									 hex = 'FF0000'
									 if (args[0] == 'hijau') hex = '00FF00'
									 if (args[0] == 'kuning') hex = 'FFFF00'
									 if (args[0] == 'orange') hex = 'FFA500'
									 if (args[0] == 'oren') hex = 'FFA500'
									 if (args[0] == 'merah') hex = 'FF0000'
									 if (args[0] == 'ungu') hex = 'FF00FF'
									 if (args[0] == 'biru') hex = '0000FF'
									 if (args[0] == 'pink') hex = 'FF1493'
									 if (args[0] == 'ping') hex = 'FF1493'
									  if (isMedia || isQuotedImage) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/imagecolor?apikey=${lolkey}&img=${teks}&hex=${hex}`
										sendStickerFromUrl(from, buffer, ben)
									 } 
									break
									case 'sticksilver':
									case 'stickwhite':
									case 'stickyellow':
									case 'stickorange':
									case 'stickbrown':
									case 'stickred':
									case 'stickcyan':
									case 'stickaqua':
									case 'stickgrey':
									case 'stickpink':
									case 'stickpurple':
									case 'stickgreen':
									case 'stickblack':
									case 'sticklime':
									case 'stickmagenta':
									case 'stickgold':
									if (isQuotedSticker) {
									let ga = await downloadM()
									let p = getRandom('.png')
									exec(`ffmpeg -i ${ga} ${p}`, async (err) => {
									let h = await uploadMedia(p)
									reply(mess.wait)
									let g = await fetchJson(`http://hujanapi.xyz/api/nobg?url=${h.files[0].url}&color=${command.split('k')[1]}&apikey=januari`)
									sendStickerFromUrl(from, g.url)
									})
									} else {
										reply('*Reply Stickernya!*')
									}
									break
									case 'changebgstick':
									case 'stickchangebg':
									if (isQuotedSticker) {
										try {
									let ga = await downloadM()
									let p = getRandom('.png')
									exec(`ffmpeg -i ${ga} ${p}`, async (err) => {
									let h = await uploadMedia(p)
									let g = await fetchJson(`http://hujanapi.xyz/api/nobg?url=${h.files[0].url}&color=${arg}&apikey=januari`)
									sendStickerFromUrl(from, g.url)
									})
										} catch {
											reply('Error')
										}
									} else {
										reply('*Reply Stickernya!*')
									}
									break
									case 'changebgimg':
									case 'changebgimage':
									case 'imagechangebg':
									if (isQuotedImage) {
										try {
									let ga = await downloadM()
									let p = getRandom('.png')
									let h = await uploadMedia(p)
									let g = await fetchJson(`http://hujanapi.xyz/api/nobg?url=${h.files[0].url}&color=${arg}&apikey=januari`)
									sendStickerFromUrl(from, g.url)
										} catch {
											reply('Error')
										}
									} else {
										reply('*Reply Imagenya!*')
									}
									break
									case 'stickmeme':				
									 var ghs = body.slice(11)
									 var imgbb = require('imgbb-uploader')
									 if (ben.message.extendedTextMessage != undefined || ben.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					ran = getRandom('.jpg')
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					var uploade = await uploadMedia(ran)
                                        teks = `${uploade.files[0].url}`
										buffer = `https://api.memegen.link/images/custom/_/${ghs}.png?background=${teks}`
										sendStickerFromUrl(from, buffer, ben)
									 })
									 }
									break
									case 'creatememe':			
									 if (isQuotedImage) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `https://api.memegen.link/images/custom/_/${arg}.png?background=${teks}`
										benny.sendFileFromUrl(from, buffer, 'meme.png', `*Meme:* ${arg}`, ben)
									 } else {
										 reply('Reply Image!') 
									 }
									break
									case 'creatememe2':			
									 if (isQuotedImage) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `https://api.memegen.link/images/custom/${arg}/_.png?background=${teks}`
										benny.sendFileFromUrl(from, buffer, 'meme.png', `*Meme:* ${arg}`, ben)
									 } else {
										 reply('Reply Image!') 
									 }
									break
									case 'creatememe3':			
									 if (isQuotedImage) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `https://api.memegen.link/images/custom/${arg.split('|')[0]}/${arg.split('|')[1]}.png?background=${teks}`
										benny.sendFileFromUrl(from, buffer, 'meme.png', `*Meme:* ${arg}`, ben)
									 } else {
										 reply('Reply Image!') 
									 }
									break
									case 'stickmeme4':				
									 var ghs = body.slice(12)
									 if (!isQuotedVideo) return reply('Reply Video nya!')
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
										ranl = getRandom('.mp4')
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					  exec(`ffmpeg -i ${owgi} -vf "drawtext=fontfile=./src/segoe.ttf:text='${ghs}': fontcolor=white:fontsize=40:box=1:boxcolor=black@0.7: x=20: y=550" -y ${ranl}`, async (err) => {
						 if (err) return reply('error')
										sendSticker(from, ranl)
					 })
									break
									case 'stickmeme2':				
                                     var imgbb = require('imgbb-uploader')
									 var ghs = body.slice(12)
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					ran = getRandom('.jpg')
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 var uploade = await uploadMedia(ran)
                                        teks = `${uploade.files[0].url}`
										buffer = `https://api.memegen.link/images/custom/${ghs}/_.png?background=${teks}`
										sendStickerFromUrl(from, buffer, ben)
					})
									break
									case 'stickmeme3':				
                                     var imgbb = require('imgbb-uploader')
									 var ghs = body.slice(12)
									     ghs1 = ghs.split('|')[0]
									     ghs2 = ghs.split('|')[1]
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					ran = getRandom('.jpg')
					exec(`ffmpeg -i ${owgi} ${ran}`, async (err) => {
					 var uploade = await uploadMedia(ran)
                                        teks = `${uploade.files[0].url}`
										buffer = `https://api.memegen.link/images/custom/${ghs1}/${ghs2}.png?background=${teks}`
										sendStickerFromUrl(from, buffer, ben)
					})
									break
										case 'tourl':				
                                     var imgbb = require('imgbb-uploader')
									 if (isQuotedAudio) {
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await uploadimgs(owgi, getRandom('.mp3'))
                                        console.log(anu.files[0].url)
										reply(anu.files[0].url)
									 } else if (isQuotedImage) {
										 ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await uploadimgs(owgi, getRandom('.jpg'))
                                        console.log(anu.files[0].url)
									reply(anu.files[0].url)
									 } else if (isQuotedVideo) {
										 ger = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await uploadimgs(owgi, getRandom('.mp4'))
                                        console.log(anu.files[0].url)
										reply(anu.files[0].url)
			} else if (isQuotedSticker) {
				ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await uploadimgs(owgi, getRandom('.webp'))
                                        console.log(anu.files[0].url)
										reply(anu.files[0].url)
			} else {
				reply('Reply media nya!')
			}
							break
							
							case 'tourl2':				 ran = Math.floor(Math.random() * 10000)
				ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger, ran)
					 anu = await uploadMedia(owgi)
					 reply(anu.files[0].url)
                                        console.log(anu)
							break
							case 'genkey':
							if (!isOwner && !ben.key.fromMe) return reply(mess.only.ownerB)
								apikey.isikey.push(crypto.randomBytes(15).toString('hex').slice(0, 15))
							fs.writeFileSync('./apikey.json', JSON.stringify(apikey))
							reply('*Sukses!*')
							break
							case 'getkey':
							if (!isOwner && !ben.key.fromMe) return reply(mess.only.ownerB)
			reply(isikey[Math.floor(Math.random() * isikey.length)])
		break
							case 'daftarpremium':{
		if (isPremium) return reply(`Nomor kamu sudah terdaftar di user premium`)
        if (args.length == 0) return reply(`${monospace}Keynya mana? \nChat owner untuk membeli key!${monospace}`)
		  let key = arg
	  if (!isikey.includes(key)) return reply('*key* salah! silahkan chat owner bot unruk mendapatkan key yang valid')
	  premium.addPremiumUser(sender, '7d', _premium)
 await reply(`╭───「 *PREMIUM USER* 」───
│++
│+ *Nama* : ${pushname}
│+ *Nomor* : ${sender.replace(/[@s.whatsapp.net]/g, '')}
│
╰───────────────────
Terima kasih telah melakukan pembayaran.
Total user premium : ${_premium.length}

       ║▌│█║▌│ █║▌│█│║▌║
       ║▌│█║▌│ █║▌│█│║▌║
          
           *FARDAN*      `)
							}
   break
   case 'ceklokasi':
	  if (!isQuotedLocation) return reply(`Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`)
            console.log(`Request Status Zona Penyebaran Covid-19 (${ben.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLatitude}, ${ben.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLongitude}).`)
            const zoneStatus = await getLocationData(ben.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLatitude, ben.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLongitude)
            if (zoneStatus.kode !== 200) return reply('Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const texto = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
            benny.sendMessage(from, texto, text, {quoted: ben})
            break	
   case 'unreg':
		if (!isRegistered) return reply(`Nomor kamu belum terdafar! \n\nSilahkan register dengan format:\n *#daftar*`)
            let unreg = _registered.indexOf(sender.id)
                _registered.splice(register.getRegisteredPosition(sender, _registered), 1)
                fs.writeFileSync('./src/registered.json', JSON.stringify(_registered))
               await reply(`${pushname} telah logout dari ${namabot}!`)
            break
										case 'sticktourl':					case 'stickertourl':				
                                     var imgbb = require('imgbb-uploader')
                                          ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
										reply(teks)
										break
										case 'sticktourl2':					case 'stickertourl2':				
                                         if (isQuotedSticker) {
                                         ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
                                        var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										reply(teks)
										 }
										break
                case 'nekopoi':if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
                    if (arg.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    console.log(get_result)
                    txt = `Title : ${get_result.anime}\n`
                    txt += `Porducers : ${get_result.producers}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Size : ${get_result.size}\n`
                    txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    buffer = await getBaper(get_result.thumb)
                    benny.sendMessage(from, buffer, image, { quoted: ben, caption: txt })
                    break
                case 'spotify':if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Artists : ${get_result.artists}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Popularity : ${get_result.popularity}\n`
                    txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBaper(get_result.thumbnail)
                    benny.sendMessage(from, thumbnail, image, { quoted: ben, caption: txt })
                    get_audio = await getBaper(get_result.link[3].link)
                    benny.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ben })
                    break
                case 'spotifysearch':if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Artists : ${get_result[x].artists}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Preview : ${get_result[x].preview_url}\n\n\n`
                    }
                    reply(txt)
                    break
					case 'sider':{
					let members = m.quoted.chat.endsWith('g.us') ? (await benny.groupMetadata(m.quoted.chat)).participants.length - 1 : m.quoted.chat.endsWith('@broadcast') ? -1 : 1
  let { reads, deliveries } = await benny.messageInfo(m.quoted.chat, m.quoted.id)
  let txt = `
*Read by:*
${reads.sort((a, b) => b.t - a.t).map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`).join('\n')}
${members > 1 ? `${members - reads.length} remaining` : ''}
*Delivered to:*
${deliveries.sort((a, b) => b.t - a.t).map(({ jid, t }) => `wa.me/${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`).join('\n')}
${members > 1 ? `${members - reads.length - deliveries.length} remaining` : ''}
`.trim()
  benny.sendMessage(from, txt, text, {contextInfo:{mentionedJid: parseMention(txt)}, quoted: ben})
					}
  break
  case 'changefps':
  if (ben.message.videoMessage) {
	  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
		const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
		rn = getRandom('.mp4')
	  exec(`ffmpeg -y -r ${arg} -i ${media} ${rn}`, async(err) => {
		  if (err) return reply(String(err))
			  benny.sendMessage(from, fs.readFileSync(rn), video, {mimetype: 'video/mp4'})
	  })
  } else if (isQuotedVideo) {
	   const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
		const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
		rn = getRandom('.mp4')
	  exec(`ffmpeg -y -r ${arg} -i ${media} ${rn}`, async(err) => {
		  if (err) return reply(String(err))
			  benny.sendMessage(from, fs.readFileSync(rn), video, {mimetype: 'video/mp4'})
	  })
  } else {
	  reply('Reply videonya!')
  }
  break
					case 'joox':	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=Tobzzz17`)
					teks = '-? *Play Music From Joox* ?-\n'
					const joox = data.result
						teks += `\n- *Judul* : ${joox.title}\n- *Album* : ${joox.album}\n- *Publish At* : ${joox.dipublikasi}\n\n-? *SELF-BOT* ?-`
					thumb = await getBaper(joox.thumb)
					reply(mess.wait)
					benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
					buffer = await getBaper(joox.mp3)
					benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${joox.title}.mp3`, quoted: ben})
					break
					case 'jooxplay':   get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${body.slice(10)}`)
                    get_result = get_result.result
                    tkt = `Title : ${get_result.info.song}\n`
                    tkt += `Artists : ${get_result.info.singer}\n`
                    tkt += `Duration : ${get_result.info.duration}\n`
                    tkt += `Album : ${get_result.info.album}\n`
                    tkt += `Uploaded : ${get_result.info.date}\n`
                    tkt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBaper(get_result.image)
                    benny.sendMessage(from, thumbnail, image, { quoted: ben, caption: tkt })
                    get_audio = await getBaper(get_result.audio[0].link)
                    benny.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: ben })
                    break
					case 'soundcloud':	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						data = await fetchJson(`https://api-xcoders.xyz/api/download/soundcloud?url=${body.slice(12)}&apikey=XSIHcH8N7B`)
						teks = '-? *Play Music From Sound cloud* ?-\n'
						const pler = data.result
							teks += `\n- *Judul* : ${pler.title}\n- *Durasi* : ${pler.duration}\n- *Size* : ${pler.filesize}\n\n`
						thumb = await getBaper(pler.thumbnail)
						reply(mess.wait)
					benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
						buffer = await getBaper(pler.url)
						benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${pler.title}.mp3`, quoted: ben})
						break
						case 'play':if (!arg && !m.quoted) return reply('Masukan judul atau Reply Judul Lagunya')
                            if (arg) {
                            const playy = await axios.get(`https://cililitan2.herokuapp.com/api/ytsearch?q=${encodeURI(arg)}`)
                            const mulaikah = playy.data.result[0]
							const {title, thumbnail, link, id} = mulaikah
                                reply(mess.wait)
                                
			const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Id* : ${id}\n*Link* : ${link}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                    gambar = await getBuffer(thumbnail)
gbutsan = [
  {buttonId: `#ytmp4 ${link}`, buttonText: {displayText: 'VIDEO'}, type: 'RESPONSE'},
  {buttonId: `#ytmp3 ${link}`, buttonText: {displayText: 'AUDIO'}, type: 'RESPONSE'}
]
mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, jpegThumbnail: gambar}, location, {thumbnail: gambar})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
    contentText: captions,
    footerText: namabot,
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
			} else if (!arg) {
                           const playy = await axios.get(`https://cililitan2.herokuapp.com/api/ytsearch?q=${m.quoted.text}`)
							console.log(playy)
                            const mulaikah = playy.data.result[0]
							console.log(mulaikah)
							const {title, thumbnail, link, id} = mulaikah
                                reply(mess.wait)
                                
			const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Id* : ${id}\n*Link* : ${link}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                    gambar = await getBuffer(thumbnail)
gbutsan = [
  {buttonId: `#ytmp4 ${link}`, buttonText: {displayText: 'VIDEO'}, type: 'RESPONSE'},
  {buttonId: `#ytmp3 ${link}`, buttonText: {displayText: 'AUDIO'}, type: 'RESPONSE'}
]
mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, jpegThumbnail: gambar}, location, {thumbnail: gambar})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
    contentText: captions,
    footerText: namabot,
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
			} 
                            break
						case 'playvid':	if (!arg && !m.quoted) return reply('Masukan judul atau Reply Judul Videonya')
							if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
                            if (arg) {
                            const playy2 = await axios.get(`https://cililitan2.herokuapp.com/api/ytsearch?q=${body.slice(6)}`)
                            const mulaikah2 = playy2.data.result[0].link
                                reply(mess.wait)
                                ytv(mulaikah2)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                                    const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                    sendMediaURL(from, thumb, captions)
                                    await sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
									if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
                                    })
                
                                })
                            } else if (!arg) {
                            const playy2 = await axios.get(`https://cililitan2.herokuapp.com/api/ytsearch?q=${m.quoted.text}`)
                            const mulaikah2 = playy2.data.result[0].link
                                reply(mess.wait)
                                ytv(mulaikah2)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                                    const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                                    sendMediaURL(from, thumb, captions)
                                    await sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
									limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
                                    })
                
                                })
							}
                            break
						case 'playmp32':	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						data = await fetchJson(`https://naufalhoster.xyz/dl/ytplayaudio?apikey=${naufalkey}&query=${body.slice(7)}`)
						teks = '-? *Play Music From Youtubes* ?-\n'
						const play2 = data.result
							teks += `\n- *Judul* : ${play2.title}\n- *Durasi* : ${play2.duration}\n- *Size* : ${play2.filesize}\n\n-? *${namabot}* ?-`
						thumb = await getBaper(play2.thumbnail)
						reply(mess.wait)
						buffer = await getBaper(play2.audio)
						reply(teks)
						benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${play2.title}.mp3`, quoted: ben})
						break
						case 'playmp33':	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolkey}&query=${body.slice(7)}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    tkt = `Title : ${get_info.title}\n`
                    tkt += `Uploader : ${get_info.uploader}\n`
                    tkt += `Duration : ${get_info.duration}\n`
                    tkt += `View : ${get_info.view}\n`
                    tkt += `Like : ${get_info.like}\n`
                    tkt += `Dislike : ${get_info.dislike}\n`
                    tkt += `Description :\n ${get_info.description}\n`
                    buffer = await getBaper(get_info.thumbnail)
                    benny.sendMessage(from, buffer, image, { quoted: ben, caption: tkt })
                    get_audio = await getBaper(get_result.audio[3].link)
                    benny.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: ben })
                    break
						case 'pinterest':	case 'pinteres':	
							data = await hxz.pinterest(arg)
							console.log(data)
							ranbu = data[Math.floor(Math.random() * data.length)]
							buffer = await getBuffer(ranbu)
							reply(mess.wait)
					benny.sendMessage(from, buffer, image, { quoted: ben, caption: `- *Pinterest* : `+arg})
							break
						case 'igstalk':	case 'stalkig':	limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						    if (arg.length < 1) return reply('Username nya mana?')
							tekss = body.slice(9)
							const optionso = {
  count: 0,
  mediaType: 'all',
	timeout: 0,
  session: "sessionid="+sID
};
							anu = await igstalk.getUserMeta(tekss, optionso)
							console.log(anu)
							reply(mess.wait)
							plor = anu.graphql.user
					teks = `*Username* : ${plor.username}\n*Fullname* : ${plor.full_name}\n*Followers* : ${plor.edge_followed_by.count}\n*Following* : ${plor.edge_follow.count}\n*Biodata* : ${plor.biography}\n*Link:* https://instagram.com/${tekss}`
							buffer = await getBaper(plor.profile_pic_url_hd)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'ceknama':		anu = await getName(sender)
							reply(anu)
							break
							case 'cekbio':		anu = await benny.getStatus(sender)
							reply(anu.status)
							break
							case 'igstalk2':	case 'stalkig2':	
						    if (arg.length < 1) return reply('Username nya mana?')
							tekss = body.slice(10)
							anu = await igdl.scrapeUserPage(tekss)
							reply(mess.wait)
							console.log(anu)
					plor = anu.result
					teks = `*Username* : ${anu.user.username}\n*Fullname* : ${anu.user.full_name}\n*Followers* : ${anu.user.edge_followed_by.count}\n*Following* : ${anu.user.edge_follow.count}\n*Biodata* : ${anu.user.biography}\n*Link:* https://instagram.com/${tekss}`
							buffer = await getBaper(anu.user.profile_pic_url_hd)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'ig3':	
						    if (arg.length < 1) return reply('Username nya mana?')
							tekss = body.slice(5)	
							anu = await igdl.scrapeUserPage(tekss)
							teks = `*╚❏* *IG SEARCH*\n\n`
							for (let o of anu.medias) {
								teks += `*Caption:* ${o.text}\n*Jumlah like:* ${o.like_count}\n============================\n`
							    buffer = await getBaper(o.thumbnail)
							}
							reply(mess.wait)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
							break
							case 'igstalk3':	case 'stalkig3':	
						    if (arg.length < 1) return reply('Username nya mana?')
							tekss = body.slice(10)
							anu = await fetchJson(`https://naufalhoster.xyz/dl/igstalk?apikey=${naufalkey}&username=${tekss}`)
							reply(mess.wait)
					plor = anu.result
					teks = `*Username* : ${plor.username}\n*Fullname* : ${plor.fullName}\n*Followers* : ${plor.followerCount}\n*Following* : ${plor.followingCount}\n*Jumlah post* : ${plor.postCount}\n*Biodata* : ${plor.biography}\n*Link:* https://instagram.com/${tekss}`
							buffer = await getBaper(plor.profile_picture.resolution_hd)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'ttstalk':	case 'stalktt':	
						    if (arg.length < 1) return reply('Username nya mana?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/tstalk?apikey=${naufalkey}&username=${body.slice(9)}`)
							reply(mess.wait)
					teks = `*Nickname* : ${anu.result.user.nickname}\n*Loves* : ${anu.result.stats.heartCount}\n*Followers* : ${anu.result.stats.followerCount}\n*ID* : ${anu.result.user.id}`
							buffer = await getBaper(anu.result.user.avatarLarger)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'ytstalk':	case 'stalkyt':	
						    if (arg.length < 1) return reply('Username nya mana?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/ytstalk?apikey=${naufalkey}&username=${body.slice(9)}`)
							reply(mess.wait)
					teks = `*Username* : ${anu.result.channel.username}\n*Channel Name* : ${anu.result.channel.displayname}\n*Subcribers* : ${anu.result.channel.subs}\n*Country* : ${anu.result.channel.country}\n*Views Total* : ${anu.result.channel.views}\n*Created at* : ${anu.result.channel.created_at}\n*Channel type* : ${anu.result.channel.channeltype}`
							buffer = await getBaper(anu.result.channel.avatar)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
						case 'ig':
case 'igdl':
case 'instagram':
if (arg.length < 1) return reply('Username nya mana?')
var { igDownloader } = require('./lib/igdown')
   ces = await igDownloader(`${arg}`).catch(e => {
reply(mess.error.api)
})
console.log(ces)
sendMediaURL(from,`${ces.result.link}`,`${ces.result.desc}`)
                    break
							case 'igvid':	
						   if (arg.length < 1) return reply('Link nya mana?')
							lino = body.slice(4)
							anu = await igdls(lino)
							console.log(anu)
							reply(mess.wait)
					buffer = await getBaper(anu.url_list[0])
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben})
							break
							case 'ig2':	
						    if (arg.length < 1) return reply('Link nya mana?')
							const optionse = {
  // Number of posts to scrape: {int default: 0}
  count: 0,
  mediaType: 'all',
	timeout: 0,
  session: "sessionid="+sID
};
							anu = await igstalk.getPostMeta(args[0], optionse)
							console.log(anu)
							opc = anu.graphql.shortcode_media.display_url
					buffer = await getBaper(opc)
							benny.sendMessage(from, buffer, image, {quoted: ben})
							break
							case 'lk21':	
						    if (arg.length < 1) return reply('Film apa?')
							anu = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${body.slice(6)}`)
							reply(mess.wait)
							plor = anu.result
							teks = `*╚❏* *LAYAR KACA 21*\n*╠❏*\n*╠❏* *Judul:* ${plor.title}\n*╠❏* *Desc:* ${plor.desc}\n*╠❏* *Genre:* ${plor.genre}\n*╠❏* *Durasi:* ${plor.duration}\n*╠❏* *Rating:* ${plor.rating}\n*╠❏* *Link:* ${plor.link}\n*╠❏* *Lokasi:* ${plor.location}\n*╠❏* *Bahasa:* ${plor.language}\n*╠❏* *Tanggal rilis:* ${plor.date_release}\n*╚❏* *Actors:* ${plor.actors}\n\n`
                	buffer = await getBaper(plor.thumbnail)
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
							break
							case 'infoalamat':	
						    if (arg.length < 1) return reply('Film apa?')
							anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${vhtearkey}`)
							reply(mess.wait)
							plor = anu.result
							teks = `${plor.data}\n*Desc:* ${plor.deskripsi}`
							reply(teks)
							break
							case 'google':	
						    if (arg.length < 1) return reply('Cari apa?')
							anu = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${arg}`)
							reply(mess.wait)
							teks = `*SEARCH GOOGLE*\n*Berikut Data Kami Dapatkan*\n\n`
							o = 1
							for (let plor of anu.result) {
							teks += `*${o++}. ${plor.title}*\n*Desc:* ${plor.desc}\n*Link:* ${plor.link}\n\n`
							}
							reply(teks.trim())
							break
							case 'komik':	
						    if (arg.length < 1) return reply('Film apa?')
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bacakomik?q=${body.slice(7)}&apikey=Tobzzz17`)
							reply(mess.wait)
							teks = `*╚❏* *KOMIK*\n\n`
							o = 1
							for (let plor of anu.result) {
								buffer = await getBaper(plor.thumbnail)
							teks += `*${o++}. Judul:* ${plor.judul}\n*Konsep:* ${plor.konsep_cerita}\n*Pengarang: ${plor.pengarang}*\n*Rating:* ${plor.rating}\n*Link:* ${plor.link}\n============================\n`
							}
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
							break
							case 'film':	
							if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						    if (arg.length < 1) return reply('Film apa?')
							anu = await fetchJson(`https://api.zeks.me/api/film/2?q=${body.slice(6)}&apikey=YunitaGanteng`)
							if (anu.status == false) return reply(anu.message)
							reply(mess.wait)
							teks = `*╚❏* *FILM*\n`
							o = 1
							for (let plor of anu.result) {
								buffer = await getBaper(plor.thumb)
							teks += `*${o++}. Judul:* ${plor.title}\n*Link:* ${plor.url}\n============================\n`
							}
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
							break
							case 'movie':	
						    if (arg.length < 1) return reply('Film apa?')
							anu = await fetchJson(`https://tobz-api.herokuapp.com/api/film?q=${body.slice(7)}&apikey=Tobzzz17`)
							if (anu.status == false) return reply(anu.message)
							reply(mess.wait)
							teks = `*╚❏* *FILM*\n`
							o = 1
							for (let plor of anu.result) {
								buffer = await getBaper(plor.thumb)
							teks += `*${o++}.* ${plor.judul}\n*Rating:* ${plor.rating}\n*Genre:* ${plor.genre_negara}\n*Link:* ${plor.link}\n============================\n`
							}
							benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
							break
							case 'cocofun':	
							if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						    if (arg.length < 1) return reply('Link nya mana?')
							anu = await fetchJson(`https://naufalhoster.xyz/dl/cocofun?apikey=${naufalkey}&url=${args[0]}`)
							reply(mess.wait)
							bufer = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, bufer, image, {quoted: ben, caption: '*Mohon tunggu sebentar video sedang didownload!'})
					buffer = await getBaper(anu.result.video)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', caption: anu.result.caption, quoted: ben})
							break
							case 'tiktokmusic':		case 'tiktokmusik':	
							if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
								if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
									if (arg.length < 1) return textImg('Linknya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.error.Iv)
						buffer = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok3?apikey=oniichan&url=${args[0]}`)
						anu = await getBaper(buffer.result)
    benny.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', quoted: ben})
							break
							case 'antiviewonce':	if (arg === 'on') {
								antivo.push(from)
								fs.writeFileSync('./src/antivo.json', JSON.stringify(antivo))
								await reply('*Berhasil mengaktifkan Anti ViewOnce*')
							} else if (arg === 'off') {
								antivo.splice(from, 1)
								fs.writeFileSync('./src/antivo.json', JSON.stringify(antivo))
								await reply('*Berhasil mematikan Anti ViewOnce*')
							} else {
								reply('Pilih on atau off!')
							}
							break
							case 'getonce':{
							if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
var msg = {...ben}

let typenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message["videoMessage"] ?
msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message.videoMessage : msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message.imageMessage

typenya["viewOnce"] = false

let peq = msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: ben.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: ben.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }

let pe = await benny.prepareMessageFromContent(from, msg.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message, {quoted: peq})

await benny.relayWAMessage(pe)
}
							break
						case 'tiktok':	
						if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
							if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
								if (arg.length < 1) return textImg('Linknya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.error.Iv)
						buffer = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${arg}`)
						console.log(buffer)
						anu = await getBaper(buffer.result.link)
						reply(mess.wait)
						teks = `*Title:* ${buffer.result.title}\n*Author:* ${buffer.result.author.nickname}\n*Desc:* ${buffer.result.description}`
						benny.sendMessage(from, anu, video, {mimetype: 'video/mp4', quoted: ben, caption: teks})
							break
case 'Facebook':
case 'fb':
case 'fasbok':
							if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
								if (arg.length < 1) return textImg('Linknya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.error.Iv)
						buffer = await fetchJson(`https://api-xcoders.xyz/api/download/fb?url=${arg}&apikey=XSIHcH8N7B`)
						console.log(buffer)
						anu = await getBaper(buffer.result.url)
						reply(mess.wait)
						teks = `               *Succes*                `
						benny.sendMessage(from, anu, video, {mimetype: 'video/mp4', quoted: ben, caption: teks})
							break
case 'ytshorth':		if (arg.length < 1) return reply('Linknya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtube')) return reply(mess.error.Iv)
						buffer = await fetchJson(`https://api-xcoders.xyz/api/download/ytshort?url=${arg}&apikey=XSIHcH8N7B`)
						console.log(buffer)
						anu = await getBaper(buffer.result.url)
						reply(mess.wait)
						teks = `*{*\n*"Title:" "${buffer.result.title}"*\n*"Durasi:* ${buffer.result.duration}"*\n*"quality:* ${buffer.result.quality}"*\n*}*`
						benny.sendMessage(from, anu, video, {mimetype: 'video/mp4', quoted: ben, caption: teks})
							break
					case 'playstore':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (arg.length < 1) return reply('Yang mau di cari apaan?')
					anu = await fetchJson(`https://api.zeks.me/api/sgplay?apikey=YunitaGanteng&q=${body.slice(11)}`)
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.appid}\n*Developer* : ${i.developer}\n*Price* : ${i.price}\n*Link* : ${kepo(i.url)}\n=================\n`
					}
					reply(teks.trim())
					break
					case 'igsearch':if (arg.length < 1) return reply('Yang mau di cari apaan?')
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = await fetchJson(`https://api.zeks.me/api/iguser?apikey=YunitaGanteng&q=${body.slice(10)}`)
					if (anu.error) return reply(anu.error)
					reply(mess.wait)
					teks = '\n'
					for (let i of anu.result) {
						teks += `*Username* : ${i.username}\n*Fullname* : ${i.full_name}\n=================\n`
						buffer = await getBaper(i.profile_pic)
					}
					benny.sendMessage(from, buffer, image, {caption: teks.trim(), quoted: ben})
					break
					case 'jalantikus':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/jalantikus?apikey=ChOkYbOT8`)
					reply(mess.wait)
					teks = `*Jalan tikus* : ${tekss}\n`
					for (let i of anu.result) {
						teks += `\n*Judul:* ${i.title}\n*Link:* ${i.link}\n`
						buffer = await getBaper(i.link)
					}
					benny.sendMessage(from, buffer, image, {caption: teks.trim(), quoted: ben})
					break
					case 'ytsearch':if (arg.length < 1) return reply('Yang mau di cari apaan?')
					anu = await ytsearch.search(body.slice(10))
					reply(mess.wait)
					teks = '*YOUTUBE SEARCH*\n\n'
					for (let i of anu.videos) {
						teks += `*Judul* : ${i.title}\n*Id* : ${i.id}\n*Channel* : ${i.channel.name}\n*Link Channel* : ${i.channel.link}\n*Duration* : ${i.duration} menit\n*Views* : ${i.views}\n===========================\n`
					buffer = await getBaper(i.thumbnail)
					}
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks.trim()})
					break
					case 'tobc':
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						if (isQuotedImage || isQuotedAudio || isQuotedVideo || isQuotedSticker) {
							let pkl = `*[ _BROADCAST_ ]*\n\n${arg}`
							let med = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
							let dia = await benny.downloadMediaMessage(med)
							let mims = isQuotedImage ?  {quoted: ben, caption: pkl, mimetype: 'image/jpeg'} : isQuotedVideo ? {quoted: ben, caption: pkl, mimetype: 'video/mp4'} : isQuotedAudio ? {quoted: ben, caption: pkl, mimetype: 'audio/mp4'} : isQuotedSticker ? {quoted: ben} : ''
							for (let i = 0; i < benny.chats.all().length; i++) {
								await sleep(2000)
							benny.sendMessage(benny.chats.all()[i].jid, dia, m.quoted.mtype, mims)
							}
						}
			break
					case 'tebakgambar': {
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (tgdb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
               let soalan = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.jawaban.toLowerCase()
                const petunjuk = anih.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                let pao = await benny.sendFileFromUrl(from, soal.image, 'image.jpg', `Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, ben)
				tebakgambar.push({jawaban: anih, sender: pao.key.id})
				console.log(tebakgambar)
				tgdb.push(from)
					fs.writeFileSync('./src/game/tebakgambar.json', JSON.stringify(tgdb))
            }
                break
				case 'canceltebakgambar':
				case 'canceltg':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!tgdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tebakgambar dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebakgambar[0].sender) return reply(`*Reply soal tebakgambar dan ketik*\n ${prefix}${command}`)
				tebakgambar = []
			tgdb.splice(tgdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebakgambar.json', JSON.stringify(tgdb)) 
				}
					break
				case 'purba':{
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				let teks = arg ? arg : m.quoted.text && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[aiueo]/gi, '$&ve'))
				}
				break
			case 'tebakanime': {
			if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
			if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (tndb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
               let soalan = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.jawaban.toLowerCase()
                const petunjuk = anih.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                let pao = await benny.sendFileFromUrl(from, soal.image, 'image.jpg', `Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, ben)
				tebakanime.push({jawaban: anih, sender: pao.key.id})
				console.log(tebakanime)
				tndb.push(from)
					fs.writeFileSync('./src/game/tebakanime.json', JSON.stringify(tndb))
            }
                break
				case 'canceltebakanime':
				case 'cancelta':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!tndb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tebakanime dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebakanime[0].sender) return reply(`*Reply soal tebakanime dan ketik*\n ${prefix}${command}`)
				tebakanime = []
			tndb.splice(tndb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebakanime.json', JSON.stringify(tndb))
				}
					break
			case 'susunkata': {
			if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
			if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (skdb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/susunkata.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.jawaban.toLowerCase()
				let pao = await benny.sendMessage(from, `*[ SUSUN KATA ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				susunkata.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(susunkata)
				skdb.push(from)
					fs.writeFileSync('./src/game/susunkata.json', JSON.stringify(skdb))
            }
                break
				case 'cancelsusunkata':
				case 'cancelsk':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!skdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal susunkata dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== susunkata[0].sender) return reply(`*Reply soal susunkata dan ketik*\n ${prefix}${command}`)
				susunkata = []
			skdb.splice(skdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/susunkata.json', JSON.stringify(skdb))
				}
					break
			case 'tebaklirik': {
			if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
			if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					
						if (tldb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/tebaklirik.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.jawaban.toLowerCase()
                tebaklirik.push({soal: soal.soal, jawaban: anih, sender: ben.id})
				console.log(tebaklirik)
				let pao = await benny.sendMessage(from, `*[ TEBAK LIRIK ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				tebaklirik.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(tebaklirik)
				tldb.push(from)
					fs.writeFileSync('./src/game/tebaklirik.json', JSON.stringify(tldb))
            }
                break
				case 'canceltebaklirik':
				case 'canceltli':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!skdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tebaklirik dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebaklirik[0].sender) return reply(`*Reply soal tebaklirik dan ketik*\n ${prefix}${command}`)
				tebaklirik = []
			tldb.splice(tldb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebaklirik.json', JSON.stringify(tldb))
				}
					break
				case 'tebaklagu': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (tudb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/tebaklagu.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.title.toLowerCase()
				const petunjuk = soal.title.toLowerCase().replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
					let lag = await getBuffer(soal.songs)
					let gu = await benny.sendMessage(from, lag, audio, {ptt: true, mimetype: 'audio/mp4', quoted: ben})
					let pao = await benny.sendMessage(from, `*[ TEBAK LAGU ]*\n\n*Tebak judul lagu ini!*\n*Petunjuk:* ${petunjuk}\n\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: gu})
				tebaklagu.push({jawaban: anih, sender: pao.key.id})
				console.log(tebaklagu)
				tudb.push(from)
					fs.writeFileSync('./src/game/tebaklagu.json', JSON.stringify(tudb))
            }
                break
				case 'canceltebaklagu':
				case 'canceltlu':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!skdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tebaklagu dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebaklagu[0].sender) return reply(`*Reply soal tebaklagu dan ketik*\n ${prefix}${command}`)
				tebaklagu = []
			tudb.splice(tudb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebaklagu.json', JSON.stringify(tudb))
				}
					break
				case 'siapakahaku': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (spdb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/siapakahaku.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
						let anih = soal.jawaban.toLowerCase()
				let pao = await benny.sendMessage(from, `*[ SIAPA AKU ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				siapakahaku.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(siapakahaku)
				spdb.push(from)
					fs.writeFileSync('./src/game/siapakahaku.json', JSON.stringify(spdb))
            }
                break
				case 'cancelsiapakahaku':
				case 'cancelsp':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!skdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal siapakahaku dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== siapakahaku[0].sender) return reply(`*Reply soal siapakahaku dan ketik*\n ${prefix}${command}`)
				siapakahaku = []
			spdb.splice(spdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/siapakahaku.json', JSON.stringify(spdb))
				}
					break
				case 'caklontong': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (cadb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/caklontong.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
						let anih = soal.jawaban.toLowerCase()
				let pao = await benny.sendMessage(from, `*[ CAK LONTONG ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				caklontong.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(caklontong)
				cadb.push(from)
					fs.writeFileSync('./src/game/caklontong.json', JSON.stringify(cadb))
            }
                break
				case 'cancelcaklontong':
				case 'cancelcl':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!cadb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal caklontong dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== caklontong[0].sender) return reply(`*Reply soal caklontong dan ketik*\n ${prefix}${command}`)
				caklontong = []
			cadb.splice(cadb.indexOf(from), 1)
					fs.writeFileSync('./src/game/caklontong.json', JSON.stringify(cadb))
				}
					break
				case 'asahotak': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (asdb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/asahotak.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
						let anih = soal.jawaban.toLowerCase()
				let pao = await benny.sendMessage(from, `*[ ASAH OTAK ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				 asahotak.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(asahotak)
				asdb.push(from)
					fs.writeFileSync('./src/game/asahotak.json', JSON.stringify(asdb))
            }
                break
				case 'cancelasahotak':
				case 'cancelao':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!asdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal asahotak dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== asahotak[0].sender) return reply(`*Reply soal asahotak dan ketik*\n ${prefix}${command}`)
				asahotak = []
			asdb.splice(asdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/asahotak.json', JSON.stringify(asdb))
				}
					break
				case 'family100': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (fadb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/family100.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
				let pao = await benny.sendMessage(from, `*[ FAMILY100 ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				family100.push({soal: soal.soal, jawaban: soal.jawaban, sender: pao.key.id})
				console.log(family100)
				fadb.push(from)
					fs.writeFileSync('./src/game/family100.json', JSON.stringify(fadb))
            }
                break
				case 'cancelfamily100':
				case 'cancelfa100':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!fadb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal family100 dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== family100[0].sender) return reply(`*Reply soal family100 dan ketik*\n ${prefix}${command}`)
				family100 = []
			asdb.splice(asdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/family100.json', JSON.stringify(asdb))
				}
					break
				case 'tebakkalimat': 
				case 'tebakalimat': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (ttdb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/tebakkalimat.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.jawaban.toLowerCase()
				let pao = await benny.sendMessage(from, `*[ TEBAK KALIMAT ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				tebakkalimat.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(tebakkalimat)
				tadb.push(from)
					fs.writeFileSync('./src/game/tebakkalimat.json', JSON.stringify(tadb))
            }
                break
				case 'canceltebakkalimat':
				case 'canceltkl':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!tadb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tebakkalimat dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebakkalimat[0].sender) return reply(`*Reply soal tebakkalimat dan ketik*\n ${prefix}${command}`)
				tebakkalimat = []
			tadb.splice(tadb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebakkalimat.json', JSON.stringify(tadb))
				}
					break
				case 'tebakkata': 
				case 'tebakata': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (tidb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/tebakkata.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.jawaban.toLowerCase()
				let pao = await benny.sendMessage(from, `*[ TEBAK KATA ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				tebakkata.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(tebakkata)
				tidb.push(from)
					fs.writeFileSync('./src/game/tebakkata.json', JSON.stringify(tidb))
            }
                break
				case 'canceltebakkata':
				case 'canceltkt':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!tidb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tebakkata dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebakkata[0].sender) return reply(`*Reply soal tebakkata dan ketik*\n ${prefix}${command}`)
				tebakkata = []
			tidb.splice(tidb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebakkata.json', JSON.stringify(tidb))
				}
					break
				case 'tebaktebakan': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (ttdb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/tebaktebakan.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.jawaban.toLowerCase()
				let pao = await benny.sendMessage(from, `*[ TEBAK TEBAKAN ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				tebaktebakan.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(tebaktebakan)
				ttdb.push(from)
					fs.writeFileSync('./src/game/tebaktebakan.json', JSON.stringify(ttdb))
            }
                break
				case 'canceltebaktebakan':
				case 'canceltt':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!ttdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return textImg(`*Reply soal tebaktebakan dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebaktebakan[0].sender) return reply(`*Reply soal tebaktebakan dan ketik*\n ${prefix}${command}`)
				tebaktebakan = []
			ttdb.splice(ttdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebaktebakan.json', JSON.stringify(ttdb))
				}
					break
				case 'tebakbendera': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (tbdb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/tebakbendera.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.name.toLowerCase()
				 const petunjuk = soal.name.toLowerCase().replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
				let pao = await benny.sendFileFromUrl(from, soal.img, 'bendera.png', `*[ TEBAK BENDERA ]*\n\n*Tebak bendera ini bro!*\n\n*Petunjuk:* ${petunjuk}\n\n*Waktu 10 detik!*`, ben)
tebakbendera.push({jawaban: anih, sender: pao.key.id})
				console.log(tebakbendera)
				tbdb.push(from)
					fs.writeFileSync('./src/game/tebakbendera.json', JSON.stringify(tbdb))       
	   }
                break
				case 'canceltebakbendera':
				case 'canceltb':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!tbdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tebakbendera dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebakbendera[0].sender) return reply(`*Reply soal tebakbendera dan ketik*\n ${prefix}${command}`)
				tebakbendera = []
			tbdb.splice(tbdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebakbendera.json', JSON.stringify(tbdb))
				}
					break
				case 'tebakkabupaten': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (tddb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/tebakkabupaten.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.title.toLowerCase()
				 const petunjuk = soal.title.toLowerCase().replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
				let pao = await benny.sendFileFromUrl(from, soal.url, 'bendera.png', `*[ TEBAK KABUPATEN ]*\n\n*Tebak bendera ini bro!*\n\n*Petunjuk:* ${petunjuk}\n\n*Waktu 10 detik!*`, ben)
           tebakkabupaten.push({jawaban: anih, sender: pao.key.id})
				console.log(tebakkabupaten)
				tddb.push(from)
					fs.writeFileSync('./src/game/tebakkabupaten.json', JSON.stringify(tddb))
		  }
                break
				case 'canceltebakkabupaten':
				case 'canceltk':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!tddb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tebakkabupaten dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebakkabupaten[0].sender) return reply(`*Reply soal tebakkabupaten dan ketik*\n ${prefix}${command}`)
				tebakkabupaten = []
			tddb.splice(tddb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebakkabupaten.json', JSON.stringify(tddb))
				}
					break
				case 'tekateki': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (tkdb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/tekateki.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.jawaban.toLowerCase()
				let pao = await benny.sendMessage(from, `*[ TEKA TEKI ]*\n\n*Soal:*\n${soal.soal}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				tekateki.push({soal: soal.soal, jawaban: anih, sender: pao.key.id})
				console.log(tekateki)
				tkdb.push(from)
					fs.writeFileSync('./src/game/tekateki.json', JSON.stringify(tkdb))
            }
                break
				case 'canceltekateki':
				case 'canceltki':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!tkdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tekateki dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tekateki[0].sender) return reply(`*Reply soal tekateki dan ketik*\n ${prefix}${command}`)
				tekateki = []
			tkdb.splice(tkdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tekateki.json', JSON.stringify(tkdb))
				}
					break
				case 'tebakkimia': 
				case 'tebakimia': {
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (tmdb.includes(from)) return reply(`Masih ada soal yang belum di selesaikan`)
							let soalan = JSON.parse(fs.readFileSync('./src/tebakkimia.json'))
						let soal = soalan[Math.floor(Math.random() * soalan.length)]
                let anih = soal.lambang.toLowerCase()
				let pao = await benny.sendMessage(from, `*[ TEBAK KIMIA ]*\n\n*Unsur:*\n${soal.unsur}\n*Reply Soal ini untuk menjawab!*\n\n*Waktu hanya 10 detik!*`, text, {quoted: ben})
				  tebakkimia.push({soal: soal.unsur, jawaban: anih, sender: pao.key.id})
				console.log(tebakkimia)
				tmdb.push(from)
					fs.writeFileSync('./src/game/tebakkimia.json', JSON.stringify(tmdb))
            }
                break
				case 'canceltebakkimia':
				case 'canceltkm':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!tmdb.includes(from)) return reply('*Tidak ada sesi permainan yang berlangsung di group ini!*')
					if (!ben.quoted) return reply(`*Reply soal tebakkimia dan ketik*\n ${prefix}${command}`)
					if (ben.message && ben.message.extendedTextMessage && ben.message.extendedTextMessage.contextInfo && ben.message.extendedTextMessage.contextInfo.stanzaId !== tebakkimia[0].sender) return reply(`*Reply soal tebakkimia dan ketik*\n ${prefix}${command}`)
				tebakkimia = []
			tmdb.splice(tmdb.indexOf(from), 1)
					fs.writeFileSync('./src/game/tebakkimia.json', JSON.stringify(tmdb))
				}
					break
						case 'bj':case 'ero':case 'cum':case 'feet':case 'yuri':case 'trap':case 'lewd':case 'feed':case 'eron':case 'solo':case 'gasm':case 'poke':case 'anal':case 'holo':case 'tits':case 'kuni':case 'kiss':case 'erok':case 'smug':case 'baka':case 'solog':case 'feetg':case 'lewdk':case 'waifu':case 'pussy':case 'femdom':case 'cuddle':case 'eroyuri':case 'cum_jpg':case 'blowjob':case 'erofeet':case 'holoero':case 'classic':case 'erokemo':case 'fox_girl':case 'futanari':case 'lewdkemo':case 'wallpaper':case 'pussy_jpg':case 'kemonomimi':case 'nsfw_avatar': 
						if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						    buffer = await getBaper(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
                    benny.sendMessage(from, buffer, image, {quoted: ben})
                    break
					case 'love2':	anu = `https://naufalhoster.xyz/textmaker/lovegif?apikey=YunitaGanteng&text=${body.slice(7)}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'cry':	anu = `http://api.lolhuman.xyz/api/random/cry?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'kiss2':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random/kiss?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'ppcouple':{
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				    let apo = fs.readdirSync('./src/image/couple')
					let p = apo[Math.floor(Math.random() * apo.length)]
					let b = p
					let pc = b.includes('1') ? b.split('1')[0]+'.jpg' : b
					let plh = fs.readFileSync(`./src/image/couple/${pc}`)
					let plj = fs.readFileSync(`./src/image/couple/${pc.split('.jpg')[0]+'1'+'.jpg'}`)
					benny.sendMessage(from, plh, image, {caption: 'Ini cowoknya', quoted: ben}).then(() => benny.sendMessage(from, plj, image, {caption: 'Ini ceweknya', quoted: ben}))
					} break
					case 'kiss3':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random2/kiss?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'cringe':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
							anu = `http://api.lolhuman.xyz/api/random/cringe?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'dance':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random/dance?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'kill':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random/kill?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'happy':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random/happy?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'bonk':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random/bonk?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'smug2':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random/smug?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'slap':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random/slap?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'wave':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random/wave?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'smile':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					anu = `http://api.lolhuman.xyz/api/random/smile?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
					case 'bully':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
							anu = `http://api.lolhuman.xyz/api/random/bully?apikey=${lolkey}`
					reply(mess.wait)
					sendStickerFromUrl(from, anu)
					break
                case 'art':case 'bts':case 'exo':case 'elf':case 'loli':case 'neko':case 'waifu':case 'shota':case 'husbu':case 'sagiri':case 'shinobu':case 'megumin':case 'wallnime':   
                if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
                  buffer = await getBaper(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    benny.sendMessage(from, buffer, image, {quoted: ben})
                    break
                case 'trap':case 'blowjob':case 'yaoi':case 'ecchi':case 'ahegao':case 'hololewd':case 'sideoppai':case 'animefeets':case 'animebooty':case 'animethighss':case 'animearmpits':case 'lewdanimegirls':case 'biganimetiddies':case 'animebellybutton': 
                if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
                  buffer = await getBaper(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
                    benny.sendMessage(from, buffer, image, {quoted: ben})
                    break					
					case 'jadwalsholat':case 'jadwalshalat':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					  if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (arg.length < 1) return reply('Masukan nama daerah!!')
					sholat = body.slice(14)
					anu = await jadwas.getDataJadwal(sholat)
					console.log(anu)
					teks = `*JADWAL SHALAT ${sholat}*\n\n`
					for (let u of anu.result.jadwal) {
						console.log(u)
					teks += `*Tanggal:* ${u.tanggal}\n*Bulan:* ${bulan1}\n*Shubuh:* ${u.shubuh}\n*Dzuhur:* ${u.dzuhur}\n*Ashar:* ${u.ashar}\n*Maghrib:* ${u.magrib}\n*Isya:* ${u.isya}\n===========================\n`
					}
					reply(teks)
					break 
					case 'jadwalsholat2':case 'jadwalshalat2':if (arg.length < 1) return reply('Masukan nama daerah!!')
					sholat = body.slice(15)
					try {
					anu = await jadwalSolat(sholat)
					console.log(anu)
					teks = `*Daerah:* ${anu.daerah}\n*Shubuh:* ${anu.shubuh}\n*Dzuhur:* ${anu.dzuhur}\n*Ashar:* ${anu.ashar}\n*Maghrib:* ${anu.maghrib}\n*Isya:* ${anu.isya}`
					reply(teks)
					} catch (err) {
						reply(err)
					} break 
				
							case 'ytmp42':
							if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (arg.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`)
							reply(mess.wait)
					teks = `*Title* : ${anu.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.thumb)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: ben})
							break
							case 'ytmp43':	
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (arg.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://videfikri.com/api/ytmp4/?url=${args[0]}`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.judul}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.imgUrl)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.urlVideo)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.judul}.mp4`, quoted: ben})
							break
							case 'ytmp44':	
							case 'ytmp4':
							if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (arg.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${args[0]}&apikey=YunitaGanteng`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url_video)
							gbutsan = [
  {buttonId: `.ytmp3 ${args[0]}`, buttonText: {displayText: 'Audio downloader'}, type: 'RESPONSE'}
]
mhan = await benny.prepareMessage('0@s.whatsapp.net', buffer, video, {quoted: ben, mimetype: 'video/mp4'})
 gbuttonan = {
videoMessage: mhan.message.videoMessage,
    contentText: '                 Succes                 ',
    footerText: 'Klik next untuk cari yang lain',
    buttons: gbutsan,
    headerType: 'VIDEO'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben, contextInfo:{externalAdReply:{title: namabot, body: '', previewType: 'PHOTO', thumbnail: setthumb, sourceUrl: 'https://wa.me/6285709331584?text=Assalamualaikum'}, mentionedJid: [sender, '0@s.whatsapp.net']}})
		 
							break
							 case 'stickyt':		 case 'stickeryt':	
							 	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						anu = await yta(args[0])
							 sendStickerFromUrl(from, anu.thumb)
							 break
							 case 'setwelcome':
							 if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
								 tekx = arg
							 reply('Done')
							 break
							 case 'setleave':
							 if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
								 texk = arg
							 reply('Done')
							 break
							 case 'ytmp45':	
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (arg.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.me/api/ytmp4/2?url=${args[0]}&apikey=YunitaGanteng`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url_video)
							benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp3`, quoted: ben})
						     break
						case 'ytmp3':	
							if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (arg.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
								sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})

							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
							 case 'ytmp32':		 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						
							if (arg.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await ytdl(`${args[0]}`)
							console.log(anu)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.thumb)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: ben})
						     break
							 case 'ytmp33':		 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
						
							if (arg.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://videfikri.com/api/ytmp3/?url=${args[0]}`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.judul}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: ben})
						     break
							 			 case 'addrespon':
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			    	if (arg.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				tks = body.slice(11)
				teks1 = tks.split('|')[0]
				teks2 = tks.split('|')[1]
				if (checkCommands(teks1, commandsDB) === true) return reply(`Udah ada`)
				addCommands(teks1, teks2, sender, commandsDB)
				reply(`Ok berhasil gan`)
				break
				case 'listrespon':teks = `*LIST RESPOND CHAT*\n`
				t = 1
				for (let o of commandsDB) {
					teks += `\n*${t++}.* ${o.pesan}`
				}
				reply(teks)
				break
			case 'delrespon':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			    	if (arg.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Ok berhasil gan`)
				break
					case 'addbadword':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			    	if (arg.length < 1) return reply(`Penggunaan ${prefix}addbadword anjing`)
				teks = body.slice(12)
				tos = `Berhasil Add Badword\n`
				addBadword(teks, badwordDB)
				t = 1
				for (let o of badwordDB) {
					tos += `\n*${t++}.* ${o.badword}`
				}
				reply(tos)
				break
				case 'listbadword':teks = `*LIST BADWORD*\n`
				t = 1
				for (let o of badwordDB) {
					teks += `\n*${t++}.* ${o.badword}`
				}
				reply(teks)
				break
			case 'delbadword':
			if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			    	if (arg.length < 1) return reply(`Penggunaan ${prefix}delbadword anjing`)
				if (!checkBadword(body.slice(12), badwordDB)) return reply(`Ga ada di database`)
                deleteBadword(body.slice(12), badwordDB)
				reply(`Ok berhasil gan`)
				break
							 case 'ytmp34':	
							 if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (arg.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${args[0]}&apikey=YunitaGanteng`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url_audio)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: ben})
						     break
							  case 'limit':		  case 'ceklimit':	
							 teks= `*Limit anda tersisa:* ${limit.getLimit(sender, _limit, limitCount)}\n\n*NOTE:*\nLimit akan direset tiap jam 11 malam!`
							 reply(teks)
							 break
							 case 'ytmp35':	
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							if (arg.length < 1) return reply('Urlnya mana um?')
							if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
							anu = await fetchJson(`https://api.zeks.me/api/ytmp3/2?url=${args[0]}&apikey=YunitaGanteng`)
							reply(mess.wait)
					teks = `*Title* : ${anu.result.title}\n*Mohon tunggu sebentar video sedang di download!*`
							thumb = await getBaper(anu.result.thumbnail)
							benny.sendMessage(from, thumb, image, {quoted: ben, caption: teks})
							buffer = await getBaper(anu.result.url_audio)
							benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: ben})
						     break
				case 'spekhp':
				hp = body.slice(8)
	    anu = await fetchJson(`https://api.vhtear.com/gsmarena?query=${hp}&apikey=${vhtearkey}`)
	    buffer = await getBaper(anu.result.image)
		reply(mess.wait)
							teks = `*Spekifikasi Hp ${hp}* \n? *Nama HP* : ${anu.result.title} \n? *Spekifikasi* : ${anu.result.spec}`
		benny.sendMessage(from, buffer, image, {quoted: ben, caption: teks})
		break
		case 'antiwame':
		if (!isGroup) return reply(mess.only.group)
			if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (arg === 'on') {
						if (isAntiWaMe) return reply('*Sudah Aktif!*')
						antiwame.push(from)
						fs.writeFileSync('./src/antiwame.json', JSON.stringify(antiwame))
						await reply('*Done!*')
					} else if (arg === 'off') {
						if (!isAntiWaMe) return reply('*Belum Aktif!*')
						antiwame.splice(antiwame.indexOf(from), 1)
						fs.writeFileSync('./src/antiwame.json', JSON.stringify(antiwame))
						await reply('*Done!*')
					} else {
						reply('*Pilih on atau off!*')
					}
					break
		case 'totag':
		if (!isGroup) return reply(mess.only.group)
			if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
				if (!isQuotedMedia) return reply('Reply Media!')
					let meds = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					let tagu = await benny.downloadMediaMessage(meds)
				mes_id = []
			for (let i of groupMembers) {
				mes_id.push(i.jid)
			}
			benny.sendMessage(from, tagu, m.quoted.mtype, {quoted: ben, contextInfo:{mentionedJid: mes_id}})
			break
			case 'spamtotag':{
		if (!isGroup) return reply(mess.only.group)
			if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
				if (!isQuotedMedia) return reply('Reply Media!')
					if (!ben.key.fromMe && !isOwner && args[0] > 10) return reply('Kebanyakan')
					let tagu = await downloadM()
				mes_id = []
			for (let i of groupMembers) {
				mes_id.push(i.jid)
			}
			for (let i = 0; i < args[0]; i++) {
			benny.sendMessage(from, fs.readFileSync(tagu), m.quoted.mtype, {quoted: ben, contextInfo:{mentionedJid: mes_id}})
			}
			}
			break
				case 'heroml':
	                        if (arg.length < 1) return reply('Heronya mana bang?')
                        let nb = await herodetails(arg)
					console.log(nb)
					reply(JSON.stringify(nb, null, 2))
							 break
                case 'truth':
                if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBaper(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					benny.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: ben })
					break
				case 'dare':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "????" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBaper(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					benny.sendMessage(from, tod, image, { quoted: ben, caption: '*Dare*\n\n'+ der })
					break
				case 'cersex':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				cers = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`)
					buffer = await getBaper(cers.result.image)
					reply(mess.wait)
					benny.sendMessage(from, buffer, MessageType.image, { caption: cers.result.cerita, quoted: ben })
					break
				case 'setauto':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = ''
					reply('*Berhasil ubah menjadi auto responder*')
					break
				case 'blockcall':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		          if (args[0] == 'on') {
					  blockcall = true
				  reply('*Berhasil mengaktifkan block call!*')
				  } else if (args[0] == 'off') {
					  	  blockcall = false
				  reply('*Berhasil mematikan block call!*')
				  } else {
					  reply('Pilih on atau off!')
				  } break
				case 'setmenu':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		          if (args[0] == 'image') {
					  simple = 'image'
				  reply('*Berhasil mengubah tampilan menu menjadi image!*')
				  } else if (args[0] == 'document') {
					  simple = 'document'
				  reply('*Berhasil mengubah tampilan menu menjadi document!*')
				  } else if (args[0] == 'video') {
					  simple = 'video'
				  reply('*Berhasil mengubah tampilan menu menjadi video!*')
				  } else if (args[0] == 'gif') {
					  simple = 'gif'
				  reply('*Berhasil mengubah tampilan menu menjadi GIF!*')
				  } else if (args[0] == 'simple') {
					  simple = true
				  reply('*Berhasil mengubah tampilan menu menjadi simple!*')
				  } else if (args[0] == 'troli') {
					  simple = 'troli'
				  reply('*Berhasil mengubah tampilan menu menjadi troli!*')
				  } else if (args[0] == 'ori') {
					  	  simple = false
				  reply('*Berhasil mengubah tampilan menu menjadi original!*')
				  }  else if (args[0] == 'product') {
					  	  simple = 'product'
				  reply('*Berhasil mengubah tampilan menu menjadi product!*')
				  } else {
					  reply('Pilih ori atau simple!')
				  } break
					case 'setwelimage':
				if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					modewel = 'image'
				reply("*DONE!*")
				break
				case 'setwelcomeloc':
				case 'setwelloc':
				if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					modewel = 'location'
				reply("*DONE!*")
				break
				case 'setweltext':
				case 'setwelcometext':
				if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					modewel = 'text'
				reply("*DONE!*")
				break
				case 'setfakeonce':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { "key": { "remoteJid": numbernye, "fromMe": false, participant: numbernye, "id": "E6E3A0FD5D3A55FB2090ECF688665AAE" }, "message": { "viewOnceMessage": { "message": { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/Ag5CG9DUNuLOP3qnV6iXQDy-UbOIW_J5xEeimbUPTgSF.enc", "fileSha256": "T1yuMTv79oMv9jVr796NPTSXKhX+Vrrxy3zk2eUZrX8=", "fileLength": "72995", "height": 1280, "width": 596,  "mediaKey": "FvMsTs0J9wNIpAabkj+A/LQ/Ayl8t7cMREFKGR2mDNQ=", "fileEncSha256": "iWI3xrMVtPBvKmX+tPKKMLMGI0zaFrg3teGqWxznqpE=", "directPath": "/v/t62.7118-24/19150841_252892756307742_5183588639816240866_n.enc?ccb=11-4&oh=958c6d440fa0d8c8c3c3bdd18e9ed70a&oe=611B376D", "mediaKeyTimestamp": "1626765250", "jpegThumbnail": setthumb, "scansSidecar": "yOtKtahzjLB7kGJQJbEdtIKytZs3twpB49R40p+jzFJ+30kTMr7C1w==", "scanLengths": [ 6052, 37585, 13374, 15984 ], "midQualityFileSha256": "tOk8twUNozJapEjn9dY7wRrXlhZ1r41rvM8n1vYiu6k=", "viewOnce": true } } } }, "messageTimestamp": "1626765255", "ephemeralOutOfSync": false }
			benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
					case 'setfakestick':
					adadeh = { "key": {  "participant": numbernye, "remoteJid": numbernye, "fromMe": false, "id": await generateMessageID }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "mimetype": "image/webp", "height": 64,  "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775","status": "PENDING"}
				  benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setfakevid':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { "key": { "remoteJid": setgrup, "fromMe": false, "participant": numbernye, "id": "06FE3C86DEFD487490687FC29E0FE192" }, "message": { "videoMessage": { "caption": fake, "url": "https://mmg.whatsapp.net/d/f/ArveM__IEC-sez1co7Sjwzc3OcGcf6i0rcS86XwFw32a.enc", "mimetype": "video/mp4", "fileSha256": "s9ko8E/G7bqkM+oe0f0JwpT+frn6dLS2OLkVJuAaAPo=", "fileLength": "193775", "seconds": 359996400, "mediaKey": "J4kmhooQRZnWIN/9PV7QphVOG13PekLZQ38ptQz2jJA=", "height": 500, "width": 500, "fileEncSha256": "ljhXlyPe/eyoOfv/rBlS+ZDptXeA6/bwVnbeHid4kY0=", "directPath": "/v/t62.7161-24/23756523_2884064461861118_8707775833189376411_n.enc?oh=273902306dabd3164f2accd2b31755fd&oe=609A6215", "mediaKeyTimestamp": "1618168529", "jpegThumbnail": setthumb, "streamingSidecar": "b04kZLqw5HdoCW99wwwiKjZYVFKEoZdRrC1MhP6F" } } }
                    benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setfakegif':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { "key": { "remoteJid": setgrup, "fromMe": false, "participant": numbernye, "id": "48D293827B278371AB6CBB6A4A245F0C" }, "message": { "videoMessage": { "fileLength": "84250", "seconds": 359996400, "caption": fake, "gifPlayback": true, "jpegThumbnail": setthumb, "contextInfo": { "expiration": 0, "ephemeralSettingTimestamp": "1617336940"  }, "gifAttribution": "TENOR", "participant": numbernye } } } 
                   benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setfakeloc':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { "key": { "remoteJid": setgrup, "fromMe": false, participant: numbernye, "id": "83ACC0D99839A6F856799850A16FC36F" }, "message": { "locationMessage": { "degreesLatitude": -6.2609315, "degreesLongitude": 106.8668458, "name": fake, "jpegThumbnail": setthumb } }, "messageTimestamp": "1625480761", "status": "ERROR" }
	              benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setfakeliveloc':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { "key": { "remoteJid": setgrup, "fromMe": false, participant: numbernye, "id": "83ACC0D99839A6F856799850A16FC36F" }, "message": { "liveLocationMessage": { "degreesLatitude": -6.2609315, "degreesLongitude": 106.8668458, "name": fake, "jpegThumbnail": setthumb } }, "messageTimestamp": "1625480761", "status": "ERROR" }
	              benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setfakect':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "6DC12F684FE43FDB835CFE35CC6F5503" }, "message": { "contactMessage": { "displayName": namabot, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Telkomsel;Benny;;;\nFN:N@nd0-BOT\nitem1.TEL;waid=6285709331584:+62 813-8728-9617\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, "messageTimestamp": "1614159034", "status": "ERROR" } 
					benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setfakecat':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { "key": { "participant": numbernye, "remoteJid": setgrup, "stanzaId": from, "fromMe": false, "id": "0D5EAADD1166F55012EB42395DE58D61" }, "message": { "productMessage": { "product": { "productImage": { "url": "https://mmg.whatsapp.net/d/f/AsFENZUsypKYO29kpNR2SrgcoBit6mDiApzGccFAPIAq.enc", "mimetype": "image/jpeg", "fileSha256": "iRrEuDPCvNe6NtOv/n+DARqlS1i2UbWqc25iw+qcwwo=", "fileLength": "19247", "height": 500, "width": 500, "mediaKey": "zvebSUI7DcnK9QHuUCJpNAtTsKai0MkvzrcNSYE5pHo=", "fileEncSha256": "t6pd+X7iNV/bwtti0KaOOjGBfOVhxPpnwnTs/QnD0Uw=", "directPath": "/v/t62.7118-24/29158005_1025181757972162_6878749864442314383_n.enc?oh=c97d5aea20257c3971a7248b339ee42d&oe=60504AC8", "mediaKeyTimestamp": "1613162019", "jpegThumbnail": setthumb }, "productId": "3958959877488517", "title": fake, "description": "Kepoluah", "currencyCode": "IDR", "priceAmount1000": harganya, "retailerId": "Kepolu", "url": "https://youtube.com/c/FaxBotz", "productImageCount": 2 }, "businessOwnerJid": numbernye } }, "messageTimestamp": "1613442626", "status": "PENDING" }
					benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setfakegc':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { key: { fromMe: false, ...(isGroup ? { participant: "6285737134572@s.whatsapp.net" } : {}), ...(isGroup ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: { "contactMessage": { "displayName": `${benny.user.name}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${benny.user.name},;;;\nFN:${benny.user.name},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": setthumb}}}
					benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
					case 'sendinvite':benny.sendMessage(from, { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", "groupName": "Tes", "caption": fake }, "groupInviteMessage")
					break
				case 'setfakeinvite':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { key: { fromMe: false, participant: `6285737134572@s.whatsapp.net`, ...(from ? { remoteJid: "6285737134572@s.whatsapp.net" } : {}) }, message: {"groupInviteMessage": { "groupJid": "6282211999594-1621150820@g.us", "inviteCode": "Mny0aVxtr6xyXTHC", "inviteExpiration": "1621410169", thumbnail: setthumb, "groupName": "Tes", "caption": fake }}}
					benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setfaketroli':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = {key: {remoteJid: setgrup, participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 99999999999999, status: 0, message: fake, surface: 0, orderTitle: 'Benny', sellerJid: '0@s.whatsapp.net'} } } 
					benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setharga':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			if (arg.length < 1) return reply('*Berapa harganya ?*') 
					harganya = Number(args[0])
					reply(`*Berhasil ubah harga catalog menjadi ${harganya}*`)
					break
				case 'setfakevn':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "0792D61AFA7327F144E824890B5DAA15" }, "message": { "audioMessage": { "mimetype": "image/jpeg", "thumbnail": setthumb, "fileLength": "217894", "seconds": 359996400, "ptt": true }}}
					benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
					case 'setfakedoc':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": setthumb, "mimetype": "application/octet-stream", "title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}
					benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
				case 'setfakegam':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		            adadeh = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: setgrup } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 500, "width": 500, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": setthumb, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } 
					benny.sendMessage(from, `*Berhasil ubah Fake reply menjadi ${command.split('fake')[1]}*`, text, {quoted: ben})
					break
					case 'delete':
		case 'd':
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins && !ben.key.fromMe)return reply(mess.only.admin)
			benny.deleteMessage(from, { id: ben.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
					case 'setreply':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		
					if (arg.length < 1) return
					fake = body.slice(10)
					reply(`berhasil ubah Fake reply menjadi : ${fake}`)
					break
					case 'getnama':case 'getname':{
				 if (arg && ben.message.extendedTextMessage) {
					 mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					teks = await getName(mentioned)
					reply(teks)
				 } else if (!arg && ben.message.extendedTextMessage) {
					 teks = await getName(ben.message.extendedTextMessage.contextInfo.participant)
					reply(teks)
				 } else if (arg && ben.message.conversation) {
					 if (arg.startsWith('08')) return reply(`Salah!\nContoh: ${prefix}${command}getname ${buattag}`)
					 bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(9)
				tekss = bodo.replace(bodom, '')
					 teks = await getName(tekss + '@s.whatsapp.net')
					reply(teks)
				 }
					} break
					case 'getbio': if (isGroup && args.length >= 1) {
					 mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					teks = await benny.getStatus(mentioned)
					reply(teks.status)
				 } else if (arg.length < 1) {
					 teks = await benny.getStatus(ben.message.extendedTextMessage.contextInfo.participant)
					reply(teks.status)
				 } else if (!isGroup && args.length > 1) {
					 bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(8)
				tekss = bodo.replace(bodom, '')
					 teks = await benny.getStatus(tekss + '@s.whatsapp.net')
					reply(teks.status)
				 } break
					case 'setname':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					if (arg.length < 1) return
					jing = body.slice(9)
					benny.updateProfileName(jing)
					reply(`*Berhasil ubah name menjadi:* ${jing}`)
					break
				case 'setnumber':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		
					if (arg.length < 1) return
					numbernye = `${args[0]}@s.whatsapp.net`
					reply(`*Berhasil ubah Number reply menjadi:* ${numbernye.replace('@s.whatsapp.net', '')}`)
					break
				case 'cr1':	// licensed by aex-bot -> namabotnte
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
				reply(`${split[1]}`)
				break
				case 'settarget':if (arg.length < 1) return
					targetprivate = args[0]
					benny.sendMessage(from, `Succes Mengganti target Privte Fake Reply : ${targetprivate}`, text, { quoted: ben })
					break
					case 'pet':
					if (isQuotedSticker) {
						let ba = await downloadM()
						let rap = await getRandom('.png')
						exec(`ffmpeg -i ${ba} ${rap}`, async(err) => {
							if (err) return reply('Error')
						let param = await uploadMedia(rap)
						let bum = await getBuffer(`https://cililitan2.herokuapp.com/api/pet?url=${param.files[0].url}`)
						benny.sendMessage(from, bum, video, {quoted: ben, caption: `*Pet:* ${param.files[0].url}`, mimetype: 'video/mp4'})
						})
					} else if (isQuotedImage) {
						let ba = await downloadM()
						let param = await uploadMedia(ba)
						let bum = await getBuffer(`https://cililitan2.herokuapp.com/api/pet?url=${param.files[0].url}`)
						benny.sendMessage(from, bum, video, {quoted: ben, caption: `*Pet:* ${param.files[0].url}`, mimetype: 'video/mp4'})
					} else {
						reply('Reply Sticker/Image nya!')
					}
					break
				case 'stickpet':
				case 'spet':
			exif.create(namabot, '')
					if (isQuotedSticker) {
						let ba = await downloadM()
						let rap = await getRandom('.png')
						let raps = await getRandom('.gif')
						let rapz = await getRandom('.webp')
						exec(`ffmpeg -i ${ba} ${rap}`, async(err) => {
							if (err) return reply('Error')
						let param = await uploadMedia(rap)
						sendStickerFromUrl(from, `https://buatpet.herokuapp.com/?url=${param.files[0].url}`, ben)
						})
					} else if (isQuotedImage) {
						let ba = await downloadM()
						let param = await uploadMedia(ba)
						sendStickerFromUrl(from, `https://buatpet.herokuapp.com/?url=${param.files[0].url}`, ben, namabot)
					} else {
						reply('Reply Sticker/Image nya!')
					}
					break
				case 'cr2':jids = `${targetprivate}@s.whatsapp.net` // nomer target
					var split = args.join(' ').replace(/@|\d/gi, '').split('|')
					var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const options = {
					contextInfo: {
					quotedMessage: {
					extendedTextMessage: {
					text: split[0]
										}
									}
								}
							}
					const responye = await benny.sendMessage(jids, `${split[1]}`, MessageType.text, options)
					await benny.deleteMessage (jids, {id: responye.key.id, remoteJid: jids, fromMe: true})
					break
					case 'kbbi':	var kbbi = body.slice(6)
					anu = await kbbiSearch(kbbi)
						reply(mess.wait)
						console.log(anu)
						teks = `*${anu.result[0]}*`
					    reply(teks)
				break
				case 'addowner':{
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						if (arg && ben.message.extendedTextMessage) {
		for (let i of ben.message.extendedTextMessage.contextInfo.mentionedJid) {
		ownerNumber.push(i)
		fs.writeFileSync('./setting.json', JSON.stringify(ownerNumber))
							}
		reply('*Done!*')
		} else if (!arg && ben.message.extendedTextMessage) {
		ownerNumber.push(ben.message.extendedTextMessage.contextInfo.participant)
		fs.writeFileSync('./setting.json', JSON.stringify(ownerNumber))
		reply('*Done!*')
		} else if (arg && ben.message.conversation) {
			bodom = new RegExp('[-+/ +/()]', 'gi')
				teks = arg.replace(bodom, '')
		ownerNumber.push(teks+'@s.whatsapp.net')
		fs.writeFileSync('./setting.json', JSON.stringify(ownerNumber))
		reply('*Done!*')
			}
				}
			break
				case 'delowner':{
					if (!isCreator) return reply(mess.only.creator)
						if (arg && ben.message.extendedTextMessage) {
							for (let i of ben.message.extendedTextMessage.contextInfo.mentionedJid) {
		 adown = ownerNumber.indexOf(i)
			 ownerNumber.splice(adown, 1)
		fs.writeFileSync('./setting.json', JSON.stringify(ownerNumber))
							}
		await reply('*Done!*')
		} else if (!arg && ben.message.extendedTextMessage) {
		ownerNumber.splice(ownerNumber.indexOf(m.quoted.sender), 1)
		fs.writeFileSync('./setting.json', JSON.stringify(ownerNumber))
		reply('*Done!*')
		} else if (arg && ben.message.conversation) {
			bodom = new RegExp('[-+/ +/()]', 'gi')
				teksx = arg.replace(bodom, '')
		ownerNumber.splice(ownerNumber.indexOf(teks+'@s.whatsapp.net'), 1)
		fs.writeFileSync('./setting.json', JSON.stringify(ownerNumber))
		reply('*Done!*')
			}
				}
			break
							
				case 'takelink':linkgc = await benny.groupInviteCode(args[0]) 
				reply(`https://chat.whatsapp.com/${linkgc}`)
				break
				case 'linkgc':case 'linkgroup':case 'linkgrup':case 'grouplink':if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (!isGroup) return reply(mess.only.group)
				linkgc = await benny.groupInviteCode(from) 
				reply(`https://chat.whatsapp.com/${linkgc}`)
				break 
				
				case 'ytcomment':
				ano = await downloadM()
									 anu = await uploadMedia(ano)
                                        teks = `${anu.files[0].url}`
				if (arg.length < 1) return reply(`Block nih contoh\n${prefix}ytcomment Demonic|woi subscribe gw`)
					var gh = body.slice(11)
					var namalu = gh.split("|")[0];
					var komenlu = gh.split("|")[1];
				anu = await getBaper(`https://api.lolhuman.xyz/api/ytcomment?apikey=${lolkey}&username=${namalu}&comment=${komenlu}&img=${teks}`)
			
				benny.sendMessage(from, anu, image, {quoted: ben})
					break
case 'bikinmeme':
	if (arg.length < 1) return reply(`Block nih contoh\n${prefix}${command} Text1|text2|text3`)
					var gh = body.slice(11)
					var namalu = gh.split("|")[0];
					var komenlu = gh.split("|")[1];
					var komenluu = gh.split("|")[1];
				anu = await getBaper(`https://api.lolhuman.xyz/api/meme6?apikey=${lolkey}&text1=${namalu}&text2=${komenlu}&text3=${komenluu}`)
			
				benny.sendMessage(from, anu, image, {quoted: ben})
					break
				case 'wolflogo':var gh = body.slice(10)
					var teks1 = gh.split("|")[0];
					var teks2 = gh.split("|")[1];
					if (arg.length < 1) return reply(`Block nih contoh\nketik : ${prefix}wolflogo anjay|ohh`)
					reply(mess.wait)
					buffer = await getBaper(`https://api.vhtear.com/avatarwolf?text1=${teks1}&text2=${teks2}&apikey=${vhtearkey}`)
					benny.sendMessage(from, buffer, image, {quoted: ben})
					break
		        case 'carbon':var ghst = body.slice(8)
					if (arg.length < 1) return reply(`Block nih contoh\nketik : ${prefix}carbon nih heker`)
					reply(mess.wait)
					buffer = await getBaper(`https://carbonnowsh.herokuapp.com/?code=${ghst}&theme=darcula&backgroundColor=rgba(50,%2030,%2050,%20150)`)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
					break
					case 'scarbon':var ghst = body.slice(9)
					if (arg.length < 1) return reply(`Block nih contoh\nketik : ${prefix}scarbon nih heker`)
					reply(mess.wait)
					buffer = `https://carbonnowsh.herokuapp.com/?code=${ghst}&theme=darcula&backgroundColor=rgba(50,%2030,%2050,%20150)`
					sendStickerFromUrl(from, buffer, ben)
					break
				case 'phlogo':gh = body.slice(8)
					teks1 = gh.split("|")[0];
					teks2 = gh.split("|")[1];
					if (arg.length < 1) return reply(`Block nih contoh\nketik : ${prefix}phlogo anjay|ohh`)
					reply(mess.wait)
					buffer = await getBaper(`https://naufalhoster.xyz/textmaker/pornhub?apikey=${naufalkey}&text1=${teks1}&text2=${teks2}`)
					benny.sendMessage(from, buffer, image, {quoted: ben})
					break
				case 'cekjodoh':
				if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
				var asu = body.slice(10)
					var teks5 = asu.split("|")[0];
					var teks6 = asu.split("|")[1];
					anu = await fetchJson(`http://scrap.terhambar.com/jodoh?n1=${teks5}&n2=${teks6}`)
					teks = `*Pasangan dengan data:*\n- *Nama cowok* : ${anu.result.nama_anda}\n- *Nama cewek* : ${anu.result.nama_pasangan}\n\n*Sisi:*\n- *Positif* : ${anu.result.sisi.positif}\n- *Negatif* : ${anu.result.sisi.negatif}`
			buffer = await getBaper(anu.result.gambar)
			benny.sendMessage(from, buffer, image, {caption: teks, quoted: ben})
					break
					case 'avengers':
				if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
				var ghs = body.slice(10)
					var teks3 = ghs.split("|")[0];
					var teks4 = ghs.split("|")[1];
					if (arg.length < 1) return reply(`Block nih contoh\nketik : ${prefix}customtahta anjay|ohh|aja`)
					reply(mess.wait)
					anu = await getBaper(`https://naufalhoster.xyz/textmaker/avenger?apikey=YunitaGanteng&text1=${teks3}&text2=${teks4}`)
					benny.sendMessage(from, anu, image, { caption: 'Neh..', quoted: ben})
					break
					case 'save':{
					  if (!arg) return
  let who
  if (ben.isGroup) who = ben.mentionedJid[0]
  else who = ben.chat
  if (!who) return reply('Tag salah satu lah')
  txt = arg.replace('@' + who.split`@`[0], '').trimStart()
  return benny.sendContact(ben.chat, who, txt || benny.getName(who), m)
			}
			break
				case 'jadian':jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ?? @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
          case 'ngewe':jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan? @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					break	
               case 'terganteng':jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					break	
               case 'tercantik':jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					break
				case 'customtahta':
				if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
				var ghs = body.slice(13)
					var teks3 = ghs.split("|")[0];
					var teks4 = ghs.split("|")[1];
					var teks5 = ghs.split("|")[2];
					if (arg.length < 1) return reply(`Block nih contoh\nketik : ${prefix}customtahta anjay|ohh|aja`)
					reply(mess.wait)
					anu = await getBaper(`https://naufalhoster.xyz/textmaker/hartatahta_custom?apikey=${naufalkey}&text1=${teks3}&text2=${teks4}&text3=${teks5}`)
					benny.sendMessage(from, anu, image, {quoted: ben})
					break
					case 'loli2':		{
							var items = ["anime loli"];
							var nime = items[Math.floor(Math.random() * items.length)];
							var url = "http://fdciabdul.tech/api/pinterest/?keyword=" + nime;
							
							axios.get(url)
							  .then((result) => {
								var n = JSON.parse(JSON.stringify(result.data));
								var nimek =  n[Math.floor(Math.random() * n.length)];
								imageToBase64(nimek) 
								.then(
									(response) => {
										reply(mess.wait)
					var buf = Buffer.from(response, 'base64'); 
							benny.sendMessage(from, buf ,MessageType.image, { caption: `LOMLI`, quoted: ben } )
									}
								)
								.catch(
									(error) => {
										console.log(error);
									}
								)
							});
							}
						 break
						 case 'bokeh2':	 
			tekss = body.slice(8)
			buffer = await getBaper(`https://naufalhoster.xyz/textmaker/bokeh?apikey=${naufalkey}&text=${tekss}`)
			teks = `BOKEH ${tekss}`
			reply(mess.wait)
					   benny.sendMessage(from, buffer, image, { caption: teks, quoted: ben })
				 break
			
				 case 'tahta': 
					var teks = body.slice(7)
					if (!teks) return benny.sendMessage(from, 'Input teks yang ingin di tulis', MessageType.text, {quoted: ben})
				var buffer = await getBaper(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${vhtearkey}`)
				reply(mess.wait)
					   benny.sendMessage(from, buffer, MessageType.image, { caption: `HARTA TAHTA ${teks}`, quoted: ben })
				 break
				 case 'blood': 
			    teks = body.slice(7)
				 blood = await getBaper(`https://naufalhoster.xyz/textmaker/blood?apikey=${naufalkey}&text=${teks}`)
				reply(mess.wait)
					   benny.sendMessage(from, blood, MessageType.image, { caption: `BLOOD ${teks}`, quoted: ben })
				 break
				 case 'matrix': 
			    teks = body.slice(8)
				 blood = await getBaper(`https://naufalhoster.xyz/textmaker/matrix?apikey=${naufalkey}&text=${teks}`)
				reply(mess.wait)
					   benny.sendMessage(from, blood, MessageType.image, { caption: `MATRIX ${teks}`, quoted: ben })
				 break
				 case 'party': 
					var teks = body.slice(7)
					if (!teks) return benny.sendMessage(from, 'Input teks yang ingin di tulis', MessageType.text, {quoted: ben})
				var buffer = await getBaper(`https://api.vhtear.com/partytext?text=${teks}&apikey=${vhtearkey}`)
				reply(mess.wait)
					   benny.sendMessage(from, buffer, MessageType.image, { caption: `PARTY ${teks}`, quoted: ben })
				 break
				 case 'print':
				 if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					
				 if (arg) {
					 console.log(arg)
				 } else if (!arg) {
				 console.log(m.quoted.text)
				 } 
			 break
			 case 'profile': 
			 if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				 try {
					anu = await benny.getProfilePicture(sender)
				} catch {
					anu = 'https://telegra.ph/Benny-10-28'
				}
				 stat = await benny.getStatus(sender)
				 console.log(stat)
				 teks = `*[ USER INFO ]*\n\n*Nama:* ${pushname}\n*Status:* ${stat.status}\n*Premium:*  ${isPremium ? 'YES' : 'NO'}\n*Admin:*  ${isGroupAdmins ? 'YES' : 'NO'}`
				 buffer = await getBaper(anu)
				 benny.sendMessage(from, buffer, image, { caption: teks, quoted: ben})
		break 
	        case 'bakar': 
	       if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				 if (arg.length < 1) return reply('Teksnya mana??')
					var teksna = body.slice(7)
				buffer = await getBaper(`https://videfikri.com/api/textmaker/burnpaper/?text=${teksna}`) 
				break
				case 'stickbakar': 
				 if (arg.length < 1) return reply('Teksnya mana??')
					var teksna = body.slice(12)
				anu = await fetchJson(`https://cililitan2.herokuapp.com/api/textmaker?text=${teksna}&theme=burn-paper`)
reply(mess.wait)
					buffer = anu.result
					sendStickerFromUrl(from, buffer, ben)
				 break
				 case 'quotesimage':	
				 			if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
									 var ghs = body.slice(13)
									if (isMedia || isQuotedImage) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadMedia(owgi)
                                        teks = `${uploade.files[0].url}`
										buffer = `http://api.lolhuman.xyz/api/quotemaker3?apikey=${lolkey}&text=${ghs}&img=${teks}`
										sendStickerFromUrl(from, buffer, ben)
									 }
									break
				 case 'quoteit2': case 'qouteit2': 
					var teks = body.slice(10)
				 buffer = await getBaper(`https://naufalhoster.xyz/textmaker/quoteslife?apikey=${naufalkey}&quotes=${teks}`)
				 reply(mess.wait)
					benny.sendMessage(from, buffer, image, { caption: 'Block bucin', quoted: ben})
					break
					case 'mimic':
					if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
					if (arg === 'on') {
						if (mimic.includes(from)) return reply('*Mimic sudah aktif!*')
							mimic.push(from)
						fs.writeFileSync('./src/mimic.json', JSON.stringify(mimic))
						reply('*Done!*')
					} else if (arg === 'off') {
						if (!mimic.includes(from)) return reply('*Mimic belum aktif!*')
							mimic.splice(mimic.indexOf(from), 1)
						fs.writeFileSync('./src/mimic.json', JSON.stringify(mimic))
						reply('*Done!*')
					} else {
						reply('Pilih on atau off!')
					}
					break
				 case 'nulisbuku': 
					var teks = body.slice(11)
				var buffer = await getBaper(`https://api.zeks.me/api/nulis?text=${teks}&apikey=YunitaGanteng`)
				reply(mess.wait)
					   benny.sendMessage(from, buffer, MessageType.image, {quoted: ben})
				 break
				 case 'fakelink':
				 benny.sendMessage(from, {text: arg, previewType: "NONE", jpegThumbnail: setthumb}, extendedText, {previewType: "NONE"})
				 break
				 case 'nulisfolio': 
					var teks = body.slice(12)
				var buffer = await getBaper(`https://api.vhtear.com/write?text=${body.slice(12)}&apikey=${vhtearkey}`)
				reply(mess.wait)
					     benny.sendMessage(from, buffer, MessageType.image, {quoted: ben})
				 break
				 case 'hitung':
				 teks = `[ *KALKULATOR* ]\n\nHasil dari:\n${arg} = ${Math_js.evaluate(arg)}`
				 reply(teks)
				 break
				 case 'jadwaltv':
            if (arg.length < 1) return reply('Kirim perintah *#jadwaltv [channel]*')
            reply(await jadwaltv(arg))
            break
			case 'totalpesan':{
			if (!isGroup) return reply(mess.only.group)
			let id = from
    let mCount = {}
    let totalM = 0
    await benny.loadAllMessages(id, ben => {
        let user = ben.key.fromMe ? benny.user.jid : ben.participant ? ben.participant : id.includes('g.us') ? '' : id
        if (!user) return
        if (user in mCount) mCount[user]++
        else mCount[user] = 1
        totalM++
    }, 1000)
    let sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1])
    let pesan = sorted.map(v => `${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} pesan`).join('\n')
    benny.sendMessage(from, `${totalM} pesan terakhir\n${pesan}`, text, { contextInfo: { mentionedJid: sorted.map(v => v[0]) } })
			}
break
			case 'video': // SEARCH VIDEO FROM YOUTUBE
        case 'vidio':
            if (arg.length === 0) return reply(`Kirim perintah ${prefix}video judul video`)
            const querv = body.slice(7)
            reply(mess.wait)
            try {
                const resmusv = await axios.get(`https://cililitan2.herokuapp.com/api/ytsearch?q=${encodeURIComponent(querv)}`)
                const jsonsercmuv = await resmusv.data
                let berhitung1 = 1
                const { result } = await jsonsercmuv
                let xixixai = `Hasil pencarian dari ${querv}\n\nKetik ${prefix}getvideo [angka] untuk mengambil ID\nContoh : ${prefix}getvideo 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixai += `\n-----------------\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel.name}\n*Durasi* : ${result[i].duration}\n*Perintah download* : ${prefix}getvideo ${result[i].id}\n`
                }
                    xixixai += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixai += `(#)${result[ii].id}`
                }
                await sendMediaURL(from, result[0].thumbnail, xixixai)
            } catch (err){
                console.log(err)
            }
            break
            
        case 'music': // SEARCH MUSIC FROM YOUTUBE
        case 'musik':
           if (arg.length === 0) return reply(`Kirim perintah ${prefix}music judul lagu`)
           const querv2 = body.slice(7)
           reply(mess.wait)
           try {
               const resmusv2 = await axios.get(`https://cililitan2.herokuapp.com/api/ytsearch?q=${querv2}`)
               const jsonsercmuv2 = await resmusv2.data
               let berhitung1 = 1
               const { result } = await jsonsercmuv2
               let xixixai = `Hasil pencarian dari ${querv2}\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic 2\n`
               for (let i = 0; i < result.length; i++) {
                   xixixai += `\n-----------------\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel.name}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix}getmusic ${result[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < result.length; ii++) {
                   xixixai += `(#)${result[ii].id}`
               }
               sendMediaURL(from, result[0].thumbnail, xixixai)
           } catch (err){
               console.log(err)
           }
           break
		   case 'caripesan':{
			 let text = body.slice(11)
    if (!text) throw 'masukan pesan yg mo dicari!'
    let split = text.split`|`
    let result = await benny.searchMessages(arg.split('|')[0], from, arg.split('|')[1], 1)
    if (result.messages.length > 0) {
        let total = result.messages.length
        let sp = total < Number(split[1]) ? `Hanya ditemukan ${total} pesan ngab` : `Ditemukan ${total} pesan`
        reply(sp)

        result.messages.map( async ({ key }) => {
            let { remoteJid: _remoteJid, id: _ids } = key
            let _message = await benny.loadMessage(_remoteJid, _ids)
            reply2(m.chat, 'Nih pesannya', _message)
        })
    }
}
break
        case 'getmusik':
        case 'getmusic':
            try {
                if (isQuotedImage) {
                    if (arg.length === 0) return reply(`Kirim perintah *${prefix}getmusik _IdDownload_*`)
                    if (!Number(args[0])) return reply(`_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*`)
                    const dataDownmp3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    const pilur = dataDownmp3.split('(#)')
                    reply(mess.wait)
                    
                    yta(`https://youtube.com/watch?v=${pilur[args[0]]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb,captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    }).catch((e) => {
                        reply('Kesalahan saat mendownload data yg dipilih! pastikan id from perintah *!musik* sudah benar.')
                    })

                } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
                } else {
                    if (arg.length === 0) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
                    if (args[0] <= 25) return reply(`_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_`,)
                    reply(mess.wait)
                    yta(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        benny.sendFileFromUrl(from, dl_link, 'audio.mp3', '', ben).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(`_Kesalahan! Pastikan id download sudah benar._`)
            }
            break
			case 'expiredgc':
			case 'expired':{
			if (!isGroup) return reply(mess.only.group)
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				const timeRemi = arg
                const parsedTi = ms(toMs(timeRemi))
                reminder.addReminder(sender, 'out', 'hidetag', timeRemi, _reminder)
                benny.sendMessage(from, `
*-- [ EXPIRED GC ] --*
    
Expired berhasil diaktifkan!
- *Durasi*: ${parsedTi.hours} jam ${parsedTi.minutes} menit ${parsedTi.seconds} detik
    `, text, {quoted: ben})
                const intervRemi = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						benny.sendMessage(from, `*-- [ EXPIRED GC ] --*
Masa aktif bot di group ini sudah habis!`, text, { quoted: ben}).then(() => benny.groupLeave(from))
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemi)
                    }
                }, 1000)
			}
				break
			case 'chats':
			anu = await benny.chats.all()
			console.log(anu)
			po = 1
			teks = `*LIST CHATS*\n\n`
			for (let i = 0; i < anu.length; i++) {
                   teks += `*${i+1}.* ${anu[i].name}\n*ID:* ${anu[i].jid}\n*Waktu Dibuat:* ${anu[i].t}\n======================\n`
               }
                   teks += `\n\n`
               for (let ii = 0; ii < anu.length; ii++) {
                   teks += `${anu[ii].jid}`
               }
				benny.sendMessage(from, teks.trim(), text, {quoted: ben})
			break
      case 'sendbug':
	  if (!ben.key.fromMe && !isOwner) return
	  if (arg.length < 1) return
			anu = body.slice(9)
			ani = anu.split('|')[0]
			ani1 = anu.split('|')[1]
			for (let i = 0; i < ani1; i++) {
					anj = benny.prepareMessageFromContent(ani, benny.prepareDisappearingMessageSettingContent(`${decodeURI('%F0%9F%91%8B')}`), {})
					benny.relayWAMessage(anj, {})
			}
					anup = await benny.groupMetadata(ani)
					reply(`*Berhasil mengirim bug gc ke ${anup.subject}*`)
					break
        case 'getvideo':
            if (arg.length === 0) return reply(`Kirim perintah *${prefix}getvideo* _IdDownload_`)
            try {    
            if (isQuotedImage) {
                if (!Number(args[0])) return reply(`_Apabila reply hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getvideo _1_*`)
                const dataDownmp3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                const pilur = dataDownmp3.split('(#)')
                console.log(pilur[args[0]])
                reply(mess.wait)
                fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lolkey}&url=https://youtu.be/${pilur[args[0]]}`)
                    .then((res) => {
                        console.log(res)
                        axios.get(`https://tinyurl.com/api-create.php?url=${res.result.link.link}`)
                        .then((a) => {
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${res.result.title}\n*Ext* : MP4\n*Size* : ${res.result.link.size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, res.result.thumbnail, captions)
                        sendMediaURL(from,res.result.link.link).catch(() => reply(mess.error.api))
                        })

                    })
                 
            } else if (ben.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah reply cok! hanya tag pesan berisi data hasil from penelusuran video._`)
            } else {
                if (arg.length === 0) return reply(`Kirim perintah *${prefix}getvideo _Id Video_*`)
                if (args[0] <= 25) return reply(`_Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian video!_`,)
                reply(mess.wait)
                ytv(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(mess.error.api)
            }
            break
			case 'searchmsg':
       if (!arg) return reply(`Penggunaan : *!searchmsg <Kata>*\nContoh : *${prefix}searchmsg bot*`)
       const query = arg
       const searched = await benny.searchMessages(query, from, 25, 1)
        if (searched.messages.length === 0){
          reply(`Kata *[ ${query} ]* tidak ditemukan!`)
             return
             }
          let katatemu = `*[ Message Search ]*\n\nDitemukan ${searched.messages.length - 1} pesan!\n`
          for (let i = 1; i < searched.messages.length - 1; i++) {
             let typeSrc = Object.keys(searched.messages[i].message)[0]
            typeSrc = typeSrc === 'extendedTextMessage' && searched.messages[i].message.extendedTextMessage.text.includes('@') ? typeSrc = 'mentionedText' : typeSrc
              const bodySrc = typeSrc == 'conversation' ? searched.messages[i].message.conversation : typeSrc == 'mentionedText' ? searched.messages[i].message.extendedTextMessage.text : typeSrc == 'extendedTextMessage' ? searched.messages[i].message.extendedTextMessage.text : typeSrc == 'imageMessage' ? searched.messages[i].message.imageMessage.caption : typeSrc == 'stickerMessage' ? 'Sticker' : typeSrc == 'audioMessage' ? 'Audio' : typeSrc == 'videoMessage' ? searched.messages[i].message.videoMessage.caption : typeSrc == 'documentMessage' ? 'document' : '[ PEPEK ]'//hurtz.message
                const senderSrc = isGroup ? searched.messages[i].participant : searched.messages[i].key.remoteJid
                 const jidSrc = senderSrc
				const dongoSrc = []
                  const contsSrc = searched.messages[i].key.fromMe ? benny.user.jid : benny.contacts[senderSrc] || { notify: jidSrc.replace(/@.+/, '') }
                 const pushnameSrc = searched.messages[i].key.fromMe ? benny.user.name : contsSrc.notify || contsSrc.vname || contsSrc.name || '-'
 
                    katatemu += `
 
Pesan : ${bodySrc}
Type : ${typeSrc}
Pengirim : ${senderSrc.replace('@s.whatsapp.net', '')} ( ${pushnameSrc} )
`
		  }
               benny.sendMessage(from, katatemu, text, {quoted: ben})
          break
			case 'qrmaker':
            if (arg.length < 1) return reply('Kirim perintah *#qrmaker [text]*')
			qr = body.slice(9)
            buffer = await getBaper(`https://api.zeks.me/api/qrencode?apikey=YunitaGanteng&text=${qr}`)
            benny.sendMessage(from, buffer, image, {quoted: ben, caption: `*QR Dari* : ${qr}`})
            break
			case 'listsurah':
			
             reply(`Berikut ini Daftar Nomor Surah
             
Untuk mencari ketik ${prefix}quran 1

1. Al-Fatihah الفاتحة
2. Al-Baqarah البقرة
3. Ali ‘Imran آل عمران
4. An-Nisa’ النّساء
5. Al-Ma’idah المآئدة
6. Al-An’am الانعام
7. Al-A’raf الأعراف
8. Al-Anfal الأنفال
9. At-Taubah التوبة
10. Yunus ينوس
11. Hud هود
12. Yusuf يسوف
13. Ar-Ra’d الرّعد
14. Ibrahim إبراهيم
15. Al-Hijr الحجر
16. An-Nahl النّحل
17. Al-Isra’ بني إسرائيل
18. Al-Kahf الكهف
19. Maryam مريم
20. Ta Ha طه
21. Al-Anbiya الأنبياء
22. Al-Hajj الحجّ
23. Al-Mu’minun المؤمنون
24. An-Nur النّور
25. Al-Furqan الفرقان
26. Asy-Syu’ara’ الشّعراء
27. An-Naml النّمل
28. Al-Qasas القصص
29. Al-‘Ankabut العنكبوت
30. Ar-Rum الرّوم
31. Luqman لقمان
32. As-Sajdah السّجدة
33. Al-Ahzab الْأحزاب
34. Saba’ سبا
35. Fatir فاطر
36. Ya Sin يس
37. As-Saffat الصّافات
38. Sad ص
39. Az-Zumar الزّمر
40. Al-Mu’min المؤمن
41. Fussilat فصّلت
42. Asy-Syura الشّورى
43. Az-Zukhruf الزّخرف
44. Ad-Dukhan الدّخان
45. Al-Jasiyah الجاثية
46. Al-Ahqaf الَأحقاف
47. Muhammad محمّد
48. Al-Fath الفتح
49. Al-Hujurat الحجرات
50. Qaf ق
51. Az-Zariyat الذّاريات
52. At-Tur الطّور
53. An-Najm النّجْم
54. Al-Qamar القمر
55. Ar-Rahman الرّحْمن
56. Al-Waqi’ah الواقعه
57. Al-Hadid الحديد
58. Al-Mujadilah المجادلة
59. Al-Hasyr الحشْر
60. Al-Mumtahanah الممتحنة
61. As-Saff الصّفّ
62. Al-Jumu’ah الجمعة
63. Al-Munafiqun المنافقون
64. At-Tagabun التّغابن
65. At-Talaq الطّلاق
66. At-Tahrim التّحريم
67. Al-Mulk الملك
68. Al-Qalam القلم
69. Al-Haqqah الحآقّة
70. Al-Ma’arij المعارج
71. Nuh نوح
72. Al-Jinn الجنّ
73. Al-Muzzammil المزمّل
74. Al-Muddassir المدشّر
75. Al-Qiyamah القيمة
76. Al-Insan الْاٍنسان
77. Al-Mursalat المرسلات
78. An-Naba’ النّبا
79. An-Nazi’at النّازعات
80. ‘Abasa عبس
81. At-Takwir التّكوير
82. Al-Infitar الانفطار
83. Al-Tatfif المطفّفين
84. Al-Insyiqaq الانشقاق
85. Al-Buruj البروج
86. At-Tariq الطّارق
87. Al-A’la الْأعلى
88. Al-Gasyiyah الغاشية
89. Al-Fajr الفجر
90. Al-Balad البلد
91. Asy-Syams الشّمس
92. Al-Lail الّيل
93. Ad-Duha الضحى
94. Al-Insyirah الانشراح
95. At-Tin التِّينِ
96. Al-‘Alaq العَلَق
97. Al-Qadr الْقَدْرِ
98. Al-Bayyinah الْبَيِّنَةُ
99. Az-Zalzalah الزلزلة
100. Al-‘Adiyat العاديات
101. Al-Qari’ah القارعة
102. At-Takasur التكاثر
103. Al-‘Asr العصر
104. Al-Humazah الهُمَزة
105. Al-Fil الْفِيلِ
106. Quraisy قُرَيْشٍ
107. Al-Ma’un الْمَاعُونَ
108. Al-Kausar الكوثر
109. Al-Kafirun الْكَافِرُونَ
110. An-Nasr النصر
111. Al-Lahab المسد
112. Al-Ikhlas الإخلاص
113. Al-Falaq الْفَلَقِ
114. An-Nas نَاسِ`)
break
				case 'randomsurah':
				anu = await fetchJson(`https://api.zeks.me/api/randomquran`)
				teks = `? *RANDOM SURAH* ?\n\n\n- *Surah* : ${anu.result.nama}\n- *Arti* : ${anu.result.arti}\n- *Ayat* : ${anu.result.ayat}\n- *Asma* : ${anu.result.asma}\n- *Urut* : ${anu.result.urut}\n- *Nomor* : ${anu.result.nomor}\n- *Dari* : ${anu.result.type}\n- *Rukuk* : ${anu.result.rukuk}\n- *Ket* : ${anu.result.keterangan}\n`
				reply(teks)
				break
				case 'quran':reply(mess.wait)
					surah = body.slice(7)
				   anu = await fetchJson(`https://api.zeks.me/api/quran?no=${surah}&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: ${surah}\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
				   lagu = await getBaper(anu.audio)
				   benny.sendMessage(from, lagu, audio, {mimetype: 'audio/mp3', ptt:true})
				   reply(quran.trim())
				   break
				case 'map':var teks = body.slice(5)
					axios.get('https://mnazria.herokuapp.com/api/maps?search='+teks)
					.then((res) => {
					  imageToBase64(res.data.gambar)
						.then(
						  (ress) => {
							benny.sendMessage(from, '_Otewe bang!_', MessageType.text, maping)
							var buf = Buffer.from(ress, 'base64')
							benny.sendMessage(from, buf, MessageType.image, { caption: `${teks}`, quoted: ben })
						})
					})
					break
				 case 'thunder': 
					if (arg.length < 1) return benny.sendMessage(from, 'Teksnya mana block!', MessageType.text, {quoted: ben})
				teks = body.slice(9)
				var buffer = await getBaper(`https://naufalhoster.xyz/textmaker/thunder?apikey=${naufalkey}&text=${teks}`)
				reply(mess.wait)
				benny.sendMessage(from, buffer, MessageType.image, { caption: `THUNDER : ${teks}`, quoted: ben })
					 break
					 case 'ephemeral':
					 if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
				if(!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (arg === 'on') {
		benny.toggleDisappearingMessages(from, 90 * 24 * 60 * 60).then(() => reply('*Done!*'))
					} else if (arg === 'off') {
						benny.toggleDisappearingMessages(from, 0).then(() => reply('*Done!*'))
					} else {
						reply('Pilih on atau off!')
					} break
					 case 'otakulast': 
						anu = await fetchJson(`https://api.vhtear.com/otakulatest&apikey=${vhtearkey}`)
						if (anu.error) return reply(anu.error)
						teks = '=================\n\n'
						for (let i of anu.result.data) {
							teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Published* : ${i.datetime}\n\n=================\n\n`
						}
						reply(teks.trim())
						break
						case 'reminderopengc': // by Haikal
						teks = body.slice(16)
                const messReminds = teks.split('|')[0]
				const timeReminds = teks.split('|')[1]
                const parsedTimes = ms(toMs(timeReminds))
                reminder.addReminder(sender, messReminds, 'text', timeReminds, _reminder)
                benny.sendMessage(from, `
*-- ? REMINDER OPEN GC ? --*
    
Reminder berhasil diaktifkan!
? *Alasan*: ${messReminds}
? *Durasi*: ${parsedTimes.hours} jam ${parsedTimes.minutes} menit ${parsedTimes.seconds} detik
    `, text, {quoted: ben})
                const intervReminds = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                        benny.groupSettingChange(from, GroupSettingChange.messageSend, false)
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervReminds)
                    }
                }, 1000)
				break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
benny.sendMessage(from, omkeh, MessageType.audio, { quoted: ben, mimetype: 'audio/mp4', ptt: true })
break
case 'dj1':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj1.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj2':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj2.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj3':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj3.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj4':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj4.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj5':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj5.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj6':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj6.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj7':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj7.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj8':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj8.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj9':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj9.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj10':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj10.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj11':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj11.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj12':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj12.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj13':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj13.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj14':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj14.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj15':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj15.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj16':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj16.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj17':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj17.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj18':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj18.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj19':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj19.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj20':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj20.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj21':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj21.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj22':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj22.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj23':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj23.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj24':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj24.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break
case 'dj25':
benny.updatePresence(from, Presence.recording)
sound = fs.readFileSync('badlogic/dj25.mp3')
benny.sendMessage(from, sound, MessageType.audio, {quoted: ben, mimetype: 'audio/mp4', ptt:true})
break

				case 'ramaltogel':case 'ramalantogel':if (!isGroup) return reply(mess.only.group)
				ppopo = Math.floor(Math.random() * 10000)
				reply(`*Ramalan angka togel adalah:* ${ppopo}`)
				break
				case 'carijodoh':	if (!isGroup) return reply(mess.only.group)
			jom2 = groupMembers
			kepoah = jom2[Math.floor(Math.random() * jom2.length)]
			teks = `*Jodoh kamu digrup ini adalah:* @${kepoah.jid.split('@')[0]}`
			benny.sendMessage(from, teks, text, {contextInfo: {mentionedJid: [kepoah.jid]}, quoted: ben})
			break
			case 'takesw':
			case 'colongsw':
			case 'ambilsw':
			if (!ben.key.fromMe && !isOwner) return
			if (isQuotedImage) {
				anu = await downloadM()
				benny.sendMessage(from, fs.readFileSync(anu), image, {quoted: ben})
			} else if (isQuotedVideo) {
				anu = await downloadM()
				benny.sendMessage(from, fs.readFileSync(anu), video, {quoted: ben, mimetype: 'video/mp4'})
			}
			break
				case 'reminderhidetag': 
				if (!isGroup) return reply(mess.only.group)
				if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
				if (arg.length >= 1) {
						teks = body.slice(17)
                const messRemi = teks.split('|')[0]
				const timeRemi = teks.split('|')[1]
                const parsedTi = ms(toMs(timeRemi))
                reminder.addReminder(sender, messRemi, 'hidetag', timeRemi, _reminder)
                benny.sendMessage(from, `
*-- ? REMINDER HIDETAG ? --*
    
Reminder berhasil diaktifkan!
? *Text:* ${messRemi}
? *Durasi*: ${parsedTi.hours} jam ${parsedTi.minutes} menit ${parsedTi.seconds} detik
    `, text, {quoted: ben})
                const intervRemi = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						meme = []
						for (let po of groupMembers) {
							meme.push(po.jid)
						}
                        benny.sendMessage(from, `*-- ? REMINDER HIDETAG ? --*

? @${sender.split('@')[0]} ?
? *Pesan*: ${messRemi}
? *Type*: Hidetag`, text, {contextInfo:{mentionedJid:meme}, quoted: ben})
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemi)
                    }
                }, 1000)
				}
				break
				case 'reminderkick': 
				if (!isGroup) return reply(mess.only.group)
				if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
				if (arg.length >= 1) {
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
						teks = body.slice(14)
                const messRemin = ''
				const timeRemin = teks.split('|')[1]
                const parsedTim = ms(toMs(timeRemin))
                reminder.addReminder(sender, messRemin, 'text', timeRemin, _reminder)
                benny.sendMessage(from, `
*-- ? REMINDER KICK ? --*
    
Reminder berhasil diaktifkan!
? *Target*: @${mentioned[0].split('@')[0]}
? *Durasi*: ${parsedTim.hours} jam ${parsedTim.minutes} menit ${parsedTim.seconds} detik
    `, text, {contextInfo:{mentionedJid: mentioned}, quoted: ben})
                const intervRemindss = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                        benny.groupRemove(from, mentioned)
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemindss)
                    }
                }, 1000)
				} else if (arg.length < 1) {
					mentioned = ben.message.extendedTextMessage.contextInfo.participant
						teks = body.slice(14)
                const messRemin = ''
				const timeRemin = teks.split('|')[1]
                const parsedTim = ms(toMs(timeRemin))
                reminder.addReminder(sender, messRemin, 'text', timeRemin, _reminder)
                benny.sendMessage(from, `
*-- ? REMINDER KICK ? --*
    
Reminder berhasil diaktifkan!
? *Target*: @${mentioned[0].split('@')[0]}
? *Durasi*: ${parsedTim.hours} jam ${parsedTim.minutes} menit ${parsedTim.seconds} detik
    `, text, {contextInfo:{mentionedJid: mentioned}, quoted: ben})
                const intervRemindss = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                        benny.groupRemove(from, mentioned)
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemindss)
                    }
                }, 1000)
				}
				break
				case 'reminderclosegc': // by Haikal
						teks = body.slice(17)
                const messRemindss = teks.split('|')[0]
				const timeRemindss = teks.split('|')[1]
                const parsedTimess = ms(toMs(timeRemindss))
                reminder.addReminder(sender, messRemindss, 'text', timeRemindss, _reminder)
                benny.sendMessage(from, `
*-- ? REMINDER CLOSE GC ? --*
    
Reminder berhasil diaktifkan!
? *Alasan*: ${messRemindss}
? *Durasi*: ${parsedTimess.hours} jam ${parsedTimess.minutes} menit ${parsedTimess.seconds} detik
    `, text, {quoted: ben})
                const intervRemindss = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
                        benny.groupSettingChange(from, GroupSettingChange.messageSend, true)
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemindss)
                    }
                }, 1000)
				break
				case 'reminder': // by Slavyan
						
						teks = body.slice(10)
                const messRemind = teks.split('|')[0]
				const timeRemind = teks.split('|')[1]
				typeRemind = 'Text'
				if (isQuotedImage) typeRemind = 'Image'
				if (isQuotedSticker) typeRemind = 'Sticker'
				if (isQuotedAudio) typeRemind = 'Audio'
				if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker) typeRemind = 'Text'
                const parsedTime = ms(toMs(timeRemind))
                reminder.addReminder(sender, messRemind, typeRemind, timeRemind, _reminder)
				if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
                await benny.sendMessage(from, `
*-- ? REMINDER ? --*
    
Reminder berhasil diaktifkan!
? *Pesan*: ${messRemind}
? *Type*: Text
? *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
? *Untuk*: @${sender.split('@')[0]}
    `, text, {contextInfo:{mentionedJid: [sender]}})
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						anu = await reminder.getReminderMsg(sender, _reminder)
                        benny.sendMessage(from, `*-- ? REMINDER ? --*

? @${sender.split('@')[0]} ?
? *Pesan*: ${messRemind}
? *Type*: ${reminder.getReminderType(sender, _reminder)}`, text, {contextInfo:{mentionedJid: [sender]}})
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
				} else if (isQuotedSticker) {
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await benny.downloadAndSaveMediaMessage(encmedia)
                await benny.sendMessage(from, `
*-- ? REMINDER ? --*
    
Reminder berhasil diaktifkan!
? *Pesan*: ${messRemind}
? *Type*: Sticker
? *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
? *Untuk*: @${sender.split('@')[0]}
    `, text, {contextInfo:{mentionedJid: [sender]}})
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						anu = await reminder.getReminderMsg(sender, _reminder)
                        benny.sendMessage(from, `*-- ? REMINDER ? --*

? @${sender.split('@')[0]} ?
? *Pesan*: ${messRemind}
? *Type*: ${reminder.getReminderType(sender, _reminder)}`, text, {contextInfo:{mentionedJid: [sender]}})
                        benny.sendMessage(from, fs.readFileSync(media), sticker)
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
				} else if (isQuotedImage) {
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
				media = await benny.downloadAndSaveMediaMessage(encmedia)
                await benny.sendMessage(from, `
*-- ? REMINDER ? --*
    
Reminder berhasil diaktifkan!
? *Pesan*: ${messRemind}
? *Type*: Image
? *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
? *Untuk*: @${sender.split('@')[0]}
    `, text, {contextInfo:{mentionedJid: [sender]}})
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						anu = await reminder.getReminderMsg(sender, _reminder)
                        teks = `*-- ? REMINDER ? --*

? @${sender.split('@')[0]} ?
? *Pesan*: ${messRemind}
? *Type*: ${reminder.getReminderType(sender, _reminder)}`
benny.sendMessage(from, media, image, {contextInfo:{mentionedJid: [sender]}, caption: teks})
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
				} else if (isQuotedAudio) {
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await benny.downloadAndSaveMediaMessage(encmedia)
                await benny.sendMessage(from, `
*-- ? REMINDER ? --*
    
Reminder berhasil diaktifkan!
? *Pesan*: ${messRemind}
? *Type*: Audio
? *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
? *Untuk*: @${sender.split('@')[0]}
    `, text, {contextInfo:{mentionedJid: [sender]}})
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
						anu = await reminder.getReminderMsg(sender, _reminder)
                        benny.sendMessage(from, `*-- ? REMINDER ? --*

? @${sender.split('@')[0]} ?
? *Pesan*: ${messRemind}
? *Type*: ${reminder.getReminderType(sender, _reminder)}`, text, {contextInfo:{mentionedJid: [sender]}})
benny.sendMessage(from, fs.readFileSync(media), audio, {contextInfo:{mentionedJid: [sender]}, mimetype: 'audio/mp4', ptt: true, caption: teks})
                        _reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
                        fs.writeFileSync('./src/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
				}
            break
			case 'template':
			 let infj = await benny.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} ??`,
							"hydratedFooterText": `${namabot}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "#listmenu"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "#sc"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Menu All",
										"id": "#menu"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
benny.relayWAMessage(infj)
break
				case 'nsfwneko':gatauda = body.slice(6)
					reply(mess.wait)
					 anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=Tobzzz17`)
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `NSFW NEKO!`, quoted: ben })
					break
				case 'groupid':benny.sendMessage(from, from, text, {quoted: ben})
				break
				case 'nsfwtrap':gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=Tobzzz17`)
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `NSFW TRAP!`, quoted: ben })
					break
				case 'nsfwblowjob':gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=Tobzzz17`)
					buffer = await getBaper(anu.result)
					benny.sendMessage(from, buffer, image, { caption: `BLOWJOB!`, quoted: ben })
					break
					case 'rate':
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					benny.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, {quoted: ben})
					break
case 'hug':                      

               buffer = `http://api.lolhuman.xyz/api/random/hug?apikey=${lolkey}`
			   sendStickerFromUrl(from, buffer, ben)
                                             break
										case 'poke2':                      

               buffer = `http://api.lolhuman.xyz/api/random/poke?apikey=${lolkey}`
			   sendStickerFromUrl(from, buffer, ben)
                                             break
											 case 'ttg':                      

               buffer = `https://api.vhtear.com/textxgif?text=${arg}&apikey=${vhtearkey}`
			   sendStickerFromUrl(from, buffer, ben)
                                             break
										case 'sleding':                      

if (arg.length > 1) {
tokp = body.slice(9)
               buffer = `https://api.vhtear.com/slidingtext?text=${tokp}&apikey=${vhtearkey}`
			   sendStickerFromUrl(from, buffer, ben)
} else 
if (arg.length < 1) {
tokp = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
               buffer = `https://api.vhtear.com/slidingtext?text=${tokp}&apikey=${vhtearkey}`
			   sendStickerFromUrl(from, buffer, ben)
}
                                             break
										case 'pat':                      

               buffer = `http://api.lolhuman.xyz/api/random/pat?apikey=${lolkey}`
			   sendStickerFromUrl(from, buffer, ben)
                                             break
										case 'baka2':                      

               buffer = `http://api.lolhuman.xyz/api/random2/baka?apikey=${lolkey}`
			   sendStickerFromUrl(from, buffer, ben)
                                             break
										case 'shaunthesheep':						if (!isQuotedMedia) return reply('Reply Gambar/Sticker !')
										anu = await downloadM()
										if (isQuotedImage) {
											ap = await uploadMedia(anu)
											buffer = await getBuffer(`https://api.xteam.xyz/videomaker/shaunthesheep?url=${ap.files[0].url}&APIKEY=${apikey.xteamkey}`)
											benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben, caption: command})
										} else if (isQuotedSticker) {
											ran = getRandom('.png')
											exec(`ffmpeg -i ${anu} ${ran}`, async(err) => {
											ap = await uploadMedia(ran)
											buffer = await getBuffer(`https://api.xteam.xyz/videomaker/shaunthesheep?url=${ap.files[0].url}&APIKEY=${apikey.xteamkey}`)
											benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben, caption: command})
											})
										} else {
											reply('Reply Gambar/Sticker !')
										}
										break
                case '1977':
                case 'aden':
                case 'brannan':
                case 'brooklyn':
                case 'clarendon':
                case 'gingham':
                case 'hudson':
                case 'inkwell':
                case 'earlybird':
                case 'kelvin':
                case 'lark':
                case 'lofi':
                case 'maven':
                case 'mayfair':
                case 'moon':
                case 'nashville':
                case 'perpetua':
                case 'reyes':
                case 'rise':
                case 'slumber':
                case 'stinson':
                case 'toaster':
                case 'valencia':
                case 'walden':
                case 'willow':
                case 'xpro2':{
                    if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
                        filePath = await benny.downloadAndSaveMediaMessage(encmedia)
						let bom = await uploadMedia(filePath)
					let pal = await getBuffer(`https://api.lolhuman.xyz/api/filter/${command}?apikey=${lolkey}&img=${bom.files[0].url}`)
                            benny.sendMessage(from, pal, image, { quoted: ben })
                         
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}${command} atau tag gambar yang sudah dikirim`)
                    }
				}
                    break
				 case 'attpwm': 
			if (!arg.includes('|')) return reply(`*Contoh:*\n${prefix}${command}attpwm Kamu jelek|Benny|Hidayat`)
			if (arg && ben.message.conversation && arg.split('|')[0] && arg.split('|')[1] && arg.split('|')[2]) {
					  exif.create(arg.split('|')[1], arg.split('|')[2])
					 let ran = getRandom('.webp')
					anus = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(arg.split('|')[0])}`)
					fs.writeFileSync(ran, anus)
					exec(`webpmux -set exif ./src/data.exif ${ran} -o ${ran}`, async (err) => {
					reply(mess.wait)
							benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
							fs.unlinkSync(ran)
					})
				 } else if (arg && ben.message.extendedTextMessage && arg.split('|')[0] && arg.split('|')[1] && !arg.split('|')[2]) {
					  exif.create(arg.split('|')[0], arg.split('|')[1])
					 let ran = getRandom('.webp')
					anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(m.quoted.text)}`)
					fs.writeFileSync(ran, anus)
					exec(`webpmux -set exif ./src/data.exif ${ran} -o ${ran}`, async (err) => {
					reply(mess.wait)
							benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
							fs.unlinkSync(ran)
					})
				 }
										break
										case 'attp': if (arg) {
					anus = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(arg)}`)
					reply(mess.wait)
							benny.sendMessage(from, anus, sticker, {quoted: ben})
				 } else if (!arg) {
					anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(m.quoted.text)}`)
					reply(mess.wait)
							benny.sendMessage(from, anu, sticker, {quoted: ben})
				 }
										break
										case 'attp2':					anu = await getBaper(`http://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${body.slice(6)}`)
					reply(mess.wait)
							benny.sendMessage(from, anu, sticker, {quoted: ben})
										break
										case 'attp3':reply(mess.wait)
					anu = await fetchJson(`https://salism3api.pythonanywhere.com/text2gif/?text=${body.slice(6)}`)
							sendStickerFromUrl(from, anu.image)
										break
										case 'setxteamkey':					if (!ben.key.fromMe && !isOwner) return
										apikey.xteamkey = arg
										fs.writeFileSync('./apikey.json', JSON.stringify(apikey))
										reply('*Done!*')
										break
										case 'setvhkey':					if (!ben.key.fromMe && !isOwner) return
										apikey.vhtearkey = arg
										fs.writeFileSync('./apikey.json', JSON.stringify(apikey))
										reply('*Done!*')
										break
										case 'setbotname':					if (!ben.key.fromMe && !isOwner) return
										apikey.namabot = arg
										fs.writeFileSync('./apikey.json', JSON.stringify(apikey))
										reply('*Done!*')
										break
										case 'setlolkey':					if (!ben.key.fromMe && !isOwner) return
										apikey.lolkey = arg
										fs.writeFileSync('./apikey.json', JSON.stringify(apikey))
										reply('*Done!*')
										break
										case 'sethujankey':					if (!ben.key.fromMe && !isOwner) return
										apikey.hujankey = arg
										fs.writeFileSync('./apikey.json', JSON.stringify(apikey))
										reply('*Done!*')
										break
						case 'pick':	
						orngo = body.slice(6)
			jom = orngo.split('|')[0]
			jom1 = orngo.split('|')[1]
			jom2 = groupMembers
			mem_id = []
			teks = `*${jom1}*\n\n`
			for (let i = 0; i < jom; i++) {
			kepoah = jom2[Math.floor(Math.random() * jom2.length)]
			teks += `@${kepoah.jid.split('@')[0]}\n`
			mem_id.push(kepoah.jid)
			}
			benny.sendMessage(from, teks.trim(), text, {contextInfo: {mentionedJid: mem_id}, quoted: ben})
			break
			case 'culikke':
			if (!isOwner && !ben.key.fromMe) return
			mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
			let poi = body.slice(9)
			for (let u = 0; u < mentioned.length; u++) {
				await sleep(5000)
				benny.groupAdd(poi.split('|')[0], [mentioned[u]])
			}
			break
			 case 'slot':      const isislots = [
                            '🍊 : 🍒 : 🍐',
                            '🍒 : 🔔 : 🍊',
                            '🍇 : 🍒 : 🍐',
                            '🍊 : 🍋 : 🔔',
                            '💎 : 💎 : 💎',
                            '🔔 : 🍒 : 🍊',
                            '🍊 : 🍋 : 🔔',
                            '💎 : 🍒 : 🍋',
                            '🍊 : 🍒 : 💎',
                            '💎 : 🔔 : 🍇',
                            '💎 : 💎 : 💎',
                            '🍐 : 💎 : 🔔',
                            '🍊 : 🍋 : 🍒',
                            '🔔 : 🔔 : 🍇',
                            '🔔 : 🍐 : 🍇',
                            '💎 : 💎 : 💎'
                        ]
                            const mathslots = isislots[Math.floor(Math.random() * (isislots.length))]
                            if (mathslots == '💎 : 💎 : 💎') {
                                reply(`*「 RESULT-SLOT 」*

🍋 : 🍇 : 🍍
💎 : 💎 : 💎 <~
🍋 : 🍒 : 🍍

Congrats You win!`)
                            } else {
                                reply(`*「 RESULT-SLOT 」*

🍌 : 🍍 : 💎
${mathslots} <~
💎 : 🍌 : 🍌

Sorry You lost:(`)
                            }
                    break
					case 'suit':       if (!arg.match(/batu|gunting|kertas/)) return reply(`Format salah`)
                        if (arg.match(/batu|gunting|kertas/)) {
                            var computer = Math.random();
                            if (computer < 0.34) {
                                computer = 'batu';
                            } else if (computer >= 0.34 && computer < 0.67) {
                                computer = 'gunting';
                            } else {
                                computer = 'kertas';
                            }

                            if (arg == computer) {
                                reply(`Pertandingan Seri!`)
                            } else if (arg == 'batu') {
                                if (computer == 'gunting') {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
                                }
                            } else if (arg == 'gunting') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
                                }
                            } else if (arg == 'kertas') {
                                if (computer == 'batu') {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
                                } else {
                                    reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
                                }
                            }
						}
                    
                    break
					case 'casino':
					case 'kasino':          const maxcasino = 25
                            const thisyou = Math.floor(Math.random() * maxcasino) + 1;
                            const thiscomputer = Math.floor(Math.random() * maxcasino) + 1;
                            if (thisyou >= thiscomputer) {
                                reply(`*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nCongrats! You Win!`)
                            } else if (thisyou <= thiscomputer) {
                                reply(`*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nSorry! You lose:(`)
                            } else if (thisyou === thiscomputer) {
                               reply(`*RESULT*\n\n• You: ${thisyou}\n• Computer: ${thiscomputer}\n\nDraw!`)
                            }
                    break
case 'apakah':

					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					reply('Pertanyaan : '+apakah+'\n\nJawaban : '+ kah)
					break
case 'kapan':

					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					reply('Pertanyaan : '+kapankah+'\n\nJawaban : '+ koh)
					break
case 'bisakah':

					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					reply('Pertanyaan : '+bisakah+'\n\nJawaban : '+ keh)
					break
		case 'getpp':
		case 'getpic':
	    if (arg && ben.message.extendedTextMessage) {
		ppimg = await getPP(ben.message.extendedTextMessage.contextInfo.mentionedJid[0])
				buffer = await getBaper(ppimg)
				sendPesan(ben.message.extendedTextMessage.contextInfo.mentionedJid[0], `Kak izin ambil pp nya yah ^_^\nDisuruh @${sender.split('@')[0]}\nKaboorr aowawawoakwo`)
				benny.sendMessage(from, buffer, image, {contextInfo: {mentionedJid: [ben.message.extendedTextMessage.contextInfo.mentionedJid[0]]}, quoted: ben, caption: `Ini kak pp nya @${ben.message.extendedTextMessage.contextInfo.mentionedJid[0].split('@')[0]}\nAku juga udah izin sama dia ^_^`})
		} else if (!arg && ben.message.extendedTextMessage) {
		ppimg = await getPP(ben.message.extendedTextMessage.contextInfo.participant)
				buffer = await getBaper(ppimg)
				sendPesan(ben.message.extendedTextMessage.contextInfo.participant, `Kak izin ambil pp nya yah ^_^\nDisuruh @${sender.split('@')[0]}\nKaboorr aowawawoakwo`)
				benny.sendMessage(from, buffer, image, {contextInfo: {mentionedJid: [ben.message.extendedTextMessage.contextInfo.participant]}, quoted: ben, caption: `Ini kak pp nya @${ben.message.extendedTextMessage.contextInfo.participant.split('@')[0]}\nAku juga udah izin sama dia ^_^`})
		} else if (arg && ben.message.conversation) {
			bodom = new RegExp('[-+/ +/()]', 'gi')
				teks = arg.replace(bodom, '')
		ppimg = await getPP(`${teks}@s.whatsapp.net`)
				buffer = await getBaper(ppimg)
				sendPesan(`${teks}@s.whatsapp.net`, `Kak izin ambil pp nya yah ^_^\nDisuruh @${sender.split('@')[0]}\nKaboorr aowawawoakwo`)
				benny.sendMessage(from, buffer, image, {contextInfo: {mentionedJid: [`${teks}@s.whatsapp.net`]}, quoted: ben, caption: `Ini kak pp nya @${`${teks}@s.whatsapp.net`.split('@')[0]}\nAku juga udah izin sama dia ^_^`})
			}
		
			  break
			  case 'ppgc':{
			  if (!isGroup) return reply(mess.only.group)
		ppimg = await getPP(from)
				buffer = await getBaper(ppimg)
			 sendGambar(from, buffer)
			  }
			  break
			  case 'getppgc':{
			  if (!isGroup) return reply(mess.only.group)
		ppimg = await getPP(from)
				buffer = await getBaper(ppimg)
				benny.sendMessage(from, buffer, image, {quoted: ben, caption: `*Ini pp group:* ${groupName}`})
			  }
			  break
			  case 'getdesc':
			  
			  if (arg.length < 1) return reply('*Masukan id group yang mau dicolong ppnya!*')
		anu = `${body.slice(9)}`
		if (args[0].includes('@g.us')) {
		try {
					ppimg = await benny.getProfilePicture(anu)
				} catch {
					ppimg = 'https://telegra.ph/Benny-10-28'
				}
				metadete = await benny.groupMetadata(anu)
				benny.sendMessage(from, metadete.desc, text, {quoted: ben})
		} else {
			reply(`*Block! Nih contoh:\n${prefix}getdesc 6285709331584-1606097314@g.us*`)
		}
			  break
			  case 'slowmo':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await benny.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				benny.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ben})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai2':encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':case 'gemok':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'tovn':if (!isQuotedAudio) return reply('Tag audio nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
						hah = fs.readFileSync(media)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(media)
				break
				case 'hode':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
                                        encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        media = await benny.downloadAndSaveMediaMessage(encmedia)
                                        ran = getRandom('.mp3')
                                        exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
                                                fs.unlinkSync(media)
                                                if (err) return reply('Error!')
                                                hah = fs.readFileSync(ran)
                                                benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ben})
                                                fs.unlinkSync(ran)
                                        })
                                break
				case 'vibra':case 'vibrato':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
				if (!Number(args[0])) return reply('Harus nomor woi!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					tels = args[0]
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${tels}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'volume':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vntobase64':case 'audiotobase64':case 'audtobase64':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = fs.readFileSync(media)
					todi = await ran.toString('base64')
					reply(todi)
					break
					case 'base64toaud':case 'base64toaudio':case 'base64tovn':
					if (arg) {
						anu = new Buffer.from(arg, 'base64')
						benny.sendMessage(from, anu, audio, {mimetype: 'audio/mp3', ptt: true})
					} else if (!arg) {
						anu = new Buffer.from(m.quoted.text, 'base64')
						benny.sendMessage(from, anu, audio, {mimetype: 'audio/mp3', ptt: true})
					} break
					case 'setrecording':if (!ben.key.fromMe && !isOwner) return
					pren = 'recording'
					reply('*Berhasil!*')
					break
				case 'setavailable':if (!ben.key.fromMe && !isOwner) return
					pren = 'available'
					reply('*Berhasil!*')
					break
				case 'settyping':if (!ben.key.fromMe && !isOwner) return
					pren = 'composing'
					reply('*Berhasil!*')
					break
				case 'setonline':if (!ben.key.fromMe && !isOwner) return
					pren = 'paused'
					reply('*Berhasil!*')
					break
				case 'robot':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vidrobot':if (!isQuotedVideo) return reply('Reply Video nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'budeg':case 'budek':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					   encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vidbudeg':case 'vidbudek':if (!isQuotedVideo) return reply('Reply videonya!')
					   encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'imut':if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vidimut':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isQuotedVideo) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'balikin':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vidbalikin':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isQuotedVideo) return reply('Reply Video nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'detikvn':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: ben})
						fs.unlinkSync(media)
				break
				case 'detikvideo':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -loop 1 -i ${media} -c:v libx264 -t ${args[0]} -pix_fmt yuv420p ${ran}`, (err) => {
						benny.sendMessage(from, fs.readFileSync(ran), video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ben})
						fs.unlinkSync(media)
					})
				break
				case 'cepetin':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "rubberband=tempo=1.5" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vidcepetin':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isQuotedVideo) return reply('Reply Videonya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "rubberband=tempo=1.5" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'kencengin':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14" -ar 48k ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isQuotedAudio) return reply('Tag audio/vn nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'vidbass':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isQuotedVideo) return reply('Reply Video nya!')
					encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						benny.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: ben})
						fs.unlinkSync(ran)
					})
				break
				case 'tag':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (arg && ben.message.conversation) {
					bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(5)
				teks = bodo.replace(bodom, '')
				orange = `${teks}@s.whatsapp.net`
				benny.sendMessage(from, `@${orange.split('@')[0]}`, text, {contextInfo: {mentionedJid: [orange]}})
				} else if (arg && ben.message.extendedTextMessage) {
					benny.sendMessage(from, `@${ben.message.extendedTextMessage.contextInfo.mentionedJid[0].split('@')[0]}`, text, {contextInfo: {mentionedJid: ben.message.extendedTextMessage.contextInfo.mentionedJid}})
				} else if (!arg && ben.message.extendedTextMessage) {
					benny.sendMessage(from, `@${ben.message.extendedTextMessage.contextInfo.participant.split('@')[0]}`, text, {contextInfo: {mentionedJid: [ben.message.extendedTextMessage.contextInfo.participant]}})
				}
				break
				case 'towame':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (arg && ben.message.conversation) {
					bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(8)
				teks = bodo.replace(bodom, '')
				benny.sendMessage(from, `wa.me/${teks}`, text, {quoted: ben})
				} else if (arg && ben.message.extendedTextMessage) {
				benny.sendMessage(from, `wa.me/${ben.message[type].contextInfo.mentionedJid[0].split('@')[0]}`, text, {quoted: ben})
				} else if (!arg && ben.message.extendedTextMessage) {
				benny.sendMessage(from, `wa.me/${m.quoted.sender.split('@')[0]}`, text, {quoted: ben})
				} 
				break
				case 'menuhack':case 'menuheck':l = 1
				textImg(require('./src/teks/help').menuhack(prefix, l))
				break
case 'menuhelper':l = 1
				textImg(require('./src/teks/help').menuhelper(prefix, l))
				break
case 'menuvideo':l = 1
				textImg(require('./src/teks/help').menuvideo(prefix, l))
				break
case 'menuaudio':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menuaudio(prefix, l))
				break
case 'menugroup':
case 'menugrup':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menugroup(prefix, l))
				break
case 'menuimage':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menuimage(prefix, l))
				break
case 'menudownload':l = 1
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menudownload(prefix, l))
				break
case 'menugame':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menugame(prefix, l))
				break
case 'menunews':l = 1
				textImg(require('./src/teks/help').menunews(prefix, l))
				break
case 'menusearch':l = 1
				textImg(require('./src/teks/help').menusearch(prefix, l))
				break
case 'menuimagemaker':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menuimagem(prefix, l))
				break
case 'menuanime':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menuanime(prefix, l))
				break
case 'menusholawat':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menushol(prefix, l))
				break
case 'menuislami':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menuislami(prefix, l))
				break
case 'menuspammer':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menuspam(prefix, l))
				break
case 'menusticker':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menusticker(prefix, l))
				break
case 'menutextmaker':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menutextm(prefix, l))
				break
case 'menurandom':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menurandom(prefix, l))
				break
case 'menuconvert':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menuconvert(prefix, l))
				break
case 'menuowner':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menuowner(prefix, l))
				break
case 'menuother':l = 1
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				textImg(require('./src/teks/help').menuother(prefix, l))
				break
				case 'listmenu':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
        let messageList = WAMessageProto.Message.fromObject({
            listMessage: WAMessageProto.ListMessage.fromObject({
                buttonText: `_~*LIST MENU ${namabot}*~_`,
                description: `*ALL MENU BOT ${namabot}*`,
                listType: 1,
                sections: [
                    {
                        title: namabot,
                        rows: [
 {title: 'Owner Command', descriptions: "For Owner Only", rowId:"#menuowner"},
 {title: 'Group Command', descriptions: "For Group Only", rowId:"#menugroup"},
 {title: 'Sticker Command', descriptions: "For Sticker Only", rowId:"#menusticker"},
 {title: 'Image Command', descriptions: "For Image Only", rowId:"#menuimage"},
 {title: 'Video Command', descriptions: "For Video Only", rowId:"#menuvideo"},
 {title: 'Hack Command', descriptions: "For Hack Only", rowId:"#menuhack"},
 {title: 'Helper Command', descriptions: "For Helper Only", rowId:"#menuhelper"},
 {title: 'Audio Command', descriptions: "For Audio Only", rowId:"#menuaudio"},
 {title: 'Downloader Command', descriptions: "For Download Only", rowId:"#menudownload"},
 {title: 'Game Command', descriptions: "For Game Only", rowId:"#menugame"},
 {title: 'News Command', descriptions: "For News Only", rowId:"#menunews"},
 {title: 'Search Command', descriptions: "For Search Only", rowId:"#menusearch"},
 {title: 'Image Maker Command', descriptions: "For Image Maker Only", rowId:"#menuimagemaker"},
 {title: 'Anime Command', descriptions: "For Anime Only", rowId:"#menuanime"},
 {title: 'Sholawat Command', descriptions: "For Sholawat Only", rowId:"#menusholawat"},
 {title: 'Islam Fiture', descriptions: "For Islam Only", rowId:"#menuislami"},
 {title: 'Spammer Command', descriptions: "For Spammer Only", rowId:"#menuspammer"},
 {title: 'Text Maker Command', descriptions: "For Text Maker Only", rowId:"#menutextmaker"},
 {title: 'Random Command', descriptions: "For Random Only", rowId:"#menurandom"},
 {title: 'Convert Command', descriptions: "For Convert Only", rowId:"#menuconvert"},
 {title: 'Other Command', descriptions: "For Other Only", rowId:"#menuother"},
]
                    }
                ]
            })
        })
        let waMessageList = await benny.prepareMessageFromContent(from, messageList, {quoted: ben})
       benny.relayWAMessage(waMessageList)
    }
	break
	case 'ceklolkey':{
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
		let lokey = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${arg}`)
		if (lokey.status === 200) {
			reply(JSON.stringify(lokey, null, 2))
			lukey.push(arg)
			fs.writeFileSync('./src/lolkey.json', JSON.stringify(lukey))
		} else {
			reply(JSON.stringify(lokey, null, 2))
		}
	}
		break
	case 'cekxkey':
	case 'cekxteamkey':{
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
		let xkey = JSON.parse(fs.readFileSync('./src/xteamkey.json'))
		let lokey = await fetchJson(`https://xteam.xyz/cekey?APIKEY=${arg}`)
		if (lokey.code === 200) {
			reply(JSON.stringify(lokey, null, 2))
			xkey.push(arg)
			fs.writeFileSync('./src/xteamkey.json', JSON.stringify(xkey))
		} else {
			reply(JSON.stringify(lokey, null, 2))
		}
	}
		break
		case 'sendfsize':{
		if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
		if (!isQuotedMedia) return reply('Reply Media!')
			if (arg.split('|')[0] && arg.split('|')[1] && arg.includes('@g.us') && ben.message.conversation) {
let sz = await downloadM()
let stc = await benny.prepareMessage('0@s.whatsapp.net', fs.readFileSync(sz), m.quoted.mtype)
stc.message[m.quoted.mtype].fileLength = '9'.repeat(Number(arg.split('|')[1]))
stc.key.remoteJid = String(arg.split('|')[0])
stc.participant = botNumber
benny.relayWAMessage(stc)
			} else if (arg.split('|')[0] && arg.split('|')[1] && !arg.includes('@g.us') && ben.message.conversation) {
				let bodox = new RegExp('[-+/ +/()]', 'gi')
				let ks = arg.split('|')[0].replace(bodox, '')+'@s.whatsapp.net'
let sz = await downloadM()
let stc = await benny.prepareMessage('0@s.whatsapp.net', fs.readFileSync(sz), m.quoted.mtype)
stc.message[m.quoted.mtype].fileLength = '9'.repeat(Number(arg.split('|')[1]))
stc.key.remoteJid = ks
benny.relayWAMessage(stc)
			} else if (arg.split('|')[0] && arg.split('|')[1] && ben.message.extendedTextMessage) {
let sz = await downloadM()
let stc = await benny.prepareMessage('0@s.whatsapp.net', fs.readFileSync(sz), m.quoted.mtype)
stc.message[m.quoted.mtype].fileLength = '9'.repeat(Number(arg.split('|')[1]))
stc.key.remoteJid = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
benny.relayWAMessage(stc)
			} else if (arg && !arg.includes('|') && ben.message.extendedTextMessage) {
let sz = await downloadM()
let stc = await benny.prepareMessage('0@s.whatsapp.net', fs.readFileSync(sz), m.quoted.mtype)
stc.message[m.quoted.mtype].fileLength = '9'.repeat(Number(arg))
stc.key.remoteJid = m.quoted.sender
benny.relayWAMessage(stc)
			}
		}
break
		case 'fsize':{
		if (!isQuotedMedia) return reply('Reply Media!')
let sz = await downloadM()
let stc = await benny.prepareMessage('0@s.whatsapp.net', fs.readFileSync(sz), m.quoted.mtype)
stc.message[m.quoted.mtype].fileLength = arg
stc.key.remoteJid = from
benny.relayWAMessage(stc)
		}
break
case 'antibuggc':
if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	if (arg === 'on') {
		antibuggc.push(from)
		fs.writeFileSync('./src/antibuggc.json', JSON.stringify(antibuggc))
		reply('*Done!*')
	} else if (arg === 'off') {
		let anbug = antibuggc.indexOf(from)
		antibuggc.splice(anbug, 1)
		fs.writeFileSync('./src/antibuggc.json', JSON.stringify(antibuggc))
		reply('*Done!*')
	} else {
		reply('*Pilih on atau off!*')
	}
	break
	case 'cekvhkey':
	case 'cekvhtearkey':{
		let vhkey = JSON.parse(fs.readFileSync('./src/vhkey.json'))
		let lokey = await fetchJson(`https://xteam.xyz/cekey?APIKEY=${arg}`)
		if (lokey.code === 200) {
			reply(JSON.stringify(lokey, null, 2))
			vhkey.push(arg)
			fs.writeFileSync('./src/xteamkey.json', JSON.stringify(vhkey))
		} else {
			reply(JSON.stringify(lokey, null, 2))
		}
	}
		break
	case 'bcproduct':
	imagej = (await benny.prepareMessageMedia(await getBuffer(await getPP(sender)),'imageMessage')).imageMessage
	alot = await benny.chats.all()
	teks1 = `BROADCAST PRODUCT*`
	teks2 = arg
	for (let i = 0; i < alot.length; i++) {
		await sleep(1000)
	sendMessageFromContent(alot[i].jid,{"productMessage":{
"product":{
"productImage":imagej,
"productImageCount": 1,
"title": teks1,
"description": teks2, 
"currencyCode": "IDR",
"priceAmount1000": 200000000,
"productId": "150453297177375"
},
"businessOwnerJid": benny.user.jid}}, {quoted: ben, contextInfo:{mentionedJid: [sender]}})
	}
break
case 'manuk':
case 'menu':
case 'help':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (simple === false) {
		if (simple == false)  menunye = `${await menuben()}

${require('./src/teks/help').help(prefix, l, pushname)}`
 ppimg = await getPP(sender)
gambar = await getBuffer(ppimg)
gbutsan = [
  {buttonId: '#botstats', buttonText: {displayText: '✓ BOT INFO'}, type: 'RESPONSE'},
  {buttonId: '#owner', buttonText: {displayText: 'ꪵ ⃝⃕ 進 OWNER'}, type: 'RESPONSE'},
  {buttonId: '#speed', buttonText: {displayText: '✘ ISIVININI'}, type: 'RESPONSE'}
]
mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, jpegThumbnail: setthumb}, location, {quoted: ben, thumbnail: setthumb})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
    contentText: menunye,
    footerText: 'Di Sponsor Oleh @0 Resmi\n*Powered By api.ashborns.site*',
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben, contextInfo:{externalAdReply:{title: namabot, body: '', previewType: 'PHOTO', thumbnail: setthumb, sourceUrl: 'https://wa.me/6285709331584?text=Assalamualaikum'}, mentionedJid: [sender, '0@s.whatsapp.net']}})
				} else if (simple === true) {
if (simple == true)  menunye = `${await menuben()}

${require('./src/teks/help').simple(prefix, l, pushname)}`
ppimg = await getPP(sender)
gambar = await getBuffer(ppimg)
gbutsan = [
  {buttonId: '#sc', buttonText: {displayText: '✓ SCRIPT'}, type: 'RESPONSE'},
  {buttonId: '#owner', buttonText: {displayText: 'ꪵ ⃝⃕ 進 OWNER'}, type: 'RESPONSE'},
  {buttonId: '#speed', buttonText: {displayText: '✘ ISIVININI'}, type: 'RESPONSE'}
]
mhan = await benny.prepareMessage('0@s.whatsapp.net', {name: namabot, jpegThumbnail: gambar}, location, {quoted: ben, thumbnail: gambar})
 gbuttonan = {
locationMessage: mhan.message.locationMessage,
    contentText: menunye,
    footerText: pushname,
    buttons: gbutsan,
    headerType: 'LOCATION'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben, contextInfo:{externalAdReply:{title: namabot, body: '', previewType: 'PHOTO', thumbnail: setthumb, sourceUrl: 'https://wa.me/6285709331584?text=Assalamualaikum'}, mentionedJid: [sender]}})
	} else if (simple === 'troli') {
		 menunye =  menunye = `${await menuben()}

${require('./src/teks/help').help(prefix, l, pushname)}`
		spt = WAMessageProto.Message.fromObject({
						orderMessage: WAMessageProto.OrderMessage.fromObject({
							sellerJid: numbernye,
							itemCount: 999,
							orderTitle: `*Hai ${pushname}* ? `,
							thumbnail: await getBuffer(await getPP(sender)),
							status: 0,
						    surface: 0,
							message: menunye
						})
					});
					let scd = benny.prepareMessageFromContent(from, spt, {quoted: ben, contextInfo:{mentionedJid: [sender]}});
					benny.relayWAMessage(scd)
	} else if (simple === 'document') {
		 menunye = `${await menuben()}

${require('./src/teks/help').help(prefix, l, pushname)}`
let ani = await getBuffer(`https://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolkey}&img=${await ppWel(sender)}`)
mhan = await benny.prepareMessage('0@s.whatsapp.net', ani, document, {thumbnail: await getBuffer(await getPP(sender)), mimetype: 'application/pdf', filename: `*Hai kak ${pushname}*`})
mhan.message.documentMessage.fileLength = '9899999999'
mhan.message.documentMessage.pageCount = 999
mhan.key.remoteJid = from
	gbutsan = [
  {buttonId: '#sc', buttonText: {displayText: 'SCRIPT BOT'}, type: 'RESPONSE'},
  {buttonId: '#owner', buttonText: {displayText: 'OWNER'}, type: 'RESPONSE'},
  {buttonId: '#listmenu', buttonText: {displayText: 'LIST MENU'}, type: 'RESPONSE'}
]
 gbuttonan = {
 documentMessage: mhan.message.documentMessage,
    contentText: menunye,
    footerText: pushname,
    buttons: gbutsan,
    headerType: 'DOCUMENT'
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben, contextInfo:{externalAdReply:{title: namabot, body: '', previewType: 'PHOTO', thumbnail: setthumb, sourceUrl: 'https://wa.me/6285709331584?text=Assalamualaikum'}, mentionedJid: [sender]}})
	
	} else if (simple === 'product') {
		 menunye =  menunye = `${await menuben()}

${require('./src/teks/help').help(prefix, l, pushname)}`
		imagej = (await benny.prepareMessageMedia(await getBuffer(await getPP(sender)),'imageMessage')).imageMessage
sendMessageFromContent(from,{"productMessage":{
"product":{
"productImage":imagej,
"productImageCount": 1,
"title": `Hai kak, ${pushname} ${decodeURI('%F0%9F%91%8B')}`,
"description": menunye, 
"currencyCode": "IDR",
"priceAmount1000": 200000000,
"productId": "150453297177375"
},
"businessOwnerJid": benny.user.jid}}, {quoted: ben, contextInfo:{mentionedJid: [sender]}})
	} else if (simple === 'video') {
		 menunye =  menunye = `${await menuben()}

${require('./src/teks/help').help(prefix, l, pushname)}`
 ran = getRandom('.mp4')
 fs.writeFileSync(`./${sender}.jpg`, await getBuffer(await getPP(sender)))
 exec(`ffmpeg -loop 1 -i ./${sender}.jpg -i ./src/audio/iri.mp3 -shortest -c:a copy ${ran}`, (err) => {
benny.sendMessage(from, fs.readFileSync(ran), video, {quoted: ben, caption: menunye, contextInfo:{mentionedJid: [sender]}, mimetype: 'video/mp4'})
fs.unlinkSync(`./${sender}.jpg`)
fs.unlinkSync(ran)
 })
	} else if (simple === 'gif') {
		 menunye =  menunye = `${await menuben()}

${require('./src/teks/help').help(prefix, l, pushname)}`
 ran = getRandom('.mp4')
 fs.writeFileSync(`./${sender}.jpg`, await getBuffer(await getPP(sender)))
 exec(`ffmpeg -loop 1 -i ./${sender}.jpg -i ./src/audio/iri.mp3 -shortest -c:a copy ${ran}`, (err) => {
benny.sendMessage(from, fs.readFileSync(ran), video, {quoted: ben, caption: menunye, contextInfo:{mentionedJid: [sender]}, mimetype: 'video/gif'})
fs.unlinkSync(`./${sender}.jpg`)
fs.unlinkSync(ran)
 })
	} else if (simple === 'image') {
		 menunye =  menunye = `${await menuben()}

${require('./src/teks/help').help(prefix, l, pushname)}`
benny.sendMessage(from, await getBuffer(await getPP(sender)), image, {quoted: ben, caption: menunye, contextInfo:{mentionedJid: [sender]}})
	}
	  break
	  case 'mode':
	  if (!ben.key.fromMe && !isOwner) return
	  gbutsan = [
  {buttonId: '#public', buttonText: {displayText: 'PUBLIC'}, type: 'RESPONSE'},
  {buttonId: '#self', buttonText: {displayText: 'SELF'}, type: 'RESPONSE'}
]
 gbuttonan = {
    contentText: '*[ MODE BOT ]*',
    footerText: pushname,
    buttons: gbutsan,
    headerType: 1
}
		benny.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: ben})
		break
	  case 'al-fatihah':
	  
	  anu = await fetchJson(`https://api.zeks.me/api/quran?no=1&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 1\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/1?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'cekserial':
                
                if (arg.length < 1) return reply('Serialnya mana?')
				reply(`Search ${serials}`)
			let serials = arg
                if (register.checkRegisteredUserFromSerial(arg, _registered)) {
                    const names = register.getRegisteredNameFromSerial(serials, _registered)
                    const ages = register.getRegisteredAgeFromSerial(serials, _registered)
                    const timec = register.getRegisteredTimeFromSerial(serials, _registered)
                    const idi = register.getRegisteredIdFromSerial(serials, _registered)
					try {
					ppimg = await benny.getProfilePicture(idi)
				} catch {
					ppimg = 'https://telegra.ph/Benny-10-28'
				}
				buffer = await getBaper(ppimg)
					teks = `*Di Temukan!!*\n*Berikut Data User*\n> *Nama:* ${names}\n> *Umur:* ${ages}\n> *Tag:* @${idi.split('@')[0]}\n> *Nomor:* ${idi.replace('@s.whatsapp.net', '')}\n> *ID:* wa.me/${idi.replace('@s.whatsapp.net', '')}\n> *Waktu Daftar:* ${timec}\n> *Serial:* ${serials}\n`
                    benny.sendMessage(from, buffer, image, {contextInfo: {mentionedJid: [idi]}, quoted: ben, caption: teks})
                } else {
                    reply(`Akun dengan serial: *${serials}* tidak ditemukan!`)
                }
            break 
	  case 'al-baqarah':
	  if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	  anu = await fetchJson(`https://api.zeks.me/api/quran?no=2&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 2\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/2?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-imran':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=3&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 3\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/3?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'an-nisa':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=4&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 4\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/4?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-maidah':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=5&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 5\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/5?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-anam':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=6&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 6\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/6?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-araf':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=7&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 7\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/7?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-anfal':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=8&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 8\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/8?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'at-taubah':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=9&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 9\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/9?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'yunus':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=10&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 10\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/10?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'hud':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=11&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 11\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/11?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'yusuf':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=12&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 12\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/12?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'ar-raad':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=13&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 13\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/13?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'ibrahim':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=14&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 14\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/14?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-hijr':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=15&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 15\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/15?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'q': 
    if (!ben.quoted) return reply('reply pesan!')
    let qse = benny.serializeM(await ben.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(from, true)
break
case 'copy':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
    if (!ben.quoted) return reply('reply pesan!')
    ben.quoted.copyNForward
break
case 'an-nahl':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=16&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 16\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/16?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-isra':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=17&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 17\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-kahfi':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=18&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 18\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'maryam':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=19&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 19\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'taha':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=20&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 20\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-anbiya':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=21&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 21\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-qariah':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=101&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 101\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/101?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'at-takasur':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=102&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 102\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/102?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-ashr':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=103&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 103\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/103?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-humazah':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=104&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 104\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/104?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-fil':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=105&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 105\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/105?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'antihidetag':
case 'antiht':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	if (arg === 'on') {
		if (isAntiHT) return reply('Sudah nyala!')
		antihidetag.push(from)
		fs.writeFileSync('./src/antihidetag.json', JSON.stringify(antihidetag))
		reply('*Done!*')
	} else if (arg === 'off') {
		if (!isAntiHT) return reply('Belum nyala!')
		let antiht = antihidetag.indexOf(from)
		antihidetag.splice(antiht, 1)
		fs.writeFileSync('./src/antihidetag.json', JSON.stringify(antihidetag))
		reply('*Done!*')
	} else {
		reply('*Pilih on atau off!*')
	}
	break
case 'quraisy':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=106&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 106\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/106?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-maun':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=21&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 107\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/107?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'panggil':	if (!isOwner && !ben.key.fromMe) return
					var gh = body.slice(8)
			var okp = gh.split('|')[1]
			var okg = gh.split('|')[2]
			if (Number(okg) >= 50) return reply('Kebanyakan!')
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					for (let i = 0; i < okg; i++) {
						benny.sendMessage(from, `${okp} @${mentioned.split('@')[0]}`, MessageType.text, {contextInfo: { mentionedJid: [mentioned]}})
						}
						break
						case 'spamtag':	if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
						if (isGroup && budy.length < 13) {
							teks = Number(args[0])
							teks1 = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
							gmem = []
for (let o of groupMembers) {
	gmem.push(o.jid)
}
if (!Number(teks)) return reply('Jumlah harus berupa angka!')
if (Number(teks) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < teks; i++) {
	  benny.sendMessage(from, teks1, MessageType.text, {contextInfo: {mentionedJid: gmem}})
	  }
			} else if (isGroup && budy.length > 13) {
teks = body.slice(9)
teks1 = teks.split('|')[0]
teks2 = teks.split('|')[1]
gmem = []
for (let o of groupMembers) {
	gmem.push(o.jid)
}
if (!teks1) teks1 = '-'
if (!Number(teks2)) return reply('Jumlah harus berupa angka!')
if (Number(teks2) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < teks2; i++) {
	  benny.sendMessage(from, teks1, MessageType.text, {contextInfo: {mentionedJid: gmem}})
	  }
						} else if (!isGroup) {
							bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(9)
						bodo1 = bodo.split('|')[0]
						bodo2 = bodo.split('|')[1]
				teks = bodo1.replace(bodom, '')
				orange = `${teks}@s.whatsapp.net`
		if (!Number(bodo2)) return reply('Jumlah harus berupa angka!')
if (Number(bodo2) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < bodo2; i++) {
	  benny.sendMessage(from, `@${orange.split('@')[0]}`, MessageType.text, {contextInfo: {mentionedJid: [orange]}})
	  }
						}			
	  break
	  case 'spamto':
	  if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (!isOwner && !ben.key.fromMe) return
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
oi3 = teks.split('|')[2]
if (Number(oi3) >= 50) return reply('Kebanyakan!')
if (!Number(oi3)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi3; i++) {
	  benny.sendMessage(oi1, `${oi2}`, MessageType.text, {quoted: ben})
	  }
	  break
case 'spam':
if (!isOwner && !ben.key.fromMe) return
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(6)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  benny.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  benny.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  benny.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  benny.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	delb = await benny.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  benny.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
case 'al-kausar':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=108&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 108\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/108?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-kafirun':

anu = await fetchJson(`https://api.zeks.me/api/quran?no=109&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 109\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/109?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'an-nashr':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=110&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 110\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/110?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-lahab':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=111&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 111\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/111?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-ikhlas':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=112&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 112\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/112?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'al-falaq':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=113&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 113\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/113?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
case 'an-nas':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
anu = await fetchJson(`https://api.zeks.me/api/quran?no=114&apikey=YunitaGanteng`)
				   quran = `Surah Al-Qur\`an Nomor: 114\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}
reply(mess.wait)
buffer = await getBaper(`http://api.lolhuman.xyz/api/quran/audio/114?apikey=${lolkey}`)
reply(quran.trim())
benny.sendMessage(from, buffer, audio, {quoted: ben, mimetype: 'audio/mp4', ptt: true})
break
	case 'tomp3':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
    benny.updatePresence(from, Presence.composing) 
	if (!isQuotedVideo) return reply('itu video bruh?:V')
	reply(mess.wait)
							encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await benny.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp4')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return reply('Yahh emrror bruh:(')
	buffer = fs.readFileSync(ran)
    benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: ben})
	fs.unlinkSync(ran)
	})
	break	
	case 'vntovid':
	case 'audtovid':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
    benny.updatePresence(from, Presence.composing) 
	if (!isQuotedAudio) return reply('itu audio bruh?:V')
	reply(mess.wait)
							encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await benny.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp4')
	ranw = getRandom('.jpg')
	buf = await getBuffer(await getPP(sender))
	fs.writeFileSync(ranw, buf)
	exec(`ffmpeg -loop 1 -i ${ranw} -i ${media} -shortest -c:a copy ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return reply('Yahh emrror bruh:(')
	buffer = fs.readFileSync(ran)
    benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben})
	fs.unlinkSync(ran)
	})
	break
case 'blackpink':case 'neon':case 'greenneon':case 'advanceglow':case 'futureneon':case 'sandwriting':case 'sandsummer':case 'sandengraved':case 'metaldark':case 'neonlight':case 'holographic':case 'text1917':case 'minion':case 'deluxesilver':case 'newyearcard':case 'bloodfrosted':case 'halloween':case 'jokerlogo':case 'fireworksparkle':case 'natureleaves':case 'bokeh':case 'toxic':case 'strawberry':case 'box3d':case 'roadwarning':case 'breakwall':case 'icecold':case 'luxury':case 'cloud':case 'summersand':case 'horrorblood':case 'thunder2':case 'christmas':   if (arg.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Fardan Ganteng`)
                  if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
                      buffer = await getBaper(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${encodeURIComponent(arg)}`)
                    benny.sendMessage(from, buffer, image, {quoted: ben})
                    break
	
case 'ttp': // Credits Ramlan ID
		if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
		                    pngttp = './temp/ttp.png'
							webpng = getRandom('.webp')
							const ttptext = body.slice(5)
							exif.create(namabot, '')
							fetch(`https://api.areltiyan.xyz/sticker_maker?text=${encodeURIComponent(ttptext)}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							exec(`webpmux -set exif ./src/sticker/data.exif ${webpng} -o ${webpng}`, async (err) => {
							buffer = fs.readFileSync(webpng)
							benny.sendMessage(from, buffer, sticker, { quoted: ben})
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							})
							});
							break
							case 'ttp2':   if (arg.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Fardan Ganteng`)
                    teks = body.slice(6)
                    buffer = `http://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURIComponent(teks)}`
                    anu = await getBuffer(buffer)
                    benny.sendMessage(from, anu, sticker, {quoted: ben})
                    break
					case 'ttp3':   if (arg.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Fardan Ganteng`)
                    benny.sendMessage(from, await getBuffer(`http://api.lolhuman.xyz/api/ttp2?apikey=${lolkey}&text=${encodeURIComponent(arg)}`), sticker, {quoted: ben})
                    break
					case 'ttp4':   if (arg.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Fardan Ganteng`)
                    teks = body.slice(6)
                    buffer = `http://api.lolhuman.xyz/api/ttp3?apikey=${lolkey}&text=${encodeURIComponent(teks)}`
                    sendStickerFromUrl(from, buffer, ben)
                    break
					case 'ttp5':   if (arg.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Fardan Ganteng`)
                    teks = body.slice(6)
                    buffer = `http://api.lolhuman.xyz/api/ttp4?apikey=${lolkey}&text=${encodeURIComponent(teks)}`
                    sendStickerFromUrl(from, buffer, ben)
                    break
					case 'ttp6':   if (arg.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Fardan Ganteng`)
                    teks = body.slice(6)
                    buffer = `https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(teks)}`
                    sendStickerFromUrl(from, buffer, ben)
                    break
					case 'ttp7':   if (arg.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Fardan Ganteng`)
                    teks = body.slice(6)
					teks1 = teks.split('|')[0]
					teks2 = teks.split('|')[1]
                    buffer = `https://api.vhtear.com/textmaker?text=${encodeURIComponent(teks1)}&warna=${teks2}&apikey=${vhtearkey}`
                    sendStickerFromUrl(from, buffer, ben)
break
case 'ttp8':
media = await getBaper(`https://cililitan2.herokuapp.com/api/texttopng2?teks=${encodeURIComponent(body.slice(6))}`)
fs.writeFileSync('ttp8.png', media)
							ran = getRandom('.webp')
							exif.create(namabot, '')
							await ffmpeg('ttp8.png')
									.input('ttp8.png')
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync('ttp8.png')
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ${ran} -o ${ran}`, async (err) => {
											if (err) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
											fs.unlinkSync('ttp8.png')	
											fs.unlinkSync(ran)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(ran)
									break
case 'gura':
if (!q) return reply(`Example : ${prefix}${command} firman Ganteng`)
reply(`    📩 𝑷𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕 𝒇𝒐𝒓 𝒂 𝒘𝒉𝒊𝒍𝒆, 𝒕𝒉𝒆 𝒓𝒆𝒒𝒖𝒆𝒔𝒕 𝒇𝒐𝒓.  `)
let textpro2 = await getBuffer(`https://zynfx.herokuapp.com/api/canvas/gura?teks=${q}`)
benny.sendMessage(from, textpro2, image, {quoted: ben, caption: `🌹 \`\`\`𝑪𝒐𝒎𝒎𝒂𝒏𝒅 𝑬𝒙𝒆𝒄𝒖𝒕𝒆𝒅:${command}\`\`\`\n\`\`\`𝑮𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚 wa.me/6285709331584\`\`\``})
break
                case 'shadow':case 'cup':case 'romance':case 'smoke':case 'burnpaper':case 'lovemessage':case 'undergrass':case 'love':case 'coffe':case 'woodheart':case 'woodenboard':case 'summer3d':case 'wolfmetal':case 'nature3d':case 'underwater':case 'golderrose':case 'summernature':case 'letterleaves':case 'glowingneon':case 'fallleaves':case 'flamming':case 'harrypotter':case 'carvedwood':   
                	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
                	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
                teks = arg ? arg : '-'
					let cok = `http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${teks}`
			benny.sendFileFromUrl(from, cok, `${command}.jpg`, `*${command.toUpperCase()}:* ${arg}`)
                    break

                    // Ephoto 360 //
                case 'wetglass':case 'multicolor3d':case 'watercolor':case 'luxurygold':case 'galaxywallpaper':case 'lighttext':case 'beautifulflower':case 'puppycute':case 'royaltext':case 'heartshaped':case 'birthdaycake':case 'galaxystyle':case 'hologram3d':case 'greenneon':case 'glossychrome':case 'greenbush':case 'metallogo':case 'noeltext':case 'glittergold':case 'textcake':case 'starsnight':case 'wooden3d':case 'textbyname':case 'writegalacy':case 'galaxybat':case 'snow3d':case 'birthdayday':case 'goldplaybutton':case 'silverplaybutton':case 'freefire':  
                	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
                	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
                  teks = arg ? arg : '-'
                    let coka = `http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${teks}`
				benny.sendFileFromUrl(from, coka, `${command}.jpg`, `*${command.toUpperCase()}:* ${arg}`)
                    break							
case 'getsticker':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
	namastc = body.slice(12)
	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
	benny.sendMessage(from, result, sticker, {quoted: ben})
	break
case 'sticktag':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
if (!isGroup) return reply(mess.only.group)
if (isQuotedSticker) {
	members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, anu, sticker, {contextInfo: {"mentionedJid": members_id}})
}
	break
	case 'imagetag':
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
if (!isGroup) return reply(mess.only.group)
if ((isMedia || isQuotedImage) && args.length === 0) {
	anu = body.slice(10)
	members_id = []
		for (let mem of groupMembers){
					members_id.push(mem.jid)
					}
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				ano = await imageToBase64(media)
				buffer = await Buffer.from(ano, 'base64')
				benny.sendMessage(from, buffer, image, {contextInfo: {"mentionedJid": members_id}})
}
	break
	case 'vntag':
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
		if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await benny.downloadAndSaveMediaMessage(encmedia)
					members_id = []
					for (let b of groupMembers) {
						members_id.push(b.jid)
					}
					hah = fs.readFileSync(media)
						benny.sendMessage(from, hah, audio, {contextInfo: {"mentionedJid": members_id}, mimetype: 'audio/mp4', ptt: true, quoted: ben})
						fs.unlinkSync(media)
				break
case 'stickerlist':
case 'liststicker':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	teks = 'Sticker List :\n'
	anu = fs.readdirSync('./src/sticker/')
	for (let awokwkwk of anu) {
		teks += `- ${awokwkwk.split('.webp')[0]}\n`
	}
	teks += `Total : ${anu.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": setiker}})
	break
	case 'delsticker':
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	tex = body.slice(12)+'.webp'
	anu = fs.readdirSync('./src/sticker/')
	for (let o of anu) {
	if (o.toLowerCase().includes(tex)) {
		fs.unlinkSync(`./src/sticker/${tex}`)
	}
	}
	break
	case 'stickerdb':
	anu = fs.readdirSync('./src/sticker/')
	for (let i = 0; i < anu.length; i++) {
		if (anu && anu[i].includes('webp')) {
			await sleep(3000)
			benny.sendMessage(from, fs.readFileSync(`./${anu[i]}`), sticker, {quoted: ben})
		}
	}
	break
case 'addsticker':if (!isQuotedSticker) return reply('Reply stiker nya')
	svst = body.slice(12)
	if (!svst) return reply('Nama sticker nya apa?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	setiker.push(`${svst}`)
	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
	benny.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: ben})
	break
				case 'runbot':exec(`node index ${args[0]}`, (err, stdout) => {
					if (err) return benny.sendMessage(from, `Error:\n${err}`, {quoted: ben})
					if (stdout) {
						benny.sendMessage(from, stdout, {quoted: ben})
					}
				})
				break
case 'addvn':if (!isQuotedAudio) return reply('Reply vnnya blokk!')
	svst = body.slice(7)
	if (!arg) return reply('Nama audionya apa?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	audionye.push(`${svst}`)
	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
	benny.sendMessage(from, `Sukses Menambahkan Vn\nCek dengan cara ${prefix}listvn`, MessageType.text, {quoted: ben})
	break
	case 'delvn':
	tex = arg+'.mp3'
	anu = fs.readdirSync('./src/audio')
	for (let o of anu) {
	if (o.toLowerCase().includes(tex)) {
		fs.unlinkSync(`./src/audio/${tex}`)
	}
	}
	await reply('*Done!*')
	break
case 'getvn':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	namastc = body.slice(7)
	buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
	benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: ben, ptt: true})
	break
case 'listvn':
case 'vnlist':

	teks = 'List Vn:\n'
	anu = fs.readdirSync('./src/audio/')
	for (let awokwkwk of anu) {
	teks += `- ${awokwkwk.split('.mp3')[0]}\n`
	}
	teks += `Total : ${anu.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": audionye}})
	break
case 'addimage':if (!isQuotedImage) return reply('Reply imagenya blokk!')
	svst = body.slice(10)
	if (!svst) return reply('Nama imagenya apa su?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	imagenye.push(`${svst}`)
	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
	benny.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, {quoted: ben})
	break
case 'getimage':

	namastc = body.slice(10)
	buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
	benny.sendMessage(from, buffer, image, {quoted: ben, caption: `*Result From Database* : ${namastc}.jpeg`})
	break
case 'imagelist':
case 'listimage':

	teks = 'List Video:\n'
	for (let awokwkwk of imagenye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${imagenye.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": imagenye}})
	break
case 'addvid':if (!isQuotedVideo) return reply('Reply videonya blokk!')
	svst = body.slice(8)
	if (!svst) return reply('Nama videonya apa su?')
	boij = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await benny.downloadMediaMessage(boij)
	videonye.push(`${svst}`)
	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
	benny.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, {quoted: ben})
	break
case 'getvid':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	namastc = body.slice(8)
	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
	benny.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: ben})
	break
case 'listvideo':
case 'videolist':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	teks = 'List Video:\n'
	for (let awokwkwk of videonye) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `Total : ${videonye.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": videonye}})
	break
case 'howax':
case 'hoax':
case 'howak':
case 'hoak':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	benny.updatePresence(from, Presence.composing) 
	data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`)
	teks = '--------------------\n\n'
	for (let i of data.result) {
		teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n*Tag* : ${i.tag}\n\n--------------------\n`
	}
	reply(teks.trim())
	break
case 'deface':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (arg.length < 1) return reply('Mana link nya!')
if (!isUrl(args[0])) return reply('Link tidak valid!')
var gas = body.slice(8)
try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://telegra.ph/Benny-10-28'
				}
					var imgbb = await getBaper(ppimg)
benny.sendMessage(from, {text: gas, matchedText: gas, canonicalUrl: gas, description: `Heker abiezz`, title: `Hacked by ./${pushname}`, jpegThumbnail: imgbb}, 'extendedTextMessage', {detectLinks: false})
					break
case 'hekweb':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (arg.length < 1) return reply('Mana link nya!')
if (!isUrl(args[0])) return reply('Link tidak valid!')
var gas = body.slice(8)
if (isQuotedImage) {
					var linknya = gas.split("|")[0];
					var titlenya = gas.split("|")[1];
					var descnya = gas.split("|")[2];
					var jadinya = gas.split("|")[3];
					var imgbb = require('imgbb-uploader')
			 		run = getRandom('.jpeg')
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(encmedia)
ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
benny.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `${jadinya}`, description: `${descnya}`, title: `${titlenya}`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
} else if (isQuotedSticker) {
	var linknya = body.slice(8)
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, {text: `${linknya}`, matchedText: `${linknya}`, canonicalUrl: `https://youtube.com/c/FaxBotz`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: anu}, 'extendedTextMessage', {detectLinks: false})
			} else if (!isQuotedImage) {
				try {
					ppimg = await benny.getProfilePicture(sender)
				} catch {
					ppimg = 'https://telegra.ph/Benny-10-28'
				}
				ddatae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi,''))
				benny.sendMessage(from, {text: `${gas}`, matchedText: `${gas}`, canonicalUrl: `${gas}`, description: `Hacked by ${pushname}`, title: `Terhemked :v`, jpegThumbnail: ddatae}, 'extendedTextMessage', {detectLinks: false})
			}
break
case 'suratto':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
			if (arg.split('|')[0] && arg.split('|')[1] && ben.message.conversation) {
				if (arg.split('|')[0].startsWith('08')) return reply(`Salah!\nContoh: ${prefix}${command}suratto ${buattag}`)
				let bodox = new RegExp('[-+/ +/()]', 'gi')
				let ks = arg.split('|')[0].replace(bodox, '')+'@s.whatsapp.net'
				let janxk = `              *[ SURAT ]*\n\nSelamat anda telah mendapatkan surat dari @${sender.split('@')[0]}\n\nIsi surat: ${arg.split('|')[1]}`
			benny.sendMessage(ks, janxk, text, {quoted: ben, contextInfo:{mentionedJid: parseMention(janxk)}})
			await benny.sendMessage(from, `Surat dengan pesan: ${arg.split('|')[1]} telah terkirim ke @${ks.split('@')[0]}!`, text, {quoted: ben, contextInfo:{mentionedJid: [ks]}})
			} else if (arg.split('|')[0] && arg.split('|')[1] && ben.message.extendedTextMessage) {
				let ks = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let janxk = `              *[ SURAT ]*\n\nSelamat anda telah mendapatkan surat dari @${sender.split('@')[0]}\n\nIsi surat: ${arg.split('|')[1]}`
			benny.sendMessage(ks, janxk, text, {quoted: ben, contextInfo:{mentionedJid: parseMention(janxk)}})
			await benny.sendMessage(from, `Surat dengan pesan: ${arg.split('|')[1]} telah terkirim ke @${ks.split('@')[0]}!`, text, {quoted: ben, contextInfo:{mentionedJid: [ks]}})
			} else if (arg && !arg.includes('|') && ben.message.extendedTextMessage) {
				let ks = ben.message.extendedTextMessage.contextInfo.participant
				let janxk = `              *[ SURAT ]*\n\nSelamat anda telah mendapatkan surat dari @${sender.split('@')[0]}\n\nIsi surat: ${arg}`
			benny.sendMessage(ks, janxk, text, {quoted: ben, contextInfo:{mentionedJid: parseMention(janxk)}})
			await benny.sendMessage(from, `Surat dengan pesan: ${arg} telah terkirim ke @${ks.split('@')[0]}!`, text, {quoted: ben, contextInfo:{mentionedJid: [ks]}})
			} else {
				reply(`Salah!\nPenggunaan: ${prefix}${command} 6285709331584|Woy`)
			}
			break
case 'imagetobase64':
case 'imgtobase64':

if (!isQuotedImage) return reply('Tag gambar nya!')
if ((isMedia || isQuotedImage) && args.length == 0) 
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
const ehgmedia = await benny.downloadAndSaveMediaMessage(ger)
const nihiya = await imageToBase64(ehgmedia)
	benny.sendMessage(from, nihiya, text, {quoted: ben})
	break
	case 'sticktobase64':
case 'stickertobase64':

if ((isMedia || isQuotedSticker) && args.length == 0) 
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const ehgmed = await benny.downloadAndSaveMediaMessage(ger)
plerlah = fs.readFileSync(ehgmed)
const niya = await plerlah.toString('base64')
	benny.sendMessage(from, niya, text, {quoted: ben})
	break
	case 'base64tostick':
case 'base64tosticker':
if (arg) {
anu = new Buffer.from(tekss, 'base64')
	benny.sendMessage(from, anu, sticker, {quoted: ben})
} else if (!arg) {
	anu = new Buffer.from(m.quoted.text, 'base64')
	benny.sendMessage(from, anu, sticker, {quoted: ben})
}
	break
	case 'base64toimage':
	case 'base64toimg':
	
	if (!arg) {
const base64nih = m.quoted.text
const nihiyak = new Buffer.from(base64nih, 'base64')
reply(mess.wait)
	benny.sendMessage(from, nihiyak, image, {quoted: ben, caption: 'Neh..'})
	} else if (arg) {
const base64nih = arg
const nihiyak = new Buffer.from(base64nih, 'base64')
reply(mess.wait)
	benny.sendMessage(from, nihiyak, image, {quoted: ben, caption: 'Neh..'})
	}
	break
case 'leave':

if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					setTimeout( () => {
				    benny.groupLeave(from)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply(`*Bye Group ${groupName}*`)
					}, 1000) // 1000 = 1s, 2500) // 1000 = 1s,
					setTimeout( () => {
					}, 0) // 1000 = 1s,
					reply('*Bot Akan keluar dalam hitungan 10 detik*')
	break
case 'ssweb':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (arg.length < 1) return reply('Urlnya mana om')
	teks = body.slice(7)
	reply(mess.wait)
						buffer = await getBaper(`https://hujanapi.herokuapp.com/api/ssweb?url=${teks}&apikey=${hujankey}`)
	benny.sendMessage(from, buffer, image, { quoted: ben, caption: 'Neh..'})
	break
case 'chatlist':
case 'cekchat':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	benny.updatePresence(from, Presence.composing)
	teks = `Total : ${totalchat.length}`
	reply(teks)
	break
case 'ping':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	const timestamp = speed();
	const latensi = speed() - timestamp
	exec(`neofetch --stdout`, (error, stdout, stderr) => {
	const child = stdout.toString('utf-8')
	const teks = child.replace(/Memory:/, "Ram:")
	reply(`*${teks}Speed: ${latensi.toFixed(4)} _Detik_*`)
	})
	break
	case 'stickquote':
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
    if (arg.length < 1) return reply('Teks nya mana??')
	teks = body.slice(12)
			teks1 = teks.split('|')[0]
			teks2 = teks.split('|')[1]
	reply(mess.wait)
	buffer = `https://terhambar.com/aw/qts/proses.php?kata=${teks1}&author=${teks2}&tipe=random&font=./font/font3.otf&size=90`
	sendStickerFromUrl(from, buffer, ben)
	break
	case 'stickquote2':
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
    if (arg.length < 1) return reply('Teks nya mana??')
	teks = body.slice(13)
			teks1 = teks.split('|')[0]
			teks2 = teks.split('|')[1]
	reply(mess.wait)
	buffer = `https://terhambar.com/aw/qts/proses.php?kata=${teks1}&author=${teks2}&tipe=random&font=./font/font2.ttf&size=90`
	sendStickerFromUrl(from, buffer, ben)
	break
	case 'stickquote3':
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
    if (arg.length < 1) return reply('Teks nya mana??')
	teks = body.slice(13)
			teks1 = teks.split('|')[0]
			teks2 = teks.split('|')[1]
	reply(mess.wait)
	buffer = `https://terhambar.com/aw/qts/proses.php?kata=${teks1}&author=${teks2}&tipe=random&font=./font/font1.otf&size=90`
	sendStickerFromUrl(from, buffer, ben)
	break
	case 'stickquote4':
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
    if (arg.length < 1) return reply('Teks nya mana??')
	teks = body.slice(13)
			teks1 = teks.split('|')[0]
			teks2 = teks.split('|')[1]
	reply(mess.wait)
	buffer = `https://terhambar.com/aw/qts/proses.php?kata=${teks1}&author=${teks2}&tipe=random&font=./font/font4.otf&size=90`
	sendStickerFromUrl(from, buffer, ben)
	break
	case 'quoteit':
	case 'qouteit':
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
    if (arg.length < 1) return reply('Teks nya mana??')
	const tqt = body.slice(9)
	reply(mess.wait)
				anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${tqt}&author=${encodeURIComponent(benny.user.name)}&tipe=random&font=./font/font4.otf&size=55`)
	buffer = await getBaper(anu.result)
	benny.sendMessage(from, buffer, image, {quoted: ben})
	break
case 'term':
if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
	const cmd = body.slice(6)
	exec(cmd, (err, stdout) => {
	if(err) return reply(`root@Self:~ ${err}`)
	if (stdout) {
	reply(stdout)
		}
	})
	break
case 'sulap':

				          var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", owgi)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = await fetchJson(`https://naufalhoster.xyz/textmaker/ryu_fighter?apikey=${naufalkey}&url=${teks}`)
										bofor = anu1ll.result.GIF
                                       sendStickerFromUrl(from, bofor)
                                             } else {
                                                 reply('Gunakan foto!')
                                          }           
                                          break
										  case 'pptrigger':

mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
				 try {
					anu = await benny.getProfilePicture(mentioned)
				} catch {
					anu = await getBaper('https://telegra.ph/Benny-10-28')
				}
				media = await getBaper(anu)
					datae = await imageToBase64(JSON.stringify(anu).replace(/\"/gi, ''))
					fs.writeFileSync('janckuk.jpeg', datae, 'base64')
					var imgbb = require('imgbb-uploader')
					data = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", 'janckuk.jpeg')
					 reply(mess.wait)
						console.log(data)
                                        sendStickerFromUrl(from, `https://cililitan2.herokuapp.com/api/triggered?url=${data.display_url}`)
                                          break
										  case 'adzan':
										  if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
											if (arg === 'on') {
												adzani.push(from)
												fs.writeFileSync('./src/adzan.json', JSON.stringify(adzani))
												reply('*Muadzin bot berhasil diaktifkan!*')
											} else if (arg === 'off') {
												let adzn = adzani.indexOf(from)
												adzani.splice(adzn, 1)
												fs.writeFileSync('./src/adzan.json', JSON.stringify(adzani))
												reply('*Muadzin bot berhasil dinonaktifkan!*')
											} else {
												reply('Pilih on atau off!')
											}
											break
case 'triggered2':          
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
                                         if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
                                        reply(mess.wait)
					owgi = await benny.downloadAndSaveMediaMessage(ger)
					anu = await uploadMedia(owgi)
                      sendStickerFromUrl(from, `https://cililitan2.herokuapp.com/api/triggered?url=${anu.display_url}`)
                                             } else if (isQuotedSticker) {
												 if (ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, async (err) => {
	reply(mess.wait)
	fs.writeFileSync('triger.png', fs.readFileSync(ran))
				anu = await uploadMedia('triger.png')
					console.log(anu)
                                        sendStickerFromUrl(from, `https://cililitan2.herokuapp.com/api/triggered?url=${anu.files[0].url}`)
				})
			} else {
                                                 reply('Gunakan foto!')
                                          }           
                                          break
									case 'sfire':				
									if (!isOwner && !ben.key.fromMe && !isPremium) return reply(mess.only.premium)
									if (isQuotedImage) {
anu = await downloadM()
ranc = getRandom('.mp4')
rano = getRandom('.webp')
let pel = await uploadMedia(anu)
buff = await getBuffer(`https://api.zeks.me/api/burning-image?apikey=ChOkYbOT6&image=${pel.files[0].url}`)
fs.writeFileSync(ranc, buff)
exec(`ffmpeg -i ${ranc} ${rano}`, async(err)=>{
	exif.create(namabot, '')
benny.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ben})
})
									} else if (isQuotedSticker) {
										anu = await downloadM()
ran = getRandom('.jpg')
ranc = getRandom('.mp4')
rano = getRandom('.webp')
exec(`ffmpeg -i ${anu} ${ran}`, async(err)=>{
let pel = await uploadMedia(ran)
buff = await getBuffer(`https://api.zeks.me/api/burning-image?apikey=ChOkYbOT6&image=${pel.files[0].url}`)
fs.writeFileSync(ranc, buff)
exec(`ffmpeg -i ${ranc} ${rano}`, async(err)=>{
	exif.create(namabot, '')
benny.sendMessage(from, fs.readFileSync(rano), sticker)
})
})
									} else {
										reply('Reply media!')
									}
                                          break
										  case 'deviceinfo':
									case 'alay': 		{
let teks = arg ? arg : m.quoted.text		
					reply(teks.replace(/[a-z]/gi, v => Math.random() > .5 ? v[['toLowerCase', 'toUpperCase'][Math.floor(Math.random() * 2)]]() : v).replace(/[abegiors]/gi, v => {
        if (Math.random() > .5) return v
        switch (v.toLowerCase()) {
            case 'a': return '4'
            case 'b': return Math.random() > .5 ? '8' : '13'
            case 'e': return '3'
            case 'g': return Math.random() > .5 ? '6' : '9'
            case 'i': return '1'
            case 'o': return '0'
            case 'r': return '12'
            case 's': return '5'
        }
    }))
					} break
									case 'halah':				
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await halah(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await halah(entah)
                    reply(imni)
									}
                    break
					case 'alay': 		{
let teks = arg ? arg : m.quoted.text		
					reply(teks.replace(/[a-z]/gi, v => Math.random() > .5 ? v[['toLowerCase', 'toUpperCase'][Math.floor(Math.random() * 2)]]() : v).replace(/[abegiors]/gi, v => {
        if (Math.random() > .5) return v
        switch (v.toLowerCase()) {
            case 'a': return '4'
            case 'b': return Math.random() > .5 ? '8' : '13'
            case 'e': return '3'
            case 'g': return Math.random() > .5 ? '6' : '9'
            case 'i': return '1'
            case 'o': return '0'
            case 'r': return '12'
            case 's': return '5'
        }
    }))
					} break
									case 'hilih':				
									if (arg.length > 1) {
                    imni = await hilih(arg)
                    reply(imni)
									} else {
                    imni = await hilih(m.quoted.text)
                    reply(imni)
									}
                    break
					case 'kapital':				
									if (arg.length > 1) {
                    entah = body.slice(9)
                    imni = entah.toUpperCase()
                    reply(imni)
									} else if (arg.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = entah.toUpperCase()
                    reply(imni)
									}
                    break
					case 'rumus':				
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
									if (!Number(args[1])) return reply('Nomor harus berupa angka!')
									if (args[0] == 'persegi') {
									     entah = args[1]
                    imni = await rumus.datar.keliling.persegi(entah, true)
					console.log(imni)
                    reply(imni) 
									} else if (args[0] == 'segitiga') {
										entah = body.slice
                    imni = await rumus.datar.keliling.segitiga(entah, true)
					console.log(imni)
                    reply(imni) 
									}
                    break
					
					case 'infonomor':	
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)			
									if (!Number(args[0])) return reply('Nomor harus berupa angka!')
									if (args[0].includes('-')) return reply(`Block nih contoh: ${prefix}infonomor 6285709331584`)
                    entah = body.slice(11)
                    imni = await infotlp.getOperator(entah)
					teks = `*Operator:* ${imni.operator}\n*Kartu:* ${imni.card}`
                    reply(teks)
                    break
					case 'bilangangka': case 'angkabilang':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!Number(args[0])) return reply('Angkanya mana?')
                    entah = body.slice(13)
                    imni = await angkab(entah)
                    reply(`*${imni}*`)
                    break
					case 'besarkecil':
teks = body.slice(12)
anu = teks.split("").map((chara, index) => index % 2 == 0 ? chara.toLowerCase() : chara.toUpperCase()).join("")
reply(anu) 
break
case 'totiff':
if (isQuotedImage) {
anu = await downloadM()
ran = getRandom('.tiff')
exec(`ffmpeg -i ${anu} ${ran}`, async(err)=> {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: ben})
})
}
break
		case 'topng':
if (isQuotedImage) {
anu = await downloadM()
ran = getRandom('.png')
exec(`ffmpeg -i ${anu} ${ran}`, async(err)=> {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: ben})
})
}
break
		case 'todng':
if (isQuotedImage) {
anu = await downloadM()
ran = getRandom('.dng')
exec(`ffmpeg -i ${anu} ${ran}`, async(err)=> {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: ben})
})
}
break
		case 'tojpg':
if (isQuotedImage) {
anu = await downloadM()
ran = getRandom('.jpg')
exec(`ffmpeg -i ${anu} ${ran}`, async(err)=> {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: ben})
})
}
break
case 'topdf':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (!isQuotedImage && !isQuotedSticker) return reply('Reply Image/Sticker!')
if (isQuotedImage) {
	anu = await downloadM()
	ano = await uploadMedia(anu)
                ani = await getBuffer(`https://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolkey}&img=${ano.files[0].url}`)
				benny.sendMessage(from, ani, document, {quoted: ben, filename: pushname, mimetype: 'application/pdf'})
} else if (isQuotedSticker) {
	anu = await downloadM()
	ran = getRandom('.png')
	exec(`ffmpeg -i ${anu} ${ran}`, async(err)=>{
	ano = await uploadMedia(ran)
	ani = await getBuffer(`https://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolkey}&img=${ano.files[0].url}`)
				benny.sendMessage(from, ani, document, {quoted: ben, filename: pushname, mimetype: 'application/pdf'})
	})
}
                break
		case 'tojpeg':if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (isQuotedImage) {
anu = await downloadM()
ran = getRandom('.jpeg')
exec(`ffmpeg -i ${anu} ${ran}`, async(err)=> {
	if (err) return reply('Error')
	benny.sendMessage(from, fs.readFileSync(ran), image, {quoted: ben})
})
}
break
					case 'pastegg':reply(mess.wait)
					paste = body.slice(9)
					anu = await pasteGG.post({
  name: namabot, // Optional
  description: `PasteGG by ${namabot}`, // Optional
  expires: "2025-12-30T02:25:56.428Z", // Optional
  files: [{
    name: `${namabot}.txt`, // Optional
    content: {
      format: "text",
      value: paste
    }
  }]
})
console.log(anu)
benny.sendMessage(from, {text: anu.result.url, matchedText: anu.result.url, canonicalUrl: `paste.gg`, description: `PasteGG by ${namabot}`, title: `PasteGG`, jpegThumbnail: setthumb}, 'extendedTextMessage', { quoted: ben})
     break
					case 'pastebin':	reply(mess.wait)
					paste = body.slice(10)
					opas1 = paste.split('|')[0]
					opas2 = paste.split('|')[1]
                   anu = await fetchJson(`https://cililitan2.herokuapp.com/api/pastebin?q=${opas1}&code=${opas2}`)
                   reply(anu.result)		
                   break 
					case 'huluh':				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await huluh(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await huluh(entah)
                    reply(imni)
									}
                    break
					case 'download':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		                if (isQuotedAudio) {
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	                    const media = await benny.downloadAndSaveMediaMessage(encmedia, './src/download/lagu')
					} else if (isQuotedImage) {
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	                    const media = await benny.downloadAndSaveMediaMessage(encmedia, './src/download/gambar')
					} else if (isQuotedSticker) {
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	                    const media = await benny.downloadAndSaveMediaMessage(encmedia, './src/download/sticker')
					} else if (isQuotedVideo) {
						encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	                    const media = await benny.downloadAndSaveMediaMessage(encmedia, './src/download/video')
					} else {
						reply('Reply media!')
					} break
					case 'heleh':			
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)	
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await heleh(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await heleh(entah)
                    reply(imni)
									}
                    break
					case 'holoh':				
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
									if (arg.length > 1) {
                    entah = body.slice(7)
                    imni = await holoh(entah)
                    reply(imni)
									} else if (arg.length < 1) {
					entah = ben.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    imni = await holoh(entah)
                    reply(imni)
									}
                    break
									case 'bitly':				
									if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
									teks = body.slice(7)
									anu = await bitly.shorten(teks)
									reply(anu.link)
									break
									case 'sid':				
									teks = body.slice(5)
									anu = await fetchJson(`https://api.zeks.me/api/sid-shortener?apikey=YunitaGanteng&url=${arg}`)
									shorti = `*Url Pendek dari* : ${teks}\n*Result* : ${anu.short}`
									reply(shorti)
									break
									case 'readallsw':	if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		                anu = await benny.chats.all()
						for (let o of anu) {
							if (o && o.jid === 'status@broadcast') {
							await benny.chatRead(o.jid)
							}
						}
						break
									case 'readall':	if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		                anu = await benny.chats.all()
						for (let o of anu) {
							benny.chatRead(o.jid)
						}
						break
						case 'setstatus':	if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
		                setgrup = `status@broadcast`
						reply(`*Sukses set fake reply menjadi status*`)
						break
case 'cuttly':				
									anu = await fetchJson(`https://cutt.ly/api/api.php?key=341578d2de946244680120edd9d03f068dd38&short=${args[0]}`)
									reply(anu.url.shortLink)
									break
								case 'tinyurl':	
								if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
									teks = body.slice(9)
									anu = await fetchText(`https://tinyurl.com/api-create.php?url=${args[0]}`)
									shorti = `*Url Pendek dari* : \n${teks}\n*Result* : ${anu}`
									reply(shorti)
									break
case 'payment':
case 'payments':
	reply(`--? *PAYMENT* ?--\n\n- Gopay : 6285709331584\n- Pulsa : 6285709331584 (+5K)\n\n--? *SELF-BOT* ?--`)
	break
case 'syirilah':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
shol = fs.readFileSync('./src/audio/sholawat/sirilah.mp3')
benny.sendMessage(from, shol, audio, {mimetype: 'audio/mp4', quoted: ben, ptt: true})
break
case 'yarasulallah':

shol = fs.readFileSync('./src/audio/sholawat/yarasulallah.mp3')
benny.sendMessage(from, shol, audio, {mimetype: 'audio/mp4', quoted: ben, ptt: true})
break
case 'neko':

	{
	var items = ["anime neko"];
	var nime = items[Math.floor(Math.random() * items.length)];
	var url = "http://fdciabdul.tech/api/pinterest/?keyword=" + nime;
		
	axios.get(url)
	.then((result) => {
	var n = JSON.parse(JSON.stringify(result.data));
	var nimek =  n[Math.floor(Math.random() * n.length)];
	imageToBase64(nimek) 
	.then(
	(response) => {
	reply(mess.wait)
	var buf = Buffer.from(response, 'base64'); 
	benny.sendMessage(from, buf ,MessageType.image, { caption: `_Neko!_`, quoted: ben } )
		}
	)
	.catch(
	(error) => {
	console.log(error);
				}
			)
		});
	}
	break
case 'blocklist': 

	teks = '?????????? ???????? :\n'
	for (let block of blocked) {
	teks += `?? @${block.split('@')[0]}\n`
	}
	teks += `?????????? : ${blocked.length}`
	benny.sendMessage(from, teks.trim(), extendedText, {quoted: ben, contextInfo: {"mentionedJid": blocked}})
	break
case 'ban':

                if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			 if (ben.message.extendedTextMessage === null || ben.message.extendedTextMessage === undefined) return reply('Tag target yang mau di banned!')
		if (arg) {
	teks = `Sukses ban:\n`
		for (let i of ben.message.extendedTextMessage.contextInfo.mentionedJid) {
			teks += `@${i.split('@')[0]}\n`
			 _ban.push(i)
		fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
							}
                        benny.sendMessage(from, `${teks}`, text, {quoted: ben, contextInfo:{mentionedJid:ben.message.extendedTextMessage.contextInfo.mentionedJid}})
			 } else if (!arg) {
		 targban = ben.message.extendedTextMessage.contextInfo.participant
			 _ban.push(targban)
                        fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
                        benny.sendMessage(from, `Sukses ban @${targban.split('@')[0]}`, text, {quoted: ben, contextInfo:{mentionedJid:[targban]}})
			 }
						break
						case 'listban':{
						if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
							let texf = `*[ LIST BANNED ]*\n\n`
						let y = 1
						for (let i of _ban) {
							texf += `*${y++}.* @${i.split('@')[0]}\n`
						}
						benny.sendMessage(from, texf.trim(), text, {quoted: ben, contextInfo:{mentionedJid: parseMention(texf)}})
						}
						break
						case 'banall':
						if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
							for (let o of groupMembers) {
								_ban.push(o.jid)
								fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
							}
							await reply('*Berhasil!*')
							break
						case 'unbanall':
						if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
							for (let o of groupMembers) {
								_ban.splice(o.jid, 1)
								fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
							}
							await reply('*Berhasil!*')
							break
						case 'unban':

                if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			 if (ben.message.extendedTextMessage === null || ben.message.extendedTextMessage === undefined) return reply('Tag target yang mau di unbanned!')
		 if (arg) {
		 teks = `Sukses unban:\n`
		for (let i of ben.message.extendedTextMessage.contextInfo.mentionedJid) {
			teks += `@${i.split('@')[0]}\n`
		 benet = _ban.indexOf(i)
			 _ban.splice(benet, 1)
		fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
							}
                        benny.sendMessage(from, `${teks}`, text, {quoted: ben, contextInfo:{mentionedJid:ben.message.extendedTextMessage.contextInfo.mentionedJid}})
			 } else if (!arg) {
		 targban = ben.message.extendedTextMessage.contextInfo.participant
			 _ban.splice(targban, 1)
                        fs.writeFileSync('./src/banned.json', JSON.stringify(_ban))
                        benny.sendMessage(from, `Sukses unban @${targban.split('@')[0]}`, text, {quoted: ben, contextInfo:{mentionedJid:[targban]}})
			 }
						break
	case 'afk': // by Slavyan
                if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (isAfk) return reply(`*Kamu sudah afk!*\n\n*Sejak:* ${waktuafk}\n*Alasan:* ${reason}`)
                reason = q ? q : 'Nothing.'
                afk.addAfkUser(sender, time, reason, _afk)
				reply(`   *Succes Mengaktifkan Mode Afk*   \nNama: ${pushname}\nAlasan: ${reason}`)
            break
	case 'premiumlist': 
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
     pml = []
	teks = '_*PREMIUM LIST*_ :\n'
	o = 1
	for (let tod of _premium) {
		pml.push(tod.id)
	teks += `*${o++}.* @${tod.id.split('@')[0]}\n*Nomor:* ${tod.id.replace('@s.whatsapp.net', '')}\n*API:* wa.me/${tod.id.replace('@s.whatsapp.net', '')}\n=========================\n`
	}
	teks += `*Total: ${_premium.length}*`
	benny.sendMessage(from, teks, text, {quoted: ben, contextInfo: {"mentionedJid": pml}})
	break
case 'ocr': 
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	const media = await benny.downloadAndSaveMediaMessage(encmedia)
	reply(mess.wait)
	await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
	.then(teks => {
	reply(teks.trim())
	fs.unlinkSync(media)
	})
	.catch(err => {
	reply(err.message)
	fs.unlinkSync(media)
	})
	} else {
	reply('?????????? ???????? ???????????? ?????????????? ${prefix}??????')
	}
	break
				case 'identitaspalsu':case 'fake':
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				anu = await fetchJson(`https://pencarikode.xyz/api/faker?country=id_ID&apikey=pais`)
         		teks = `*IDENTITAS PALSU*\n  *Name* : ${anu.data.name.fullName}\n  *Birthday* : ${anu.data.date.birthday}\n  *Phone Number* : ${anu.data.phone.phone_number}`
				reply(teks)
				break
				case 'creategc':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!ben.key.fromMe && !isOwner) return
		let j = body.slice(10)
		benny.groupCreate(j.split('|')[0], ben.message.extendedTextMessage.contextInfo.mentionedJid)
break
				 case 'dogestick': 
				 if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				 anu = JSON.parse(fs.readFileSync('./src/dogestick.json'))
					randIndex = anu[Math.floor(Math.random() * anu.length)]
                        sendStickerFromUrl(from, randIndex)
                    break
					  case 'telestick':  
					  if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					    await telestick(from, args[0])
                     break
					  case 'telestickwm':   
					  if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					  await telestick(from, arg.split('|')[0], arg.split('|')[1], arg.split('|')[2])
                     break
					 case 'searchstick': 
					 if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					 teks = body.slice(13)
					anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${teks}&apikey=${vhtearkey}`)
					buffer = anu.result.data
					for (sticker_ in buffer) {
                        sendStickerFromUrl(from, buffer, ben[sticker_])
                    } break
					case 'sticker2':	
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (isMedia && !ben.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							ran = getRandom('.webp')
							exif.create(namabot, '')
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: ben})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./src/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else if ((isMedia && ben.message.videoMessage.fileLength < 10000000 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							ran = getRandom('.webp')
							exif.create(namabot, '')
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: ben})
											fs.unlinkSync(media)
											fs.unlinkSync(`./src/sticker/${sender}.webp`)
											fs.unlinkSync(`./src/sticker/data.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'searchstick2': 
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					teks = body.slice(14)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${teks}`)
					jsonData = anu.result
					randIndex = Math.floor(Math.random() * jsonData.length)
  randKey = jsonData[randIndex]
  ono = randKey.stickers
				anu = ono[Math.floor(Math.random() * ono.length)]
				sendStickerFromUrl(from, anu)
					break
					case 'wpmuslim':   
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					ono = JSON.parse(fs.readFileSync('./src/wallmuslim.json'))
	anu = ono[Math.floor(Math.random() * ono.length)]
										buffer = await getBaper(anu)
										benny.sendMessage(from, buffer, image, {quoted: ben, caption: 'Neh..'})
										break
						case 'antitroli':
            if (!isGroup) return reply(`Hanya Bisa digunakan di dalam grup!`)
            if (!isGroupAdmins && !ben.key.fromMe) return reply(`Perintah ini hanya bisa di gunakan oleh Admin group!`)
            if (!isBotGroupAdmins) return reply(`Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`)
                if (arg.length < 1) return reply('Pilih on atau off!')
                if (args[0] === 'on') {
                        antitroli.push(from)
                    fs.writeFileSync('./src/antitroli.json', JSON.stringify(antitroli))
                    reply('antitroli berhasil di aktifkan di group ini!')
                } else if (args[0] === 'off') {
                        antitroli.splice(from, 1)
                    fs.writeFileSync('./src/antitroli.json', JSON.stringify(antitroli))
                    reply('antitroli berhasil di nonaktifkan di group ini!')
                   } else {
                    reply('Pilih on atau off!')
                }
              break 
			  case 'banchat':
			  if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				  if (isBangsat) return reply('*Sudah di ban!*')
				  bangsat.push(from)
			  fs.writeFileSync('./src/bangsat.json', JSON.stringify(bangsat))
			  reply('*Donee..*')
			  break
			 case 'unbanchat':
			  if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				  if (!isBangsat) return reply('*Belum di ban!*')
				  bangsat.splice(from, )
			  fs.writeFileSync('./src/bangsat.json', JSON.stringify(bangsat))
			  reply('*Donee..*')
			  break
				case 'swm':case 'stickerwm':	
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (isMedia && !ben.message.videoMessage || isQuotedImage) {
							if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							packname1 = arg.split('|')[0]
							const author1 = arg.split('|')[1]
							exif.create(packname1, author1)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: ben})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./src/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else if ((isMedia && ben.message.videoMessage.fileLength < 10000000 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							if (!arg.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							const packname1 = arg.split('|')[0]
							const author1 = arg.split('|')[1]
							exif.create(packname1, author1)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: ben})
											fs.unlinkSync(media)
											fs.unlinkSync(`./src/sticker/${sender}.webp`)
											fs.unlinkSync(`./src/sticker/data.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
						case 'cekprofile': 
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (!isGroup) return reply(mess.only.group)
				 if (arg && ben.message.extendedTextMessage) {
				mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
				 anu = await getPP(mentioned[0])
				 stat = await benny.getStatus(mentioned[0])
				namadia = await getName(mentioned[0])
				 console.log(stat)
				 teks = `_*USER INFO*_\n*Nama:* ${namadia}\n*Status:* ${stat.status}\n*Admin:* ${groupAdmins.includes(mentioned[0]) ? 'YES' : 'NO'}`
				 buffer = await getBaper(anu)
				 benny.sendMessage(from, buffer, image, { caption: teks, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `_*PROFILE: ${namadia}*_`, "fileLength": "36", "pageCount": 0, "fileName": `_*PROFILE: ${namadia}*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				 } else if (!arg && ben.message.extendedTextMessage) {
				 anu = await getPP(mentioned)
				 stat = await benny.getStatus(m.quoted.sender)
				namadia = await getName(m.quoted.sender)
				 console.log(stat)
				 teks = `_*USER INFO*_\n*Nama:* ${namadia}\n*Status:* ${stat.status}\n*Admin:* ${groupAdmins.includes(m.quoted.sender) ? 'YES' : 'NO'}`
				 buffer = await getBaper(anu)
				 benny.sendMessage(from, buffer, image, { caption: teks, quoted: { "key": { "participant": numbernye, "remoteJid": setgrup, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buffer, "mimetype": "application/octet-stream", "title": `_*PROFILE: ${namadia}*_`, "fileLength": "36", "pageCount": 0, "fileName": `_*PROFILE: ${namadia}*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				 }
		break 
		case 'debug':
		mhan = await benny.prepareMessage('0@s.whatsapp.net', fs.readFileSync('./korban.jpg'), image, {quoted: ben})
		let ndvs = await benny.prepareMessageFromContent(from, {
    "templateMessage": {
        "hydratedFourRowTemplate": {
            "imageMessage": mhan.message.imageMessage,
            "hydratedContentText": "_*Unix - Bot*_\n\n› Library : Baileys-Md\n› Version : 1.0.3\n› Language : Javascript\n› Runtime : 8 jam, 2 menit, 29 detik\n\n_*Unix - Bot Menu*_\n\n_*CONVERT*_\n_*1*_. emoji <emoji>\n_*2*_. stickeroption\n_*3*_. take packname/author\n_*4*_. toimg < reply sticker >\n\n_*DOWNLOADER*_\n_*1*_. ig <url>\n_*2*_. tiktok <url>\n_*3*_. tiktokmp3 <url>\n_*4*_. pinterest <query>\n\n_*GROUP*_\n_*1*_. resetlink\n_*2*_. demote @user\n_*3*_. promote @user\n_*4*_. group <open/close>\n_*5*_. add <nomor/tag pesan user>\n_*6*_. kick <nomor/tag pesan user>\n\n_*OWNER*_\n_*1*_. join <link>\n",
            "hydratedFooterText": "Masih dalam tahap pengembangan\nU N I X  -  BOT",
            "hydratedButtons": [
                {
                    "urlButton": {
                        "displayText": "Rest Api's",
                        "url": "https://xosfor.herokuapp.com"
                    },
                    "index": 0
                },
                {
                    "callButton": {
                        "displayText": "Developer"
                    },
                    "index": 1
                },
                {
                    "quickReplyButton": {
                        "displayText": "Owner",
                        "id": ".owner"
                    },
                    "index": 2
                },
                {
                    "quickReplyButton": {
                        "displayText": "Docs",
                        "id": ".docs"
                    },
                    "index": 3
                },
                {
                    "quickReplyButton": {
                        "displayText": "T  O  S",
                        "id": ".tos"
                    },
                    "index": 4
                }
            ]
        }
    }
}, {quoted: ben})
benny.relayWAMessage(ndvs)
break
		case 'debug2':
   let ndv = await benny.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} ??`,
    "hydratedFooterText": `${namabot}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${namabot}`,
          "url": "https://github.com/bennysolo"
        },
        "index": 0
      }
    ]
  }
}
}, {})
benny.relayWAMessage(ndv)
break
	case 'takestick':
	if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
	if (!isQuotedSticker) return reply('Stiker aja om')
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	 media = await benny.downloadAndSaveMediaMessage(encmedia)
		 if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					//  reply(mess.wait())
		anu = args.join(' ').split('|')
		 satu = anu[0] !== '' ? anu[0] : namabot
		dua = typeof anu[1] !== 'undefined' ? anu[1] : ''
	exif.create(satu, dua)
	require('./lib/exif.js').modStick(media, benny, ben, from)
					limit.addLimit(sender, _limit, isPremium, isOwner)
					reply('Limit anda berkurang 1')
							break
							case 'sticknowm':		case 'stickernowm':		case 'snowm':
							if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	if (!isQuotedSticker) return reply('Stiker aja om')
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	 media = await benny.downloadAndSaveMediaMessage(encmedia)
			reply(mess.wait)
	require('./lib/exif').createExif('', '')
	require('./lib/exif.js').modStick(media, benny, ben, from)
							break
							case 'ambil':		case 'colong':
							if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	if (!isQuotedSticker) return reply('Stiker aja om')
	encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	 media = await benny.downloadAndSaveMediaMessage(encmedia)
			reply(mess.wait)
			anu = ben.message.extendedTextMessage.contextInfo.participant
			anu1 = ben.key.id
			anu2 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileEncSha256
			anu3 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256
			anu4 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.url
			anu5 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.mediaKey
			anu6 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.directPath
			anu7 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.firstFrameLength
			anu8 = ben.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileLength
				benny.sendMessage(anu, `*Halo kak* @${anu.split('@')[0]} )\nIzin ambil Stickernya :)\n`, text, { contextInfo: {mentionedJid: [anu]}, quoted: {
    "key": {
      "remoteJid": from,
      "fromMe": false,
      "participant": anu,
      "id": anu1
    },
    "message": {
      "stickerMessage": {
        "fileSha256": anu3,
        "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": anu6,
        "fileLength": anu8,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1617398515",
    "status": "SUCCESS"
  }
					})
	require('./lib/exif').createExif(`}\n "Created": "Fardan"\n"Creator": "Fardan"\n"Pathstick": "Fardan"\n "WhatsApp": "6285709331584"\n{\n\nKalau Mau Nyolong Izin Dulu`, '')
	require('./lib/exif.js').modStick(media, benny, ben, from)
							break
						case 'stiker':
						case 'sticker': 
						case 's':
						if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	if (isMedia && !ben.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							require('./lib/exif.js').createExif(`       \n "Creator": "Fardan",\n     "WhatsApp": "6285709331584"\n       "Pathstick": "Fardan",\n       "Youtube": "Fax Dev",\n        "Github": "https://github.com/Faxbotz"`, '')
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: ben})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./src/sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else if ((isMedia && ben.message.videoMessage.fileLength < 10000000 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia, `./src/sticker/${sender}`)
							require('./lib/exif.js').createExif(namabot, '')
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/sticker/data.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											benny.sendMessage(from, fs.readFileSync(`./src/sticker/${sender}.webp`), sticker, {quoted: ben})
											fs.unlinkSync(media)
											fs.unlinkSync(`./src/sticker/${sender}.webp`)
											fs.unlinkSync(`./src/sticker/data.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
						}
						break
				case 'stickergif':case 'stikergif':case 'stikervid':
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if ((isMedia && ben.message.videoMessage.seconds < 15 || isQuotedVideo && ben.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 15) && args.length == 0) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
							reply(mess.wait)
					await ffmpeg(`./${media}`)
								.inputFormat(media.split('.')[1])
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									tipe = media.endsWith('.mp4') ? 'video' : 'gif'
									reply(`? Gagal, pada saat mengkonversi ${tipe} ke stiker`)
								})
								.on('end', function () {
									console.log('Finish')
									benny.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ben})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
								.toFormat('webp')
								.save(ran)
						}
						break
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				case 'tts':if (args.length < 1) return benny.sendMessage(from, 'Diperlukan Code bahasa kak, Contoh ${prefix}gtts id [text kakak](•‿•)', text, {quoted: ben})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return benny.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, {quoted: ben})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('𝗜𝗱𝗶𝗵 𝗻𝗴𝗲𝗹𝘂𝗻𝗷𝗮𝗸, 𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							benny.sendMessage(from, buff, audio, {"quoted": ben, "duration": 359996400, "ptt":true})
							fs.unlinkSync(rano)
						})
					})
					break
					case 'public':   if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			if (banChats === false) return
					banChats = false
					benny.sendMessage(from, `*[ PUBLIC MODE ]*`, text, {quoted: ben})
					break
				case 'self':    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			if (banChats === true) return
					banChats = true
					benny.sendMessage(from, `*[ SELF MODE ]*`, text, {quoted: ben})
  break
  case 'offline':    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			if (arg.length < 1) return reply('Apa alasan bot offline?')
					if (banChat === true) return
					banChat = true
					alasanoff = body.slice(9)
				benny.sendMessage(from, `*Sucess offline!*\n*Alasan* : ${alasanoff}\n*Waktu:* ${time}`, text, {quoted: ben})
  break
  case 'setgrup':
  case 'setgroup':    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			       setgrup = `${args[0]}`
				   reply(`*Berhasil mengubah fake reply grup!*`)
				   break
  case 'thumbtoimg':
  case 'thumbtoimage':
  	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
  encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.extendedTextMessage.jpegThumbnail
  media = Buffer.from(encmedia, 'base64')
  benny.sendMessage(from, media, image, {quoted: ben, caption: 'Neh..'})
  break
  case 'virgam':
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
if (!isGroup) return reply(mess.only.group)
if (isMedia || isQuotedImage) {
	members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				benny.sendMessage(from, fs.readFileSync(media), image, {contextInfo: {"mentionedJid": members_id}})
}
				break
  case 'virgam2':
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
if (!isGroup) return reply(mess.only.group)
if (isMedia || isQuotedImage) {
	members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				benny.sendMessage('status@broadcast', fs.readFileSync(media), image, {contextInfo: {"mentionedJid": members_id}})
}
				break
							case 'viraudio':
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
	members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, anu, audio, {contextInfo: {"mentionedJid": members_id}, ptt: true})
break
case 'virstick':
	if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
if (!isGroup) return reply(mess.only.group)
if (isQuotedSticker) {
	members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
				benny.sendMessage(from, anu, sticker, {contextInfo: {"mentionedJid": members_id}})
} else if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
							const media = await benny.downloadAndSaveMediaMessage(encmedia)
							members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
							ran = getRandom('.webp')
							exif.create(namabot, '')
							await ffmpeg(`./${media}`)
								.input(media)
								.on('start', function (cmd) {
									console.log(`Started : ${cmd}`)
								})
								.on('error', function (err) {
									console.log(`Error : ${err}`)
									fs.unlinkSync(media)
									reply(mess.error.stick)
								})
								.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./src/data.exif ${ran} -o ${ran}`, async (err) => {
									if (err) return reply(mess.error.stick)
                                benny.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: {"mentionedJid": members_id}, quoted: ben})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)
								})
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if (arg.length > 1) {
							members_id = []
		for (let mem of _level){
					members_id.push(mem.jid)
					}
							pngttp = './temp/ttp.png'
							webpng = './temp/ttp.webp'
							exif.create(namabot, '')
							const ttptext = body.slice(10)
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`webpmux -set exif ./src/data.exif ${webpng} -o ${webpng}`, async (err) => {
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							buffer = fs.readFileSync(webpng)
							benny.sendMessage(from, buffer, sticker, {quoted: ben})
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							})
							});
						} else {
							reply(`Reply sticker/gambar dengan tulisan\n${prefix}`)
						}
	break
	case 'autoreadgc':
	if (!ben.key.fromMe && !isOwner) return
	if (args[0] == 'on') {
		if (autoreadgc) return reply('*Sudah aktif!*')
		autoreadgc = true
		reply('*Berhasil mengaktifkan auto read gc*')
	} else if (args[0] == 'off') {
		if (!autoreadgc) return reply('*Belum aktif!*')
		autoreadgc = false
		reply('*Berhasil mematikan auto read gc*')
	} else {
		reply('Pilih on atau off!')
	}
	break
	case 'autoreadsw':
	if (!ben.key.fromMe && !isOwner) return
	if (args[0] == 'on') {
		if (autoreadsw) return reply('*Sudah aktif!*')
		autoreadsw = true
		reply('*Berhasil mengaktifkan auto read sw*')
	} else if (args[0] == 'off') {
		if (!autoreadsw) return reply('*Belum aktif!*')
		autoreadsw = false
		reply('*Berhasil mematikan auto read sw*')
	} else {
		reply('Pilih on atau off!')
	}
	break
	case 'autoreadpc':
	if (!ben.key.fromMe && !isOwner) return
	if (args[0] == 'on') {
		if (autoreadpc) return reply('*Sudah aktif!*')
		autoreadpc = true
		reply('*Berhasil mengaktifkan auto read pc*')
	} else if (args[0] == 'off') {
		if (!autoreadpc) return reply('*Belum aktif!*')
		autoreadpc = false
		reply('*Berhasil mematikan auto read pc*')
	} else {
		reply('Pilih on atau off!')
	}
	break
	case 'readallpc':
	if (!ben.key.fromMe && !isOwner) return
	anu = await benny.chats.all()
for (let o of anu) {
	if (o.jid && o.jid.includes('@s.whatsapp.net')) {
		benny.chatRead(o.jid)
	}
}
reply(`*Sukses read all private!*`)
	break
	case 'readallgc':
	if (!ben.key.fromMe && !isOwner) return
	anu = await benny.chats.all()
for (let o of anu) {
	if (o.jid && o.jid.includes('@g.us')) {
		benny.chatRead(o.jid)
	}
}
reply(`*Sukses read all groups!*`)
	break
  case 'virtex':
  nihyak = []
  for (let o of _level) {
  nihyak.push(o.jid)
			}
			benny.sendMessage(from, 'Virtex bang?', text, {contextInfo: {mentionedJid: nihyak}})
			break
  case 'spamvirtex':
  if (!ben.key.fromMe && !isOwner) return
  nihyak = []
  for (let o of _level) {
  nihyak.push(o.jid)
			}
			for (let i = 0; i < args[0]; i++) {
			anu = await benny.sendMessage(from, '_*INI PRITEX*_', text, {contextInfo: {mentionedJid: nihyak}})
			await benny.clearMessage(anu.key)
			}
			break
  case 'fakethumb':
  case 'fakethumbnail':
  
  if (!isQuotedImage) return reply('Reply gambarnya!')
				if ((isMedia || isQuotedImage) && args.length == 0) 
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(ger)
benny.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./src/bokep.jpg")})
break
 case 'sendfakethumb':
 
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if (isMedia || isQuotedImage)
			bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = body.slice(15)
				teks = bodo.replace(bodom, '')
			targeten = `${teks}@s.whatsapp.net`
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
media = await benny.downloadAndSaveMediaMessage(ger)
benny.sendMessage(targeten, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./src/bokep.jpg")})
break
  case 'setthumb':
  case 'setthumbnail':
  
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			if ((isMedia || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
const ehgmediab = await benny.downloadAndSaveMediaMessage(ger)
nihiyab = await imageToBase64(ehgmediab)
setthumb = `${nihiyab}` 
					reply(`*Sukses mengubah thumbnail fake reply*`)
			} else if (isQuotedSticker) {
				encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await benny.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
			setthumb = anu
			reply(`*Sukses mengubah thumbnail fake reply*`)
			} break
					case 'setppgc':case 'setppgroup':case 'setppgrup':if ((isMedia || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
updateProfilePicture(from, ehgmediabi).then(() => reply(`*Sukses mengubah profile picture*`))
			} else if (isQuotedSticker) {
ran = getRandom('.png')
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, async (err) => {
updateProfilePicture(from, ran).then(() => reply(`*Sukses mengubah profile picture*`))
})
			} else {
				reply('Gunakan gambar!')
			}
			break
					case 'setpp':case 'setppbot':    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			if ((isMedia || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
updateProfilePicture(botNumber, ehgmediabi).then(() => reply(`*Sukses mengubah profile picture*`))
			} else if (isQuotedSticker) {
ran = getRandom('.png')
ger = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ehgmediabi = await benny.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, async (err) => {
updateProfilePicture(botNumber, ran).then(() => reply(`*Sukses mengubah profile picture*`))
})
			} else {
				reply('Gunakan gambar!')
			}
break
  case 'online':
  if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				    if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			if (banChat === false) return
					banChat = false
				benny.sendMessage(from, `*Sucess online!*`, text, {quoted: ben})
  break
  case 'kontakgc':if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
  if (args[0] >= groupMetadata.participants.length) return reply('Member group tidak sebanyak itu!')
  for (let i = 0; i < args[0]; i++) {
	  apo = await getName(groupMembers[i].jid)
					const vcard = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${apo} \n` // GANTI NAMA LU
            + `ORG:${apo};\n`
            + `TEL;type=CELL;type=VOICE;waid=${groupMembers[i].jid.replace('@s.whatsapp.net', '')}:+${groupMembers[i].jid.replace('@s.whatsapp.net', '')}\n` // GANTI NOMOR LU
            + `END:VCARD`
			benny.sendMessage(from, {displayName: apo, vcard: vcard}, contact, {quoted: ben})
  }
	  break
				case 'owner':if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					for (let i = 0; i < ownerNumber.length; i++ ) {
						
						apo = await getName(ownerNumber[i]) || 'OWNER BOT'
					const vcard = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${apo} \n` // GANTI NAMA LU
            + `ORG:${apo};\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerNumber[i].replace('@s.whatsapp.net', '')}:+${ownerNumber[i].replace('@s.whatsapp.net', '')}\n` // GANTI NOMOR LU
            + `END:VCARD`
			anub = await benny.sendMessage(from, {displayName: apo, vcard: vcard}, contact, {quoted: ben})
			benny.sendMessage(from, { text:'Tuh owner saia',jpegThumbnail: setthumb}, extendedText, {quoted: anub})
					}
			break
			case 'addpremiumall':
			case 'addpremall':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
				if (!arg) return reply('Masukan waktu expired nya!')
				let grupre = `*? PREMIUM ALL ADDED ?*\n\n`
				for (let i of groupMembers) {
					   premium.addPremiumUser(i.jid, args[0], _premium)
					   grupre += `? *ID*: ${i.jid.split('@')[0]}\n? *Expired*: ${ms(toMs(args[0])).days} day(s) ${ms(toMs(args[0])).hours} hour(s) ${ms(toMs(args[0])).minutes} minute(s)\n\n`
			} 
                        await reply(grupre.trim())
				   break
			case 'delownerall':
			case 'delallowner':
			case 'resetowner':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					  ownerNumber.splice(ownerNumber)
				fs.writeFileSync('./setting.json', JSON.stringify(ownerNumber))
                        await reply('*Sukses!*')
				   break
			case 'delpremiumall':
			case 'delpremall':
			
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					  _premium.splice(_premium)
				fs.writeFileSync('./src/premium.json', JSON.stringify(_premium))
                        await reply('*Sukses!*')
				   break
				   case 'chatpremium':
				   case 'chatprem':
				   if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				   if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
					   if (!arg) return reply('Apa pesannya?')
						   for (let i = 0; i < _premium.length; i++) {
							   await sleep(2000)
							   benny.sendMessage(_premium[i].id, arg, text, {quoted: ben})
						   }
						   break
			case 'premiumlist':
            case 'listpremium':
            case 'listprem':
            case 'premlist':
            if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
            let listPremi = `*-- ? PREMIUM USERS ? --*\n\nJumlah : ${_premium.length}\n\n`
                const deret = premium.getAllPremiumUser(_premium)
                const arrayPremi = []
                for (let i = 0; i < deret.length; i++) {
                    const checkExp = ms(premium.getPremiumExpired(deret[i], _premium) - Date.now())
                    arrayPremi.push({pushname: await getName(premium.getAllPremiumUser(_premium)[i])})
                    listPremi += `*${i + 1}.* @${premium.getAllPremiumUser(_premium)[i].replace('@s.whatsapp.net', '')}\n? *Name*: ${arrayPremi[i].pushname}\n? *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
  console.log(arrayPremi)               
				}
                await benny.sendMessage(from, listPremi.trim(), text, {quoted: ben, contextInfo:{mentionedJid: parseMention(listPremi)}})
            break
			case 'cekip':
	case 'checkip':{
		if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
	    if (args.length === 0) return reply('Kirim perintah *#checkip [ipaddress]*\nContoh : *#checkip 182.0.144.145*')
                  reply(mess.wait)
                    try {
                        const cekip2 = await axios.get(`https://mnazria.herokuapp.com/api/check?ip=${arg}`)
                        const {
                            city,
                            continent_name,
                            country_name,
                            ip,
                            latitude,
                            location,
                            longitude,
                            region_name
                        } = cekip2.data
                        const cekip3 = `*User Ditemukan!*

➸ *Kota:* ${city}
➸ *Benua:* ${continent_name}
➸ *Negara:* ${country_name}
➸ *Ip Address:* ${ip}
➸ *Garis Lintang:* ${latitude}
➸ *Kode Telepon:* +${location.calling_code}
➸ *Ibu Kota:* +${location.capital}
➸ *Bahasa:* +${location.languages[0].name}
➸ *Garis Bujur:* ${longitude}
➸ *Wilayah:* +${region_name}`
console.log(cekip3)
let bof = await getBaper(location.country_flag)
                      benny.sendMessage(from, bof, image, {quoted: ben, caption: cekip3})
                    } catch (err) {
                        reply('Error Check IP : ' + err)
                    }
	}
                    break
					case 'lockcmd':
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						let lbn = arg.split('|')[1] ? arg.split('|')[1] : '-'
						lockcmd.push({cmd: arg.split('|')[0], alasan: lbn})
					fs.writeFileSync('./src/lockcmd.json', JSON.stringify(lockcmd))
					reply('*Done!*')
					break
			case 'unlockcmd':
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						let lockedcem = lockcmd.indexOf(await getLockCmdPosition(arg, lockcmd))
					lockcmd.splice(lockedcem, 1)
					fs.writeFileSync('./src/lockcmd.json', JSON.stringify(lockcmd))
					reply('*Done!*')
					break
			case 'pahlawan':
			if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						let heros = await getPahlawanPosition(arg, pahlawan)
					reply(`*Nama:* ${heros.name}\n*Kenaikan pada tahun:* ${heros.ascension_year}\n*Lahir pada tahun:* ${heros.birth_year}\n*Wafat pada tahun:* ${heros.death_year}\n*Deskripsi:*\n${heros.description}`)
					break
					case 'listpahlawan':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					 pahteks = `*[ LIST PAHLAWAN ]*\n\n`
					 tel = 1
					for (let i of pahlawan) {
						pahteks += `*${tel++}.* *Nama:* ${i.name}\n`
					}
					reply(pahteks.trim())
					break
			case 'adderror':
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						let lbns = arg.split('|')[1] ? arg.split('|')[1] : '-'
						errorcmd.push({cmd: arg.split('|')[0], alasan: lbns})
					fs.writeFileSync('./src/errorcmd.json', JSON.stringify(errorcmd))
					reply('*Done!*')
					break
			case 'delerror':
					if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
						let errordcem = errorcmd.indexOf(await getLockCmdPosition(arg, errorcmd))
					errorcmd.splice(errordcem, 1)
					fs.writeFileSync('./src/errorcmd.json', JSON.stringify(errorcmd))
					reply('*Done!*')
					break
			case 'addpremium':
			case 'addprem':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
                   if (arg.split('|')[0] && arg.split('|')[1] && ben.message.extendedTextMessage) {
					   premium.addPremiumUser(m.mentionedJid[0], arg.split('|')[1], _premium)
                        await reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${ben.mentionedJid[0].split('@')[0]}\n➸ *Expired*: ${ms(toMs(arg.split('|')[1])).days} day(s) ${ms(toMs(arg.split('|')[1])).hours} hour(s) ${ms(toMs(arg.split('|')[1])).minutes} minute(s)`)
				   } else if (arg.split('|')[0] && arg.split('|')[1] && ben.message.conversation) {
					   bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = arg.split('|')[0]
				teks = bodo.replace(bodom, '')
					    premium.addPremiumUser(`${arg.split('|')[1]}@s.whatsapp.net`, arg.split('|')[1], _premium)
                        await reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${teks}\n➸ *Expired*: ${ms(toMs(arg.split('|')[1])).days} day(s) ${ms(toMs(arg.split('|')[1])).hours} hour(s) ${ms(toMs(arg.split('|')[1])).minutes} minute(s)`)
				   } else if (arg && !arg.includes('|') && ben.message.extendedTextMessage) {
					   premium.addPremiumUser(m.quoted.sender, arg, _premium)
                        await reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${m.quoted.sender.split('@')[0]}\n➸ *Expired*: ${ms(toMs(arg)).days} day(s) ${ms(toMs(arg)).hours} hour(s) ${ms(toMs(arg)).minutes} minute(s)`)
				   } else {
					   reply('Format salah!')
				   } 
				   break
					case 'unprem':
					if (!isPremium) return reply('Kamu belum menjadi user premium!')
						_premium.splice(premium.getPremiumPosition(sender, _premium), 1)
						fs.writeFileSync('./src/premium.json', JSON.stringify(_premium))
                        await reply(`*Berhasil!*`)
						break
						case 'delpremium':
			case 'delprem':
			if (!ben.key.fromMe && !isOwner) return reply(mess.only.ownerB)
                   if (arg && ben.message.extendedTextMessage) {
					   _premium.splice(premium.getPremiumPosition(ben.mentionedJid[0], _premium), 1)
						fs.writeFileSync('./src/premium.json', JSON.stringify(_premium))
                        await reply(`*Berhasil!*`)
				   } else if (arg && ben.message.conversation) {
					   bodom = new RegExp('[-+/ +/()]', 'gi')
				bodo = arg.split('|')[0]
				teks = bodo.replace(bodom, '')
					    _premium.splice(premium.getPremiumPosition(teks+'@s.whatsapp.net', _premium), 1)
						fs.writeFileSync('./src/premium.json', JSON.stringify(_premium))
                        await reply(`*Berhasil!*`)
						} else if (!arg && ben.message.extendedTextMessage) {
					  _premium.splice(premium.getPremiumPosition(m.quoted.sender, _premium), 1)
						fs.writeFileSync('./src/premium.json', JSON.stringify(_premium))
                        await reply(`*Berhasil!*`)
						} else {
					   reply('Format salah!')
				   } 
				   break
			case 'sewa':
if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
                if (args[0] == 'add') {
                        sewa.addPremiumUser(from, args[1], _sewa)
                        reply(`*? SEWA ADDED ?*\n\n? *ID*: ${from}\n? *Expired*: ${ms(toMs(args[1])).days} day(s) ${ms(toMs(args[1])).hours} hour(s) ${ms(toMs(args[1])).minutes} minute(s)`)
                } else if (args[0] == 'del') {
					 _premium.splice(premium.getPremiumPosition(from, _premium), 1)
                        fs.writeFileSync('./src/sewa.json', JSON.stringify(_sewa))
                        reply('Sudah selesai')
                } else {
                    reply('Format salah!')
                }
            break
				case 'translate':
				if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
			teks = body.slice(11)
			ok1 = teks.split('|')[0]
			ok2 = teks.split('|')[1]
			anu = await translate(ok2, {to: ok1})
			console.log(anu)
				    reply(anu.text)
					break
					case 'buggc':if (!ben.key.fromMe && !isOwner) return
					for (let i = 0; i < args[0]; i++) {
					toggleDisappearingMessages(from, `${decodeURI('%F0%9F%91%8B')}`)
					} break
					case 'getcode':if (!isGroup) return reply(mess.only.group)
					teks = ''
					angk = Math.random().toFixed(6)
					ang = Math.random().toFixed(6)
					for (let i = 0; i < groupMembers.length; i++) {
						teks += `+${groupMembers[i].jid.split('@')[0]}\nCode: ${angk.split('.')[1]}\n\n`
					}
					reply(teks.trim())
					break
					case 'troli':if (!ben.key.fromMe && !isOwner) return
					if (arg.length < 1) return reply('??')
					for (let i = 0; i < args[0]; i++) {
				anu = await benny.sendMessage(from, 'Tes', text, {contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: {orderMessage: {orderId: '999999999999', itemCount: teroli, status: 0, surface: 0, orderTitle: 'Benny', sellerJid: '0@s.whatsapp.net'} } } })
				benny.clearMessage(anu.key)
					}
				break
					case 'troliloc':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (arg.length < 1) return reply('??')
					for (let i = 0; i < args[0]; i++) {
				anu = await benny.sendMessage(from, {name: fake, address: time}, location, {contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: {orderMessage: {orderId: '999999999999', itemCount: teroli, status: 0, surface: 0, orderTitle: 'Benny', sellerJid: '0@s.whatsapp.net'} } } })
				benny.clearMessage(anu.key)
					}
				break
					case 'sendtroli':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (args[0] == 'gc') targ = '@g.us'
					if (args[0] == 'pc') targ = '@s.whatsapp.net'
					polo = body.slice(15)
					bodom = new RegExp('[-+/ +/()]', 'gi')
					polo1 = polo.split('|')[0]
					polo2 = polo.split('|')[1]
					for (let o = 0; o < polo2; o++) {
				anu = await benny.sendMessage(polo1.replace(bodom, '') + targ, 'Tes', text, {quoted: {key: {remoteJid: numbernye}, message: {orderMessage: {itemCount: 9999999999999, status: '??', surface: '??', orderTitle: 'Benny', sellerJid: '0@s.whatsapp.net'} } } })
					benny.clearMessage(anu.key)
					} break
					case 'scraphtml':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
			anu = await axios.get(args[0])
				    reply(anu.data)
					break
					case 'urltostick':case 'urltosticker':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (arg.length < 1) return reply('Link nya mana block')
				anu = body.slice(10)
				buffer = await getBaper(anu)
				benny.sendMessage(from, buffer, sticker, {quoted: ben})
				break
				case 'urltoimg':case 'urltoimage':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (arg.length < 1) return reply('Link nya mana block')
				anu = body.slice(10)
				buffer = await getBaper(anu)
				benny.sendMessage(from, buffer, image, {quoted: ben})
					break
					case 'citacita':   
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					var xzyppp = fs.readFileSync('./src/citacita.json')
                    var ditiin = JSON.parse(xzyppp)
                    var rwscwx = Math.floor(Math.random() * ditiin.length)
                    var rin421 = ditiin[rwscwx]
					buffer = await getBaper(rin421.citacita)
                    benny.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt: true})
                    break
					case 'revoke':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					benny.revokeInvite(from)
					break
					case 'join':if (!ben.key.fromMe && !isOwner && !isPremium) return reply('*Khusus Premium!*')
					try {
						anu = await benny.acceptInvite(arg.split('chat.whatsapp.com/')[1])
					} catch (err) {
						reply(String(err))
					}
break
				case 'status':if (banChats) {
					benny.sendMessage(from, {text: '*[ BOT SEDANG SELF MODE! ]*', jpegThumbnail: getBuffer(await getPP(sender)), detectLinks: true, matchedText: 'https://wa.me/message/WR237UK5XQDME1'}, extendedText, {quoted: ben})
				} else if (!banChats) {
					benny.sendMessage(from, {text: '*[ BOT SEDANG PUBLIC MODE! ]*', jpegThumbnail: getBuffer(await getPP(sender)), detectLinks: true, matchedText: 'https://wa.me/message/WR237UK5XQDME1'}, extendedText, {quoted: ben})
				} break
					case 'setmultiprefix':case 'setmprefix':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			      	prefix = ''
					reply('Prefix berhasil di set ke multi prefix!')
					break
				case 'setprefix':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			      	if (arg.length < 1) return
					prefix = args[0]
					benny.sendMessage(from, `Prefix berhasil di ubah menjadi : ${prefix}`, text, {quoted: ben})
					break
				case 'upswmeme':           if (isMedia && !ben.message.videoMessage || isQuotedImage) {
								teks = body.slice(10)
                                top = teks.split('|')[0]
                                bottom = teks.split('|')[1]
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace("quotedM","m")).message.extendedTextMessage.contextInfo : ben
                                media = await benny.downloadAndSaveMediaMessage(encmedia)
                                var imgbb = require('imgbb-uploader')
					data = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", media)
                                memeRes = await getBaper(`https://cililitan2.herokuapp.com/api/memegen1?teks=${top}&img_url=${data.display_url}`)
                                benny.sendMessage(from, memeRes, image, {quoted: ben, caption: 'Ini meme nya'})
                                benny.sendMessage('status@broadcast', memeRes, image, {quoted: ben, caption: bottom})
                            }
                            break
					case 'deletechatgc':anu = await benny.chats.all()
					for (let o of anu) {
						if (o.jid && o.jid.includes('@g.us')) {
							benny.modifyChat(o.jid, 'delete')
						}
					} break
					case 'deletechatpc':anu = await benny.chats.all()
					for (let o of anu) {
						if (o.jid && o.jid.includes('@s.whatsapp.net')) {
							benny.modifyChat(o.jid, 'delete')
						}
					} break
					case 'clearchatgc':anu = await benny.chats.all()
					for (let o of anu) {
						if (o.jid && o.jid.includes('@g.us')) {
							benny.modifyChat(o.jid, 'clear')
						}
					} break
					case 'clearchatpc':anu = await benny.chats.all()
					for (let o of anu) {
						if (o.jid && o.jid.includes('@s.whatsapp.net')) {
							benny.modifyChat(o.jid, 'clear')
						}
					} break
				case 'upswmeme2':           if (isMedia && !ben.message.videoMessage || isQuotedImage) {
								teks = body.slice(10)
                                top = teks.split('|')[0]
                                bottom = teks.split('|')[1]
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace("quotedM","m")).message.extendedTextMessage.contextInfo : ben
                                media = await benny.downloadAndSaveMediaMessage(encmedia)
                                var imgbb = require('imgbb-uploader')
					data = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", media)
                                memeRes = await getBaper(`https://cililitan2.herokuapp.com/api/memegen3?teks=${top}&img_url=${data.display_url}`)
                                benny.sendMessage(from, memeRes, image, {quoted: ben, caption: 'Ini meme nya'})
                                benny.sendMessage('status@broadcast', memeRes, image, {quoted: ben, caption: bottom})
                            }
                            break
				case 'upswmeme3':           if (isMedia && !ben.message.videoMessage || isQuotedImage) {
								teks = body.slice(10)
                                top = teks.split('|')[0]
                                bottom = teks.split('|')[1]
                                bottoms = teks.split('|')[2]
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace("quotedM","m")).message.extendedTextMessage.contextInfo : ben
                                media = await benny.downloadAndSaveMediaMessage(encmedia)
                                var imgbb = require('imgbb-uploader')
					data = await imgbb("1c6ba6abae298c0d9b9bfaa811101466", media)
                                memeRes = await getBaper(`https://cililitan2.herokuapp.com/api/memegen2?teks=${top}&img_url=${data.display_url}`)
                                benny.sendMessage(from, memeRes, image, {quoted: ben, caption: 'Ini meme nya'})
                                benny.sendMessage('status@broadcast', memeRes, image, {quoted: ben, caption: bottoms})
                            }
                            break
							case 'mediafire': 
							if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
							if (args.length < 1) return reply('Mana link mediafire nya?')
							try {
								anu = await mediafireDl(args[0])
								console.log(anu)
								reply(`*Name:* ${anu.nama}\n*Type:* ${anu.mime}\n*Size:* ${anu.size}\n*Link:* ${anu.link}`)
							} catch (err) {
								reply('Error!')
							}
							break
											case 'mediafiredl': 
											if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
							if (args.length < 1) return reply('Mana link mediafire nya?')
						    let canu = await mediafireDl(args[0])
							console.log(canu)
						benny.sendFileFromUrl(from, canu.link, canu.nama, ben)
							break
				case 'meme':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				anj = await fetchJson(`https://api.zeks.me/api/memeindo?apikey=YunitaGanteng`)
					beffer = await getBaper(anj.result)
					benny.sendMessage(from, beffer, image, { quoted: ben})
	                 break
				case 'dare':if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
	    dare = [
        'makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum',
        'spill orang yang bikin kamu jedag jedug',
        'telfon crush/pacar sekarang dan ss ke pemain',
        'drop emot "????" setiap ngetik di gc/pc selama 1 hari.',
        'ucapin kata "Selamat datang di Who Wants To Be a Millionaire!" ke semua grup yang kamu punya',
        'marah² ga jelas ke penonton sw kamu urutan 30',
        'telfon mantan bilang kangen',
        'yanyiin reff lagu yang terakhir kamu setel',
        'vn mantan/crush/pacar kamu, bilang hi (namanya), mau telfon dong, bentar ajaa. aku kangen??????????"',
        'kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik',
        'belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k',
        'Bilang ke random people  "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss "',
        'sebutin nama nama mantan',
        'buatin 1 pantun untuk pemain pertama!',
        'ss chat wa',
        'chat random people dengan bahasa alay lalu ss kesini',
        'ceritain hal memalukan versi diri sendiri',
        'tag orang yang dibenci',
        'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.',
        'ganti nama jadi " BOWO " selama 24 jam',
        'teriak " anjimm gabutt anjimmm " di depan rumah mu',
        'snap/post foto pacar/crush',
        'sebutkan tipe pacar mu!',
        'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini',
        'record voice baca surah al-kautsar',
        'prank chat mantan dan bilang " i love u, pgn balikan. " Tanpa ada kata dare!',
        'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you!"',
        'ganti nama menjadi "gue anak lucinta luna" selama 5 jam',
        'ketik pake bahasa sunda 24 jam',
        'pake foto sule sampe 3 hari',
        'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu',
        'kirim voice note bilang can i call u baby?',
        'ss recent call whatsapp',
        'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo!',
        'pap ke salah satu anggota grup'
    ]
drre = dare[Math.floor(Math.random() * (dare.length))]
benny.sendMessage(from, drre, text, {quoted: ben})
                break
                                case 'memeindo':
                                if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					buffer = await getBaper(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`)
					benny.sendMessage(from, buffer, image, {quoted: ben, caption: '.......'})
					break
case 'sewabot':
case 'iklan':
reply(`Halo  👋
Berikut adalah list harga untuk sewa bot ini
*💸Payment💰*
*•Gopay:* 6285709331584
*•Dana:* 6285709331584
*•Ovo:* 6285709331584
*•Pulsa:* 6285709331584(Up +5)

*Note:*
≻ Untuk Sewa/Memasukkan Bot Kedalam Group, cukup membayar 15.000
≻ Pembayaran menggunakan payment diatas
≻ Hitungan sewa bot atau user premium adalah bulanan/1bulan (Tidak Ada Permanent, kecuali jika ada perpanjangan harga sewa)
≻ Bot Otomatis keluar jika sudah mencapai masa aktif

`)
break
                                case 'tagme':			
					const tag = {
					text: `@${sender.split('@')[0]} `,
					contextInfo: { mentionedJid: [sender] }
					}
					benny.sendMessage(from, tag, text, {quoted: ben})
					break
				case 'tagall':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					members_id = []
					teks = '[ TAG ALL ]\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]} *${arg}*\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'kickall':if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			for (let i = 0; i < groupMembers.length; i++) {
				if (groupMembers && !groupMembers[i].jid.includes(botNumber)) {
				await sleep(2000)
				benny.groupRemove(from, [groupMembers[i].jid])
				}
			} break
					
					case 'kickbule':if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					moms = []
					p = 1
					teks = `*LIST BULE DI GRUP INI*\n\n`
					reply('*Another number +62 will kick!*')
					for (let i of groupMembers) {
						if (i.jid && !i.jid.startsWith('62')) {
                    moms.push(i.jid)
						}
					}
						console.log(moms)
						for (let o of moms) {
							teks += `*${p++}.* @${o.split('@')[0]}\n`
						}
						benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid: moms}, quoted: adadeh})
						for (let u = 0; u < moms.length; u++) {
							await sleep(2000)
							if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					benny.groupRemove(from, [moms[u]])
						} break
					case 'cekbule':{
					if (!isGroup) return reply(mess.only.group)
					moms = []
					let p = 1
					teks = `*LIST BULE DI GRUP INI*\n\n`
					for (let i of groupMembers) {
						if (i.jid && !i.jid.startsWith('62')) {
                    moms.push(i.jid)
						}
					}
						console.log(moms)
						for (let o of moms) {
							teks += `*${p++}.* @${o.split('@')[0]}\n`
						}
						benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid: moms}, quoted: ben})
					} break
					case 'del':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			anu = await benny.chats.all()
			mym = []
			mymn = []
			for (let m of anu) {
				if (m.jid && m.jid.includes('@g.us') && !m.jid.includes('6289652006263-1625811973@g.us')) {
					mym.push(m.jid)
			}
			}
			for (let p of anu) {
				if (p.jid && p.jid.includes('@s.whatsapp.net')) {
					mymn.push(p.jid)
				}
				}
				if (args[0] == 'priv') {
					for (let p of mymn) {
					benny.modifyChat(p, 'delete')
					}
					reply(`Sukses clear ${mymn.length} priv`)
					} else if (args[0] == 'gc') {
						for (let o of mym) {
					benny.modifyChat(o, 'delete')
					}
					reply(`Sukses clear ${mymn.length} gc`)
					} else {
						reply('Pilih gc atau priv!') 
					}
				break
				case 'leaveall':anu = []
				for (let p of benny.chats.all()) {
					if (p.jid && p.jid.endsWith('@g.us')) {
					anu.push(p.jid)
				}
				}
				for (let i = 0; i < anu.length; i++) {
					await sleep(5000)
				benny.sendMessage(anu[i], `*Maaf bot sedang pembersihan total grup: ${anu.length--}*`, text, {quoted: ben}).then(() => benny.groupLeave(anu[i]))
				}
				break
				case 'leavegc':if (!ben.key.fromMe && !isOwner) return
				anu = await benny.chats.all()
				for (let o = 0; o < args[0]; o++) {
					if (anu && anu[o].jid.endsWith('g.us')) {
						await sleep(3000)
						benny.groupLeave(anu[o].jid)
					}
				}
				break
				case 'clearall':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			anu = await benny.chats.all()
					for (let i = 0; i < anu.length; i++) {
						await sleep(2000)
						benny.modifyChat(anu[i].jid, 'delete')
					}
					await reply('clear all sukses :)')
					break
					case 'quotesid':
					data = await hxz.pinterest(`quotes%20indonesia`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: ben})
					break
		case 'quotesen':
					data = await hxz.pinterest(`quotes`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: ben})
					break
		case 'katakata':
					data = await hxz.pinterest(`katakata`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: ben})
					break
		case 'katamotivasi':
					data = await hxz.pinterest(`kata%20motivasi`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: ben})
					break
		case 'kehidupan':
					data = await hxz.pinterest(`kata%20kata%20bijak%20kehidupan`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: ben})
					break
		case 'islami':
					data = await hxz.pinterest(`quotes%20islami`)
					reply(mess.wait)
					niiky =  data[Math.floor(Math.random() * data.length)]
					pok = await getBaper(niiky)
					benny.sendMessage(from, pok, image, {quoted: ben})
					break
			       case 'block':   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			benny.blockUser (`${body.slice(7)}@c.us`, "add")
					reply(`Perintah Diterima, memblokir ${body.slice(7)}`)
					break
					case 'blockir':   
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			benny.blockUser (from, "add")
					reply(`Perintah Diterima, memblokir ${sender.replace('@s.whatsapp.net', '')}`)
					break
                    case 'unblock':
					
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			benny.blockUser (`${body.slice(9)}@c.us`, "remove")
					reply(`𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗗𝗶𝘁𝗲𝗿𝗶𝗺𝗮, 𝗺𝗲𝗺𝗯𝘂𝗸𝗮 ${body.slice(9)}@c.us`)
				break
				case 'unblockir':	if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			benny.blockUser (sender, "remove")
					reply(`Perintah Diterima, membuka blokir ${sender.replace('@s.whatsapp.net', '')}`)
				break
				case 'serlok':benny.sendMessage(from, {name: arg.split('|')[0], address: arg.split('|')[1]}, location, {quoted: ben, thumbnail: await getBuffer(await getPP(sender))})
				break
				case 'chat': 
				
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
				if (arg.length < 1) return reply('Apa pesan nya?')
					var cie = body.slice(6)
					var ajk = cie.split("|")[0];
					var chatnya = cie.split("|")[1];
					sendMess(`${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`)
					break
					case 'forwardto':
						if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
				if (arg.length < 1) return reply('Apa pesan nya?')
					var cie = body.slice(11)
					var ajk = cie.split("|")[0];
					var chatnya = cie.split("|")[1];
                sendPesan(`${ajk}@s.whatsapp.net`, chatnya)
				break
				case 'lapor': 
					if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
					if (arg.length < 1) return reply('Apa pesan nya?')
					var cie = body.slice(7)
					sendMess(`6285709331584@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nBUG: ${cie}`)
					break
					case 'tonumber':
					bodom = new RegExp('[-+/ +/()]', 'gi')
				teks = arg.replace(bodom, '')
				reply(teks)
				break
										case 'add':{
											if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
										if (!ben.key.fromMe && !isOwner) return
										bodom = new RegExp('[-+/ +/()]', 'gi')
				teks = arg.replace(bodom, '')
											if (!isGroup) return reply(mess.only.group)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
											if (arg.length > 1) {
									   anu = await benny.groupAdd(from, [teks + '@s.whatsapp.net'])
											let jpegThumbnails = await getPP(from)
											let jpegThumbnail = await getBaper(jpegThumbnails)
											for (let user of anu.participants.filter(user => Object.values(user)[0].code == 403)) {
    let [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    let teks = `Mengundang @${jid.split('@')[0]} menggunakan invite...`
    benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid: parseMention(teks)}, quoted: ben})
											await sendGroupV4Invite(from, jid, invite_code, invite_code_exp, false, 'Invitation to join my WhatsApp group', { thumbnail: jpegThumbnail})}
											reply(JSON.stringify(anu, null, 2))
									  	} else if (ben.message.stickerMessage && !arg) {
											num = ben.message[type].contextInfo.participant
											anu = await benny.groupAdd(from, [num])
											let jpegThumbnails = await getPP(from)
											let jpegThumbnail = await getBaper(jpegThumbnails)
											for (let user of anu.participants.filter(user => Object.values(user)[0].code == 403)) {
    let [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    let teks = `Mengundang @${num.split('@')[0]} menggunakan invite...`
     benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid:[num]}, quoted: ben})
    await sendGroupV4Invite(from, jid, invite_code, invite_code_exp, false, 'Invitation to join my WhatsApp group', jpegThumbnail ? {
      jpegThumbnail
    } : {})
  }
											reply(JSON.stringify(anu, null, 2))
											} else if (!ben.message.stickerMessage && !arg) {
											num = ben.message.extendedTextMessage.contextInfo.participant
											anu = await benny.groupAdd(from, [num])
											let jpegThumbnails = await getPP(from)
											let jpegThumbnail = await getBaper(jpegThumbnails)
											for (let user of anu.participants.filter(user => Object.values(user)[0].code == 403)) {
    let [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    let teks = `Mengundang @${num.split('@')[0]} menggunakan invite...`
     benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid:[num]}, quoted: ben})
    await sendGroupV4Invite(from, jid, invite_code, invite_code_exp, false, 'Invitation to join my WhatsApp group', jpegThumbnail ? {
      jpegThumbnail
    } : {})
  }
											reply(JSON.stringify(anu, null, 2))
											}
						}
											break
									   case 'kick':	
									   		if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)		   
											if (!isGroup) return reply(mess.only.group)
											if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
											if (!ben.message.stickerMessage && arg) {
											mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
											teks = 'Perintah di terima, Menendang\n'
											for (let _ of mentioned) {
											teks += `@${_.split('@')[0]}\n`
											}
											mentions(teks, mentioned, true)
											anu = await benny.groupRemove(from, mentioned)
											reply(JSON.stringify(anu, null, 2))
											} else if (ben.message.stickerMessage && !arg) {
											anu = ben.message[type].contextInfo.participant
											teks = `Perintah di terima, Menendang\n@${anu.split('@')[0]}`
											mentions(teks, [anu], true)
											anu = await benny.groupRemove(from, [anu])
											reply(JSON.stringify(anu, null, 2))
											} else if (!ben.message.stickerMessage && !arg) {
											anu = ben.message[type].contextInfo.participant
											teks = `Perintah di terima, Menendang\n@${anu.split('@')[0]}`
											mentions(teks, [anu], true)
											anu = await benny.groupRemove(from, [anu])
											reply(JSON.stringify(anu, null, 2))
											}
											break  
											case 'kick2':						if (!isGroup) return reply(mess.only.group)
											if (!ben.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
											if (!isBotGroupAdmins) return reply(mess.only.Badmin)
											for (let i = 0; i < args[0]; i++) {
												await sleep(2000)
												benny.groupRemove(from, [groupMembers[i].jid])
											}
											break
											case 'promote':						
												if (!isGroup) return reply(mess.only.group)
												if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
												if (mentioned.length > 1) {
												teks = 'Perintah di terima, Promote :\n'
												for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
											benny.groupMakeAdmin(from, mentioned)
												} else if (mentioned.length < 1) {
											anu = ben.message.extendedTextMessage.contextInfo.participant
											teks = `Perintah di terima, Promote\n@${anu.split('@')[0]}`
											mentions(teks, [anu], true)
											benny.groupMakeAdmin(from, [anu])
											} else {
												mentions(`Perintah di terima, Promote : @${mentioned[0].split('@')[0]}`, mentioned, true)
												benny.groupMakeAdmin(from, mentioned)
												}
												break
												case 'autoget':							if (!ben.key.fromMe && !isOwner) return
												if (args[0] == 'on') {
													autoget = true
													reply('*Sukses mengaktifkan Auto get sticker*')
												} else if (args[0] == 'off') {
													autoget = false
													reply('*Sukses mematikan Auto get sticker*')
												} else {
													reply('Pilih on atau off!')
												}
												break
												case 'promoteall':							
												if (!isGroup) return reply(mess.only.group)
												if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												id_mem = []
												for (let o of groupMembers) {
													id_mem.push(o.jid)
												}
												benny.groupMakeAdmin(from, id_mem)
												break
												case 'demoteall':							
												if (!isGroup) return reply(mess.only.group)
												if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												id_mem = []
												for (let o of groupMembers) {
													if (o.jid && !o.jid.includes(botNumber)) {
													id_mem.push(o.jid)
													}
												}
												benny.groupDemoteAdmin(from, id_mem)
												break
											case 'demote':						
												if (!isGroup) return reply(mess.only.group)
												if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
												if (!isBotGroupAdmins) return reply(mess.only.Badmin)
												if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
												mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
												if (mentioned.length > 1) {
												teks = 'Perintah di terima, Demote :\n'
												for (let _ of mentioned) {
												teks += `@${_.split('@')[0]}\n`
												}
												mentions(teks, mentioned, true)
												benny.groupDemoteAdmin(from, mentioned)
												} else {
												mentions(`Perintah di terima, Demote : @${mentioned[0].split('@')[0]}`, mentioned, true)
												benny.groupDemoteAdmin(from, mentioned)
												}
												break
				case 'listadmin':if (!isGroup) return reply(mess.only.group)
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'listuser':
				y = 1
				mom = []
				teks = `*LIST USER FARDAN BOT*\n\n`
				for (let i of _registered) {
					mom.push(i.id)
					teks += `*${y++}*. @${i.id.split('@')[0]}\n`
				}
					benny.sendMessage(from, teks.trim(), text, {contextInfo: {mentionedJid: mom}, quoted: ben})
					break
				case 'toimg':{
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				  if (limit.isLimit(sender, _limit, limitCount, isPremium, isOwner)) return reply('Limit lu habis cok')
					limit.addLimit(sender, _limit, isPremium, isOwner)
				if (!isQuotedSticker) return reply('stickernya mana')
					reply(mess.wait)
					let encmedia = JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					let media = await benny.downloadAndSaveMediaMessage(encmedia)
					let ran = getRandom('.jpg')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Fitur Ini Khusus Sticker Ke Foto ,hatap Gunakan .togif aTau .togif2')
						let buffer = fs.readFileSync(ran)
						benny.sendMessage(from, buffer, image, {quoted: ben, caption: '     *Succes*    '})
						fs.unlinkSync(ran)
					})
				}
					break
				case 'modesimi':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (args[0] == 'on') {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 𝘁𝗼𝗱!!!')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('*Sukses mengaktifkan mode simi!*')
					} else if (args[0] == 'off') {
						samih.splice(samih.indexOf(from), 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
					 	reply('*Sukses mematikan mode simi!*')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: 𝘀𝗶𝗺𝗶𝗵 𝟭')
					} 
					break
					case 'kickarea':
					if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			  if (args[0] == 'on') {
				  if (isKickArea) return reply('Sudah aktif!!!')
						kickarea.push(from)
						fs.writeFileSync('./src/kickarea.json', JSON.stringify(kickarea))
						reply('*Sukses mengaktifkan mode kickarea!*')
			  } else if (args[0] == 'off') {
						kickarea.splice(kickarea.indexOf(from), 1)
						fs.writeFileSync('./src/kickarea.json', JSON.stringify(kickarea))
						reply('*Sukses mematikan mode kickarea!*')
					} else {
						reply('Pilih on atau off!')
					}
						break
						case 'carigrup':	case 'carigroup':{
						
						if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
						anu = await carigrup(args[0])
						if (anu.length < 1) return reply('Tidak ditemukan!')
						teks = `*[ GROUP DITEMUKAN ]*\n\n`
						for (let i of anu) {
							teks += `*${i.subject}*\n${i.link}\n==============================\n`
						}
			reply(teks)
						}
			break
				case 'antidelete':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
			const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return benny.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return benny.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke))
						reply(`*Succes Enable Antidelete Grup!*`)
					} else if (!isGroup) {
						benny.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return benny.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke))
						reply(`*Antidelete diaktifkan disemua kontak!*`)
					} else if (isGroup) {
						benny.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return benny.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return benny.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke))
					benny.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke))
						benny.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						benny.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke))
						reply(`*Antidelete dimatikan disemua kontak!*`)
					} else if (isGroup) {
						benny.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
			case 'nsfw':if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝗧𝗼𝗱 :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 𝘁𝗼𝗱!!')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(nsfw.indexOf(from), 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝟭 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, 𝟬 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: 𝗻𝘀𝗳𝘄 𝟭')
					} break
				case 'logprofile':if (!ben.key.fromMe && !isOwner) return
					if (arg.length < 1) return reply('?????? :??')
					if (args[0] == 'on') {
						logprofile = true
						reply('Success Enable Log Profile!')
					} else if (args[0] == 'off') {
						logprofile = false
						reply('Success Disable Log Profile!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}${command} on`)
					} break
				case 'loggc':if (!isGroup) return reply(mess.only.group)
					if (arg.length < 1) return reply('?????? :??')
					if (args[0] == 'on') {
						if (loggc.includes(from)) return reply('Udah lu nyalain pantek:v')
						loggc.push(from)
						fs.writeFileSync('./src/loggc.json', JSON.stringify(loggc))
						reply('Success Enable Log Gc!')
					} else if (args[0] == 'off') {
						loggc.splice(loggc.indexOf(from), 1)
						fs.writeFileSync('./src/loggc.json', JSON.stringify(loggc))
						reply('Success Disable Log Gc!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}${command} on`)
					} break
				case 'welcome':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (!isGroup) return reply(mess.only.group)
					if (arg.length < 1) return reply('Pilih Enable Atau Disable')
					if (args[0] == 'enable') {
						if (isWelkom) return reply('Udah lu nyalain pantek:v')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Success Enable Welcome!')
					} else if (args[0] == 'disable') {
						let welkz = welkom.indexOf(from)
						welkom.splice(welkz, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Success Disable Welcome!')
					} else {
						('Pilih Enable Atau Disable')
					} break
				case 'antivirus':if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply('Jadikan bot admin terlebih dahulu!')
					if (arg.length < 1) return reply('Pilih on atau off!')
					const argt = body.split(' ')
					if (argt[1] == 'on') {
						if (isKasar) return reply('Udah lu nyalain pantek:v')
						kasar.push(from)
						fs.writeFileSync('./src/antibadword.json', JSON.stringify(kasar))
						reply('*Success Enable Anti virus!*')
					} else if (argt[1] == 'off') {
						kasar.splice(kasar.indexOf(from), 1)
						fs.writeFileSync('./src/antibadword.json', JSON.stringify(kasar))
						reply('Success Disable Anti virus!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}${command} on`)
					} break
				case 'antikasar':
				if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
				if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply('Jadikan bot admin terlebih dahulu!')
					if (arg.length < 1) return reply('Pilih on atau off!')
					const argn = body.split(' ')
					if (argn[1] == 'on') {
						if (isVirus) return reply('Udah lu nyalain pantek:v')
						virus.push(from)
						fs.writeFileSync('./src/antivirus.json', JSON.stringify(virus))
						reply('Success Enable Anti kasar!')
					} else if (argn[1] == 'off') {
						virus.splice(virus.indexOf(from), 1)
						fs.writeFileSync('./src/antivirus.json', JSON.stringify(virus))
						reply('Success Disable Anti kasar!')
					} else {
						reply('𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}${command} on')
					} break
				case 'bot':if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (arg.length < 1) return reply('Pilih on atau off!')
					const argo = body.split(' ')
					if (argo[1] == 'off') {
						if (isBot) return
						_bot.push(from)
						fs.writeFileSync('./src/bot.json', JSON.stringify(_bot))
						reply('*Success Offline!*')
					} else if (argo[1] == 'on') {
						_bot.splice(_bot.indexOf(from), 1)
						fs.writeFileSync('./src/bot.json', JSON.stringify(_bot))
						reply('*Success Online!*')
					} else {
						reply(`*Ketik ${prefix}bot on/off*`)
					} break
					case 'culikall':
					if (!ben.key.fromMe && !isOwner) return
						if (arg.length < 1) return reply('Masukan id grup tujuan!')
						for (let i = 0; i < groupMembers.length; i++) {
							await sleep(3000)
							benny.groupAdd(arg, [groupMembers[i].jid])
						}
						break
					case 'antitag':if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (antitag == true) return reply('*Anti tag sudah aktif!*')
						antitag = true
						reply('*Sukses mengaktifkan mode anti tag!*')
					} else if (args[0] == 'off') {
						if (antitag == false) return reply('*Anti tag sudah mati!*')
						antitag = false
						reply('*Sukses mematikan mode anti tag!*')
			} else {
				reply('*Pilih on atau off*')
			} break
					case 'autojoin':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (autojoin == true) return reply('*Auto join sudah aktif!*')
						autojoin = true
						reply('*Sukses mengaktifkan mode auto join!*')
					} else if (args[0] == 'off') {
						if (autojoin == false) return reply('*Auto join sudah mati!*')
						autojoin = false
						reply('*Sukses mematikan mode auto join!*')
			} else {
				reply('*Pilih on atau off*')
			} break
					case 'autoblock':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (autoblock == true) return reply('*Auto block sudah aktif!*')
						autoblock = true
						reply('*Sukses mengaktifkan mode auto block!*')
					} else if (args[0] == 'off') {
						if (autoblock == false) return reply('*Auto block sudah mati!*')
						autoblock = false
						reply('*Sukses mematikan mode auto block!*')
			} else {
				reply('*Pilih on atau off*')
			} break
					case 'autodemote':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (autodemote == true) return reply('*Auto demote sudah aktif!*')
						autodemote = true
						reply('*Sukses mengaktifkan mode auto demote!*')
					} else if (args[0] == 'off') {
						if (autodemote == false) return reply('*Auto demote sudah mati!*')
						autodemote = false
						reply('*Sukses mematikan mode auto demote!*')
			} else {
				reply('*Pilih on atau off*')
			} break
				case 'autoread':
				if (!isOwner && !ben.key.fromMe) return benny.sendMessage(from, `*Maaf @${sender.split('@')[0]} Perintah ${prefix}${command} tidak ada di list ${prefix}menu!*`, text, { contextInfo: {mentionedJid: [sender]}, quoted: ben})
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (autoread) return reply('*Auto read sudah aktif!*')
						autoread = true
						reply('*Sukses mengaktifkan mode auto read!*')
					} else if (args[0] == 'off') {
						if (!autoread) return reply('*Auto read sudah mati!*')
						autoread = false
						reply('*Sukses mematikan mode auto read!*')
			} else {
				reply('*Pilih on atau off*')
			} break
				case 'autosticker':if (!isGroup) return reply(mess.only.group)
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (isAutoSticker) return reply('Udah lu nyalain pantek:v')
						autostick.push(from)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autostick))
						reply('Success Enable Auto sticker!')
					} else if (args[0] == 'off') {
						autostick.splice(autostick.indexOf(from), 1)
						fs.writeFileSync('./src/autosticker.json', JSON.stringify(autostick))
						reply('Success Disable Auto sticker!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}${command} on`)
					} break
					case 'autosbulet':if (!isGroup) return reply(mess.only.group)
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (isAutoBulet) return reply('Udah lu nyalain pantek:v')
						autobulet.push(from)
						fs.writeFileSync('./src/autobulet.json', JSON.stringify(autobulet))
						reply('Success Enable Auto sticker bulet!')
					} else if (args[0] == 'off') {
						autobulet.splice(autobulet.indexOf(from), 1)
						fs.writeFileSync('./src/autobulet.json', JSON.stringify(autobulet))
						reply('Success Disable Auto sticker bulet!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}${command} on`)
					} break
					case 'autostickerpc':if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (isAutoStick) return reply('Udah lu nyalain pantek:v')
						_autostick.push(from)
						fs.writeFileSync('./src/autostickpc.json', JSON.stringify(_autostick))
						reply('Success Enable Auto sticker!')
					} else if (args[0] == 'off') {
						_autostick.splice(_autostick.indexOf(from), 1)
						fs.writeFileSync('./src/autostickpc.json', JSON.stringify(_autostick))
						reply('Success Disable Auto sticker!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}${command} on`)
					} break
					case 'restart':
if (!isOwner && !ben.key.fromMe) return reply(mess.only.ownerB)
reply(`_*Restarting ${namabot}...*_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
			case 'antifakelink':if (!isGroup) return reply(mess.only.group)
					if (arg.length < 1) return reply('pilih on atau off udin!!')
						if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] == 'on') {
						if (isAntiFakeLink) return reply('Mode anti fake link sudah aktif')
						anfklink.push(from)
						fs.writeFileSync('./src/antifakelink.json', JSON.stringify(anfklink))
						reply(`*Sukses mengaktifkan mode anti fake link*`)
					} else if (args[0] == 'off') {
						anfklink.splice(anfklink.indexOf(from), 1)
						fs.writeFileSync('./src/antifakelink.json', JSON.stringify(anfklink))
						reply('*Sukes menonaktifkan mode anti fake link*')
					} else {
						reply('pilih on atau off udin!!')
					} break
			case 'antilink':
if (!isRegistered && !ben.key.fromMe) return reply(mess.only.Registered)
if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (arg.length < 1) return reply('pilih on atau off udin!!')
					if (args[0] == 'on') {
						if (isAntilink) return reply('Mode antilink sudah aktif')
						anlink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply(`*Sukses mengaktifkan mode antilink*`)
					} else if (args[0] == 'off') {
						anlink.splice(anlink.indexOf(from), 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply('*Sukes menonaktifkan mode antilink*')
					} else {
						reply('pilih on atau off udin!!')
					} break
					case 'vidjalan':case 'jalanvid':if (!isQuotedImage) return reply('Reply Image!')
					anu = await downloadM()
					ran = getRandom('.mp4')
					exec(`ffmpeg -framerate 25/15 -i ${anu} -c:v libx264 -vf "scale=iw*min(1080/iw\,1080/ih):ih*min(1080/iw\,1080/ih), pad=1080:1080:(1080-iw*min(1080/iw\,1080/ih))/2:(1080-ih*min(1080/iw\,1080/ih))/2,fps=30000/1001,format=yuv420p" ${ran}`, async(err) => {
						if (err) return reply('Error')
						benny.sendMessage(from, fs.readFileSync(ran), video, {quoted: ben, caption: 'Neh..', mimetype: 'video/mp4'})
					})
					break
				case 'clone':if (!isGroup) return reply(mess.only.group)
					if (arg.length < 1) return reply('?????? ???????????? ???????? ?????? ???? ??????????!!!')
					if (ben.message.extendedTextMessage === undefined || ben.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await benny.getProfilePicture(id)
						buffer = await getBaper(pp)
						benny.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('???????? ?????????? ;(???????????? ???????? ?????? ?????? ^_^')
					} break
					case 'edotensei':if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !ben.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					jom2 = groupMembers
					halahh = []
					kepoah = jom2[Math.floor(Math.random() * jom2.length)]
					halahh.push(kepoah.jid)
					setTimeout( () => {
				    reply(`Tadi Cuman Prank 🤣😭\n\n*• Note*\nJangan Terus Menerus Menggunakan Fitur Ini`)
					}, 13000) // 1000 = 1s,
					setTimeout( async() => {
				    anu = await benny.groupAdd(from, halahh)
											let jpegThumbnails = await getPP(from)
											let jpegThumbnail = await getBaper(jpegThumbnails)
											for (let user of anu.participants.filter(user => Object.values(user)[0].code == 403)) {
    let [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    let teks = `Mengundang @${jid.split('@')[0]} menggunakan invite...`
    benny.sendMessage(from, teks, text, {contextInfo:{mentionedJid:parseMention(teks)}, quoted: ben})
    await sendGroupV4Invite(from, jid, invite_code, invite_code_exp, false, 'Invitation to join my WhatsApp group', {
	jpegThumbnail: jpegThumbnail})
  }
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					benny.groupRemove(from, halahh)
					}, 5000) // 1000 = 1s, 2500) // 1000 = 1s,
					setTimeout( () => {
					}, 0) // 1000 = 1s,
					benny.sendMessage(from, `*Yahaha yang kena @${kepoah.jid.split('@')[0]} mungkin hari ini adalah hari kesialanmu, Bye*`, text, {contextInfo: {mentionedJid: halahh}, quoted: ben})
					break
case 'ingfogc':
case 'gcingfo':
case 'infogc':
case 'infogroup':

	benny.updatePresence(from, Presence.composing)
	if (!isGroup) return reply(mess.only.group)
	ppUrl = await benny.getProfilePicture(from) // leave empty to get your own
	buffer = await getBaper(ppUrl)
	benny.sendMessage(from, buffer, image, {quoted: ben, caption: `*Name* : ${groupName}\n*Member* : ${groupMembers.length}\n*Anti kasar* : ${isVirus ? 'YES' : 'NO'}\n*Anti virus* : ${isKasar ? 'YES' : 'NO'}\n*Anti link* : ${isAntilink ? 'YES' : 'NO'}\n*Admin* : ${groupAdmins.length}\n*Desc* : ${groupDesc}`})
	break
case 'ownergrup':
case 'ownergroup':
case 'ownergc':

	benny.updatePresence(from, Presence.composing) 
	var itsme = `${numbernye}@s.whatsapp.net`
	hayukkkk = {text: `Owner group ${groupName} adalah @${groupOwner.split("@")[0]}`}
	benny.sendMessage(from, hayukkkk.text, text, {quoted: ben, contextInfo:{mentionedJid: parseMention(hayukkkk.text)}})
	break
	
					case 'fitnah':	var gh = body.slice(8)
					mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid
						var replace = gh.split("|")[0];
						var targets = gh.split("|")[1];
						var bot = gh.split("|")[2];
						benny.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${targets}` }}})
						break
						case 'santet':
						if (!ben.key.fromMe) return
						if (arg.split('|')[2] && arg && ben.message.conversation) {
						mentioe = new RegExp('[-+/ +/()]', 'gi')
				teks = arg.split('|')[0].replace(mentioe, '')
				mentione = teks+'@s.whatsapp.net'
						var replace = arg.split("|")[0];
						var targets = arg.split("|")[1];
						var bot = arg.split("|")[2];
			benny.sendMessage(mentione, `${bot}`, text, {quoted: { key: { fromMe: false, participant: mentione, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${targets}` }}})
						} else if (arg.split('|')[2] && arg && ben.message.extendedTextMessage) {
						let mentioe = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
						var replace = arg.split("|")[0];
						var targets = arg.split("|")[1];
						var bot = arg.split("|")[2];
			benny.sendMessage(mentione, `${bot}`, text, {quoted: { key: { fromMe: false, participant: mentione, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${targets}` }}})
			} else if (!arg.split('|')[2] && ben.message.extendedTextMessage) {
						let mentione = ben.message.extendedTextMessage.contextInfo.participant
						var replace = arg.split("|")[0];
						var targets = arg.split("|")[1];
			benny.sendMessage(mentione, `${targets}`, text, {quoted: { key: { fromMe: false, participant: mentione, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${replace}` }}})
						} break
				case 'wait':if ((isMedia && !ben.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ben).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ben
						media = await benny.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							benny.sendMessage(from, res.video, video, {quoted: ben, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('?????????? ???????? ???????????? ?????????????? ??????')
					} break
					case 'kontak':{
					if (arg.split('|')[0] && arg.split('|')[1] && ben.message.conversation) {
				if (arg.split('|')[0].startsWith('08')) return reply(`Salah!\nContoh: ${prefix}${command}suratto ${buattag}`)
				let bodox = new RegExp('[-+/ +/()]', 'gi')
				let ks = arg.split('|')[0].replace(bodox, '')+'@s.whatsapp.net'
					teks = body.slice(8)
					mentioned = ks
					apg = teks.split('|')[1]
					const vcardi = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${apg} \n` // GANTI NAMA LU
            + `ORG:${apg};\n`
            + `TEL;type=CELL;type=VOICE;waid=${mentioned.split('@')[0]}:+${mentioned.split('@')[0]}\n` // GANTI NOMOR LU
            + `END:VCARD`
			benny.sendMessage(from, {displayName: `${apg}`, vcard: vcardi}, contact, {thumbnail: setthumb})
			} else if (arg.split('|')[0] && arg.split('|')[1] && ben.message.extendedTextMessage) {
			mentioned = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
					teks = body.slice(8)
					apk = teks.split('|')[0]
					apg = teks.split('|')[1]
					const vcardi = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${apg} \n` // GANTI NAMA LU
            + `ORG:${apg};\n`
            + `TEL;type=CELL;type=VOICE;waid=${mentioned.split('@')[0]}:+${mentioned.split('@')[0]}\n` // GANTI NOMOR LU
            + `END:VCARD`
			benny.sendMessage(from, {displayName: `${apg}`, vcard: vcardi}, contact, {thumbnail: setthumb})
			} else if (arg && !arg.includes('|') && ben.message.extendedTextMessage) {
				mentioned = m.quoted.sender
					const vcardi = 'BEGIN:VCARD\n'
            + `VERSION:3.0\n`
            + `FN:${arg} \n` // GANTI NAMA LU
            + `ORG:${arg};\n`
            + `TEL;type=CELL;type=VOICE;waid=${mentioned.split('@')[0]}:+${mentioned.split('@')[0]}\n` // GANTI NOMOR LU
            + `END:VCARD`
			benny.sendMessage(from, {displayName: `${arg}`, vcard: vcardi}, contact, {thumbnail: setthumb})
			} else {
				reply(`Salah!\nPenggunaan: ${prefix}${command} 6285709331584|Woy`)
			}
					}
				break
			default: 
			if (budy.startsWith('$')){
				if (!ben.key.fromMe && !isOwner) return
				const sep = budy.split("\n")
                let exc = budy.replace(sep[0]+"\n", "").slice(2)
                exec(exc, (err, stdout) => {
					if (err) return benny.sendMessage(from, `${err}`, text, { quoted: ben })
					if (stdout) {
						benny.sendMessage(from, stdout, text)
					}
				})
			}
			}
	} catch (e) {
            e = String(e)
            if (!e.includes("benny.isZero") && !e.includes("Cannot convert undefined or null to object")) {
              const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss DD:MM:YYYY')
              
			   console.log(color(tampilTanggal, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color("[ ERROR ]", "red"), color(e, 'yellow'))
            }
			}
	})

                     
/**
*@Thanks For Allah
*@Thanks For Nafiz
*@Thanks For Ipul
*@Thanks For Hanif
*@Thanks For ArugaZ
*@Thanks For FaizBastomi
*@Thanks For Adiwajshing
*@Thanks For SlavyanDesu
*@Thanks For Ramlan
*@Thanks For Bubur
*@Thanks For Dani
*@Thanks For Akbar
*/


	benny.on('CB:Blocklist', json => {
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	
benny.on('message-delete', async (hurtz) => {
	console.log(hurtz)
	if (hurtz.key.id.startsWith('3EB0') && hurtz.key.id.length === 12) return
if (hurtz.key.remoteJid === 'status@broadcast') return
	try {
		const from = hurtz.key.remoteJid
		const botNumber = benny.user.jid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		sender = hurtz.key.fromMe ? benny.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (isRevoke) {
hurtz.message = (Object.keys(hurtz.message)[0] === 'ephemeralMessage') ? hurtz.message.ephemeralMessage.message : hurtz.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = benny.chats.get(hurtz.key.remoteJid)
let a = c.messages.dict[`${hurtz.key.id}|${hurtz.key.fromMe ? 1 : 0}`]
let co3ntent = benny.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
benny.copyNForward(hurtz.key.remoteJid, hurtz.message)
benny.sendMessage(hurtz.key.remoteJid, `▷ \`\`\`Anti Delete\`\`\`
▢ \`\`\`Nama : @${hurtz.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: hurtz.message, contextInfo: {"mentionedJid": [hurtz.participant]}})
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})
function clean(text) {
            if (typeof text === "string")
              return text
                .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                .replace(/@/g, `@${String.fromCharCode(8203)}`);
            //eslint-disable-line prefer-template
            else return text;
            }
}
