
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `Need TEXT\n\n*📌 Ex*\n*${usedPrefix + command}* Lelena`
    m.react('📀')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url}`, `▢ ⌚ *Duration:* ${v.timestamp}\n▢ 👀 *Visiters:* ${v.views}\n▢ 📌 *Title* : ${v.title}\n▢ 📆 *Publish:* ${v.ago}\n`],
          ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url}`, `▢ ⌚ *Duration:* ${v.timestamp}\n▢ 👀 *Vister:* ${v.views}\n▢ 📌 *Title* : ${v.title}\n▢ 📆 *Published:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *XCOCO MUSIC*🔎', `\n SELLECT :\n *${text}*`, fgig, `CLICK `, listSections, m)
}
handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler
