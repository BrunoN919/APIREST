# API REST
API para gerar autenticação e listar carros.

NodeJS ver 13.1
MongoDB ver 4.2.1

Link para rotas Insomnia(Arquivo para Exportação)
```
https://drive.google.com/open?id=1Qxn2Z1Ln2O8y_EUzZkpLZfqJQMk3LZoV
```
## Executar Projeto
```
node app.js
```
### Pacotes usados no Projeto

- Express
- Json Web Token (jwt)
- Bcrypt
- Body-Parser
- Mongoose

## Rotas de Exemplo

### Rotas de Usuário
#### Metodo GET
Rota para visualizar lista de usuários:
```
http://localhost:3000/users/lista
```
#### Rota para autenticação do usuários(Requer JSON: email , password):
##### Metodo POST
Rota para autenticar usuário:
```
http://localhost:3000/users/auth
```
### Rotas de Carros

#### Rota para registro de novos carros(Requer JSON: marca , modelo, ano, cor, placa, combustivel, cambio):
##### Metodo POST
Exemplo:
```
{
	"marca":"Volkswagen",
	"modelo":"Gol",
	"ano":2013,
	"cor":"Prata",
	"placa": "DZM9778",
	"combustivel":"Alcool",
	"cambio":"Manual"
}
```
Exemplo de Rota:
```
http://localhost:3000/carros/register
```

#### Rota para visualizar lista de carros:
##### Metodo GET
Exemplo de Rota:
```
http://localhost:3000/carros/lista
```

#### Rotas para visualizar Carro por ID(Requer Autenticação):
##### Metodo GET
Exemplo de Rota:
```
http://localhost:3000/carros/:id
```
Exemplo:
```
http://localhost:3000/carros/5dc9bc4f3955a52cfc65b768
```

#### Rota para dar update em um carro da lista por ID(Requer Autenticação):
##### Metodo PUT
Exemplo de Rota:
```
http://localhost:3000/carros/:id
```
Exemplo:
```
http://localhost:3000/carros/5dc9bc4f3955a52cfc65b768
```

#### Rota para deletar um carro por ID(Requer Autenticação):
##### Metodo DELETE
Exemplo de Rota:
```
http://localhost:3000/carros/:id
```
Exemplo:
```
http://localhost:3000/carros/5dc9bc4f3955a52cfc65b768
```

### Exemplo de Autenticação
```
Prefix: Bearer.
Sufix: Token.

Exemplo: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzlkOWU0NjhhNzRlMGI2MGEzNDM2YiIsImlhdCI6MTU3MzUxMzc1NSwiZXhwIjoxNTczNjAwMTU1fQ.dQQNEoW7-1AQxk1bbO3FdsAvL9-Rg3bD4Hr0NrfG0gk
```