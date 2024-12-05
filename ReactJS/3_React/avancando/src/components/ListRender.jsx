import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Lucas","Pedro","Thiago","Lucas"])


    const [users,setusers] = useState([
        {id:1, name: "Lucas", age:18},
        {id:2, name: "Pedro", age:20},
        {id:3, name: "Thiago", age:22},
    ])
    // previous state
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        
        setusers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id) )
    }

  return (
    <div>
        {/* Render sem Key */}

        <ul>
            {list.map((item,i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* Render com Key */}
        <ul>
            {/* arrow function react com () e arrow function JS com {} */}
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos </li>
            ))}
        </ul>

        {/* previous State */} 
         <button onClick={deleteRandom}>Deletar random user</button>
    </div>
  )
}

export default ListRender