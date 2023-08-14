import { auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { redirect, useNavigate, Outlet, useLoaderData, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Posting from './Posting.jsx';

const loader = async () =>
{
	return null;
};

const Root = () =>
{
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	useEffect(() =>
	{
		onAuthStateChanged(auth, (u) =>
		{
			setUser(u);
		});
	}, []);
	return(
		<>
			<nav className='navbar navbar-expand-sm shadow-sm'>
				<div className='container-fluid'>
					<Link className='navbar-brand h1 navbar-header text-primary' to='/home'>hive</Link>
					<ul className='navbar-nav'>
						<li><Link className='nav-link'>login</Link></li>
						<li><Link className='nav-link'>register</Link></li>
					</ul>
				</div>
			</nav>
			<div className='container-fluid p-3'>
				<div className='row'>
					<div className='col-5'>
						<ul className='list-group'>
							<Posting />						
							<Posting />						
							<Posting />						
						</ul>
					</div>
					<div className='col'>
						beans
					</div>
				</div>
			</div>

		</>
	);
};

export default Root;
export { loader };
