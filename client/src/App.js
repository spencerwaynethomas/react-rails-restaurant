import React, { Component, } from 'react';
import './App.css';
import { Container, } from "semantic-ui-react"

class App extends Component {
  state = { menus: [], }

  componentDidMount() {
    // make a call to rails for mwnu
  }

  addMenu = (name) => {
    // make api call to add menu
  }

  updateMenu = (id) => {
    // make api call to update menu
    // update state
  }

  deleteMenu = (id) => {
    // make api call to delete menu
  }

  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <h1>React Restaurants</h1>
      </Container>
    )
  }
}

export default App;
