import { Command, CommandContext } from "../deps.ts";

export default class PingCommand extends Command {
    name = "start"
    description = "trolling"

    async execute(ctx: CommandContext) {
        const r =  Deno.run({cmd: ['pm2', 'start', '3'], stdout: "piped", stderr: "piped"})
        const s = await r.status()
        if (s.success) {
            await ctx.message.channel.send("success")
            await ctx.message.channel.send(`\`\`\`${r.output ?? "no stdout"}\`\`\``)
        } else {
            await ctx.message.channel.send("fail")
            await ctx.message.channel.send(`\`\`\`${r.stderrOutput ?? "no stdout"}\`\`\``)
        }
    }
}