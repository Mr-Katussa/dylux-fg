
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `PLEASE ENTER THE FB LINK\n\n📌EX :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    m.react(rwait)
   try {
   let res = await fg.fbdl(args[0])
    for (let result of res.download) {
    	  let tex = `
┌─⊷ *FB DOWNLODER*
▢ *Quality

:* ${result.quality}
└───────────`
    conn.sendFile(m.chat, result.url, 'fb.mp4', tex, m)
     } 
     m.react(done)
 } catch {
 	m.reply('Error')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
