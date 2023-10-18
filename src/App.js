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
    'panfilo',
  ];

  const [users,setUsers] = useState(initialUsers);
  const searchUsers = users;
  

  function eliminar(indiceSeleccionado){
    const newUsers = users.filter((_,i) => i !== indiceSeleccionado)
    setUsers(newUsers)
    return null
  }

  function reset(){
    setUsers(initialUsers);
  }

  function handleSearch(texto) {
    if (texto === "") {
      reset()
    } else {
      const newUsers = users.filter((name) => name.toLowerCase().includes(texto.toLowerCase()));
      setUsers(newUsers)
    }
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
