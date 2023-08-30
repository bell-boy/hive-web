import { auth, database } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import { redirect, useNavigate, Outlet, useLoaderData, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Posting from '../modules/Posting.jsx';
import Job from '../modules/Job.jsx';

const loader = async () =>
{
	return await new Promise((res, rej) => {
		const listingsRef = ref(database, 'listings/');
		onValue(listingsRef, (snapshot) => 
		{
			res(snapshot.val());
		});
	});

};

const Root = () =>
{
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [job, setJob] = useState({title: "sfasdfksdflkdf", workplace: "alsfkjfdskfjdsfk", description: "aasdfkldsjf"});
	const [listings, setListings] = useState(useLoaderData());
	useEffect(() =>
	{
		onAuthStateChanged(auth, (u) =>
		{
			setUser(u);
		});
		
		const listingsRef = ref(database, 'listings/');
		onValue(listingsRef, (snapshot) => 
		{
			setListings(snapshot.val());
		});

	}, []);

	const listingItems = listings.map(l => <Posting setJob={setJob} job={l} key={l.id} />); 
	return(
		<>
			<nav className='navbar navbar-expand-sm shadow-sm'>
				<div className='container-fluid'>
					<Link className='navbar-brand h1 navbar-header text-primary' to='/'>hive</Link>
				</div>
			</nav>
			<div className='container-fluid p-3'>
				<div className='row'>
					<div className='col-5'>
						<ul className='list-group'>
							{listingItems}
						</ul>
					</div>
					<div className='col'>
						<Job title={job.role} workplace={job.company} description={job.description} />
					</div>
				</div>
			</div>
			<footer className='container-fluid  d-flex justify-content-center bottom-0'>
					made with ❤️ by femi
			</footer>
		</>
	);
};

export default Root;
export { loader };
