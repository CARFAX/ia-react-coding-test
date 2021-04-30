import React, { Component } from 'react';
import UserService from '../../services/UserService';
import UserRow from '../UserRow/UserRow';
import './UserTable.css';

const userService = new UserService();

export class UserTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
			usersLoading: false,
			users: []
		}
	}

	// load users

	render() {
		// render user table
		return <div>Hello world</div>
	}

}

export default UserTable;