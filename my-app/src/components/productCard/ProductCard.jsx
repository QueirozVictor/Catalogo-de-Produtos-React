import './productCard.css';

function ProductCard({ nome, descricao, preco, imagem }) {
  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(preco));

  return (
    <article className="card">
      <img src={imagem} className="imageCard" alt={nome} loading="lazy" />
      <div className="cardText">
        <h3 className="cardTitle">{nome}</h3>
        <p className="cardDescription">{descricao}</p>
        <p className="cardPrice">{precoFormatado}</p>
      </div>
    </article>
  );
}

export default ProductCard;
