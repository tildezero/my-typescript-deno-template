import { Command, CommandContext } from "../deps.ts"

export default class TranslateCommand extends Command {
    name = "cat"
    description = "gato"

    async execute(ctx: CommandContext) {
        const req = await fetch(`https://aws.random.cat/meow`)
        const res = await req.json()
        await ctx.message.channel.send(res.file)
    }
}
