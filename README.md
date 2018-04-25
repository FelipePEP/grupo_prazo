# TaskManager

Projeto desenvolvido para processo seletivo do Grupo Prazo.
Criado com Twitter bootstrap e Angular 5 [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Levantando aplicação

É preciso instalar o nodejs e Angular para rodar o projeto. 
Digite o comando `ng serve` no terminal de controle e acesse `http://localhost:4200/` para testar a aplicação.

## Testando aplicação

Existe um usuário base com login 'admin@admin.com' e senha 'admin'. 
Outros usuários podem ser criados e deletados a vontade.

## Banco de dados

Conforme o solicitado, utilizei o local storage do cliente para armazenar dados.
Infelizmente não tive tempo hábil para montar uma API node com Mongo, o que seria o mais indicado.

## Decisões de arquitetura

Não tinha trabalhado com as versões mais atuais de bootstrap e Angular antes, por isso não tenho certeza sobre uma arquitetura ideal.
Optei por estruturar o projeto em componentes, módulos, paginas e serviços, embora pudesse expandir mais para a camada de domínio do negócio.

Quanto à interface de usuário optei por usar o template básico do bootstrap.  Inseri cores no em títulos e background para utilizar variáveis no css e causar contraste visual. Utilizei uma folha de estilo única para toda a aplicação, pois não houve necessidades exclusivas dos componentes ou páginas. Utilizei uma folha de estilo única para toda a aplicação, pois não houve necessidades exclusivas dos componentes ou páginas.

## Contato

blizz.pep@gmail.com
foliveira.webdev@gmail.com


