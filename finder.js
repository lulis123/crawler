const readline = require("readline");
const fs = require("fs");
const decrypt = require("./decrypt.js")
const md5 = require("md5");


const readInterface = readline.createInterface({
    input: fs.createReadStream('./KEY_URL.txt'),
    output: process.stdout,
    console: false
});

const imagem = fs.readFileSync("./imagem_encriptada.txt","utf-8");
let index = 1

readInterface.on('line',function(line){
    const key = md5(line)
    const encodedImage = decrypt.decrypt(key, imagem);
    decrypt.decode(encodedImage,`./imagens/image_${index++}`);
})

