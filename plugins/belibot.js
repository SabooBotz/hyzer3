let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *Perminggu* :      *Rp 1.000*
╠➥ *PERMANENT :      *Rp 5.000*
╠➥ *Trial* :   *Free*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Topup/Pin
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 Sabo 〙 ═`.trim(), 'Sabo', 'Dana', '#viadana', 'Gopay', '#viagopay', m)
}

handler.command = /^sewabot$/i

module.exports = handler
