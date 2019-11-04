Arquivos:
Crawler.js: Arquivo contendo o webcrawler que obtem a url de cada um dos produtos. As urls são armazenadas no arquivo KEY_URL.txt.
Decrypt.js: Arquivo contendo as funções necessárias para obter-se a imagem com base na sua codificação e uma url.
Finder.js: Arquivo que gera todas as possíveis imagens com base nas funções de decrypt.js e as urls de KEY_URL.txt.

forms: Pasta contendo o aplicativo em react, utilizando material-ui para checar a imagem.
Contém basicamente dois componentes principais:
UserForm, que lida com as possíveis rotas do aplicativo, isto é, se a chave é correta ou não.
FormDetails, que lida com as entradas de dados.


