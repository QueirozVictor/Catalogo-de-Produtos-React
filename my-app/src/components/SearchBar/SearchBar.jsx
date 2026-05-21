import { useState } from "react";
import './searchBar.css'

function SearchBar({ onSearch }) {
  const [busca, setBusca] = useState("");

  return (
    <div className="search">
      <input className="bar"
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={(e) => {
          setBusca(e.target.value);
          onSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;