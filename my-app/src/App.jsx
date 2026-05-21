import { useState, useEffect } from "react";
import ProductCard from './components/productCard/ProductCard'
import ProductList from './components/productList/ProductList'
import SearchBar from './components/SearchBar/SearchBar'
import Spinner from './components/Spinner/Spinner'
import Produtos from './data/products'
import Formulario from './components/Form/Form.jsx'
import './App.css'




function App() {

  const [produtos, setProdutos] = useState(Produtos);
  const [filtro, setFiltro] = useState("");
  const [loading, setLoading] = useState(true);
  const [produtosVisiveis, setProdutosVisiveis] = useState([]);


  function handleSearch(valor) {
    setLoading(true);

    setTimeout(() => {
      if(valor === ''){
      setProdutosVisiveis(produtos.slice(0, 4));
      }
      else{
        const resultados = produtos.filter((p) => p.nome.toLocaleLowerCase().includes(valor.toLocaleLowerCase()))
        setProdutosVisiveis(resultados)
      }
      
      setLoading(false);
    }, 600);
  }

  useEffect(() => {
  setTimeout(() => {
    setProdutosVisiveis(produtos.slice(0, 4))
    setLoading(false);
  }, 600);
}, []);

function handleAddProduct(novoProduto) {

  setProdutos((prev) => [...prev, novoProduto]);

  setProdutosVisiveis((prev) => [novoProduto, ...prev]);
}
  
  return (
    <main className="background">
      <div className="busca">
        <SearchBar onSearch={handleSearch} />
        <p className="font-base">Busque produtos em todo nosso sistema!</p>
      </div>
    {loading ? <Spinner /> :  produtosVisiveis.length > 0 ?(<ProductList produtos = {produtosVisiveis} />) : (<p className="title">Nenhum produto encontrado</p>)}

      <Formulario onAddProduct={handleAddProduct} />
    </main>
  );
}
  
export default App;