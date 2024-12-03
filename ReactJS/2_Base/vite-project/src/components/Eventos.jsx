import React from 'react'

const Eventos = () => {

  const handleClick = (e) => {
    console.log(e)
    console.log("Executou")
  }

// funçao de renderizaçao
  const renderSomething = (e) => {
    if(e){
      return <h1>Renderizando isso</h1>;
    }else {
      return <h1>Renderizando outra coisa</h1>;
    }
  };

  return 10 > 2 && <p>carregando</p>


  return (
    <div>
        <div>
            <button onClick={() =>console.log("testando um evento")}>Clique aqui</button>
        </div>
        {/* evento con funçao */}
        <div>
          <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
        {/* renderSomething */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Eventos