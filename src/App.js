import React from 'react';

import './App.css';
import { Cardlist } from './components/cardlist/cardlist.component';
import { SearchBox } from './components/searchbox/searchbox.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }


 
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}

  render() {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={e => this.setState({searchField: e.target.value})}/>
        <Cardlist monsters = {filteredMonsters}/>
      
      </div>
    );
      }
  
}

export default App;
