const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : زب `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if (message.content === 'بووم') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(`**كسمك يا ابن المتناكة عل كسمكم الي هيا الشرموطة بتاعتي نايكم اانا يسعودين يمتانيك وربي مصر نايككم يبتوع الكبسة انتم احنا نايكنكم مش احنا طعمية انتم كبسة كسمكم يا ولاد المرة المنيوكة خاضعنكم احنا يا ولادا العرص نايكنكم سبام يامتانيك احلا نيكة يا ولاد العرص روحو ومتجوش تاني تمام المعلم عليكم  @FOIL#4996  @here 
$%@#%^%%&#^%@^$#$%&$%^#@#%&%%@#%&&&&&&&&%$^*#^%#^$#$^$&%*$*%^$%$^#%%%&%^**%^%(%(%*(^&%&%$&%^*%%^*%&#$^#^$*%#^&**`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    
    
    
    
    client.login(process.env.BOT_TOKEN);
