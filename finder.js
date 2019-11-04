const readline = require("readline");
const fs = require("fs");
const decrypt = require("./decrypt.js")
const md5 = require("md5");

console.log(decrypt);

const readInterface = readline.createInterface({
    input: fs.createReadStream('./imagens.txt'),
    output: process.stdout,
    console: false
});

const imagem = fs.readFileSync("./MAIN_IMAGE_3_ENCODED_AND_ENCRYPTED.txt","utf-8");
let index = 1

readInterface.on('line',function(line){
    const key = md5(line)
    const encodedImage = decrypt.decrypt(key, imagem);
    decrypt.decode(encodedImage,`./imagens/image_${index++}.jpeg`);
    console.log(line);
})

