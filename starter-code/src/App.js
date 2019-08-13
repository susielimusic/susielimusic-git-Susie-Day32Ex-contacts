import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsList from './contacts.json';
import User from './User.js';

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state= {
      contactsList: contactsList,
      displayContactsList: contactsList.slice(0, 5)
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem = () => {
    //add random item
    let randomContact = contactsList[Math.floor(Math.random() * contactsList.length)]
    let newList = [...this.state.displayContactsList, randomContact]
    this.setState({displayContactsList: newList})
  }

  deleteItem = (index) => {
    //delete each item
    // var actors= [john, mark, sarah]
    // actors.remove([actors[1]])
    
    // Capture the index value of the actor
    const actor = contactsList[index];
    let newList = [...this.state.displayContactsList]
    newList.splice(index, 1)
    console.log(newList)
    // Use this value to remove the actor from the list
    this.setState({displayContactsList: newList})
  }

  sortedContactsList = e => {
    let sortedContactsList = [...this.state.displayContactsList];
    this.setState({
      displayContactsList: sortedContactsList.sort((a, b) => {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      })
    });
  };

  sortedPopularity = e => {
    let sortedContactsList = [...this.state.displayContactsList];
    this.setState({
      displayContactsList: sortedContactsList.sort((a, b) => {
        return a.popularity > b.popularity
          ? -1
          : a.popularity < b.popularity
          ? 1
          : 0;
      })
    });
  };

  render() {
    let listOfContactsList = this.state.displayContactsList.map((contact, index) => (
      <User
          index={index}
          image={contact.pictureUrl}
          userName={contact.name}
          popularity={contact.popularity}
          deleteItem={this.deleteItem}
        />
    ))
    return (
      <div className="App">
        
      <header className="App-header">
      <h1>IronContacts</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      </header>
      
      <div className="button">
      <button onClick={this.addItem}>Add Random Contact</button>
      <button onClick={this.sortedContactsList}>Sort by Name</button>
      <button onClick={this.sortedPopularity}>Sort by Popularity</button>
      </div>

      <nav className="nav">
        <h3>Picture</h3>
        <h3>Name</h3>
        <h3>Popularity</h3>
      </nav>  
      <div>
        {listOfContactsList}
      </div>

      {/* <ul>
       {
        this.state.sortName.map((item, i) => <List key={i} data={item} />)
       }
      </ul> */}

        {/* <User
          image={this.state.userA.pictureUrl}
          userName={this.state.userA.name}
          popularity={this.state.userA.popularity}
        />
        
        <User
          image={this.state.userB.pictureUrl}
          userName={this.state.userB.name}
          popularity={this.state.userB.popularity}
        />

        <User
          image={this.state.userC.pictureUrl}
          userName={this.state.userC.name}
          popularity={this.state.userC.popularity}
        />

        <User
          image={this.state.userD.pictureUrl}
          userName={this.state.userD.name}
          popularity={this.state.userD.popularity}
        />

        <User
          image={this.state.userE.pictureUrl}
          userName={this.state.userE.name}
          popularity={this.state.userE.popularity}
        /> */}
        </div>
    );
  }
}
export default App;
