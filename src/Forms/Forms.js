import React, { Component } from 'react'

export default class Forms extends Component {
  handleClick (e) {
    e.preventDefault()
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log(name, email);
  }
  render () {
    return (
      <div>
        <h4>Form Example</h4>
        <form>
          <p>
            <label htmlFor='name'>Name: </label>
            <input
              id='name'
              name='userName'
              placeholder='Your name here!'
            />
          </p>
          <p>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              placeholder='Your email here'
            />
          </p>

          <button onClick={this.handleClick}>Send</button>
        </form>
      </div>
    )
  }
}
