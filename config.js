const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="arabdulladev@gmail.com"
global.location="Matara, Sri Lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://arabdullah:321465Aa.@@cluster0.oups6ui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/ARAbdullaDev";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "arabdullah.000webhostapp.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "94704281955" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94771966060";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_40_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDMxLFxuICAgICAgICA5NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrNjU4TVZBenk0MzNIZncxMENPN2ltSm9QUnkrVjlmVHJRRitpTTZHSXl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzA0MjgxOTU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQjk0QTAxMDAxNzM3OEExMTYzNjczMDY3NDAwMUEyRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTUwNDk2MjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibDhQNzhtcmxSZ0tPbFNJWEl1VzZIZ1wiLFxuICBcInBob25lSWRcIjogXCI1Zjc2YWJmNy1jYTM5LTRkZmYtYTIxMS0zNzAwNjkxM2U4NGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgNjcsXG4gICAgICAxNDUsXG4gICAgICAxMixcbiAgICAgIDIsXG4gICAgICAyMjQsXG4gICAgICAxMjksXG4gICAgICA0MCxcbiAgICAgIDIyMCxcbiAgICAgIDI1MyxcbiAgICAgIDE1MSxcbiAgICAgIDE2NyxcbiAgICAgIDIzMyxcbiAgICAgIDExLFxuICAgICAgMTM4LFxuICAgICAgNTAsXG4gICAgICAxOTEsXG4gICAgICA1NixcbiAgICAgIDQsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDM0LFxuICAgICAgMTU5LFxuICAgICAgMTUyLFxuICAgICAgMTYxLFxuICAgICAgOTQsXG4gICAgICAxNjMsXG4gICAgICAxODcsXG4gICAgICAyMDEsXG4gICAgICAyNDksXG4gICAgICAxMjEsXG4gICAgICAxNTcsXG4gICAgICAyNTQsXG4gICAgICAxNjQsXG4gICAgICA2OSxcbiAgICAgIDYsXG4gICAgICA5NSxcbiAgICAgIDM2LFxuICAgICAgMjQzLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTENGNEtZSEVKS3A1ckVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhSDNpNnRoQ0hDNFBNdkZHdms1eXgyallpK0ZaY3U2VjFpOWlWWE9VWkQwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJIZmk3dnJaZzhmKzdQOU1PbWQ3OWh0dlVZVGt1VjFwUkcwTGk2dlErUCtLdzYxMUhOcGNyRzNvb0ZXOW1SZUhka1BpK2FoSFlBd05UNEptR0VpMUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJxaXo2ejZoeGhFZVpTclY2MFRNMDRxV2RyQmprVk40ZEhDdmZDaHNyTGlSU2V3Y1BDY1VWQjF2d2lyMndHRzdreW0yMFJmeDQ4VThQL0RxWnc0bGpRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDQyODE5NTU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkEgUiBBYmR1bGxhaFwiLFxuICAgIFwibGlkXCI6IFwiMjY0MDE2Mzg3Njg2NjE4OjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwNDI4MTk1NTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MDQ5NjIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnFhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGcWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrQUR0Y1JESkQ2WXZsODdSc2NWSFdRdWJpSnRaZkl5c3JvQ09qMVVkdTMwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NjAzMTM1MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZxYi5qc29uIjogIntcImtleURhdGFcIjpcInlpaUhJbGdZZG9CMFVZWHhLNzNtUm82ckwvRWErVEJXaGNyVmNoellMcFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk2MDMxMzUxOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnFjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK2t4c09pNDBXQ0RsMmY0a21yTkgvaW5vTWpIUmhad2IxVGpyUnRqTXV2OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTYwMzEzNTE5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGcWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4a29QSm1kTkxiREJBWnZtclhQd1hlTEFIcVdKNkxYZ3FFYldPdG15RHBRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NjAzMTM1MTksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUwNDgzODM5MDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "© Z Speak" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Z Speak",
  packname: process.env.PACK_NAME || "PICXGRAPHY",
  botname : process.env.BOT_NAME  || "Z Speak",
  ownername:process.env.OWNER_NAME|| "ARAbdullaDev",


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
