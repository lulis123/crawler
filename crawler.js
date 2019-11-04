const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream =  fs.createWriteStream('KEY_URL.txt');

//Função Request para obter o html da página de sapatos.
for( var index = 0; index < 536; index++){

    var url = `https://www.arezzo.com.br/c/sapatos?q=%3Acreation-time&page=${index}`
    request.get(url, (error,response,html) =>{
        //Checando por erros
        if( !error && response.statusCode==200){
            const $ = cheerio.load(html);

            $('.arz-storefront-product').each(function(){

                var pagina = $(this).find('.arz-cover-link').attr("href");
                console.log(pagina)
                var link = "https://www.arezzo.com.br" + pagina

                writeStream.write(`${link}\n`);
            })
        }
    });
}