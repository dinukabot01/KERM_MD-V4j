const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *Kg Tech*

> *KERM_MD-V4 REPO:*
*|* *https://github.com/Kgtech-cmr/KERM_MD-V4*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45*
*╰──────────────●●►*

> *CREATED BY KG TECH*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "KᴇʀᴍCʜᴀɴɴᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'KERM_MD-V4',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Kgtech-cmr/KERM_MD-V4" ,
thumbnailUrl: "https://pomf2.lain.la/f/cdn0360.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
