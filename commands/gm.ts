import { Command, CommandContext, parseArgs, Args, User } from "../deps.ts"

export default class GMCommand extends Command {
    name = "gm"
    description = "says gm"
    

    async execute(ctx: CommandContext) {
        
        if (ctx.rawArgs.length === 0) return await ctx.message.channel.send(`${ctx.author.mention} says good morning`)

        const cmdargs: Args[] = [
            {
                name: "person",
                match: "user"
            }
        ]
        const pargs = await parseArgs(cmdargs, ctx.rawArgs, ctx.message)
        const u = pargs?.person as User
        await ctx.message.channel.send(`${ctx.author.mention} says good morning to ${u.mention}`)
    }
}