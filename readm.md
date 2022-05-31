## :wrench: API desenvolvida utilizando Clean Architecture

## :wrench: Stack

🔴: Node
🔴: Typescript
🔴: MongoDB

## :wrench: Libs

🔶: ESLint
🔶: Lint Staged
🔶: Ts Node Dev
🔶: Prettier
🔶: Express
🔶: Tsyringe
🔶: Docker

## Banco Dados

:paperclip: MongoDb

> ## APIs funcionalidades

1. :heavy_check_mark: Criar Usuário
2. :heavy_check_mark: Listar Alertas
3. :heavy_check_mark: Criar Alerta

## :ballot_box_with_check: Executando o projeto

!!! Para executar os comandos abaixo é preciso ter o docker instalado, caso tenha o MondoDb instalado pode pular esses passos.
</br>
:heavy_check_mark: Criando container do banco postgres no docker
escolher a porta 27017, caso esteja em uso você pode optar por usar outra.
<br>

`docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=alerts-cemanden -e MONGO_INITDB_ROOT_PASSWORD=99290288caa541e4ace170ead7c4f8ee mongo`

:heavy_check_mark: Para rodar o container do mongodb:
<br>

`docker start mongodb`

## :ballot_box_with_check: Executando a API

Antes de executar esse comando verifique se seu banco de dados está rodando </br>
`yarn dev`

## :ballot_box_with_check: Rotas da API

<p>A seguir, a listagem das rotas e suas respectivas funcionalidades. Lembrado que os ids inseridos, são apenas exemplos. Para que seja eficiente, você deverá inserir os ids do seu banco.</p>

<p>Função que a rota chama - Método - Exemplo</p>

1. :heavy_check_mark: Criar Usuário - POST - localhost:5000/user/
3. :heavy_check_mark: Buscar Produtos - GET - localhost:3333/alerts
