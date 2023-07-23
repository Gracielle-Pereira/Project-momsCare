MomsCare API

A MomsCare API é uma aplicação que visa fornecer suporte para mães estudantes que desejam cuidar de seus filhos enquanto buscam seu desenvolvimento através dos estudos. 
A API oferece funcionalidades para cadastrar informações sobre mães, instituições gratuitas que cuidam de crianças e projetos do governo voltados para apoio materno.
Fornece também a funcionalidade para cadastro de pessoas que querem doar recursos, emprestar notbooks etc.

Funcionalidades

Cadastro de Mães:

Cadastrar uma nova mãe com seu nome e informações sobre os filhos.
Listagem de Mães:

Listar todas as mães cadastradas no sistema.
Atualização de Mães:

Atualizar informações de uma mãe existente.
Exclusão de Mães:

Excluir uma mãe do sistema.
Listagem de Instituições Gratuitas:

Listar instituições gratuitas que cuidam de crianças.
Listagem de Projetos do Governo:

Listar projetos do governo voltados para apoio materno.
Cadastro de Empresas Doadoras:

Cadastrar informações de empresas que desejam fazer doações para as mães estudantes. As doações podem ser em formato de bolsas de estudos, empréstimo de notebooks, entre outros.

Estrutura do projeto

projetoFinal
|-- MomsCare
|   |-- src
|   |   |-- app
|   |   |   |-- app.js
|   |   |-- controllers
|   |   |   |-- motherController.js
|   |   |   |-- childcareController.js
|   |   |   |-- donorCompaniesController.js
|   |   |-- database
|   |   |   |-- connection.js
|   |   |-- JWT
|   |   |   |-- authMiddleware.js
|   |   |-- models
|   |   |   |-- childcare.js
|   |   |   |-- donorCompany.js
|   |   |   |-- mother.js
|   |   |   |-- user.js
|   |   |-- routes
|   |   |   |-- authRoutes.js
|   |   |   |-- motherRoutes.js
|   |   |   |-- childcareRoutes.js
|   |   |   |-- donorCompaniesRoutes.js
|   |-- swagger
|   |   |-- swagger_output.json
|   |-- tests
|   |   |-- childcareRoutes.test.js
|   |   |-- motherRoutes.test.js
|   |   |-- donorCompaniesRoutes.test.js
|   |-- .env
|   |-- .env.exemple
|   |-- .gitignore
|   |-- package-lock.json
|   |-- package.json
|   |-- README.md
|   |-- server.js
|   |-- swagger.js


Tecnologias Utilizadas

Node.js
Express.js
MongoDB (com o pacote Mongoose)
Swagger para documentação da API
Chai e Mocha para testes unitários

Instalação

Clone este repositório em sua máquina local.
Execute npm install para instalar as dependências do projeto.
Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, como a conexão com o banco de dados MongoDB.
Execute npm start para iniciar o servidor.
Acesse a documentação da API em //colocaraqui

Como Usar
Utilize o Postman para realizar requisições à API. As rotas disponíveis estão definidas na documentação da API.


Testes
Execute npm test para executar os testes unitários implementados com Chai e Mocha.

Contribuição
Este projeto é de código aberto e qualquer contribuição é bem-vinda! Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.


Contato
Se tiver alguma dúvida ou precisar de mais informações sobre o projeto, sinta-se à vontade para entrar em contato:

Nome: Gracielle Pereira

E-mail: gracielle.spereira@hotmail.com
