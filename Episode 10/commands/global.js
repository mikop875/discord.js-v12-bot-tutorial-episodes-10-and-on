const Discord = require('discord.js');

const { NovelCovid } = require('novelcovid');

const track = new NovelCovid()

module.exports = {
    name: "global",
    description: "Track a country's COVID-19 cases",

    async run (client, message, args) {

    
        const corona = await track.all();


        const embed = new Discord.MessageEmbed()
        .setTitle(`Worldwide`)
        .setDescription(`Info on COVID-19`)
        .addField('Total Confirmed', corona.cases, true)
        .addField('Total Deaths', corona.deaths, true)
        .addField('Total Recovered', corona.recovered, true)
        .addField('Today\'s cases', corona.todayCases, true)
        .addField('Today\'s deaths', corona.todayDeaths, true)
        .addField('Active cases', corona.active, true)
        .addField('Critical cases', corona.critical, true)
        .setFooter('Thanks for using TestBot111', client.user.displayAvatarURL())

        message.channel.send(embed);

    }
}