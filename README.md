# Pokémon API

Esta é uma API RESTful para gerenciar Pokémons utilizando Node.js, Express e PostgreSQL. A API fornece operações CRUD (Create, Read, Update, Delete) para Pokémons.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Rotas da API](#rotas-da-api)

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize (ORM para Node.js)
- Dotenv (para gerenciar variáveis de ambiente)


## Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/pokemon-api.git
    cd pokemon-api
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install express dotenv sequelize pg pg-hstore
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente para configuração do banco de dados PostgreSQL:

    ```plaintext
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=nome_do_banco
    DB_HOST=localhost
    DB_PORT=5432
    ```

2. Configure o banco de dados PostgreSQL criando um banco de dados e executando as migrações do Sequelize:

    ```bash
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    ```

## Rotas da API

### 1. Listar todos os Pokémons

GET ```/pokemons```

    Retorna uma lista de todos os Pokémons.

#### 2. Obter um Pokémon por Número

GET ```/pokemon/:num```

    Retorna os detalhes de um Pokémon com base no número fornecido.

### 3. Adicionar um novo Pokémon

POST ```/pokemon```

    Adiciona um novo Pokémon.
    Body: JSON com os campos name, number, type e image.

### 4. Atualizar um Pokémon existente

PUT ```/pokemon/:num```

    Atualiza os dados de um Pokémon existente.
    Body: JSON contendo os campos a serem atualizados (name, number, type, image).

### 5. Deletar um Pokémon

DELETE ```/pokemon/:num```

    Remove um Pokémon com base no número fornecido.