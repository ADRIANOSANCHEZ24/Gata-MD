import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽 𝙰𝙽𝙸𝙼𝙴 🤗`
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'es', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'es', autoCorrect: true })   
let AnimeInfo = `
𝚃𝙸𝚃𝚄𝙻𝙾 
❣ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙴𝙿𝙸𝚂𝙾𝙳𝙸𝙾𝚂  
❣ ${episodes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝚃𝚁𝙰𝙽𝚂𝙼𝙸𝚃𝙸𝙳𝙾 𝙿𝙾𝚁 
❣ ${type}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙲𝙻𝙰𝚂𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽  
❣ ${rated}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙿𝚄𝙽𝚃𝙰𝙹𝙴  
❣ ${score}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂  
❣ ${members}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝚂𝙸𝙿𝙽𝙾𝚂𝙸𝚂  
❣ ${synopsis}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙴𝙽𝙻𝙰𝙲𝙴 
❣ ${url}`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
let info = `💖 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙴 𝚂𝙾𝙱𝚁𝙴 𝙻𝙰𝚂 𝙽𝙾𝚅𝙴𝙳𝙰𝙳𝙴𝚂 𝚈 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝚄𝙻𝚃𝙸𝙼𝙰 𝚅𝙴𝚁𝚂𝙸𝙾𝙽`
conn.sendButton(m.chat, info, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 ', `${usedPrefix + command} ${text}`],
['🔍 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 ', `#pinterest ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
/*.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 | 𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  */
} catch {
throw `[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴𝙻𝙾 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾`  
}}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
handler.exp = 50
handler.level = 1
export default handler
