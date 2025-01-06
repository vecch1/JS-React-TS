import "./MyForm.css";

import { useState } from "react";

 const MyForm = ({userName, userEmail}) => {
// genrenciamento de dados
const [name, setName] = useState("userName");
const [email, setEmail] = useState(userEmail);

const {bio, setBio} = useState("");

const {role, setRole} = useState("");
const handleName = (e) => {
  setName(e.target.value);
};

//  envio de formularios
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name,email);

  // validaão
  // envio

  // limpar form
  setName("");
  setEmail("");
  setBio("");
  setRole("");
}


console.log(name,email,bio,role);

  return (
    <div>
    {/* criaçao de form */}
    {/* envio de formularios */}
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name"  placeholder="Digite seu nome" onChange={handleName} />
            {/* controlled input */}
            value={name || ""}
        </div>
        {/* label envolvendo input */}
            <label>
              <span> E-mail</span>
              <input type="text"  name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value) } />
               {/* controlled input */}
                value={email || ""}
            </label>
            {/* 8 - textarea */}
            <label>
              <span>Bio:</span>
              <textarea name="bio"placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
              <span>Role:</span>
              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </label>
        <input type="submit" value="Enviar" />
    </form>
</div>
  )
}

export default MyForm;
