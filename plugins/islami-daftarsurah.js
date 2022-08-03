import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command }) => {
        let res = await fetch(`https://api.lolhuman.xyz/api/quran?apikey=${global.lolkey}`)
        let json = await res.json()
        let ls = json.result

       let contoh = `contoh:\n*${usedPrefix}surah An-Nisaa 1*\n*${usedPrefix}ayta An-Nisaa 1*\n*${usedPrefix}tafsir An-Nisaa 1*\n*${usedPrefix}alquran 1 1*\n\nharus sesuai yang ada pada daftar surah dibawah ini, dan 1 aja ayatnya\n\n
${ls.[1]}
${ls.[2]}
${ls.[3]}
${ls.[4]}
${ls.[5]}
${ls.[6]}
${ls.[7]}
${ls.[8]}
${ls.[9]}
${ls.[10]}
${ls.[11]}
${ls.[12]}
${ls.[13]}
${ls.[14]}
${ls.[15]}
${ls.[16]}
${ls.[17]}
${ls.[18]}
${ls.[19]}
${ls.[20]}
${ls.[21]}
${ls.[22]}
${ls.[23]}
${ls.[24]}
${ls.[25]}
${ls.[26]}
${ls.[27]}
${ls.[28]}
${ls.[29]}
${ls.[30]}
${ls.[31]}
${ls.[32]}
${ls.[33]}
${ls.[34]}
${ls.[35]}
${ls.[36]}
${ls.[37]}
${ls.[38]}
${ls.[39]}
${ls.[40]}
${ls.[41]}
${ls.[42]}
${ls.[43]}
${ls.[44]}
${ls.[45]}
${ls.[46]}
${ls.[47]}
${ls.[48]}
${ls.[49]}
${ls.[50]}
${ls.[51]}
${ls.[52]}
${ls.[53]}
${ls.[54]}
${ls.[55]}
${ls.[56]}
${ls.[57]}
${ls.[58]}
${ls.[59]}
${ls.[60]}
${ls.[61]}
${ls.[62]}
${ls.[63]}
${ls.[64]}
${ls.[65]}
${ls.[66]}
${ls.[67]}
${ls.[68]}
${ls.[69]}
${ls.[70]}
${ls.[71]}
${ls.[72]}
${ls.[73]}
${ls.[74]}
${ls.[75]}
${ls.[76]}
${ls.[77]}
${ls.[78]}
${ls.[79]}
${ls.[80]}
${ls.[81]}
${ls.[82]}
${ls.[83]}
${ls.[84]}
${ls.[85]}
${ls.[86]}
${ls.[87]}
${ls.[88]}
${ls.[89]}
${ls.[90]}
${ls.[91]}
${ls.[92]}
${ls.[93]}
${ls.[94]}
${ls.[95]}
${ls.[96]}
${ls.[97]}
${ls.[98]}
${ls.[99]}
${ls.[100]}
${ls.[101]}
${ls.[102]}
${ls.[103]}
${ls.[104]}
${ls.[105]}
${ls.[106]}
${ls.[107]}
${ls.[108]}
${ls.[109]}
${ls.[110]}
${ls.[111]}
${ls.[112]}
${ls.[113]}
${ls.[114]}`
        m.reply(contoh)
        
}
handler.help = ['daftarsurah']
handler.tags = ['islam']
handler.command = /^((list|daftar)sura(t|h))$/i
export default handler