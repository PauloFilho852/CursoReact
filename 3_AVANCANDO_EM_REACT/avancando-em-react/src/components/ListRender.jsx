import { useState } from "react";

const ListRender = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Matheus" },
    { id: 2, name: "João" },
    { id: 3, name: "Maria" },
  ]);

  const deleteRandomUser = () => {
    const randomId = Math.floor(Math.random() * 10);
    
    setUsers((newUsers) => newUsers.filter((user) => randomId !== user.id)
    );
  };

  return (
    <div>
      <h3>Frameworks Frontend</h3>
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}        
      </ul>
        <button onClick={deleteRandomUser}>Delete Random User</button>  
    </div>
  );
};

export default ListRender;