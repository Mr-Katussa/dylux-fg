
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `┏ ┅ ━━━━━━━━━ ┅ ➔
┇        *⫹⫺ DONATE ⫹⫺*
┣ ┅ ━━━━━━━━━ ┅ ➔
┃
┃  ↪️ *Fᴏʟʟᴏᴡ ᴍᴇ ғᴏʀ ᴜᴘᴅᴀᴛᴇs*
┃ 
┃ 📽️ Yᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ 📽️
┃ 
┃  *youtube.com/@SANDARU-YT*
┃ 
┃ 📟 Cᴏɴᴛᴀᴄᴛ Mᴇ ᴏɴ Wʜᴀᴛsᴀᴘᴘ 📟
┃
┃   *http://wa.me/15517868003*
┃
┃🔰 *ᴛʜᴀɴᴋs ғᴏʀ ᴜsɪɴɢ xᴄᴏᴄᴏ*🔰

┗ ┅ ━━━━━━━━━ ┅ ━➔`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, don, 'Haga click en boton si quiere comprar o alquilar al bot', img, [['Buy Premium', `${usedPrefix}buyprem`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
