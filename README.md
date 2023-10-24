# Desafio Frontend - Smart Fit

![Smart Fit](./src/assets/images/svg/logo.svg)

Este repositório contém a solução para o desafio de [Front-end da Smart Fit](https://github.com/bioritmo/front-end-code-challenge-smartsite/tree/master).

Para o desenvolvimento foi utilizado o framework Angular seguindo os passos presentes no video da **Fernanda Kipper**, você pode acessar este vídeo [aqui](https://www.youtube.com/watch?v=ozZXMkp8MnQ).

Esta solução está no ar e você pode acessar através deste link https://desafio-smartfit.vercel.app/

## Sobre o desafio

A Smart Fit é uma empreasa que atua no segmento de fitness e passou por várias mudanças durante a pandemia. Surgiu a necessidade desenvolver uma página para buscar unidades abertas ou fechadas para consulta e reserva. 

De acordo com as Regras de negócio definidas foram implementadas as seguintes funcionalidades neste desafio:

### Funcionalidades
[x] Carregar unidades através do arquivo JSON [locations.json](https://test-frontend-developer.s3.amazonaws.com/data/locations.json) utilizando o método `GET`.
[x] Busca por todas as unidades.
[x] Busca por unidades com filtros.
[x] Previsão do número de resultados encontrados.
[x] Listagem das unidades encontradas após a busca.

### Regras de negócio
- Filtra unidades abertas ou fechadas.
- Filtra unidades por período de funcionamento.
- Exibe a mensagem "Nenhuma unidade encontrada" quando não há resultados.
- Valida e exibe os ícones corretos de acordo com o status da unidade.

## Layout

O layout da aplicação foi baseado nos materiais disponibilizados, incluindo designs para dispositivos móveis e desktop, cores, imagens e fontes. A fidelidade ao layout proposto foi mantida, e a aplicação é responsiva para dispositivos móveis, tablets e desktops.

## Como Executar

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório:

```bash
  git clone https://github.com/CaioSouzalimaa/desafio-smartfit
  cd desafio-smartfit
```

2. Instale as dependências

```bash
  npm install
```

3. Inicie a aplicação

```bash
  npm start ou ng serve
```
