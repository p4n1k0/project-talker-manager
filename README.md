# Boas-vindas ao repositório do projeto Talker Manager!

Aqui você vai encontrar os detalhes de como foi estruturar o desenvolvimento do projeto a partir deste repositório.

# Entregáveis

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  Construção de uma aplicação de cadastro de talkers (palestrantes) em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso fui capaz de:
  1. Desenvolver uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers) e;
  2. Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.

</details>

# Orientações

<details>
  <summary><strong>:whale: Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it talker_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  ---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`

  :eyes: **De olho nas dicas:** 
  1. Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  2. O avaliador espera que a versão do `node` utilizada seja a 16.

</details>

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - `git clone git@github.com:p4n1k0/project-talker-manager.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd project-talker-manager`

  
</details>

<details>
  <summary><strong>🔁 Live reload</strong></summary><br />

  Usaremos o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

  Este projeto já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

  Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do projeto.
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Usaremos o [Jest](https://jestjs.io/pt-BR/) e o [Frisby](https://docs.frisbyjs.com/) para fazer os testes de API.

  Este projeto já vem configurado e com suas dependências

  ### Executando todos os testes

  Para poder executar os testes, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test` e **todos** os seus testes serão executados.

  ### Executando um teste específico

  Para executar um teste expecífico, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test nome-do-teste`.

  Ex: Para executar o teste referente ao **login**, basta digitar `npm test login`.

  :warning: **Importante:** os comandos de testes podem ser executados tanto no terminal do seu computador quanto do **_Docker_**.
  Obs: testes desevolvidos pelo time da trybe.
</details>

<details>
  <summary><strong>🗣 Me dê feedbacks sobre o projeto!</strong></summary><br />

</details>



  - Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.

  **Dica** é importante ter atenção se essa rota não entra em conflito com as outras, já que a ordem das rotas faz diferença na interpretação da aplicação

</details>
