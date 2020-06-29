import React , { Component } from 'react';
import PropTypes from 'prop-types'

class CreateNewUser extends Component {
    state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
    },
    userExists: false,
    }
    
	handleInputChange = event => {
    const { name, value } = event.target;

    this.setState(currState => ({
     // ...currState,
      user: {
        ...currState.user,
        [name]: value,
      	},
    	}));
  	};

	contactExists = currUsername => {
    	const users = this.props.users;
    	for (const user of users) {
      	if (user.userName === currUsername) {
        	return true;
      	}
   		}
    	return false;
 	};

	addItem = event => {
      	event.preventDefault()
    	const userExists = this.contactExists(this.state.user.userName);

   		if (!userExists) {
      		this.props.onAddUser(this.state.user);
    	}

    	this.setState(() => ({
    	  userExists,
    	}));
    	}

	inputIsEmpty = () => {
      const { firstName, lastName, userName } = this.state.user;
      return firstName === '' || lastName === '' || userName === '';
    }

	render () {
    const { firstName, lastName, userName } = this.state.user;
    return (
      <div>
        <h1>Video Game User Form </h1>
      <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
			name="firstName"
            onChange={this.handleInputChange}
          />
		 <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
			name="lastName"
            onChange={this.handleInputChange}
          />
		 <input
            type="text"
            placeholder="Enter User NAme"
            value={userName}
			name="userName"
            onChange={this.handleInputChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
		{this.state.userExists ? (<p className="error">User already exsists</p>)
		: ('')
        }
	</div>
    )
    }

}

CreateNewUser.propTypes = {
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default CreateNewUser