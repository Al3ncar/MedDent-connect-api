# WebConnect API

API REST desenvolvida com **Node.js** e **Express** para gerenciamento de registros de pessoas.
O projeto segue uma estrutura simples baseada em **controllers, models, rotas e utilidades**, facilitando manutenção e escalabilidade.


- Segue tambem o projeto em front-end: https://github.com/Al3ncar/MedDent-connect

---

# 📌 Tecnologias Utilizadas

* Node.js
* Express
* CORS
* Dotenv
* Nodemon (ambiente de desenvolvimento)

---

# 📂 Estrutura de Pastas

```
webconnect-api
│
├── node_modules
├── src
│   ├── controllers
│   │   └── controllers.js
│   │
│   ├── models
│   │   └── personModel.js
│   │
│   ├── router
│   │   └── router.js
│   │
│   ├── utils
│   │   ├── data-person.js
│   │   ├── responses.js
│   │   └── valid-data-methods.js
│   │
│   └── view
│       └── .env
│
├── .gitignore
├── main.js
├── package.json
└── package-lock.json
```

---

# 📖 Descrição das Pastas

### `/controllers`

Responsável por conter a lógica das rotas da aplicação.
Cada função recebe a requisição (`req`) e retorna a resposta (`res`).

Exemplo de responsabilidades:

* Buscar registros
* Criar registros
* Atualizar registros
* Deletar registros

---

### `/models`

Define a estrutura dos dados manipulados pela aplicação.

Arquivo:

```
personModel.js
```

Responsável por representar o modelo de pessoa utilizado na API.

Exemplo de estrutura:

```
{
  id: Number,
  name: String,
  email: String,
  cellPhone: String,
  msg: String
}
```

---

### `/router`

Responsável por centralizar todas as rotas da API.

Arquivo:

```
router.js
```

Define os endpoints e conecta cada rota ao seu respectivo controller.

---

### `/utils`

Contém arquivos auxiliares usados em várias partes da aplicação.

Arquivos:

**data-person.js**

Armazena dados mockados da aplicação.

```
const dataAllPerson = [
  {
    id: 1,
    name: "Joana",
    email: "joana@gmail.com",
    cellPhone: "(11) 98765-4321",
    msg: "exemplo de mensagem"
  },
  {
    id: 2,
    name: "Amanda",
    email: "amanda@gmail.com",
    cellPhone: "(11) 92456-9869",
    msg: "exemplo de mensagem 2"
  }
]
```

---

**responses.js**

Centraliza os códigos de resposta HTTP utilizados pela API.

```
200 - A requisição foi processada com sucesso.

201 - O recurso foi criado com sucesso e já está disponível no sistema.

204 - A requisição foi processada com sucesso, porém não há conteúdo para retornar.

400 - A requisição enviada é inválida. Verifique os dados informados e tente novamente.

404 - O recurso solicitado não foi encontrado. Verifique se o identificador ou rota está correto.

500 - Ocorreu um erro interno no servidor ao processar a requisição. Tente novamente mais tarde.
```

---

**valid-data-methods.js**

Responsável por validar dados recebidos nas requisições antes de serem processados pelos controllers.

Exemplos de validações possíveis:

* Campos obrigatórios
* Formato de email
* Estrutura dos dados enviados no body

---

### `/view`

Pode conter arquivos estáticos ou páginas simples utilizadas pela aplicação.

---

# 🚀 Instalação do Projeto

Clone o repositório:

```
git clone <url-do-repositorio>
```

Entre na pasta do projeto:

```
cd webconnect-api
```

Instale as dependências:

```
npm install
```

---

# ▶️ Executando o Projeto

### Ambiente de desenvolvimento

```
npm run dev
```

Utiliza **nodemon** para reiniciar o servidor automaticamente.

---

### Ambiente normal

```
npm start
```

---

# 🌐 Rotas da API

## Home

### GET /

Retorna a página inicial ou mensagem da API.

---

## Listar registros

### GET /api

Retorna todos os registros cadastrados.

Resposta exemplo:

```
[
  {
    "id": 1,
    "name": "Joana",
    "email": "joana@gmail.com",
    "cellPhone": "(11) 98765-4321",
    "msg": "exemplo de mensagem"
  }
]
```

---

## Criar registro

### POST /api/data

Cria um novo registro.

Body esperado:

```
{
  "name": "Maria",
  "email": "maria@email.com",
  "cellPhone": "(11) 98888-8888",
  "msg": "mensagem exemplo"
}
```

Resposta:

```
201 Created
```

---

## Atualizar registro

### PUT /api/data/:id

Atualiza um registro existente.

Exemplo:

```
PUT /api/data/1
```

Body:

```
{
  "name": "Joana Silva",
  "email": "joana@email.com",
  "cellPhone": "(11) 97777-7777",
  "msg": "mensagem atualizada"
}
```

---

## Deletar registro

### DELETE /api/data/:id

Remove um registro da lista.

Exemplo:

```
DELETE /api/data/2
```

Resposta:

```
204 No Content
```

---

# 📦 Scripts do Projeto

```
npm start
```

Executa o servidor Node.

```
npm run dev
```

Executa o servidor utilizando nodemon para recarregamento automático.

---

# 📄 package.json

Dependências principais:

```
express
cors
dotenv
```

Dependência de desenvolvimento:

```
nodemon
```

---

# ⚠️ Possíveis Melhorias Futuras

* Integração com banco de dados (MongoDB, PostgreSQL ou MySQL)
* Implementação de autenticação (JWT)
* Camada de serviços (Service Layer)
* Testes automatizados
* Documentação com Swagger
* Validação mais robusta de dados

---

Projeto desenvolvido como prática de desenvolvimento de **API REST com Node.js e Express**.
