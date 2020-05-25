const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`botun olan ${client.user.tag}! sunucuya girdi`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sahip') {
    msg.reply('Son.yı biz koyarız');
  }
});

client.login('NjU3OTk1MTQ4ODE0NDUwNzI4.Xmss5g.dKB6PTPtTQ_L6dpza1-sOD2P9hw');
