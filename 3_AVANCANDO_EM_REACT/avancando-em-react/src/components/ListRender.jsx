import { useState } from "react";

const ListRender = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Matheus" },
    { id: 2, name: "João" },
    { id: 3, name: "Maria" },
  ]);

  const deleteRandomUser = () => {
    const randomId = Math.floor(Math.random() * 3 + 1);    
    setUsers((newUsers) => newUsers.filter((user) => randomId !== user.id));
    console.log(randomId);
  };

  return (
    <div>
      <h3>Frameworks Frontend</h3>
      <ul>
        {/*key é uma propriedade obrigatória para listas de componentes criadas dinamicamente.*/}
        {users.map((user) => <li key={user.id}>{user.name}</li>)}        
      </ul>
        <button onClick={deleteRandomUser}>Delete Random User</button>  
    </div>
  );
};

export default ListRender;