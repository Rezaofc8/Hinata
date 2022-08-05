import fetch from 'node-fetch'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (!args[0]) throw `Use example ${usedPrefix}${command} http://i.coco.fun/short/1513tui/`
if (!args[1]) return conn.sendButton(m.chat, htki + ' COCOFUN ' + htka, null, null, [['NO WM', `.cocofun ${args[0]} nowm`],['WITH WM', `.cocofun ${args[0]} withwm`]],m)
let res = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=${global.lolkey}&url=${args[1]}`)
    let x = await res.json()
    let nw = "withwm"
  if (args[1] == 'withwm') {
    nw = x.result.withwm
  }
  if (args[1] == 'nowm') {
    nw = x.result.nowm
  }
  let { url } = nw
    conn.sendButton(m.chat, `*${htki} COCOFUN ${htka}*
*title:* ${x.result.title}
*tag:* ${x.result.tag}
*likes:* ${x.result.likes}
*dislike:* ${x.result.dislike}

*views:* ${x.result.views}
*uploader:* ${x.result.uploader}
*duration:* ${x.result.duration}
*dislike:* ${x.result.dislike}
    `, title + '.mp4', await(await fetch(url)).buffer(), [['🎀 Menu', '/menu']], m, { contextInfo: {
            mimetype: 'video/mp4',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(x.result.thumbnail)).buffer(),
    sourceUrl: url
     }}
  })
  }
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((cocofun)(downloder|dl)?)$/i

export default handler
