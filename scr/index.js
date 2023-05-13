const TelegramBot = require('node-telegram-bot-api');

// create Telegram bot object

const token = '6138107355:AAFmM8xXb8uabBeacHu_doRpJSbg-ptYJDc';

const bot = new TelegramBot(token, { polling: true });

// set up command listener for /password

bot.onText(/\/password/, (msg) => {

  

  // generate random password

  const length = 8; // password length

  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // password characters

  let password = '';

  for (let i = 0; i < length; i++) {

    password += characters[Math.floor(Math.random() * characters.length)];

  }

  

  // send the password to the user

  bot.sendMessage(msg.chat.id, `Your random password is: ${password}`);

});
