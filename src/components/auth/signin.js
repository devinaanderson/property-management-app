import React, { Component } from 'react';
import Chicken from '../formTitle';

class Signin extends Component {
  render() {
    return (
      <div className='sign-in'>
        <Chicken className='sign-in__title' text='Login'/>
      </div>
    )
  }
}

export default Signin;