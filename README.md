# Municípia

Projeto utilizando micro-frontend.

Para executar o projeto se faz necessário rodar os 3 projetos simultaneamente.

O orquestrador e os dois modulos.

Os projetos irão rodar nas portas: 

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



## RODANDO O PROJETO

Simultaneamente execute os três projetos orchestrator, products e users com o comando `` npm run serve `` em suas respectivas pastas
