let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let user = `@${m.sender.split`@`[0]}`
let delet = m.key.participant;
let bang = m.key.id;
  
if (isBotAdmin && m.isGroup) {
if (m.text && m.text.toLowerCase().includes("wa.me/settings") || m.text.toLowerCase().includes("wa.me/setting")) {
conn.sendMessage(m.chat, { text: `⚠️ 𝐒𝐄 𝐃𝐄𝐓𝐄𝐂𝐓𝐎 𝐔𝐍 𝐁𝐔𝐆 ⚠️\n\n𝙼𝙰𝚁𝙲𝙰𝚁 𝙴𝙻 𝙲𝙷𝙰𝚃 𝙲𝙾𝙼𝙾 𝙻𝙴𝙸𝙳𝙾 ${"\n".repeat(400)}\n👋 𝚂𝙴𝚁𝙰́ 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 : ${user}`, mentions: [m.sender] }, { quoted: fkontak })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
return null
}
}}
export default handler;
