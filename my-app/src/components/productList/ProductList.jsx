import ProductCard from '../productCard/ProductCard';
import './productList.css';

function ProductList({ produtos }) {
  return (
    <div className="list">
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
          imagem={produto.imagem}
        />
      ))}
    </div>
  );
}

export default ProductList;
