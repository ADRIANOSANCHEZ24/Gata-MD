let handler = async (m, { conn, usedprefix, text }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/pixelate', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '🌀 *AQUÍ ESTA LA IMAGEN PIXELADA!!*\n𝙏𝙃𝙀 𝙈𝘼𝙆𝘼𝙉𝘼𝙆𝙔 - 𝘽𝙊𝙏  | 𝘼𝘿𝙍𝙄𝘼𝙉𝙊 𝙎𝘼𝙉𝘾𝙃𝙀𝙕', m)
}
handler.help = ['pixel','difuminar']
handler.tags = ['maker']
handler.command = /^(pixel|pixelar|difuminar)$/i
export default handler
