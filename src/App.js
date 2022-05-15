import './App.css';
import User  from './User';
import React, {useState} from 'react';
import Table from './Table';

function App() {
  const [query, setQuery] = useState('');
  // console.log(query);

  const key =["name","username","email","phone","website"];

// console.log(User[0]["name"]);


  const Search = (data) =>{
   return  data.filter((user)=> key.some((key)=> user[key].toLowerCase().toUpperCase().includes(query)));
  }

  return (
    <div className="App">
     <input type="text" placeholder="Seach..." className="Search" onChange={(e)=>setQuery(e.target.value)} />
      <Table data={Search(User)} />
    </div>
  );
}

export default App;
