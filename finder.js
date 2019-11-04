const readline = require("readline");
const fs = require("fs");
const decrypt = require("./decrypt.js")
const md5 = require("md5");


const readInterface = readline.createInterface({
    input: fs.createReadStream('./KEY_URL.txt'),
    output: process.stdout,
    console: false
});

const imagem = fs.readFileSync("./imagens_encriptadas/MAIN_IMAGE_1_ENCODED_AND_ENCRYPTED.txt","utf-8");
let index = 1

readInterface.on('line',function(line){
    const key = md5(line.trim())
    console.log(`${index}: ${key}`)
    const encodedImage = decrypt.decrypt(key, imagem);
    decrypt.decode(encodedImage,`./imagens_geradas/image_${index++}`);
})
