# Projeto Municípia


## SOBRE O PROJETO

O Projeto foi desenvolvido usando a arquitetura de Micro Front-ends, sendo constituído por três apps:

### Users Module 

O módulo de utilizadores é um APP em VueJS a correr na porta 8082.

O módulo é constituído por duas páginas: 

**Página de listagem**

Listagem dos dados estáticos (exemplo: nome e distrito) e link para aceder à página de detalhes de cada utilizador. 

**Página de detalhamento**

Página com detalhamento do utilizador (Nome, telefone, email e morada).

Está página é chamada em dois momentos, dentro do módulo de utilizadores e importada dentro do módulo de produtos para o detalhamento do dono do produto.

### Products Module 

O módulo de produtos é um APP em VueJS a correr na porta 8083.

O módulo é constituído por duas páginas: 

**Página de listagem**

Listagem dos dados estáticos do produto (exemplo: modelo, valor, ano)  e link para aceder à página de detalhes de cada produto. 

**Página de detalhamento**

Página com detalhamento do produto, a exibir informações do modelo, valor, ano.
Caso o módulo de utilizadores esteja ativo, haverá uma importação do parcel (parcela do módulo de utilizadores) para exibir os dados do dono do produto.


### Orchestrator

O orquestrador é responsável por mapear as dependências do projeto e montar os demais módulos em seus respectivos locais.

O orquestrador é desenvolvido em Javascript e corre na porta 5000.


## SETUP

Para proceder à instalação do projeto, é necessário ter o **NODE e NPM** instalados previamente na versão LTS. 

E para a instalação de cada módulo, as dependências devem ser instaladas com os comandos abaixo.

### Orchestrator

    cd ./orchestrator
    
    npm install
    
### Products

    cd ./modules/products/
    
    npm install
    
### Users

    cd ./modules/users/
    
    npm install

## EXECUÇÃO DO PROJETO

Para executar o projeto, é necessário correr os **três APPs (orchestrator, products e users) simultaneamente em terminais diferentes**. Para isto, o comando `` npm run serve `` deve ser executado nas  respectivas pastas.

**Após a execução das três APPs, o orquestrador irá deixar todos os módulos disponíveis na url: (http://localhost:5000/).**


### Orchestrator

    cd ./orchestrator
    
    npm run serve

### Products

    cd ./modules/products/
    
    npm run serve
    
### Users

    cd ./modules/users/
    
    npm run serve
