let handler = async (m, { conn }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'hornycard.png', '🔥 𝙴𝚂𝚃𝙰́ 𝙻𝙸𝚂𝚃𝙾!!\n𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖', m)
}
handler.help = ['hornycard', 'hornylicense']
handler.tags = ['maker'] 
handler.command = /^(horny(card|license))$/i 
export default handler
