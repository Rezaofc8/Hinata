import {
    aiovideodl
} from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

try {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://vt.tiktok.com/ZSdDyUHcR/https://www.tiktok.com/@kata__kasar/video/7088823247373946138'`

const { title, medias } = await aiovideodl(args[0])
for (const { url, quality, formattedSize} of medias) await conn.sendButton(m.chat, `*AIOVIDEO DOWNLOADER*\n\n${title ? `*Title:* ${title}` : "NotFound"}\n*💽Format:* ${quality ? `${quality}` : "Unknown"}\n*📨Size:* ${formattedSize ? `${formattedSize}` : "countless" }\n`, title + '.mp4', await(await fetch(url)).buffer(), [['🎀 Menu', '/menu']], m, { contextInfo: {
            mimetype: 'video/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(thumbnail)).buffer(),
    sourceUrl: url
     }}
  })
} catch (e) {
m.reply("Eror")
}
}
handler.help = ['aiovideo2'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(aio(video2)?(dl2)?)$/i

export default handler
