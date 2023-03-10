
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
let img = 'https://telegra.ph/file/38fbc93ba1855b6e65cee.jpg'
conn.sendButton(m.chat, don, 'Xcoco Super Update', img, [['OWNER', `${usedPrefix}buyprem`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
