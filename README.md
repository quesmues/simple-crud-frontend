# Simple Crud Frontend

O projeto é um frontend simples, com a implementação do backend "Simple Crud Backend" para demonstrar as API's desenvolvidas. Entre elas um cadastro simples de usuário e autenticação simples com JWT.

## Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### Pré-requisitos

Instale o NodeJS 18.

Consulte **Variáveis de ambiente** para configurar as váriaveis de ambiente.

### Instalação

Para rodar o projeto em seu computador, primeiro instale os depências com:

```
npm install
```

E após iniciar o ambiente de teste do React com:

```
npm start
```

## Páginas

As páginas implementadas foram:

```
http://localhost:3000/
http://localhost:3000/login
http://localhost:3000/administracao
http://localhost:3000/usuarios
```

O usuário e senha default criado na AWS Cognito pelo Terraform são:

```
Usuário: teste
Senha: Teste@12345
```

## Variáveis de Ambiente

Antes de rodar o projeto, copiar o arquivo ".env.example" para ".env".

E realizar a configuração conforme abaixo.

```
REACT_APP_BACKEND_URL // URL para o backend da aplicação
```

## Implantação

Para realizar a implantação do projeto, é necessário rodar:

```
npm run build
```

E implementar um Web Server produtivo com o Nginx e copiar o contéudo do diretório "build/" para o diretório do nginx "/etc/nginx/sites-enabled/{your_domain}"

## Tests

Para executar apenas rodar o script abaixo.

```
npm test
```

## Construído com

NodeJS, React e Bootstrap v5.3.

## Autor

* **Eduardo Czamanski Rota** - *Trabalho Inicial* - [Eduardo C. Rota](https://github.com/quesmues)
