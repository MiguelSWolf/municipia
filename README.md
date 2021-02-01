# Municípia

Projeto utilizando micro-frontend.

Para executar o projeto se faz necessário correr os três Apps simultaneamente (o **orquestrador** e os **dois módulos**).


Os projetos irão correr nas portas: 

    orchestrator: "http://localhost:5000/main.js"
    
    products: "http://localhost:8083/app.js"
    
    users: "http://localhost:8082/app.js"
    
## SETUP

    cd ./orchestrator
    
    npm install
    


    cd ./modules/products/
    
    npm install
    


    cd ./modules/users/
    
    npm install



## CORRENDO O PROJETO

Simultaneamente execute os três projetos orchestrator, products e users com o comando `` npm run serve `` em suas respectivas pastas



## SOBRE O PROJETO

### Orchestrator (http://localhost:5000/main.js)

O orquestrador é responsável por mapear as dependências e montar o modulo products e o modulo users quando necessários.

### Products (http://localhost:8083/app.js)
    
O modulo de produtos está armazenado na pasta modulo/products. 
É um modulo com os componentes para a listagem dos produtos, e detalhe dos produtos
Dentro do componente de detalhes tem a o Parcel para importar o modulo de usuários
    
### Users (http://localhost:8082/app.js)

O modulo de utilizadores está armazenado na pasta modulo/users.
É um modulo com os componentes para a listagem de utilizadores e as informações detalhadas sobre eles.
