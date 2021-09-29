import { Command, CommandContext } from "../deps.ts";
import { config } from "../config.ts"

export default class Image extends Command {
    name = "image"
    aliases = ['is']

    async execute(ctx: CommandContext) {
        if (ctx.rawArgs.length <= 0) return await ctx.message.channel.send(".is query")
        const req = await fetch(`https://api.pxlapi.dev/image_search?query=${encodeURIComponent(ctx.argString)}&meta=true`, {
            method: "POST",
            headers: {
                'Authorization': `Application ${config.pxlkey}`
            },
        })
        const res = await req.json()
        await ctx.message.channel.send(`${res.url} from (${res.location})`)
    }
}