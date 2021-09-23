import { CommandClient, GatewayIntents } from './deps.ts'
import { config } from './config.ts'

const client = new CommandClient({prefix: "."})

client.on("ready", () => {
    console.log("ready")
})

client.commands.loader.loadDirectory("./commands/")

client.connect(config.token, [GatewayIntents.GUILDS, GatewayIntents.GUILD_MESSAGES, GatewayIntents.DIRECT_MESSAGES])

