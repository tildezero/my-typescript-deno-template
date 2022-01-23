import { Command, CommandContext, MessageAttachment } from '../deps.ts'
import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";
import { config } from '../config.ts'

export default class CovidCommand extends Command {
    name = "covid"
    description = "covid check"
    aliases = 'c'


    async execute(ctx: CommandContext) {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(config.awesomeTableLink)
        await page.waitForSelector(".card-content")
        const ss = await page.screenshot();
        if (!ss) {
            return ctx.message.channel.send("oopsies")
        }
        const att = new MessageAttachment("covid.png", ss) 
        await ctx.message.channel.send({file: att})
    }
}