import React, { Component } from 'react';
import './App.css';
import InputSubmission from './InputSubmission'
import IdeasList from './IdeasList'

class App extends Component {

  constructor() {
    super();
    this.state = { ideas: [] }
  }

  componentDidMount() {
    let ideasFromLocalStorage = localStorage.getItem('ideas');
    ideasFromLocalStorage = JSON.parse(ideasFromLocalStorage);
    this.setState({ideas: ideasFromLocalStorage ? ideasFromLocalStorage : []})
  }

  addIdea(idea) {
    this.state.ideas.push(idea)

    localStorage.setItem("ideas", JSON.stringify(this.state.ideas) )

    this.setState( { ideas: this.state.ideas } )
  }

  deleteIdea(id) {
    let newIdeasList = this.state.ideas.filter((idea) => idea.id !== id)
    this.setState( {ideas: newIdeasList}, () => localStorage.setItem( 'ideas', JSON.stringify(this.state.ideas) ) )
  }

  render() {

    return (
      <div>
          <InputSubmission addIdea={ this.addIdea.bind(this) } />

          <IdeasList ideas={ this.state.ideas } handleDeleteIdea={ this.deleteIdea.bind(this) } />
      </div>
    )
  }
}

export default App;
