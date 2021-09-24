import { Command, CommandContext } from "../deps.ts"

export default class HelpCommand extends Command {
    name = "help"
    description = "helps"

    async execute(ctx: CommandContext) {
        await ctx.message.channel.send(".urban, .covid, .ping")
    }
}