import "./MyForm.css";

import { useState } from "react";

 const MyForm = () => {
// genrenciamento de dados
const [name, setName] = useState();
const [email, setEmail] = useState();

const handleName = (e) => {
  setName(e.target.value);
};
console.log(name)

  return (
    <div>
    {/* criaçao de form */}
    <form>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name"  placeholder="Digite seu nome" onChange={handleName} />
        </div>
        {/* label envolvendo input */}
            <label>
              <span> E-mail</span>
              <input type="text"  name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value) } />
            </label>
        <input type="submit" value="Enviar" />
    </form>
</div>
  )
}

export default MyForm;
