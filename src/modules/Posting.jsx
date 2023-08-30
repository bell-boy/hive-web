/* eslint-disable react/prop-types */

const Posting = ({setJob, job}) =>
{
	const update = () =>
	{
		setJob(job);
	};
	return (
		<button className='container pt-3 list-group-item list-group-item-action' onClick={update}>
			<div className='row'>
				<h3>{job.role}</h3>
				<h6 className='text-secondary'>{job.company}</h6>
			</div>
			<div className='row'>
				<p className='fs-6'>{job.description.slice(0, 40)}</p>
			</div>
		</button>
	);
};

export default Posting;
