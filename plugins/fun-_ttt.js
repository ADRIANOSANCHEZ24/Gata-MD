import { format } from 'util'
let debugMode = !1
//let winScore = 4999
//let playScore = 99
export async function before(m) {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
if (!/^([1-9]|(me)?nyerah|\rendirse\|rendirse|RENDIRSE|SALIR|salir|Salir|out|OUT|Out|surr?ender)$/i.test(m.text)) 
return !0
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { 
if (!isSurrender)
return !0 }
if (debugMode)
m.reply('[DEBUG]\n' + require('util').format({
isSurrender,
text: m.text }))
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': '𝙴𝙻 𝙹𝚄𝙴𝙶𝙾 𝙷𝙰 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾 𝙿𝙸𝙿𝙸𝙿𝙸 ☹️,
'-2': '𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙾 ☹️️',
'-1': '𝙿𝙾𝚂𝙸𝙲𝙸𝙾𝙽 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙰 ☹️️',
0: '𝙿𝙾𝚂𝙸𝙲𝙸𝙾𝙽 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙰 ☹️️',
}[ok])
return !0 }
if (m.sender === room.game.winner)
isWin = true
else if (room.game.board === 511)
isTie = true
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
if (isSurrender) {
        
room.game._currentTurn = m.sender === room.game.playerX
isWin = true }
        
let dia = Math.floor(Math.random() * 2)
let tok = Math.floor(Math.random() * 2)
let gata = Math.floor(Math.random() * 10)
let expp = Math.floor(Math.random() * 10)

let dia2 = Math.floor(Math.random() * 15)
let tok2 = Math.floor(Math.random() * 10)
let gata2 = Math.floor(Math.random() * 1500)
let expp2 = Math.floor(Math.random() * 2500)  

let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `
𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐄𝐒 :
*┈┈┈┈┈┈┈┈┈*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
${isWin ? `@${(isSurrender ? room.game.currentTurn : room.game.winner).split('@')[0]} 😎🏆 𝙶𝙰𝙽𝙰𝚂𝚃𝙴!!\n𝙿𝙾𝚁 𝙷𝙰𝙱𝙴𝚁 𝙶𝙰𝙽𝙰𝙳𝙾 𝙾𝙱𝚃𝙸𝙴𝙽𝙴𝚂\n\n💎 ${dia2} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂0\n ${tok2} 𝚃𝙾𝙺𝙴𝙽𝚂\n🤖 ${gata2} 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙲𝙾𝙸𝙽𝚂\n⚡ ${expp2} 𝙴𝚇𝙿` : isTie ? `𝙴𝙼𝙿𝙰𝚃𝙴!! 🤨\n𝙿𝙾𝚁 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚁 𝙴𝙽 𝙴𝙼𝙿𝙰𝚃𝙴 𝙰𝙼𝙱𝙾𝚂 𝙾𝙱𝚃𝙸𝙴𝙽𝙴𝙽\n\n💎 ${dia} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂\n ${tok} 𝚃𝙾𝙺𝙴𝙽𝚂\n ${gata} 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈𝙲𝙾𝙸𝙽𝚂\n⚡ ${expp} 𝙴𝚇𝙿` : `𝚃𝚄𝚁𝙽𝙾 𝙳𝙴 @${room.game.currentTurn.split('@')[0]}`}
`.trim()
let users = global.db.data.users
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o)
await this.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await this.sendMessage(room.o, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
        
if (isTie || isWin) {
users[room.game.playerX].limit += dia //empate
users[room.game.playerX].joincount += tok
users[room.game.playerX].money += gata
users[room.game.playerX].exp += expp
        
users[room.game.playerO].limit += dia //empate
users[room.game.playerO].joincount += tok
users[room.game.playerO].money += gata
users[room.game.playerO].exp += expp 
        
if (isWin)
users[winner].limit += dia2 //Ganador
users[winner].joincount += tok2
users[winner].money += gata2
users[winner].exp += expp2
        
if (debugMode)
m.reply('[DEBUG]\n' + format(room))
delete this.game[room.id]}}
return !0 }
