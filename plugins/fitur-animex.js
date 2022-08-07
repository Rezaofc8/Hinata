let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Example : ${usedPrefix + command} neon helo \n*List Efek:*\nhusbu\nlatestnekopoi\nloli\nneko\nrandomnhentai\nwaifu`)
        let images = `https://api-xcoders.xyz/api/anime/${text}?apikey=xcoders`
        let caption: `*⎔┉━「 Animex 」━┉⎔*
🤠 *Query* : ${text}`
                await conn.sendButton(m.chat, hasil, wm, await(await fetch(images)).buffer(), [['➡️Next Image➡️', `.animex ${text}`]], m, { quoted: fgif, fileLength: fsizedoc, seconds: fsizedoc })
}
handler.help = ['animex <text>']
handler.tags = ['maker']
handler.command = /^(animex|animeimg)$/i

export default handler