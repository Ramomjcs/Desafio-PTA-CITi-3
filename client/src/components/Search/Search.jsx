import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Search.css';

function Search() {
  const [examples, setSearch] = useState([]);

  const loadSearch = async () => {
    const res = await axios.get('http://localhost:3001/api/search');
    setSearch(res.data);
  };

  useEffect(() => {
    loadSearch();
  }, []);

  return (
    
    <div className="search">
      <h1><input id="campo"></input></h1>
      {examples?.map(({ _id, name, image }) => (
        <div key={_id} className="example-card">
          <img src={image[0]?.url} alt="Imagem de Exemplo"/>
          <p>{name}</p>
          
        </div>
      ))}
      
    </div>
  );
}

export default Search;
