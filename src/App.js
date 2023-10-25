import { useState, useReducer } from 'react'
import SearchBox from "./components/shared/SearchBox";
import Button from "./components/shared/Button";
import Card from "./components/Card";
import './App.css'
// import users from "./data/users"

function App() {
  const initialUsers = [
    {id: 1, name: 'Pedro'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Cesar'},
    {id: 4, name: 'Brandon'},
    {id: 5, name: 'Estefania'},
    {id: 6, name: 'Panfilo'},
    {id: 7, name: 'Pancrasio'},
    {id: 8, name: 'Patricio'},
  ];

  const [users,setUsers] = useState(initialUsers);
  const [saveUsers,setsaveUsers] = useState(users);

  function eliminar(elementoSeleccionado){
    const newUsers = users.filter((elemento) => elemento.id !== elementoSeleccionado.id);
    const newSaveUsers = saveUsers.filter((elemento) => elemento.id !== elementoSeleccionado.id);
    setsaveUsers(newSaveUsers);
    setUsers(newUsers);
  }

  function reset(){
    setUsers(initialUsers);
    setsaveUsers(initialUsers);

  }

  function handleSortAsc(){
    const copiaUsers = [...users];
    const newUsers = copiaUsers.sort((curr, next) => {
      if (curr.name > next.name) {
        return 1;
      } else if (curr.name < next.name) {
        return -1
      } else {
        return 0;
      }
    });
    setUsers(newUsers)
  }

  function handleSortDes(){
    const copiaUsers = [...users];
    const newUsers = copiaUsers.sort((curr, next) => {
      if (curr.name > next.name) {
        return -1;
      } else if (curr.name < next.name) {
        return 1
      } else {
        return 0;
      }
    });
    setUsers(newUsers)
  }

  function handleSearch(texto) {
      const newUsers = saveUsers.filter((elemento) => elemento.name.toLowerCase().includes(texto.toLowerCase()));
      setUsers(newUsers)
  }

  return (
    <div id="main-container">
      <div id='bar-container'>
        <SearchBox handleSearch={handleSearch}/> 
        <Button handleClick={handleSortAsc}>A-Z</Button>
        <Button handleClick={handleSortDes}>Z-A</Button>
        <Button handleClick={reset}>Reset</Button>
      </div>
      <div id='card-container'>
        {
          users.map((elemento) => {
            return(
              <Card
                key={elemento.id}
                elemento={elemento}
                handleClick={eliminar}
              />
            );
          })
        }
      </div>
      
    </div>
  );
}

export default App;
