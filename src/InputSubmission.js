import React, { Component } from 'react'

class InputSubmission extends Component {
  constructor() {
    super();

    this.state = {title: '', body: ''}
  }

  handleClick() {
    this.props.addIdea( Object.assign(this.state, { id: Date.now() }) )
    this.setState( { title:'', body: ''})
  }

  render() {
    return(
      <div className='InputSubmissionForm'>
        <input
          type='text'
          placeholder='ReactIdeas'
          value={ this.state.title }
          onChange={ (event) => this.setState({ title: event.target.value }) }
        />
        <br/>
        <textarea
          placeholder='ReactBox Body'
          value={ this.state.body }
          onChange={ (event) => this.setState({ body: event.target.value }) }
        />
        <br/>
        <button onClick={ (event) => this.handleClick() }> Submit </button>
      </div>
    )
  }
}

export default InputSubmission;
