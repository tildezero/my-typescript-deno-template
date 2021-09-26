import { Command, CommandContext, parseArgs, Args, User } from "../deps.ts"

export default class GNCommand extends Command {
    name = "gn"
    description = "says gn"
    

    async execute(ctx: CommandContext) {
        
        if (!ctx.rawArgs) return await ctx.message.channel.send(`${ctx.author.mention} says good night`)

        const cmdargs: Args[] = [
            {
                name: "person",
                match: "user"
            }
        ]
        const pargs = await parseArgs(cmdargs, ctx.rawArgs, ctx.message)
        const u = pargs?.person as User
        await ctx.message.channel.send(`${ctx.author.mention} says good night to ${u.mention}`)
    }
}