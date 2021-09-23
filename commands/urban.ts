import { Command, CommandContext } from "../deps.ts"

export default class UrbanCommand extends Command {
    name = "urban"
    description = "searches something on urban dictionary"

    async execute(ctx: CommandContext) {
        if (!ctx.argString) {
            return await ctx.message.channel.send("`.urban query`")
        } 
        console.log(ctx.argString)
        const query = encodeURIComponent(ctx.argString)
        const req = await fetch(`https://api.urbandictionary.com/v0/define?term=${query}`)
        const res = await req.json()
        await ctx.message.channel.send(res.list[0].definition)
    }
}