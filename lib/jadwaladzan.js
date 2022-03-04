const { MessageType } = require('@adiwajshing/baileys')
const { text } = MessageType
const fs = require('fs')
let moment = require('moment-timezone');
const solat = require('./jadwalsholat')
let { fetchJson } = require('./fetcher');
let {jadwalSolat} = require('./function')
let axios = require('axios')
let cheerio = require('cheerio')
let jaso = JSON.parse(fs.readFileSync('./lib/jadwalsolat.json'))
let cron = require('node-cron')
let adzani = JSON.parse(fs.readFileSync('./src/adzan.json'))
let buatadzan = moment().tz('Asia/Jakarta').format("HH:mm")

const jadwalAdzan = async (benny, adadeh) => {
	let adzan = await jadwalSolat('jakarta-timur')
		let subuh = adzan.shubuh
		let dzuhur = adzan.zuhur
		let ashar = adzan.ashar
		let maghrib = adzan.magrib
		let isya = adzan.isya
		let nama = 'Jakarta'
		setInterval(() => {
		if (buatadzan === isya) {
			benny.sendMessage(adzani[i], `Telah Masuk Waktu sholat Isya\nUntuk ${nama} dan sekitarnya\nPukul: ${buatadzan}\n             ${namabot}`, text, {quoted: adadeh})
		} else if (buatadzan === subuh) {
					benny.sendMessage(adzani[i], `Telah Masuk Waktu sholat Shubuh\nUntuk ${nama} dan sekitarnya\nPukul: ${buatadzan}\n             ${namabot}`, text, {quoted: adadeh})
			} else if (buatadzan === dzuhur) {
		benny.sendMessage(adzani[i], `Telah Masuk Waktu sholat Dzuhur\nUntuk ${nama} dan sekitarnya\nPukul: ${buatadzan}\n             ${namabot}`, text, {quoted: adadeh})
		} else if (buatadzan === maghrib) {
			benny.sendMessage(adzani[i], `Telah Masuk Waktu sholat Maghrib\nUntuk ${nama} dan sekitarnya\nPukul: ${buatadzan}\n             ${namabot}`, text, {quoted: adadeh})
		}
		  }, 1000)
		}

module.exports = {jadwalAdzan}
