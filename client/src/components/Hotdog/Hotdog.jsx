import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Hotdog.css';

function Hotdog() {
  const [examples, setHotdog] = useState([]);

  const loadHotdog = async () => {
    const res = await axios.get('http://localhost:3001/api/hotdog');
    setHotdog(res.data);
  };

  useEffect(() => {
    loadHotdog();
  }, []);

  return (
    
    <div className="hotdog">
      {examples?.map(({ _id, name, description, price, image }) => (
        <>
        <div key={_id} className="containerHotdog">
          <div className="imagem"><img className="imagemHotdog" src={image[0]?.url} alt="Imagem de Exemplo"/></div>
          <div className="containerHotdogInterno">
            <div className="nome">{name}</div>
            <div className="desc">{description}</div>
            <div className="preco">{price}</div>
          </div>
          <div className="forabtn">
            <div className="adicionar">
              <button className="botaoAdicionar">Adicionar</button>
            </div>
          </div>
        </div>
        <div className="divisor"></div>
        </>
      ))}
      
    </div>
  );
}

export default Hotdog;
