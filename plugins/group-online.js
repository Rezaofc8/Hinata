let handler = async (m, { conn, args, isAdmin, participants, groupMetadata, isOwner }) => {
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      dfail('admin', m, conn)
      throw false
    }
  }
  const getGroupAdmins = (participants) => {
        let admins = []
        for (let i of participants) {
            i.presences === "presences" ? admins.push(i.id) : ''
        }
        return admins
    }
    const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
  // let id = args && /.*@g.us/.test(args[0]) ? args[0] : m.chat
  conn.reply(m.chat, '┌「 *Daftar Wibu* 」\n' + listAdmin + '\n└────', m, {
    contextInfo: { mentionedJid: listAdmin }
  })
}
handler.help = ['online']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i

export default handler