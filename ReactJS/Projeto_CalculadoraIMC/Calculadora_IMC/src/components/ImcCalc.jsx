import { useState } from 'react';
import './ImcCalc.css';
import Button from './button';

const ImcCalc = () => {
  const [height, setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const ClearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/^0-9,/g, "")
  }


  const handleHeightChange = (e) => {

    const updatedValue = validDigits(e.target.value)

    setHeight(updatedValue);

  }

  const handleWeightChange = (e) => {

    const updatedValue = validDigits(e.target.value)

    setWeight(updatedValue);

  }

  return (
    <div id="calc-container">
      <h2>calculadora IMC React</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="Height">Altura:</label>
            <input type="text" name='height' id='height' placeholder='Exemplo 1,70' onChange={(e) => handleHeightChange(e)} value={height} />
          </div>
          <div className="form-control">
            <label htmlFor="Weight">Peso:</label>
            <input type="text" name='Weight' id='Weight' placeholder='Exemplo 70,5' onChange={(e) => handleWeightChange(e)} value={weight} />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn"  text="Calcular"/>
          <Button id="clear-btn"  text="Limpar" action={ClearForm} />
        </div>
      </form>
    </div>
  )
}

export default ImcCalc