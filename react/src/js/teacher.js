import React from 'react';

function Teacher(props){
	return (
		<li className="Teacher">
			<a href={`https:/twitter.com/${props.twitter}`}>{props.name}</a>
		</li>
	)
}


export default Teacher;