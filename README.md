# FullTech — Catálogo de Produtos React

O FullTech é um catálogo demonstrativo de produtos de tecnologia, com busca por nome e uma seleção de itens de informática e acessórios. A interface permite visualizar produtos e adicionar novos itens temporariamente para experimentar o catálogo.

## Propósito

Projeto prático de front-end desenvolvido para exercitar a construção de uma interface de catálogo com React. A aplicação organiza a apresentação dos produtos em componentes reutilizáveis, oferece busca dinâmica e inclui um formulário para inserir itens de demonstração.

## Tecnologias utilizadas

- React 19
- Vite
- JavaScript (ES Modules)
- CSS3 responsivo
- GitHub Pages para publicação

## Funcionalidades

- Página inicial com um produto em destaque de cada categoria principal.
- Página “Todos os produtos” com o catálogo completo agrupado por categoria, incluindo attachments.
- Catálogo com imagens, nomes, descrições e preços de produtos.
- Busca por nome do produto em todas as categorias.
- Navegação entre a Home e o catálogo completo.
- Inclusão de produtos de demonstração com categoria, nome, descrição e preço.
- Estado de carregamento durante a atualização dos resultados.
- Formatação de preços em reais.
- Layout adaptável para desktop, tablet e celular.
- Imagens locais carregadas sob demanda nos cartões.

## Imagem do projeto

<p align="center">
    <img src="/my-app/src/assets/images/screenShot.webp" alt="Imagem do projeto" width="600">
</p>

## Deploy

[Acessar o Catálogo FullTech](https://queirozvictor.github.io/Catalogo-de-Produtos-React/)

## Aprendizados

- Como compor uma interface usando componentes React.
- Como compartilhar dados entre componentes por props.
- Como gerenciar estado e eventos com hooks.
- Como filtrar uma lista de produtos conforme a busca.
- Como montar cartões e grades responsivas com CSS Grid.
- Como melhorar acessibilidade com rótulos, estados e descrições de imagem.
- Como preparar uma aplicação Vite para publicação no GitHub Pages.

## Estrutura principal

```text
Catalogo-react/
├── my-app/
│   ├── src/
│   │   ├── assets/             # Imagens, logotipo e estilos base
│   │   ├── components/         # Inclui AllProducts, com todas as categorias
│   │   ├── data/products.js    # Arrays de produtos separados por categoria
│   │   ├── App.jsx             # Página, busca e composição da interface
│   │   └── main.jsx            # Inicialização do React
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Executar localmente

Requisitos: Node.js e npm instalados.

```bash
cd my-app
npm install
npm run dev
```

Abra no navegador o endereço local apresentado pelo Vite.

Para gerar a versão de produção:

```bash
npm run build
```

Para publicar no GitHub Pages, use `npm run deploy` depois de configurar o acesso ao repositório.
