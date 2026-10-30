import { useState } from 'react';
import './searchBar.css';

function SearchBar({ onSearch }) {
  const [busca, setBusca] = useState('');

  return (
    <div className="search">
      <input
        className="bar"
        type="search"
        aria-label="Buscar produtos no catálogo"
        placeholder="Buscar notebooks, periféricos..."
        value={busca}
        onChange={(event) => {
          setBusca(event.target.value);
          onSearch(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
