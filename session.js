//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ01xRkhYRVBjNERKQ3ZOMUl4TzVqMEcxUzJ0YTNEaXNvdCt6dXVyb3UxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMytrL3NkMVVDNWlhT3ZsR3J4Qzd4K2Z2WGplbVlzeUZVdXR1QStDVS96az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UGU4Y29maWd4MWJrYlp1Kzk2QytwVjBqUmdKYVluUHJYVWZaU0o0UkdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2NmJrMWpaY0p6eTR2eGVKSWNXVGZUK2ozdlJBdHB6akl4OENGOWN5REhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJYnFObi8zenkyajV4ODdBbWNxay9xeUhaa1pEaHBCMmJLYlRWUVhZR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgrWFVWN2ZmU00wOHdpT3BnSldsYUF5OVM5OVBXKzJKQUNZc3F3SmlCWEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdtRkdVUFUzV3djaVlJc2FVZDFWQ1BzVDdMdXBFVFd2akFUUnJ5THJWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWlEWUtzOHFxcXNLZVU4VXh4dXYxVVhQNUJYRThIbnhsd0VZL29zR2xuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImowcUhueGtsMEprRkkrQnlDa2w0VU1OZG9BeG5RN2FJb1V4Nng1eFQyZHBNNytDTTBxaHhiSlNyME1jTmxSdzBSSHRPbndVOGUwMDZUaDA5dDE4TERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6IlRGNU83Z3VhMDl4VTBUQXhaTnBGem5PZFFwN0RudlBibldCbGJsZU54RU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlQwRGlnR2IxUnNPRWJtOU1jbzJ1T2ciLCJwaG9uZUlkIjoiZmE3Njk5ZWEtY2I1Mi00YTZlLWIxMDYtZGYwOGM2Njg5NzFmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFhZzdEQ3ljRU8zaysrUVZoblZ4VDU1TkVLND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPZkxBZGdBZWVOZmdNdFpUbXhsM2p0Vzk4Zm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRDVSNTVZMkUiLCJtZSI6eyJpZCI6Ijk4OTkxNjQ3MDI2NjoyN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEyMjA2MzU5MTMzNDA0NzoyN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09mQ3NQWUhFUGIxMk1ZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVUdWtPbEUvY0hJNUhDbThhV252QjRYR0R2a2hqRmlQbXlOY0JJd3RzQWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVNeUt1ejlJczBiR0F5U0R0WFdEN3RTNDFROHkrSUZFelhVNkpxRUNvWCtkb2xkZUN6MWlCSHN3NVgzdkxhWjNOaDF3aG8zUEdPYnNOdGlZLzJDOENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTQWRxRzJESHFCUExBUytiQUN5ekxEMjNKL0xxTXBTMzk2SUxndnE4SzA0U291VEt0Vk44V2xYSHdXU2hpQ044ZjdSVmdhL1JnK2ovMFBrYXllSzVBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk4OTkxNjQ3MDI2NjoyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYazdwRHBSUDNCeU9Sd3B2R2xwN3dlRnhnNzVJWXhZajVzalhBU01MYkFKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg4NzAyNzUsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlBmIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
