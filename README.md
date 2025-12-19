# User Dashboard – Angular

Aplicação frontend desenvolvida em Angular utilizando **Standalone Components**, **NgRx** e **RxJS**.

O projeto consome a API pública do JSONPlaceholder para listar usuários e exibir seus detalhes.

---

## Tecnologias

- Angular
- NgRx (Store + Effects)
- RxJS
- TypeScript
- SCSS

---

## Funcionalidades

- Listagem de usuários
- Busca com debounce
- Página de detalhes do usuário
- Gerenciamento de estado com NgRx
- Loading global
- Persistência simples de estado com localStorage
- Componentes reutilizáveis

---

## Arquitetura

src/app
├── features
├── shared
└── store


## Storybook

O projeto possui Storybook configurado para documentação e visualização dos componentes reutilizáveis (shared).

Durante a configuração, foi necessário realizar um ajuste adicional no `angular.json` e utilizar um `tsconfig` dedicado para o Storybook.  
Isso ocorreu devido ao uso da versão mais recente do Angular (v21), que exige o uso do Angular Builder oficial do Storybook para correta compilação dos arquivos `.stories.ts` e `.storybook`.

Após esses ajustes, o Storybook executa normalmente via:

```bash
ng run user-dashboard:storybook



## Executando o projeto

```bash
npm install
ng serve
