import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let frep = { contextInfo: { externalAdReply: {title: wm, body: author, sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(gataMenu.getRandom())).buffer() }}}
if (!text) return await conn.reply(m.chat, `${lenguajeGB.smsMalused2()} ⊱ *${usedPrefix + command} Bellyache*`, fkontak, m)
 //conn.sendButton(m.chat, lenguajeGB.smsMalused2(), `⊱ *${usedPrefix + command} Bellyache*`, null, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], fkontak, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result

let spotifyi = `✨ 𝐓𝐈𝐓𝐔𝐋𝐎 :
_${title}_

🗣️ 𝐀𝐑𝐓𝐈𝐒𝐓𝐀 : 
» _${artists}_

🌐 𝐔𝐑𝐋 : 
» _${link}_

💚 𝐔𝐑𝐋 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀 :
» _${json2.result.link}_

🎶 𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 𝙲𝙰𝙽𝙲𝙸𝙾𝙽...*
${wm}`

conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, fkontak, m)
//await conn.sendButton(m.chat, '🎧 *Ｓ Ｐ Ｏ Ｔ Ｉ Ｆ Ｙ* 🎧', spotifyi, thumbnail, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m, frep)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.command = /^(spotify|music)$/i
handler.limit = 1
handler.level = 3
export default handler
