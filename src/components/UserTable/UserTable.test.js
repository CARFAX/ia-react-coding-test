import React from 'react';
import {shallow} from 'enzyme';
import UserTable from './UserTable';

describe('UserTable test suite', () => {
	it('will render the user table', async () => {
		const userTable = shallow(<UserTable />);

		await userTable.update()

		expect(userTable.find('h1').text()).toContain('Users');
		expect(userTable.find('thead').length).toEqual(1);
		expect(userTable.find('tr').length).toEqual(1);
		expect(userTable.find('th').length).toEqual(5);
		expect(userTable.find('UserRow').length).toEqual(4);
	})
})