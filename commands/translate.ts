import { Command, CommandContext } from "../deps.ts"

export default class TranslateCommand extends Command {
    name = "translate"
    aliases = ['tr']
    description = "translates something"

    async execute(ctx: CommandContext) {
        if (ctx.rawArgs.length < 2) return await ctx.message.channel.send("`.tr language query` language codes: https://envs.sh/6x.txt")
        const language = ctx.rawArgs[0]
        ctx.rawArgs.shift()
        const query = ctx.rawArgs.join(" ")
        console.log(query)
        const req = await fetch(`https://lingva.ml/api/v1/auto/${language}/${query}`)
        const res = await req.json()
        await ctx.message.channel.send(res.translation)
    }
}