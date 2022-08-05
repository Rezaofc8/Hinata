import { tiktokdl } from '@bochilteam/scraper'
import { aiovideodl } from './lib/tiktokdl.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
conn.sendButton(m.chat, `*Nickname:* ${nickname}
*Description:* ${description}
`.trim(), 'tiktok.mp4', await(await fetch(url)).buffer(), [['🎀 Menu', '/menu']], m, { contextInfo: {
            mimetype: 'video/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(logo)).buffer(),
    sourceUrl: url
     }}
  })
} catch {
const { res } = await aiovideodl(args[0])
    const urll = res.data.url
    if (!urll) throw 'Can\'t download video!'
conn.sendButton(m.chat, `*Nickname:* ${wm}
`.trim(), 'tiktok.mp4', await(await fetch(urll)).buffer(), [['Mp3', '/tomp3'], ['Back', '/menu']], m, { contextInfo: {
            mimetype: 'video/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(logo)).buffer(),
    sourceUrl: urll
     }}
  })
}
}
handler.help = ['tiktok2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok2)?)$/i

export default handler
