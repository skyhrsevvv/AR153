const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'AR15 更新日誌') {
    msg.reply(' ```AR15 V1.0版 更新內容:1:SG的時間 2:KSG的圖片。 ``` ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 help') {
    msg.reply('你好 我是最可靠的AR15 只要AR15 人型/裝備時間 的話你就可以查到你想要的東西喔!');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 你在嗎') {
    msg.reply('什麼事啊');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 你很可愛') {
    msg.reply('走開!');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 YUMO是誰') {
    msg.reply('還用說的,當然是JK');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 (摸頭') {
    msg.reply('你想怎樣啦(陰笑');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 800') {

    msg.reply('\n 姓名:**KSG**\n 等級:**5星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/e/e5/KSG.png/420px-KSG.png');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 805') {
    msg.reply('\n 姓名:**Saiga 12**\n 等級:**5星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/b/b9/Saiga-12.png/420px-Saiga-12.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 810') {
    msg.reply('\n 姓名:**S.A.T.8**\n 等級:**5星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/4/4a/S.A.T.8.png/420px-S.A.T.8.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 755') {
    msg.reply('\n 姓名:**USAS-12**\n 等級:**4星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/6/6c/USAS-12.png/420px-USAS-12.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 750') {
    msg.reply('\n 姓名:**Super-Shorty**\n 等級:**4星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/3/35/Super-Shorty.png/420px-Super-Shorty.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 740') {
    msg.reply('\n 姓名:**SPAS-12**\n 等級:**4星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/2/2e/SPAS-12.png/420px-SPAS-12.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 745') {
    msg.reply('\n 姓名:**M37**\n 等級:**4星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/f/f0/M37.png/420px-M37.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 740') {
    msg.reply('\n 姓名:**M590**\n 等級:**4星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/d/d4/M590.png/800px-M590.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 715') {
    msg.reply('\n 姓名:**NS2000**\n 等級:**3星**\n 槍種:**SG**\n http://img.apkzu.com/img2017/9/19/2017091985785767.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 730') {
    msg.reply('\n 姓名:**M1897**\n 等級:**3星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/1/16/M1897.png/420px-M1897.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 720') {
    msg.reply('\n 姓名:**M500**\n 等級:**3星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/1/17/M500.png/420px-M500.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 725') {
    msg.reply('\n 姓名:**KS-23**\n 等級:**3星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/6/61/KS-23.png/420px-KS-23.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 730') {
    msg.reply('\n 姓名:**RMB-93**\n 等級:**3星**\n 槍種:**SG**\n http://en.gfwiki.com/images/thumb/4/4a/RMB-93.png/420px-RMB-93.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 650') {
    msg.reply('\n 姓名:**PKP**\n 等級:**5星**\n 槍種:**MG**\n http://en.gfwiki.com/images/thumb/3/39/PKP.png/420px-PKP.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 645') {
    msg.reply('\n 姓名:**MG5**\n 等級:**5星**\n 槍種:**MG**\n http://en.gfwiki.com/images/thumb/6/6c/MG5.png/420px-MG5.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === 'AR15 640') {
    msg.reply('\n 姓名:**MG4**\n 等級:**5星**\n 槍種:**MG**\n http://en.gfwiki.com/images/thumb/2/24/MG4.png/420px-MG4.png  ');
  }
});


client.login('MzY2NTk0MjgxOTk1MTA4MzYz.DQ0F4g.8eo7K_-P2y-Mu1oXMmGo3WaZPXc');
