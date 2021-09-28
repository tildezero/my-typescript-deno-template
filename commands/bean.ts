import { Command, CommandContext, Args, User, parseArgs } from "../deps.ts";

export default class BeanCommand extends Command {
    name = "bean"
    description = "beans"

    async execute(ctx: CommandContext) {
        if (ctx.rawArgs.length === 0) return await ctx.message.channel.send("bean someone")
        const cmdargs: Args[] = [
            {
                name: "person",
                match: "user"
            },
            {
                name: "reason",
                match: "rest"
            }
        ]
        const pargs = await parseArgs(cmdargs, ctx.rawArgs, ctx.message)
        const u = pargs?.person as User
        const r = pargs?.reason as string
        await ctx.message.channel.send({embed: {description: `✅ ***${u.username}#${u.discriminator} was beaned*** | ${r}`}})
    }
}