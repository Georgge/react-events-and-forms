import React, { Component } from 'react'

export default class Forms extends Component {
  constructor () {
    super();
    this.state = {
      inputName: '',
      inputEmail: '@mail.com',
      inputTerms: true,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }
  handleChange = (e) => {
    console.log('handleChange');
    console.log(e.target.checked);
    this.setState({ inputTerms: e.target.checked });
  }
  render () {
    return (
      <div>
        <h4>Form Example</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='name'>Name: </label>
            <input
              id='name'
              name='userName'
              placeholder='Your name here!'
              ref={inputElement => this.inputName = inputElement}
              onChange={e => this.setState({ inputName: e.target.value })}
              value={this.state.inputName}
            />
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              placeholder='Your email here'
              ref={inputElement => this.inputEmail = inputElement}
              onChange={e => this.setState({ inputEmail: e.target.value })}
              value={this.state.inputEmail}
            />
          </p>
          <p>
            <label>
              <input
                onChange={this.handleChange}
                type='checkbox'
                checked={this.state.inputTerms}
              />
              Accepted terms
            </label>
          </p>

          <button>Send</button>
        </form>
      </div>
    )
  }
}
