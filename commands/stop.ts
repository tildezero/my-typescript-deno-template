import { Command, CommandContext } from "../deps.ts";

export default class PingCommand extends Command {
    name = "start"
    description = "more trolling"
    ownerOnly = true

    async execute(ctx: CommandContext) {
        const r =  Deno.run({cmd: ['pm2', 'stop', '3'], stdout: "piped", stderr: "piped"})
        const s = await r.status()
        if (s.success) {
            const o = await r.output()
            await ctx.message.channel.send("success")
            await ctx.message.channel.send(`\`\`\`${o ?? "no stdout"}\`\`\``)
        } else {
            await ctx.message.channel.send("fail")
            await ctx.message.channel.send(`\`\`\`${r.stderrOutput ?? "no stdout"}\`\`\``)
        }
    }
}