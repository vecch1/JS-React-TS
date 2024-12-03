import { useState } from 'react'
import './App.css'
// comentario js padrão
import FirstComponent from './components/FirstComponent'
// import Template Expression
import TemplateExpression from './components/TemplateExpression'
// Hierarquia
import MyComponent from './components/MyComponent'
// eventos
import Eventos from './components/Eventos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Fundamentos do React</h1>
        <FirstComponent />
        <TemplateExpression/>
        <MyComponent/>
        <Eventos/>
      </div>
      {/* comentario em jsx */}
    </>
  )
}

export default App
