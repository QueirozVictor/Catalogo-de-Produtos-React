import { useEffect, useMemo, useState } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts/AllProducts';
import ProductList from './components/productList/ProductList';
import SearchBar from './components/SearchBar/SearchBar';
import Spinner from './components/Spinner/Spinner';
import Formulario from './components/Form/Form.jsx';
import Header from './components/Header/Header';
import { CATEGORIAS } from './data/products';
import './App.css';

function App() {
  const [produtosPorCategoria, setProdutosPorCategoria] = useState(() =>
    Object.fromEntries(CATEGORIAS.map(({ id, titulo, produtos }) => [id, { titulo, produtos }]))
  );
  const [filtro, setFiltro] = useState('');
  const [filtroAplicado, setFiltroAplicado] = useState('');
  const [loading, setLoading] = useState(true);

  const todosProdutos = useMemo(
    () => Object.values(produtosPorCategoria).flatMap(({ produtos }) => produtos),
    [produtosPorCategoria],
  );

  const produtosDestaque = useMemo(
    () => CATEGORIAS
      .filter(({ destaque }) => destaque)
      .flatMap(({ id }) => produtosPorCategoria[id].produtos.slice(0, 1)),
    [produtosPorCategoria],
  );

  const produtosVisiveis = useMemo(() => {
    if (!filtroAplicado) return produtosDestaque;
    const consulta = filtroAplicado.toLocaleLowerCase('pt-BR');
    return todosProdutos.filter((produto) =>
      produto.nome.toLocaleLowerCase('pt-BR').includes(consulta),
    );
  }, [filtroAplicado, produtosDestaque, todosProdutos]);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => {
      setFiltroAplicado(filtro.trim());
      setLoading(false);
    }, 250);
    return () => window.clearTimeout(timer);
  }, [filtro]);

  function handleAddProduct(novoProduto) {
    setProdutosPorCategoria((atuais) => {
      const categoria = novoProduto.categoria;
      if (!categoria || !atuais[categoria]) return atuais;
      return {
        ...atuais,
        [categoria]: {
          ...atuais[categoria],
          produtos: [novoProduto, ...atuais[categoria].produtos],
        },
      };
    });
  }

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={(
            <main className="store-page">
              <div className="store-content">
                <section className="store-intro" aria-labelledby="store-title">
                  <div className="store-intro__copy">
                    <p className="eyebrow">Seu próximo upgrade começa aqui</p>
                    <h2 id="store-title">Tecnologia que acompanha seu ritmo.</h2>
                    <p className="store-intro__description">
                      Encontre notebooks, periféricos e acessórios para trabalhar,
                      estudar e jogar.
                    </p>
                  </div>
                  <div className="search-panel">
                    <SearchBar onSearch={setFiltro} />
                    <p>Pesquise pelo nome do produto em todo o catálogo.</p>
                  </div>
                </section>

                <section className="catalog-section" id="catalogo" aria-labelledby="catalog-title">
                  <div className="section-heading">
                    <div>
                      <p className="eyebrow">Seleção FullTech</p>
                      <h2 id="catalog-title">{filtroAplicado ? 'Resultados da busca' : 'Um destaque por categoria'}</h2>
                    </div>
                    {!filtroAplicado && <span className="section-heading__badge">4 categorias em destaque</span>}
                  </div>

                  {loading ? (
                    <Spinner />
                  ) : produtosVisiveis.length > 0 ? (
                    <ProductList produtos={produtosVisiveis} />
                  ) : (
                    <p className="empty-state" role="status">Nenhum produto encontrado. Tente outro termo.</p>
                  )}
                  <div className="catalog-actions">
                    <Link className="catalog-all-link" to="/todos-produtos">Ver todos os produtos <span aria-hidden="true">→</span></Link>
                  </div>
                </section>

                <Formulario onAddProduct={handleAddProduct} />
              </div>
              <footer className="store-footer">FullTech <span>•</span> Catálogo demonstrativo de produtos</footer>
            </main>
          )}
        />
        <Route
          path="/todos-produtos"
          element={<AllProducts produtosPorCategoria={produtosPorCategoria} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
