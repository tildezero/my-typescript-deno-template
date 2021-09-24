import { CommandClient, GatewayIntents, isMessageComponentInteraction, MessageComponentInteraction } from './deps.ts'
import { config } from './config.ts'

const client = new CommandClient({prefix: "."})

client.on("ready", () => {
    console.log("ready")
})

client.commands.loader.loadDirectory("./commands/")

client.on("interactionCreate", async (i) => {
    if (isMessageComponentInteraction(i)) {
        const d = i as MessageComponentInteraction
        if (d.customID === "delete") {
            await d.message.delete()
            await d.respond({content: "message deleted"})
        }
    }
})

client.connect(config.token, [GatewayIntents.GUILDS, GatewayIntents.GUILD_MESSAGES, GatewayIntents.DIRECT_MESSAGES])

