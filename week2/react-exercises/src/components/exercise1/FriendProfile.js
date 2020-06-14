import React from 'react';

const FriendProfile = ({friend} ) => {
	console.log(friend)
	return (
		<ul>
			<li>First name: {friend.name.first}</li>
			<li>Last name: {friend.name.last}</li>
			<li>Street: {friend.location.street.name}</li>
			<li> House num: {friend.location.street.number}</li>
			<li>Country: {friend.location.country}</li>
			<li>City: {friend.location.city}</li>
			<li>Email: {friend.email}</li>
			<li>Phone num: {friend.phone}</li>
		</ul>
	);
};

export default FriendProfile;