const cooldown = 28800000
let handler = async (m, { conn, text, usedPrefix }) => {
let dapat = (Math.floor(Math.random() * 5000))
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!who) throw 'Tag salah satu lah, yang kamu ingin berdagang bareng'
  let ctimer = (new Date - user.lastcode)
let _ctimer = (cooldown - ctimer)
let timers = clockString(_ctimer)
let user = global.db.data.users[who]

  if (user.lastdagang < cooldown) {
  if (4999 > user.money) throw 'Target tidak memiliki modal harap masukkan modal 5000'
  if (4999 > user.money) throw 'kamu tidak memiliki modal harap masukkan modal 5000'
  user.money -= dapat * 1
 user.money -= dapat * 1
  user.lastdagang = new Date * 1
  let caption = `Mohon tunggu kak..\nKamu dan @${who.split("@")[0]} sedang berdagang.. 😅\n\nKamu dan @${who.split("@")[0]} meletakkan modal -${dapat} 😅`
  
    await conn.sendButton(m.chat, caption, wm, null, [['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]], m, { mentions: conn.parseMention(caption) })
  
  let _caption = `Selamat kamu dan @${who.split("@")[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${user.money += 5000} Money kamu\n\nPenghasilan dagang @${who.split("@")[0]} didapatkan +5000\n${user.money += 5000} Money @${who.split("@")[0]}`
  
  let __caption = `Selamat kamu dan @${who.split("@")[0]} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${user.money += 10000} Money kamu\n\nPenghasilan dagang @${who.split("@")[0]} didapatkan +10000\n${user.money += 10000} Money @${who.split("@")[0]}`
  
  setTimeout(() => {
					await conn.sendButton(m.chat, _caption, wm, null, [['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]], m, { mentions: conn.parseMention(_caption) })
					}, 3600000)
  setTimeout(() => {
					await conn.sendButton(m.chat, _caption, wm, null, [['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]], m, { mentions: conn.parseMention(_caption) })
					}, 7200000)
  setTimeout(() => {
					await conn.sendButton(m.chat, _caption, wm, null, [['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]], m, { mentions: conn.parseMention(_caption) })
					}, 10800000)
  setTimeout(() => {
					await conn.sendButton(m.chat, _caption, wm, null, [['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]], m, { mentions: conn.parseMention(_caption) })
					}, 14400000)
  setTimeout(() => {
					await conn.sendButton(m.chat, _caption, wm, null, [['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]], m, { mentions: conn.parseMention(_caption) })
					}, 18000000)
  setTimeout(() => {
					await conn.sendButton(m.chat, _caption, wm, null, [['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]], m, { mentions: conn.parseMention(_caption) })
					}, 21600000)
  setTimeout(() => {
					await conn.sendButton(m.chat, _caption, wm, null, [['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]], m, { mentions: conn.parseMention(_caption) })
					}, 25200000)
  setTimeout(() => {
					await conn.sendButton(m.chat, __caption, wm, null, [['Invetory', `${usedPrefix}inv`], ['Profile', `${usedPrefix}profile`]], m, { mentions: conn.parseMention(__caption) })
					}, 28800000)
					
} else {
return conn.sendButton(m.chat, `Anda Sudah Berdagang , tunggu\n${timers} lagi..`, wm, null, [['Adventure','.adventure']], m)
}
}
handler.help = ['berdagang *@tag*']
handler.tags = ['rpg']
handler.command = /^(berdagang|dagang)$/i
handler.limit = true
handler.group = true
handler.cooldown = cooldown
export default handler 

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
