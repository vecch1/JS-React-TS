import './App.css'

// css de componentes
import { MyComponents } from '../components/MyComponents'
import Title from '../components/title';

function App() {
// 4 - css inline dinâmico
const n = 15;
// 5 - classes dinamicas
const redTitle = true
const redTitle2 = false

  return (
      <div className="app">
       {/*1 -  CSS Global */}
      <h1>CSS no React</h1>
      {/* 2 - css componente */}
      <MyComponents  />
      <p>pegou o css do componente</p>
      {/* 3 -inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px solid blue"}}>Este elemento tem estilo inline</p>
      {/* 4 - inline style dinamico */}
      <h2 style={n > 10 ? {color: "red"} : {color: "orange"}}>CSS Dinâmico</h2>
      <h2 style={n > 20 ? {color: "red"} : {color: "orange"}}>CSS Dinâmico2</h2>
      {/* 5 - classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter uma classe</h2>
      <h2 className={redTitle2 ? "red-title" : "title"}>Este titulo vai ter uma classe</h2>
      {/* 6 - css modules */}
      <title />
      </div>
     

  )
}

export default App
