import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = './media/menus/Menu1.jpg'
let vn = './media/infobot.mp3'
let grupos = [nna, nn, nnn, nnntt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'The LoliBot-MD', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let old = performance.now()
  //await m.reply('_Realizando test_')
  let neww = performance.now()
  let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let speed = neww - old

let info = `╭━━━━[ 𝐌𝐀𝐊𝐀𝐍𝐀𝐊𝐘 - 🤖 ]━━━━━⬣
┃➥ 𝙲𝚁𝙴𝙰𝙳𝙾𝚁
┃👑 𝙰𝙳𝚁𝙸𝙰𝙽𝙾 𝚂𝙰𝙽𝙲𝙷𝙴𝚉
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙾
┃😁 ${ig}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝚅𝙴𝚁𝚂𝙸𝙾́𝙽 𝙰𝙲𝚃𝚄𝙰𝙻
┃🤖 ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝙿𝚁𝙴𝙵𝙸𝙹𝙾
┃⚡ ${usedPrefix}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂
┃👻 ${chats.length - groups.length}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝙲𝙷𝙰𝚃𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂
┃👻 ${groups.length} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝙲𝙷𝙰𝚃𝚂 𝙴𝙽 𝚃𝙾𝚃𝙰𝙻
┃👻 ${chats.length} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳
┃📝 ${uptime}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂
┃😎 ${totalreg}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳
┃🚀 ${speed}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝙱𝙾𝚃 𝚂𝙴𝙲𝚄𝙽𝙳𝙰𝚁𝙸𝙾𝚂 𝙰𝙲𝚃𝙸𝚅𝙾
┃🤖 ${totaljadibot.length}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝙻𝙴𝙲𝚃𝚄𝚁𝙰 𝙰𝚄𝚃𝙾𝙼𝙰́𝚃𝙸𝙲𝙰
┃${autoread ? '✅ 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '❌ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ 𝚁𝙴𝚂𝚃𝚁𝙸𝙽𝙶𝙸𝚁 
┃${restrict ? '✅ 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '❌ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'} 
┃
╰━━━[ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 ]━━⬣`
await conn.sendFile(m.chat, pp, 'gata.mp4', info, fkontak)
/*let info = `
╭━━━━[ ${gt} ]━━━━━⬣
┃
┃➥ *CREADORA | CREATOR*
┃ღ *𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CONTACTO | CONTACT* 
┃ღ *${ig}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃𓃠 *VERSIÓN ACTUAL | VERSION*
┃ღ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *PREFIJO | PREFIX*
┃ღ *${usedPrefix}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CHATS PRIVADOS | PRIVATE CHAT*
┃ღ *${chats.length - groups.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CHATS DE GRUPOS | GROUP CHAT*
┃ღ *${groups.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *CHATS EN TOTAL | TOTAL CHATS*
┃ღ *${chats.length}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *ACTIVIDAD | ACTIVITY*
┃ღ *${uptime}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *USUARIOS | USERS*
┃ღ *${totalreg}* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *VELOCIDAD | SPEED*
┃ღ  *${speed}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *BOT SECUNDARIOS ACTIVOS | ACTIVE SECONDARY BACKS*
┃ღ *${totaljadibot.length}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *BATERIA | DRUMS*
┃ღ *${conn.battery ? `${conn.battery.value}%* *${conn.battery.live ? '🔌 Cargando...*' : '⚡ Desconectado*'}` : 'Desconocido*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *AUTOREAD*
┃ღ ${autoread ? '*Activado ✔*' : '*Desactivado ✘*'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➥ *RESTRICT* 
┃ღ ${restrict ? '*Activado ✔*' : '*Desactivado ✘*'} 
┃
╰━━━[ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ]━━⬣`.trim()

conn.sendHydrated(m.chat, info, wm, pp, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙚𝙧 𝙂𝙧𝙪𝙥𝙤𝙨 | 𝙎𝙚𝙚 𝙂𝙧𝙤𝙪𝙥𝙨', '#grupolista'],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨', '/cuentasgb'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '.menu']
], m,)*/
//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot|infogata|informacióngata|informaciongata)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
