import React, { Component } from 'react'

export default class Forms extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.inputName.value;
    const email = this.inputEmail.value;
    console.log(name, email);
  }
  handleChange (e) {
    console.log('handleChange');
    console.log(e.target.checked);
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
            />
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              placeholder='Your email here'
              ref={inputElement => this.inputEmail = inputElement}
            />
          </p>
          <p>
            <label>
              <input onChange={this.handleChange} type='checkbox' />
              Accepted terms
            </label>
          </p>

          <button>Send</button>
        </form>
      </div>
    )
  }
}
