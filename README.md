# Projeto Municípia


## SOBRE O PROJETO

Projeto desenvolvido usando a arquitetura de Micro Front-ends. 

Sendo constituido por três apps:

### Users Module 

O módulo de utilizadores é um APP em VueJS correndo na porta 8082

O módulo é constituido por duas páginas: 

**Página de listagem**

Listagem dos dados estáticos e link para detalhamento de cada utilizador. 

**Pagina de detalhamento**

Caixa com detalhamento do utilizador

Está página é chamada em dois momentos, dentro do módulo de utilizadores e importada dentro do módulo de produtos para o detalhamento do dono do produto

### Products Module 

O módulo de produtos é um APP em VueJS correndo na porta 8083

O módulo é constituido por duas páginas: 

**Página de listagem**

Listagem dos dados estáticos e link para detalhamento de cada produto. 

**Pagina de detalhamento**

Caixa com detalhamento do produto e importando um parcel (parcela do módulo de utilizadores) para exibir os dados do dono do produto


### Orchestrator

O orquestrador é responsável por mapear as dependências do projeto e montar os demais módulos em seus respectivos locais.

O orquestrador é desenvolvido em Javascript e corre na porta 5000

E após sua execução dos três APPs o orquestrador irá deixar todos os módulos disponíveis na url: (http://localhost:5000/)

## SETUP

### Orchestrator

    cd ./orchestrator
    
    npm install
    

### Products

    cd ./modules/products/
    
    npm install
    

### Users

    cd ./modules/users/
    
    npm install


## CORRENDO O PROJETO

Para executar o projeto é necessário correr os **três projetos simultaneamente**, orchestrator, products e users com o comando `` npm run serve `` em suas respectivas pastas.

### Orchestrator

    cd ./orchestrator
    
    npm run install

### Products

    cd ./modules/products/
    
    npm run install
    
### Users

    cd ./modules/users/
    
    npm run install
