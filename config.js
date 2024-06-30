const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "088429245";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_45_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICAyLFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgNzksXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICA3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgODcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6Tkt4c1V5TjhMUGErYVFpQWZJdTc1aHovMHI4a3U5NjAvOEdyeWFFZUdnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiYVFVbjExWFNCdXJiTlBYNWt3WGZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImMzY2MzZmRhLWRlM2ItNGE1Yi05OWYxLTFjYjM2ZTRkYWIwNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAyMzksXG4gICAgICAyMjIsXG4gICAgICAxNDUsXG4gICAgICAxNTAsXG4gICAgICAxMDIsXG4gICAgICA2NSxcbiAgICAgIDIyMSxcbiAgICAgIDI0MyxcbiAgICAgIDMsXG4gICAgICAxNTEsXG4gICAgICAxMzEsXG4gICAgICAxNjgsXG4gICAgICAyNyxcbiAgICAgIDExLFxuICAgICAgMTAyLFxuICAgICAgNjksXG4gICAgICAyNSxcbiAgICAgIDgxLFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMTExLFxuICAgICAgMTMxLFxuICAgICAgMTQwLFxuICAgICAgODIsXG4gICAgICAxNjcsXG4gICAgICAyMzEsXG4gICAgICAxNzUsXG4gICAgICA3MixcbiAgICAgIDE2NSxcbiAgICAgIDE5MCxcbiAgICAgIDY0LFxuICAgICAgMTA2LFxuICAgICAgMjU0LFxuICAgICAgODAsXG4gICAgICAxMjMsXG4gICAgICAxMzksXG4gICAgICAzOSxcbiAgICAgIDE1MyxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhXSlZUQ1NXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzI4ODQyOTI0NToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA4MDQwMzIxODE0Njc3OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05QcHpLMERFSXZBaDdRR0dCNGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZGpzcU1kMU9VNHRJSXc2SSt1bzlEdm5DU0w3bldEVFVhZDlwQXdCdjlCOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3ZHl3RFpDQ0xaL2pUcVFFTTJqeUZyUTJiczNoVEptTU0xVDNaUXBONUN4WE5XK3Z6NWtNNHpXWkFpeTdWTklTckN0U2tVeWNKMkRCdWdKUG4zOWREZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5MTNiV1ZnWmY0Yi8zRjN5bnlhb05EQ2k3b1k3T2RBSHlBOXBtaCtYNU1jZUN5NThiK2QxQ0dReXNKNEM0K1JZOXByNURpTEpCcmdYc1cxMVhRN0lEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzI4ODQyOTI0NToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc4NzUzNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
