import fetch from 'node-fetch'
import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) return m.reply(`Example : ${usedPrefix + command} query`)

if (command == 'pinterest') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Lolhuman`
let js = await fetch(`https://api.lolhuman.xyz/api/pinterest?apikey=${global.lolkey}&query=${text}`)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x, null, null, null, null, [
      ['Pinterest1', usedPrefix + 'pinterest1 ' + text],
      ['Pinterest2', usedPrefix + 'pinterest2 ' + text],
      ['Pinterest3', usedPrefix + 'pinterest3 ' + text]
    ], m)
    }

if (command == 'pinterest1') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Leys`
let url = `https://leyscoders-api.herokuapp.com/api/pinsearch?q=${text}&apikey=MIMINGANZ`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Pinterest2', usedPrefix + 'pinterest2 ' + text],
      ['Pinterest3', usedPrefix + 'pinterest3 ' + text],
      ['Pinterest4', usedPrefix + 'pinterest4 ' + text]
    ], m)
    }
    
if (command == 'pinterest2') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Kann`
let js = await fetch(`https://kannxapi.herokuapp.com/api/pinterest?query=${text}`)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Pinterest3', usedPrefix + 'pinterest1 ' + text],
      ['Pinterest4', usedPrefix + 'pinterest4 ' + text],
      ['Pinterest5', usedPrefix + 'pinterest5 ' + text]
    ], m)
    }

if (command == 'pinterest3') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Beni`
let js = await fetch(`https://rest-beni.herokuapp.com/api/pinterest?query=${text}`)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Pinterest4', usedPrefix + 'pinterest1 ' + text],
      ['Pinterest5', usedPrefix + 'pinterest5 ' + text],
      ['Pinterest6', usedPrefix + 'pinterest6 ' + text]
    ], m)
    }

if (command == 'pinterest4') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Erdwpe`
let js = await fetch(`https://erdwpe-api.herokuapp.com/search/pinterest?query=${text}`)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Pinterest5', usedPrefix + 'pinterest1 ' + text],
      ['Pinterest6', usedPrefix + 'pinterest6 ' + text],
      ['Pinterest', usedPrefix + 'pinterest ' + text]
    ], m)
    }

if (command == 'pinterest5') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Melcanz Limit`
let js = await fetch(`https://melcanz.com/pinterestSearch?q=${text}&apikey=manHkmst`)
let jp = await js.json()
let x = jp.data
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Pinterest6', usedPrefix + 'pinterest6 ' + text],
      ['Pinterest', usedPrefix + 'pinterest ' + text],
      ['Pinterest1', usedPrefix + 'pinterest1 ' + text]
    ], m)
    }

if (command == 'pinterest6') {
    let caption = `*Hasil pencarian* ${text}\n\n*Note:* Gak sesuai`
const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', caption.trim(), m)
}

if (command == 'pinterest7') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Png`
let js = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${global.lolkey}&query=${text}`)
let jp = await js.json()
let x = jp.result
await conn.sendFile(m.chat, x.getRandom(), caption)
    }

if (command == 'pinterest8') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* tzy`
let js = await fetch(`https://tyz-api.herokuapp.com/search/pinterest?query=${text}`)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Pinterest7', usedPrefix + 'pinterest7 ' + text],
      ['Pinterest', usedPrefix + 'pinterest ' + text],
      ['Pinterest1', usedPrefix + 'Pinterest1 ' + text]
    ], m)
    }

if (command == 'pinterest9') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* tzy`
let js = await fetch(`https://api.vhtear.com/pinterest?query=${text}&apikey=nekobotofficial`)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Pinterest6', usedPrefix + 'pinterest6 ' + text],
      ['Pinterest7', usedPrefix + 'pinterest7 ' + text],
      ['Pinterest', usedPrefix + 'Pinterest ' + text]
    ], m)
    }


}
handler.command = handler.help = ['pinterest', 'pinterest1', 'pinterest2', 'pinterest3', 'pinterest4', 'pinterest5', 'pinterest6', 'pinterest7', 'pinterest8', 'pinterest9']
handler.tags = ['random']

export default handler
