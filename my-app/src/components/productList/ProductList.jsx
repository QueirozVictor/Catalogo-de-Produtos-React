import ProductCard from '../productCard/ProductCard'
import Produtos from '../../data/products'
import './productList.css'

  function ProductList({ produtos }) {
    return (
      <div className='list'>
        {produtos.map((p) => (
          <ProductCard
            key={p.id}
            nome={p.nome}
            preco={p.preco}
            descricao={p.descricao}
            imagem={p.imagem}
          />
        ))}
      </div>
    );
  }

export default ProductList;