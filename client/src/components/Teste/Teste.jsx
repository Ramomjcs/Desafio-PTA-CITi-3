import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Teste (){
    //nome da variável, função de modificar essa variável(posso colocar o nome qualquer. Geralmente set+nomeDaVariavel)
    const [ contagem, setContagem ] = useState( 0 );  // dentro do use State eu coloco o valor inicial da variável
    
    const botaoAction = () => {
        setContagem(contagem+1);
    };

    return(
        <>
            
            <div>{contagem} vezes</div>
            <button onClick={botaoAction}>Clique para aumentar</button>
        </>
    );
}

export default Teste;