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

## Executando o projeto

```bash
npm install
npm start