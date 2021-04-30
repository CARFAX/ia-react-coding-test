import React from 'react';
import {shallow} from 'enzyme';
import UserRow from './UserRow';

let userRowProps = {};

describe('UserRow test suite', () => {
	beforeEach(() => {
		userRowProps = {
			user: {
				id: '00001',
				title: 'Mr.',
				firstName: 'John',
				lastName: 'Dillinger',
				address: '123 Street Dr.'
			}
		}
	})

	it('will render the user row', async () => {
		const userRow = shallow(<UserRow {...userRowProps} />);

		const {id, firstName, lastName, title, address} = userRowProps.user;

		expect(userRow.find('td').length).toEqual(5);
		expect(userRow.find('td').at(0).text()).toContain(id);
		expect(userRow.find('td').at(1).text()).toContain(title);
		expect(userRow.find('td').at(2).text()).toContain(firstName);
		expect(userRow.find('td').at(3).text()).toContain(lastName);
		expect(userRow.find('td').at(4).text()).toContain(address);
	})
})