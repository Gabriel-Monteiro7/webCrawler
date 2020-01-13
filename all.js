const axios = require("axios");
const puppeteer = require("puppeteer");

data = "";
axios
  .get(
    "https://conteudo.bannet.com.br/api/collections/get/psOperadoras/get?token=25c59d72215ae3a50d915ddfe74a32"
  )
  .then(response => {
    data = response.data.entries;
  })
  .catch(function(error) {
    console.log(error);
  });

setTimeout(() => {
  (async () => {
    let browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    let page = await browser.newPage();
    for (let value of data) {
      console.log(value["nome"]);
      await page.goto(
        "https://www.google.com/search?q=" +
          value["nome"] +
          "&hl=pt-BR&tbm=isch"
      );
      //   await page.screenshot({path: 'buddy-screenshot.png'});
      // let attr = await page.$$(".rg_l img");
      // await page.evaluate(el => el.getAttribute("src"), attr[0]);

      let svgImage = await page.$(".rg_l img");
      await svgImage.screenshot({
        path: "./imagens/" + value["nome"] + ".png",
        omitBackground: true
      });
    }
    await browser.close();
  })();
}, 8000);
