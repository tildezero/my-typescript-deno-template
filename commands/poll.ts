import { Command, CommandContext, Embed } from "../deps.ts";

export default class PollCommand extends Command {
    name = "poll"
    description = "makes a poll"

    async execute(ctx: CommandContext) {
        if (ctx.rawArgs.length === 0) return await ctx.message.channel.send('`.poll question`')
        const embed = new Embed({author: {name: `${ctx.member?.nick ?? ctx.author.username} asks...`}, title: ctx.argString, color: 0x7289da})
        const msg = await ctx.message.channel.send({embed})
        await msg.addReaction("👍")
        await msg.addReaction("👎")
    }
}