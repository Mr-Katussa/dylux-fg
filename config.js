import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['94764497078', 'Xcoco', true],
  ['15517868003'], 
  ['447710173736'] 
] //Numeros de owner 

global.mods = ['94764497078'] 
global.prems = ['447710173736', '15517868003', '94704461999']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Xcoco' 
global.author = '@Sandaru' 
global.fgig = '▢\nhttps://www.instagram.com/fg98_ff\n' 
global.dygp = 'https://chat.whatsapp.com/'
global.fgsc = 'https://github.com/' 
global.fgyt = 'https://youtube.com/SANDARU-YT'
global.fgpyp = 'https://paypal.me/'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ Please Wait*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
