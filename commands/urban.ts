import { Command, CommandContext, MessageComponentType, ButtonStyle } from "../deps.ts"

export default class UrbanCommand extends Command {
    name = "urban"
    description = "searches something on urban dictionary"
    aliases = 'u'

    async execute(ctx: CommandContext) {
        if (!ctx.argString) {
            return await ctx.message.channel.send("`.urban query`")
        } 
        const query = encodeURIComponent(ctx.argString)
        const req = await fetch(`https://api.urbandictionary.com/v0/define?term=${query}`)
        const res = await req.json()
        await ctx.message.channel.send(res.list[0].definition, {components: [
            {
                type: MessageComponentType.ActionRow, 
                components: [
                    {
                        type: MessageComponentType.Button,
                        style: ButtonStyle.DESTRUCTIVE,
                        label: "delete",
                        customID: "delete"
                    }
                ]
            }
        ]})
        
    }
}