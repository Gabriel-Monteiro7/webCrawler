const puppeteer = require("puppeteer");
let pesquisa = 'bradesco+saude'
(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto(
    `https://www.google.com/search?q=${pesquisa}&hl=pt-BR&tbm=isch`
  );
  //   await page.screenshot({path: 'buddy-screenshot.png'});
  let attr = await page.$$(".rg_l img");

  console.log(await page.evaluate(el => el.getAttribute("src"), attr[0]));
  
  const svgImage = await page.$(".rg_l img");
  await svgImage.screenshot({
    path: "./imagens/logo-screenshot.png",
    omitBackground: true
  });
  await browser.close();
})();
