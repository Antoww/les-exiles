const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = "/"
const talkedRecently = new Set();
bot.login("NTE3MzgxOTAxOTA0NzczMTYw.DuBZ3A.nWrC2uxZGAWOmTsJiDSu-d1yfB0");

bot.on("ready", () => {
    console.log("Bot ON")
    bot.user.setGame('Joyeux Noël les petits🎅')
})



bot.on("guildMemberAdd", member => {
//465918902254436364
    bot.channels.get("494638600236040202").send(`Bienvenue **${member.user.username}** sur le serveur **${member.guild.name}**.`)
});

bot.on("guildMemberRemove", member => {
    //465918902254436364
        bot.channels.get("494638600236040202").send(`A bientôt **${member.user.username}** sur **${member.guild.name}**.`)
    });
    //join mp
bot.on('guildMemberAdd', member => {
        member.createDM().then(channel => {
        return channel.send('Bienvenue sur mon serveur ' + member.displayName)
        }).catch(console.error)
        // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
        })


bot.on("message", async message => {

    //PAS TOUCHE

    if(message.content.indexOf(prefix) !== 0) return;
  
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);  
    const command = args.shift().toLowerCase();

    //Help
    if(command === "help"){
        const embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        embed.setTitle("Page d'aide du bot de la guilde")
        embed.addField("Commandes d'aide", "/help : Affiche ce menu.\n ")
        embed.addField("Commandes Utilitaires", "/utilitaires : Affiche le menu d'aide des commandes utilitaires \n")
        embed.addField("Commandes Modération", "/mod : Affiche le menu d'aide des commandes d'aide de la modération.\n")
        .setFooter("Bot par Antow")
        message.channel.send(embed)
    }
    //utilitaries
    if(command === "utilitaires"){
        const embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        .addField("Page d'aide du bot")
        .addField("Commandes Utilitaires", "/sondage <Question> : Fait un sondage avec votre question et rajoute automatiquement trois réaction. \n ")
        message.channel.send(embed)
        }
    //mod
    if(command === "mod"){
        const embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        .addField("Page d'aide du bot", "Voici les commandes présentes")
        .addField("Commandes Modération", "/ban <utilisateur> : Permet d'effectuer un bannissement sur un membre. \n /kick <utilisateur> : Permet d'effectuer le kick sur un utilisateur. \n /clear <1 à 99> : Permet de clear les messages. \n /mute <utilisateur> : Permet de mute un utilisateur. \n /unmute <utilisateur> : Permet de déban un utilisateur.")
        message.channel.send(embed)
        }

    //Fun
    if(command === "fun"){
        const embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        .addField("Page d'aide du bot", "Voici les commandes présentes")
        .addField("Commandes Fun", "/cheh : Effectue le CHEH. \n /j-sondage <question> : Permet de faire un sondage au joueur avec 15min de CD.")
        message.channel.send(embed)
        }
    //everyone
    if(command === "everyone"){
        const embed = new Discord.RichEmbed()
        .setColor("#a1ad11")
        .setFooter(`Commande demandée par ${message.author.username}`)
        embed.setTitle("@everyone")
        message.channel.send(embed)
        message.delete()
        }

    //Ping
    if (command === "ping") {
        const embed = new Discord.RichEmbed()
        .setColor("#a1ad11")
        .setFooter(`Commande demandée par ${message.author.username}`)
        embed.setImage("https://cdn.discordapp.com/attachments/493106609128603700/517762315832262657/maxresdefault.jpg")
        message.channel.send(embed)
        message.delete()
      }
    
    //Anti-Raid

    if (command ===  "anti-raid"){
        var embed = new Discord.RichEmbed()
        .setColor("#05D70C")
        .setFooter(`Commande demandée par ${message.author.username}`)
        .setTitle("Anti-Raid")
        .addField("N'hésitez pas à ajouter le bot Ftnl", "[FTNL](https://ftnl.fr/bot)")
        message.channel.send(embed)
    }

    //Cheh
    if(command === "cheh"){
        const embed = new Discord.RichEmbed()
        .setColor("#a1ad11")
        .setFooter(`Commande Cheh de ${message.author.username}`)
        embed.setImage("https://media.tenor.com/images/9b61a0025d1d1b8892360fa6feec436f/tenor.gif")
        message.channel.send(embed)
        message.delete()
    }


    //Banhammer

    if(command ===  "banhammer"){
        var embed = new Discord.RichEmbed()
        .setColor("#a1ad11")
        .setFooter(`Commande demandée par ${message.author.username}`)
        .setImage("https://cdn.discordapp.com/attachments/486905932606078979/494577004222611477/BlurpleBanHammer.png")
        message.channel.send(embed)
        message.delete()
    }

    if(command === "creator"){
        var embed = new Discord.RichEmbed()
        .setColor("#a1ad11")
        .setFooter(`Commande demandée par ${message.author.username}`)
        .addField("Mon créateur est Antow !", "Avoue tu le kiffe bb :D ?")
        message.channel.send(embed)
    }

    //sondage joueur cooldown de 15 minutes

    if (command ===  "j-sondage") {
        const suggestMessage = args.join(" ");
        var suggest_embed = new Discord.RichEmbed()
        if(args.length === 0){
            message.delete().catch(O_o=>{}); 
            message.reply("Veuillez utilisez le /sondage + [Question]")
        }
        else{
            if (talkedRecently.has(message.author.id)) {
                message.channel.send("Veuillez attendre 15 minutes entre chaque sondage non-admin " + message.author);
        } else {
            talkedRecently.add(message.author.id);
            setTimeout(() => {
              talkedRecently.delete(message.author.id);
            }, 300000);
        const suggestMessage = args.join(" ");
        var suggest_embed = new Discord.RichEmbed()
        .setColor('#00FB11')
        .setTitle('Nouveau sondage ')
        .addField("Question:", (suggestMessage))
        .setFooter(`Sondage de ${message.author.username}`)
        .setTimestamp()
        message.delete().catch(O_o=>{}); 
        message.reply('Sondage créé. ')
        message.channel.send(suggest_embed)
        .then(function (message) {
            message.react("✅")
            message.react("🤔")
            message.react("❌")});

    
        }}}

    //SONDAGE ADMIN

        if (command ===  "sondage") {
            if(!message.member.permissions.has("ADMINISTRATOR")) {
                return message.reply("Tu n'as pas la permission d'Administrateur."); }
            const suggestMessage = args.join(" ");
            var suggest_embed = new Discord.RichEmbed()
            if(args.length === 0){
                message.delete().catch(O_o=>{}); 
                message.reply("Veuillez utilisez le /sondage + [Question]")
            }
            else{
               
            const suggestMessage = args.join(" ");
            var suggest_embed = new Discord.RichEmbed()
            .setColor('#00FB11')
            .setTitle('Nouveau sondage ')
            .addField("Question:", (suggestMessage))
            .setFooter(`Sondage de ${message.author.username}`)
            .setTimestamp()
            message.delete().catch(O_o=>{}); 
            message.reply('Sondage créé. ')
            message.channel.send(suggest_embed)
            .then(function (message) {
                message.react("✅")
                message.react("🤔")
                message.react("❌")});
            
        
            }}

    //BAN
        
    if (command ===  "ban") {
        let has_ban = message.member.hasPermission("BAN_MEMBERS");
    if(!message.member.permissions.has("BAN_MEMBERS")) {
          message.delete().catch(O_o=>{});
          return message.reply("Permission requise: bannir des membres.").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
          message.delete().catch(O_o=>{});
          return message.reply("Aucun utilisateur détecté.").catch(console.error);
        }
        let banMember = message.guild.member(message.mentions.users.first());
        if(!banMember) {
          message.delete().catch(O_o=>{});
          return message.reply("Utilisateur inconnu.");
        }
        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
          message.delete().catch(O_o=>{});
          return message.reply("J'ai besoin de la permission 'Bannir des membres'").catch(console.error);
        }
        banMember.ban().then(member => {
          message.delete().catch(O_o=>{});
          message.reply(`${member.user.username} à été banni.`).catch(console.error);
        }).catch(console.error)
      }

      //KICK

      if (command ===  "kick") {
      
          let has_kick = message.member.hasPermission("KICK_MEMBERS");
          if(!message.member.permissions.has("KICK_MEMBERS")) {
            message.delete().catch(O_o=>{});
            return message.reply("Permission requise: exclure des membres.").catch(console.error);
          }
          if(message.mentions.users.size === 0) {
            message.delete().catch(O_o=>{});
            return message.reply("Aucun utilisateur détecté.").catch(console.error);
          }
          let kickMember = message.guild.member(message.mentions.users.first());
          if(!kickMember) {
            message.delete().catch(O_o=>{});
            return message.reply("Utilisateur inconnu.");
          }
          if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            message.delete().catch(O_o=>{});
            return message.reply("J'ai besoin de la permission 'Expluser les membres'").catch(console.error);
          }
          kickMember.kick().then(member => {
            message.delete().catch(O_o=>{});
            message.reply(`${member.user.username} à été exclu.`).catch(console.error);
          }).catch(console.error)
        }

        //CLEAR

        if(command ===  "clear") {
            const deleteCount = parseInt(args[0], 10);
            
            if(!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.reply("Tu n'as pas la permission de gérer les messages.").catch(console.error);
          }
            if(!deleteCount || deleteCount < 1 || deleteCount > 102)
              
              return message.reply("Choisissez un nombre entre 1 et 100 ‼️");
              
            const fetched = await message.channel.fetchMessages({limit: deleteCount + 1});
            const nfetch = fetched + 1
            message.channel.bulkDelete(fetched)
            message.channel.send(`${deleteCount} messages supprimés ! ♻️ 🗑️`)
              .catch(error => message.reply(`Je ne peux pas supprimer de message car: ${error}`));
          }

          //Mute

          var msgauthour = message.author.id;

            
          if(command ===  'mute'){ 
      
              if(!message.member.permissions.has("MANAGE_MESSAGES")) {
                  return message.reply("Permission requise: Gérer les messages  .").catch(console.error);
                }
      
          let target = message.mentions.members.first() || message.guild.members.get(args[0]);
          if(!target) return message.channel.send("Utilisateur non trouvé.");
      
          let role = message.guild.roles.find(r => r.name === "muted");
          if(!role) {
              try {
                  role = await message.guild.createRole({
                      name: "muted",
                      color: "#354856",
                      permissions: []
                  });
              } catch(e) {
                  message.channel.send("Error: Je ne peut pas créer de role.");
              }
          }
      
          if(target.roles.has(role.id)) return message.channel.send("Utilisateur déjà mute.");
      
          try {
              await Promise.all(message.guild.channels.map(async c => {
                  await c.overwritePermissions(role, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                  });
              }));
      
              let time = parseInt(args[1]);
              if(time) {
                  con.run("INSERT INTO mutes (snowflake, guild, unmutedAt) VALUES (?, ?, ?)", target.id, message.guild.id, Date.now() + time * 1000, (err) => {
                      if(err) throw err;
                  });
              }
      
              await target.addRole(role);
              return message.channel.send("Utilisateur muted."), target.send(`Vous avez été mute sur le serveur ${message.guild.name}`);
          } catch(e) {
              message.channel.send(`Erreur: Le grade muted n'est pas créer ou je ne suis pas au dessus de lui.`);
          }
          
       }
       if(command ===  'unmute'){
      
       if(!message.member.permissions.has("MANAGE_MESSAGES")) {
       return message.reply("Permission requise: Gérer les messages.").catch(console.error);
       }
          let target = message.mentions.members.first() || message.guild.members.get(args[0]);
          if(!target) return message.channel.send("Utilisateur non détecté.");
      
          let role = message.guild.roles.find(r => r.name === 'muted');
          if(!role || !target.roles.has(role.id)) return message.channel.send("Cet utilisateur n'est pas mute.");
      
          try {
              await target.removeRole(role);
              message.channel.send("User unmuted."), target.send(`Vous avez été unmute sur le serveur ${message.guild.name} ✅`);
          } catch(e) {
              message.channel.send(`Erreur: Le grade muted n'est pas créé ou je ne suis pas au dessus du membre sanctionné.`);
          }
      }

      //REPORT

      if(command ===  "rredh") {
        const reportMessage = args.join(" ");
        var report_embed = new Discord.RichEmbed()
        if(args.length === 0){
            message.delete().catch(O_o=>{}); 
            message.reply("Utilise /report + [Report]")
        }
        else{
        const reportMessage = args.join(" ");
        var report_embed = new Discord.RichEmbed()
        .setColor('#00FB11')
        .setTitle('Nouveau report ‼️')
        .setDescription('Un nouveau report viens de pop✅')
        .addField(`Report de : ${message.author.username} :`, (reportMessage))
        .setTimestamp()
        message.delete().catch(O_o=>{}); 
        message.reply('Signalement envoyé. Un membre du staff va prochainement répondre ✅')
        //Id du salon
        bot.channels.get("").send(report_embed)
    }}
    //Tell public
    if(command === "ttttttt") {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Veuillez attendre 15 minutes entre chaque /tell public " + message.author);
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 300000);
        var text = message.content.split(' ').slice(1).join(' ')
        message.channel.send(text)
        message.delete()
    }
    //SayEmbed
    if(command === "sayembed")

    //Say
    if(command === "say") {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply("Tu n'as pas la permission d'Administrateur."); }
               message.delete();
            var text = message.content.split(' ').slice(1).join(' ')
            message.channel.send(text)
 
        }
}})
