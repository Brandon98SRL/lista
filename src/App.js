import { useState, useRef } from 'react'
import SearchBox from "./components/shared/SearchBox";
import Button from "./components/shared/Button";
import Card from "./components/Card";
// import users from "./data/users"

function App() {
  const initialUsers = [
    'Pedro',
    'Juan',
    'Cesar',
    'Brandon',
    'Estefania',
    'Panfilo',
  ];

  const [users,setUsers] = useState(initialUsers);
  const [saveUsers,setsaveUsers] = useState(users);

  function eliminar(indiceSeleccionado){
    const newUsers = users.filter((_,i) => i !== indiceSeleccionado);
    setsaveUsers(newUsers);
    setUsers(newUsers);
  }

  function reset(){
    setUsers(initialUsers);
    setsaveUsers(initialUsers);

  }

  function handleSearch(texto) {
      console.log(saveUsers);
      const newUsers = saveUsers.filter((name) => name.toLowerCase().includes(texto.toLowerCase()));
      setUsers(newUsers)
  }

  return (
    <div id="main-container">
      <div id='bar-container'>
        <SearchBox handleSearch={handleSearch}/> 
        <Button>A-Z</Button>
        <Button>Z-A</Button>
        <Button handleClick={reset}>Reset</Button>
      </div>
      {
        users.map((name, index) => {
          return(
            <Card
              key={index}
              name={name}
              indice={index}
              handleClick={eliminar}
            />
          );
        })
      }
    </div>
  );
}

export default App;
