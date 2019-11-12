# API REST
API para gerar autenticação e listar carros.

## Instalação
Para iniciar o projeto deverá estar instalado o NodeJS e o MongoDB

Com o NodeJS instalado podemos dar os seguintes comandos para adicionar alguns pacotes requiridos na API
Pacote Experess:
```
npm install express
```
Pacote Mongoose para trabalhar com o MongoDB
```
npm install mongoose
```
Pacote Body-Parser para podermos enviar alguns parametros pelo header
```
npm install body-parser
```
Pacote BcryptJS para podemors usar um criptografia para salvar senhas
```
npm install bcryptjs
```
E por ultimo o pacote Json Web Token para a autenticação da API
```
npm install jsonwebtoken
```
## Rotas exemplo

### Rotas de Usuário

Rota para visualizar lista de usuários:
Metodo GET
```
http://localhost:3000/users/lista
```
Rota para autenticação do usuários(Requer JSON: email , password):
Metodo POST
```
http://localhost:3000/users/auth
```


### Rotas de Carros

Rota para registro de novos carros(Requer JSON: marca , modelo, ano, cor, placa, combustivel, cambio):
Metodo POST
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

```
http://localhost:3000/carros/register
```

Rota para visualizar lista de carros:
Metodo GET
```
http://localhost:3000/carros/lista
```

Rotas para visualizar Carro por ID(Requer Autenticação):
Exemplo de Autenticação: Prefix: Bearer. Sufix : token;
Metodo GET
Exemplo:
```
http://localhost:3000/carros/:5dc9bc4f3955a52cfc65b768
```
```
http://localhost:3000/carros/:id
```

Rota para dar update em um carro da lista por id(Requer Autenticação):
Exemplo de Autenticação: Prefix: Bearer. Sufix : token;
Metodo PUT
Exemplo:
```
http://localhost:3000/carros/:5dc9bc4f3955a52cfc65b768
```
```
http://localhost:3000/carros/:id
```
Rota para deletar um carro por id(Requer Autenticação):
Exemplo de Autenticação: Prefix: Bearer. Sufix : token;
Metodo DELETE
Exemplo:
```
http://localhost:3000/carros/:5dc9bc4f3955a52cfc65b768
```
```
http://localhost:3000/carros/:id
```