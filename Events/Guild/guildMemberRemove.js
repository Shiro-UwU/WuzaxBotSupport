const { Client, GuildMember } = require("discord.js")
const ms = require("ms")

module.exports = {
    name: "guildMemberRemove",
    id: "guildMemberRemove",

    /**
     * @param {GuildMember} member
    * @param {Client} client
    */
    async execute(member, client) {
        if(!member.guild.id === "868564194235142145") return;
        await client.channels.cache.get("991780665324474548").send({
            embeds: [
                new EmbedBuilder()
                .setColor("#36393F")
                .setDescription(`Dommage ${member.user.tag} vient de quitté ${member.guild.name}, nous somme plus que ${member.guild.memberCount} Membres !`)
            ]
        })
        let logsC = client.channels.cache.get("868564195350806602")
        logsC.send({
            embeds: [new EmbedBuilder()
                .setTitle("Wuzax | Logs System")
                .addFields({
                    name: "User",
                    value: `**\`•\` Username:** ${member.user.username}\n**\`•\` Tag:** ${member.user.tag}\n**\`•\` Bot:** ${member.user.bot ? "Oui" : "Non"}\n**\`•\` Account Date:** <t:${parseInt(member.user.createdTimestamp / 1000)}:R>\n**\`•\` ID:** ||${member.id}||`
                })
                .setImage(member.user.banner ? member.user.banner : member.user.avatarURL({size: 1024}))
                .setThumbnail(member.user.avatarURL({size: 1024}))
                .setColor("Red")
            ]
        })
    }
}