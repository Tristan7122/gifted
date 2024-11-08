const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Gifted~KCer3PsM",
  PREFIX: process.env.PREFIX || '.',
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS !== undefined ? process.env.AUTO_READ_STATUS === 'false' : true,
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status Viewed by Gifted-Md',
  AUTO_DOWNLOAD: process.env.AUTO_DOWNLOAD !== undefined ? process.env.AUTO_DOWNLOAD === 'true' : false,
  AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES !== undefined ? process.env.AUTO_READ_MESSAGES === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
  ANTIDELETE: process.env.ANTIDELETE !== undefined ? process.env.ANTIDELETE === 'true' : false,

  /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : true,
  
  
  AUTO_REJECT_CALLS: process.env.AUTO_REJECT_CALLS !== undefined ? process.env.AUTO_REJECT_CALLS === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Tristan",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "27634624586",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyAkHGe6qWMujR2BjM468vQbY2RIbp0VXyc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'false' : false, 
};


module.exports = config;
