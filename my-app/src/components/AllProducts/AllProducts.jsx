import ProductList from '../productList/ProductList';
import './AllProducts.css';

function AllProducts({ produtosPorCategoria }) {
  return (
    <main className="all-products-page">
      <div className="all-products-content">
        <header className="all-products-heading">
          <p className="eyebrow">Catálogo FullTech</p>
          <h2>Todos os produtos</h2>
          <p>Explore o catálogo completo, organizado por categoria.</p>
        </header>

        {Object.entries(produtosPorCategoria).map(([categoriaId, categoria]) => (
          <section className="all-products-category" key={categoriaId} aria-labelledby={`category-${categoriaId}`}>
            <div className="all-products-category__heading">
              <h3 id={`category-${categoriaId}`}>{categoria.titulo}</h3>
              <span>{categoria.produtos.length} {categoria.produtos.length === 1 ? 'produto' : 'produtos'}</span>
            </div>
            {categoria.produtos.length > 0 ? (
              <ProductList produtos={categoria.produtos} />
            ) : (
              <p className="all-products-empty">Nenhum produto cadastrado nesta categoria.</p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}

export default AllProducts;
