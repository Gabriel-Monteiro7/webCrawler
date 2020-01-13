import requests
import json
import asyncio
from pyppeteer import launch

r = requests.get('https://conteudo.bannet.com.br/api/collections/get/psOperadoras/get?token=25c59d72215ae3a50d915ddfe74a32')
rJson = r.json()['entries']

async def main(value):
    element = None
    while(element==None):
        browser = await launch(headless=True, ignoreHTTPSErrors=True, args=['--no-sandbox']) 
        page = await browser.newPage()
        await page.goto("https://www.google.com/search?q=operadora-"+value+"-logo&hl=pt-BR&tbm=isch",{'delay': 2000})
        element = await page.querySelector('html body div div div div div div div div div div div div div div a img')
        await asyncio.sleep(5)
        print(element)
    await element.screenshot({'path': './imagens/'+value+'.png'})
    await browser.close()
for item in rJson:
    if(item['imagem']==''):
        # asyncio.get_event_loop().run_until_complete(main(item['url']))
        print(item['nome'])
        