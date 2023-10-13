<p align="center">
  <img  src="https://i.imgur.com/7MHzuPo.png" alt="Logo">
</p>

# Desafio Nginx, Node.js e Docker

## Proposta do Desafio

Nesse desafio, você colocará em prática o que aprendemos em relação à utilização do Nginx como proxy reverso. A ideia principal é que quando um usuário acessar o Nginx, o mesmo fará uma chamada em nossa aplicação Node.js. Essa aplicação, por sua vez, adicionará um registro em nosso banco de dados MySQL, cadastrando um nome na tabela "people".

O retorno da aplicação Node.js para o Nginx deverá ser:

- `<h1>Full Cycle Rocks!</h1>`

- Lista de nomes cadastrados no banco de dados.

Gere o arquivo Docker Compose de uma forma que basta apenas rodar:

```bash
docker-compose up -d
```

que tudo deverá estar funcionando e disponível na porta 8080.

- A linguagem de programação para este desafio é Node/JavaScript.

## Estrutura do Projeto

O projeto é composto por três serviços principais:

1. **mysqldb** - Um serviço MySQL que armazena os dados em um volume persistente.
2. **nodeapp** - Uma aplicação Node.js que se comunica com o banco de dados MySQL e fornece uma API para o Nginx.
3. **nginx** - Um servidor Nginx que atua como proxy reverso e roteia solicitações para a aplicação Node.js.

## Arquivos do Projeto

Aqui estão os principais arquivos do projeto:

- **docker-compose.yml**: O arquivo de configuração Docker Compose que define como os contêineres são construídos e conectados.
- **.db.env**: O arquivo de variáveis de ambiente para o contêiner MySQL.
- **.node.env**: O arquivo de variáveis de ambiente para o contêiner Node.js.
- **nginx.conf**: O arquivo de configuração Nginx que define como as solicitações são roteadas.
- **public**: A pasta que contém arquivos estáticos servidos pelo Nginx.
- **src/**: O código-fonte da aplicação Node.js.
- **package.json**: O arquivo de configuração do Node.js que lista as dependências da aplicação.

## Como Usar

1. Clone este repositório em sua máquina local.
2. No diretório do projeto, execute o seguinte comando para iniciar os contêineres:

```bash
docker-compose up -d
```

3. O projeto estará disponível em [http://localhost:8080](http://localhost:8080).

## Dependências

O projeto utiliza as seguintes dependências Node.js:

- MySQL
- UUID

Você pode instalar essas dependências executando o seguinte comando no diretório do projeto:

```bash
npm install
```

**Full Cycle Rocks!!** 🤘😎
