import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://view-awesome-table.com/-MGy-B0VX5sZp1jdKNqb/view?filterA=Round%20Rock%20High")
    await page.waitForSelector(".card-content");
    await page.screenshot({path: "ss.png"})
})();
