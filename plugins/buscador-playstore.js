import fetch from 'node-fetch'

let handler = async (m, { conn, text, args }) => {
	if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 𝙿𝙰𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁 🔍`
	let enc = encodeURIComponent(text)
try {
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`🔍 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 : ${gPlay.titulo}
🧬 𝐈𝐃𝐄𝐍𝐓𝐈𝐅𝐈𝐂𝐀𝐃𝐎𝐑 : ${gPlay.id}
⛓️ 𝐋𝐈𝐍𝐊 : ${gPlay.link}
🖼️ 𝐈𝐌𝐀𝐆𝐄𝐍 : ${gPlay.imagen}
✍️ 𝐃𝐄𝐒𝐀𝐑𝐑𝐎𝐋𝐋𝐀𝐃𝐎𝐑 : ${gPlay.desarrollador}
📜 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈𝐎𝐍 : ${gPlay.descripcion}
💲 𝐌𝐎𝐍𝐄𝐃𝐀 : ${gPlay.moneda}
🎭 𝐆𝐑𝐀𝐓𝐈𝐒? : ${gPlay.gratis}
💸 𝐏𝐑𝐄𝐂𝐈𝐎 : ${gPlay.precio}
📈 𝐏𝐔𝐍𝐓𝐔𝐀𝐂𝐈𝐎𝐍 : ${gPlay.puntuacion}`},{quoted:m})
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}  
}

handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i

export default handler 
