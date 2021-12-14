// deno-lint-ignore-file no-explicit-any
import { Command, CommandContext } from '../deps.ts'

export default class WeatherCommand extends Command {
    name = "weather"
    description = "weather"
    aliases = ['wttr', 'w']

    async execute(ctx: CommandContext) {
        const loc = ctx.argString ?? 'austin tx'
        const codes: any = {
            "113": "Sunny",
            "116": "PartlyCloudy",
            "119": "Cloudy",
            "122": "VeryCloudy",
            "143": "Fog",
            "176": "LightShowers",
            "179": "LightSleetShowers",
            "182": "LightSleet",
            "185": "LightSleet",
            "200": "ThunderyShowers",
            "227": "LightSnow",
            "230": "HeavySnow",
            "248": "Fog",
            "260": "Fog",
            "263": "LightShowers",
            "266": "LightRain",
            "281": "LightSleet",
            "284": "LightSleet",
            "293": "LightRain",
            "296": "LightRain",
            "299": "HeavyShowers",
            "302": "HeavyRain",
            "305": "HeavyShowers",
            "308": "HeavyRain",
            "311": "LightSleet",
            "314": "LightSleet",
            "317": "LightSleet",
            "320": "LightSnow",
            "323": "LightSnowShowers",
            "326": "LightSnowShowers",
            "329": "HeavySnow",
            "332": "HeavySnow",
            "335": "HeavySnowShowers",
            "338": "HeavySnow",
            "350": "LightSleet",
            "353": "LightShowers",
            "356": "HeavyShowers",
            "359": "HeavyRain",
            "362": "LightSleetShowers",
            "365": "LightSleetShowers",
            "368": "LightSnowShowers",
            "371": "HeavySnowShowers",
            "374": "LightSleetShowers",
            "377": "LightSleet",
            "386": "ThunderyShowers",
            "389": "ThunderyHeavyRain",
            "392": "ThunderySnowShowers",
            "395": "HeavySnowShowers",
        }
        
        const symbols: any = {
            "Unknown":             "✨",
            "Cloudy":              "☁️",
            "Fog":                 "🌫",
            "HeavyRain":           "🌧",
            "HeavyShowers":        "🌧",
            "HeavySnow":           "❄️",
            "HeavySnowShowers":    "❄️",
            "LightRain":           "🌦",
            "LightShowers":        "🌦",
            "LightSleet":          "🌧",
            "LightSleetShowers":   "🌧",
            "LightSnow":           "🌨",
            "LightSnowShowers":    "🌨",
            "PartlyCloudy":        "⛅️",
            "Sunny":               "☀️",
            "ThunderyHeavyRain":   "🌩",
            "ThunderyShowers":     "⛈",
            "ThunderySnowShowers": "⛈",
            "VeryCloudy": "☁️",
          }
        const req = await fetch(`https://wttr.in/${encodeURIComponent(loc)}?format=j1`)
        const res = await req.json()
        const c = res.current_condition[0]
        const str = `currently ${c.weatherDesc[0].value.toLowerCase()} ${symbols[codes[c.weatherCode]]} with a temp of ${c.FeelsLikeF}`
        ctx.channel.send(str)
    }
}