import { useState } from 'react'
import SearchBox from "./components/shared/SearchBox";
import OrderButton from "./components/shared/OrderButton";
import Card from "./components/Card";
// import users from "./data/users"

function App() {
  const intialUsers = [
    'Pedro',
    'Juan',
    'Cesar',
    'Brandon',
    'Estefania',
  ];

  return (
    <div id="main-container">
      <div id='bar-container'>
        <SearchBox/> 
        <OrderButton>A-Z</OrderButton>
        <OrderButton>Z-A</OrderButton>
        
      </div>
      {
        ['Brandon'].map((name,index) => {
          return(
            <Card
              key={index}
              name={name}
              index={index}
            />
          );
        })
      }
    </div>
  );
}

export default App;
