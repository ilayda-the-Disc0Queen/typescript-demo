import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'

interface Istate{
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}  

function App() {

  // const [number, setNumber] = useState<number | string>(5);
  // const changeNumber = () => {
  //   setNumber(10)
  // }

  // const [people, setPeople] = useState([
  //   {
  //     name: "Shenseea",
  //     url: "",
  //     age: 25,
  //     note: "Independent gyal. Real numba one trending gyal"
  //   },
  //   {
  //     name: "Teyana Taylor",
  //     url: "",
  //     age: 31,
  //     // note: "A rose in Harlem"
  //   }
  // ])

  const [people, setPeople] = useState<Istate["people"]>([])
  people.map(person => {
    console.log(person.age);  
  })

 
  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
