const fetch = require('node-fetch')
const { fetchJson } = require('./fetcher')
const fs = require('fs')
const os = require('os')
const path = require('path')
const util = require('util')
const moment = require('moment-timezone')
const time = moment().format('DD/MM HH:mm:ss')
const color = require('./color')
const { Readable, Writable } = require('stream')

const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

function INFOLOG(info) {
    return console.log('\x1b[1;34m~\x1b[1;37m>>', '[\x1b[1;33mINF\x1b[1;37m]', time, color.color(info))
}

function post(url, formdata) {
    INFOLOG(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}

function ytv(url) {
    return new Promise(async (resolve, reject) => {
        if (ytIdRegex.test(url)) {
		let b = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=ChOkYbOT8&url=${url}`)
			if (b.status !== 200) return 'Web Sedang Gangguan'
		const {title, thumbnail } = b.result
            resolve({
                                dl_link: b.result.link,
                                thumb: thumbnail,
                                title,
                                filesizeF: b.result.size,
                                filesize: parseFloat(b.result.size) * (1000 * /MB$/.test(b.result.size))
                            })
        } else reject('URL INVALID')
    })
}
function yta(url) {
    return new Promise(async (resolve, reject) => {
        if (ytIdRegex.test(url)) {
		let b = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=ChOkYbOT8&url=${url}`)
			if (b.status !== 200) return 'Web Sedang Gangguan'
		const {title, thumbnail } = b.result
            resolve({
                                dl_link: b.result.link,
                                thumb: thumbnail,
                                title,
                                filesizeF: b.result.size,
                                filesize: parseFloat(b.result.size) * (1000 * /MB$/.test(b.result.size))
                            })
        } else reject('URL INVALID')
    })
}

async function ytsr(query) {
    let link = /youtube\.com\/results\?search_query=/.test(query) ? query : ('https://youtube.com/results?search_query=' + encodeURIComponent(query))
    let res = await fetch(link)
    let html = await res.text()
    let data = new Function('return ' + /var ytInitialData = (.+)/.exec(html)[1])()
    let lists = data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents
    let formatList = {
        query,
        link,
        items: []
    }
    for (let list of lists) {
        let type = {
            videoRenderer: 'video',
            shelfRenderer: 'playlist',
            radioRenderer: 'live',
            channelRenderer: 'channel',
            showingResultsForRenderer: 'typo',
            horizontalCardListRenderer: 'suggestionCard',
        }[Object.keys(list)[0]] || ''
        let content = list[Object.keys(list)[0]] || {}
        if (content) {
            switch (type) {
                case 'typo':
                    formatList.correctQuery = content.correctedQuery.runs[0].text
                    break
                case 'video':
                    formatList.items.push({
                        type,
                        title: content.title.runs[0].text.replace('â€’', '‒'),
                        views: content.viewCountText.simpleText,
                        description: content.descriptionSnippet ? content.descriptionSnippet.runs[0].text.replace('Â ...', ' ...') : '',
                        duration: content.lengthText ? [content.lengthText.simpleText, content.lengthText.accessibility.accessibilityData.label] : ['', ''],
                        thumbnail: content.thumbnail.thumbnails,
                        link: 'https://youtu.be/' + content.videoId,
                        videoId: content.videoId,
                        author: {
                            name: content.ownerText.runs[0].text,
                            link: content.ownerText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url,
                            thumbnail: content.channelThumbnailWithLinkRenderer ? content.channelThumbnailWithLinkRenderer.thumbnail.thumbnails : [],
                            verified: content.ownerBadges && /BADGE_STYLE_TYPE_VERIFIED/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? /BADGE_STYLE_TYPE_VERIFIED_ARTIST/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? 'artist' : true : false
                        }
                    })
                    break
                case 'channel':
                    formatList.items.push({
                        type,
                        title: content.title ? content.title.simpleText.replace('â€’', '‒') : '',
                        description: content.descriptionSnippet ? content.descriptionSnippet.runs[0].text.replace('Â ...', ' ...') : '',
                        videoCount: content.videoCountText ? content.videoCountText.runs[0].text : '',
                        thumbnail: content.thumbnail.thumbnails,
                        subscriberCount: content.subscriberCountText ? content.subscriberCountText.simpleText.replace('Â ', ' ') : '',
                        link: 'https://youtube.com' + content.navigationEndpoint.commandMetadata.webCommandMetadata.url,
                        verified: content.ownerBadges && /BADGE_STYLE_TYPE_VERIFIED/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? /BADGE_STYLE_TYPE_VERIFIED_ARTIST/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? 'artist' : true : false
                    })
                    break
                case 'playlist':
                    formatList.items.push({
                        type,
                        title: content.title.simpleText.replace('â€’', '‒'),
                    })
                    break
            }
        }
    }
    return formatList
}

function baseURI(buffer = Buffer.from([]), metatype = 'text/plain') {
    return `data:${metatype};base64,${buffer.toString('base64')}`
}

/**
 * Writable Stream Callback
 * @callback WritableStreamCallback
 * @param {WritableStream} stream 
 */

/**
 * Convert Writable Stream to Buffer
 * @param {WritableStreamCallback} cb Callback with stream
 * @returns {Promise<Buffer>}
 */
function stream2Buffer(cb = noop) {
    return new Promise(resolve => {
        let write = new Writable()
        write.data = []
        write.write = function (chunk) {
            this.data.push(chunk)
        }
        write.on('finish', function () {
            resolve(Buffer.concat(this.data))
        })

        cb(write)
    })
}

/**
 * Convert Buffer to Readable Stream
 * @param {Buffer} buffer
 * @returns {ReadableStream}
 */
function buffer2Stream(buffer) {
    return new Readable({
        read() {
            this.push(buffer)
            this.push(null)
        }
    })
}

/**
 * No Operation
 *  */
function noop() { }

module.exports.baseURI = baseURI
module.exports.ytsr = ytsr
module.exports.yta = yta
module.exports.ytv = ytv
module.exports.buffer2Stream = buffer2Stream
module.exports.stream2Buffer = stream2Buffer
module.exports.noop = noop
