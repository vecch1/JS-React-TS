import React from 'react'

const ConditionalRender = () => {

    const x = true;
    const y = 5;

  return (
    <div> 
        {/* Render condicional */}
        <h3>x será exibido?</h3>
        {x && <p>Se x for true, sim"</p> }
        <h3>y sera exibido?</h3>
        {y > 6 && <p>Se y for true, sim!</p> }
    </div>
  )
}

export default ConditionalRender