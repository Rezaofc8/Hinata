import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command }) => {
        let res = await fetch(`https://api.lolhuman.xyz/api/quran?apikey=${global.lolkey}`)
        let json = await res.json()
        let lis = json.result

       let contoh = `contoh:\n*${usedPrefix}surah An-Nisaa 1*\n*${usedPrefix}ayta An-Nisaa 1*\n*${usedPrefix}tafsir An-Nisaa 1*\n*${usedPrefix}alquran 1 1*\n\nharus sesuai yang ada pada daftar surah dibawah ini, dan 1 aja ayatnya\n\n
${lis['1']}
${lis['2']}
${lis['3']}
${lis['4']}
${lis['5']}
${lis['6']}
${lis['7']}
${lis['8']}
${lis['9']}
${lis['10']}
${lis['11']}
${lis['12']}
${lis['13']}
${lis['14']}
${lis['15']}
${lis['16']}
${lis['17']}
${lis['18']}
${lis['19']}
${lis['20']}
${lis['21']}
${lis['22']}
${lis['23']}
${lis['24']}
${lis['25']}
${lis['26']}
${lis['27']}
${lis['28']}
${lis['29']}
${lis['30']}
${lis['31']}
${lis['32']}
${lis['33']}
${lis['34']}
${lis['35']}
${lis['36']}
${lis['37']}
${lis['38']}
${lis['39']}
${lis['40']}
${lis['41']}
${lis['42']}
${lis['43']}
${lis['44']}
${lis['45']}
${lis['46']}
${lis['47']}
${lis['48']}
${lis['49']}
${lis['50']}
${lis['51']}
${lis['52']}
${lis['53']}
${lis['54']}
${lis['55']}
${lis['56']}
${lis['57']}
${lis['58']}
${lis['59']}
${lis['60']}
${lis['61']}
${lis['62']}
${lis['63']}
${lis['64']}
${lis['65']}
${lis['66']}
${lis['67']}
${lis['68']}
${lis['69']}
${lis['70']}
${lis['71']}
${lis['72']}
${lis['73']}
${lis['74']}
${lis['75']}
${lis['76']}
${lis['77']}
${lis['78']}
${lis['79']}
${lis['80']}
${lis['81']}
${lis['82']}
${lis['83']}
${lis['84']}
${lis['85']}
${lis['86']}
${lis['87']}
${lis['88']}
${lis['89']}
${lis['90']}
${lis['91']}
${lis['92']}
${lis['93']}
${lis['94']}
${lis['95']}
${lis['96']}
${lis['97']}
${lis['98']}
${lis['99']}
${lis['100']}
${lis['101']}
${lis['102']}
${lis['103']}
${lis['104']}
${lis['105']}
${lis['106']}
${lis['107']}
${lis['108']}
${lis['109']}
${lis['110']}
${lis['111']}
${lis['112']}
${lis['113']}
${lis['114']}`
        m.reply(contoh)
        
}
handler.help = ['daftarsurah']
handler.tags = ['islam']
handler.command = /^((list|daftar)sura(t|h))$/i
export default handler