import './ImcCalc.css'
import Button from './button'

const ImcCalc = () => {
  return (
    <div id="calc-container">
      <h2>calculadora IMC React</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="Height">Altura:</label>
            <input type="text" name='height' id='height' placeholder='Exemplo 1,70' />
          </div>
          <div className="form-control">
            <label htmlFor="Weight">Peso:</label>
            <input type="text" name='Weight' id='Weight' placeholder='Exemplo 70,5' />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn"  text="Calcular"/>
          <Button id="clear-btn"  text="Limpar"/>
        </div>
      </form>
    </div>
  )
}

export default ImcCalc