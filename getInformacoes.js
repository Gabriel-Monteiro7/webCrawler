const axios = require('axios');
let cheerio = require('cheerio');
let data = []

axios.get('https://bannet.com.br/').then((response)=>{
    let $ = cheerio.load(response.data,{decodeEntities:false});
    let title = $('head title').text().trim();
    data.push(title);
    let value = []
    $('.page-home section').each((indice,element)=>{
        value.push($(element).find('h2').text().trim() || $(element).find('h4').text().trim()
        || $(element).find('a').text().trim());
    });
    data.push(value);
});

module.exports = data;