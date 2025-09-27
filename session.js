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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tNSkd1NmVJdGljYkVlaGtxV0x6VExQeVlrckRRa0lOc3pRUFVHWmFtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFVSTGFxUmVlckdIWDhhUW5nRVF1K1l2cGprbFU4ZTA4OUF5Q0Z3MGoyaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTThZK2xOUDJPb1kxbHhSNFpvRWxXbzVyMjlLOFN4THlpbVVFbURDMEdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVbGxZRkhNN2t2enVkSTFmR0RkV1FmVWZYazRMSlZZOEh4UVJ0ekRuY1UwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1KQmRkYnZJOUJUYXJYNEJtYWJlTjNJRWlTd1paWFAxQnowK3Nlc2NRazg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9heC9PM2JQRWRiTVpXTEQ5U3I0bjhvQncycVRKOUVXNjBDbFNsUnZsUmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xnRTBnTE5hL0RmM0ZqdnVzM1l0YXFCVGw3ektzZGo3NFBEcUtkVHUzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTNZd1dZWEVYTTJ4eEJOV0hZd2N3ZkU2Y1FVZzRabDhzWDV3QVN0bFVnYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpKaTZNYVBBOWJDOGdoMU9sTloveTA3TXRXZUtVc2IxY1NhaHozdUZRNFU1OEs3dE5rNjUrSldNWDVTVWU3RTgySHBhS1hzSXJyRFBkQklqaVhpcUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiIwb0Y4cGRDcXVRejFYdUp3SDQ4QmZDWEt4azkvVEZjRjRDVXcya2xwakRNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHV1dlZXhOSlNYQ19mYmlaYkcxQzhRIiwicGhvbmVJZCI6IjMxYzY3NDgwLTBiYmEtNDNmYS04YmI0LWJhNzAxNDA3OGUwYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcUpCSzdQc2x3ZTlNUk05SXowTEJhK1Uwb0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidit6Sk84dko0dzM5M0dVdzh3OHV1S3dvRHl3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdTM0dWTTRNIiwibWUiOnsiaWQiOiI5ODk5MTY0NzAyNjY6MzZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMjIwNjM1OTEzMzQwNDc6MzZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPckNzUFlIRUxHRTM4WUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlVHVrT2xFL2NISTVIQ204YVdudkI0WEdEdmtoakZpUG15TmNCSXd0c0FrPSIsImFjY291bnRTaWduYXR1cmUiOiJKeVBBYnlJZmRHM1d1dFo5eGJscWhZZlZBbWpmZ3JXckVnMEQvWDFreHM2RklEOXppK2JpbW42NjdvTG93WS9BV3gwd0lpOFJGbUtiMlNxdXZPb3dBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV2hyelA1SXpEZEFreE0ycFZFZ2ttanVKRmZvVjdIVUJ0d29JYlF3UHFQeW9iMjVJUW82L3VTVUhpSXNQa1I0U3BOczROMGVzL0hHVGFtWDlTVEgzQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5ODk5MTY0NzAyNjY6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGs3cERwUlAzQnlPUndwdkdscDd3ZUZ4Zzc1SVl4WWo1c2pYQVNNTGJBSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4OTcwNDMxLCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNyUyJ9",
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
