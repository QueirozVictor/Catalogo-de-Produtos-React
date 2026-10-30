import { useState } from 'react';
import PC from '../../assets/images/PC/PC.webp';
import Ex01 from '../../assets/images/mouse/mouse-2.webp';
import Ex02 from '../../assets/images/keyboard/keyboard2.webp';
import './Form.css';

function Form({ onAddProduct }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const imagens = { teclados: Ex02, mouse: Ex01, pc: PC };

  function handleSubmit(event) {
    event.preventDefault();
    const novoProduto = {
      id: crypto.randomUUID(),
      categoria,
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco: Number(preco),
      imagem: imagens[categoria],
    };
    onAddProduct(novoProduto);
    setNome('');
    setPreco('');
    setCategoria('');
    setDescricao('');
  }

  return (
    <section className="formCamp" aria-labelledby="formTitle">
      <div className="formCall">
        <p className="eyebrow">Catálogo colaborativo</p>
        <h2 className="formTitle" id="formTitle">Adicionar um produto</h2>
        <p className="formText">
          Inclua um item de demonstração no catálogo. Os dados ficam disponíveis
          somente nesta sessão e não são enviados para um servidor.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="formulario">
        <select aria-label="Categoria do produto" value={categoria} onChange={(event) => setCategoria(event.target.value)} className="form_select" required>
          <option value="">Categoria</option>
          <option value="teclados">Teclado</option>
          <option value="mouse">Mouse</option>
          <option value="pc">Computador</option>
        </select>
        <input type="text" aria-label="Nome do produto" placeholder="Nome do produto" className="form_input" value={nome} onChange={(event) => setNome(event.target.value)} required />
        <input type="text" aria-label="Descrição do produto" placeholder="Descrição" className="form_input" value={descricao} onChange={(event) => setDescricao(event.target.value)} required />
        <input type="number" aria-label="Preço em reais" placeholder="Preço (R$)" className="form_input" min="0.01" step="0.01" value={preco} onChange={(event) => setPreco(event.target.value)} required />
        <button className="formButton" type="submit">Adicionar ao catálogo</button>
      </form>
    </section>
  );
}

export default Form;
