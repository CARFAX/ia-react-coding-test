const getUsersResponse = [
	{
		id: '00001',
		firstName: 'Thomas',
		lastName: 'Kinkade',
		title: 'Mr.',
		address: '123 Juniper Ln'
	},
	{
		id: '00002',
		firstName: 'Jacob',
		lastName: 'Neilsen',
		title: 'Mr.',
		address: '4885 Stockade Blvd'
	},
	{
		id: '00003',
		firstName: 'Mitzi',
		lastName: 'DeLancey',
		title: 'Mrs.',
		address: '10702 Isle Rd'
	},
	{
		id: '00004',
		firstName: 'Susan',
		lastName: 'Griffith',
		title: 'Dr.',
		address: '23356 Washington St'
	},
]

class UserService {
	getUsers = () => Promise.resolve(getUsersResponse);
}

export default UserService;