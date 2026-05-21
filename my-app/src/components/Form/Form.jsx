import { useState, useEffect } from 'react'
import PC from '../../assets/images/PC/PC.jpg'
import Ex01 from '../../assets/images/mouse/mouse-2.jpg'
import Ex02 from '../../assets/images/keyboard/keyboard2.jpg'
import './Form.css'

function Form ({onAddProduct}){
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState('')
    const [descricao, setDescricao] = useState('')
    const imagens = {
        teclado: Ex02,
        mouse: Ex01,
        monitor: PC,
    }

    function handleSubmit(e) {
        e.preventDefault()

    const novoProduto = {
        id: crypto.randomUUID(),
        nome,
        descricao,
        preco,
        imagem: imagens[imagem]
    }
        onAddProduct(novoProduto)

        setNome('')
        setPreco('')
        setImagem('')
        setDescricao('')
    }

    return(
        <div className='formCamp'>
            <div className='formCall'>
                <h2 className='formTitle'>Adicionar novo produto</h2>
                <p className='formText'>Ao adicionar um novo produto a lista, ele sera colocado no inicio da lista visivel até ser feita uma busca por produtos.Quando uma busca for feita, o produto adicionado passara a permanecer aos produtos mockados junto a sua categoria.</p>
            </div>
            <form onSubmit={handleSubmit} className='formulario'>
                <select value={imagem} onChange={(e) => setImagem(e.target.value)} className='form_select'>
                    <option value="">Escolha...</option>
                    <option value="teclado">Teclado</option>
                    <option value="mouse">Mouse</option>
                    <option value="monitor">PC</option>
                </select>
                <input type="text" placeholder='Nome:' className='form_input' value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder='Descrição:' className='form_input' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                <input type="number" placeholder='Preço R$' className='form_input' value={preco} onChange={(e) => setPreco(e.target.value)}/>
                <button className='formButton' type='submit'>Adicionar</button>
            </form>
        </div>
    )
}

export default Form;