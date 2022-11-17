# App de simulação

## 1. Visão Geral

Tecnologias utilizadas no projeto:

- [React](https://reactjs.org/docs/getting-started.html)
- [Axios](https://axios-http.com/docs/intro)
- [Yup](https://openbase.com/js/yup/documentation)
- [Styled Components](https://styled-components.com/docs)
  
---
## 2. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```
yarn
```
---
## 3. Exemplo de post

curl --request POST \
        --url https://frontend-challenge-7bu3nxh76a-uc.a.run.app \
        --header 'content-type: application/json' \
        --data '{
        "amount": 15000,
        "installments": 3,
        "mdr": 4
      }'
      
      --response {"1":13267,"15":13536,"30":13824,"90":14400}
---

## 4. Deploy no Vercel
Link: https://teste-tecnico-front-end-mu.vercel.app/

---
## Tabela de Conteúdos

- [App de simulação](#app-de-simulação)
  - [1. Visão Geral](#1-visão-geral)
    - [2. Instalando Dependências](#2-instalando-dependências)
  - [3. Exemplo de post](#3-exemplo-de-post)
- [4. Deploy no Vercel](#4-deploy-no-vercel)
  - [Tabela de Conteúdos](#tabela-de-conteúdos)

---
