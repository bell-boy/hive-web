/* eslint-disable react/prop-types */

const Job = (props) =>
{
	return (
		<div className='container p-3 position-sticky top-0'>
			<h1>{props.title}</h1>
			<h3 className='text-secondary'>{props.workplace}</h3>
			<p>{props.description}</p>
		</div>
	);
};

export default Job;
