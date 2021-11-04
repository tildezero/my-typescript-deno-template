import { Command, CommandContext } from "../deps.ts";

export default class EightBallCommand extends Command {
    name = "eight"
    description = "eightball"
    aliases = ['8b', '8ball']

    async execute(ctx: CommandContext) {
        const ballresponse = [
          'It is certain', 'It is decidedly so', 'Without a doubt',
          'Yes – definitely', 'You may rely on it', 'As I see it, yes',
          'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 
          'Reply hazy, try again', 'Ask again later', 'Better not tell you now',
          'Better not tell you now', 'Concentrate and ask again', 'Very doubtful',
          "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'
        ]
        const pick = ballresponse[Math.floor(Math.random() * ballresponse.length)]
        await ctx.message.channel.send(`:8ball: Question: ${ctx.argString}\nAnswer: ${pick}`)
    }
}
