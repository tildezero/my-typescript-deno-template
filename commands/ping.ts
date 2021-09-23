import { Command, CommandContext } from "../deps.ts";

export default class PingCommand extends Command {
    name = "ping"
    description = "pongs"

    async execute(ctx: CommandContext) {
        await ctx.message.channel.send(`pong ${ctx.client.gateway.ping}`)
    }
}