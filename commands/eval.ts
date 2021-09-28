import { Command, CommandContext } from '../deps.ts'

export default class CalcCommand extends Command {
    name = "eval"
    description = "evaluate something"
    ownerOnly = true

    async execute(ctx: CommandContext) {
       if (ctx.rawArgs.length < 1) return await ctx.message.channel.send("eval something stupid") 
       try {
           let ev = await eval(ctx.argString)
           if (ev instanceof Promise) ev = await ev
           if (typeof ev === "object") ev = Deno.inspect(ev)
           const tosend = `${ev}`.substring(0, 1500)
           await ctx.message.channel.send("```ts\n" + tosend + "\n```")
        } catch (e) {
            await ctx.message.channel.send("error\n```ts\n" + e + "\n```")
        }


    }
}