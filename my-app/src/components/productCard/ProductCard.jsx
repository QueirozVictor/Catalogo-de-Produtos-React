import './productCard.css'

function ProductCard({ nome, descricao, preco, imagem }) {
  return (
    <div className="card">
      <img src={imagem} className='imageCard'/>
      <div className='cardText'>
        <h3 className='cardTitle'>{nome}</h3>
        <p className='cardDescription'>{descricao}</p>
        <p className='cardPrice'>R$ {preco}</p>
      </div>
    </div>
  );
}

export default ProductCard;