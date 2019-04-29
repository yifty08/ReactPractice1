import React, { Component } from 'react';

class HomeAddress extends Component {

	constructor(props) {
		super(props);
	}
  render() {
    const {name, address, age} = this.props;
    return (
    	//const name = this.props.name;
    	//const address = this.props.address;
    	 //es6 destructuring
      <p>
            {name}, age {age} lives at {address}
      </p>
    );
  }
}

export default HomeAddress;
