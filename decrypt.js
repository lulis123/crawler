const md5 = require('md5');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const imagem_teste = fs.readFileSync('./imagem_encriptada.txt','utf-8');
const KEY_URL = "https://www.arezzo.com.br/sapatos/rasteiras/sandalia-rasteira-metalizada-tiras-azul/p/0327400120111U";
const KEY = md5(KEY_URL);

// Função para decriptar um texto em hexadecimal com a chave fornecida usando AES 256 ECB
exports.decrypt = function(key, text) {
    var decipher = crypto.createDecipheriv('aes-256-ecb', key.toString('binary'), '');
    decipher.setAutoPadding(false);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

// Função que cria um arquivo de imagem a partir da string base64 desta
exports.decode = function(base64str, filename) {
    var buf = Buffer.from(base64str, 'base64');
    fs.writeFileSync(path.join(__dirname, filename), buf);
}

const encodedImage = exports.decrypt(KEY,imagem_teste);
exports.decode(encodedImage, 'original_image');

