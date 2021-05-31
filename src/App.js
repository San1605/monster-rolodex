import {Cardlist} from './components/card-list/card-list.component'
import React, { Component } from 'react'
import './App.css';
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  
  constructor() {
    super();
    this.state = {
     searchField:"",
      monsters: [
        {
          name: "franknstein",
          id: 'asdf'
        },
        
       {
          name: 'zombie',
          id: 'qwhr' 
        },
        {
          name: 'zombie',
          id: 'qwvr' 
        },
        {
          name: 'zombie',
          id: 'qler' 
        },
        {
          name: 'zombie',
          id: 'qber' 
        },
        {
          name: 'zombie',
          id: 'rber' 
        },
       
        {
          name: 'zombie',
          id: 'bber' 
        },
        {
          name: 'dracula',
          id: 'yuio'
        }
      ]
    

    }
  }
   componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users")
   .then(response=>response.json())
    .then(users=> this.setState({monsters : users}))  
 }
  render() {
    const {monsters,searchField}= this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
   
      <div className="App">
<h1>MONSTER ROLODEX</h1> 
        {/* <input type="search" placeholder="search monter" 
        onChange={e=> this.setState({searchField : e.target.value} ,
        ()=> console.log(this.state)  )
  
        }></input> */}
        <SearchBox
        
          placeholder='search monsters'
          handleChange ={e=> this.setState({searchField : e.target.value} )}
        />
          <Cardlist monsters={filteredMonsters}  >
    
          </Cardlist>
            
         
      </div>
    )
  }
}










// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;






