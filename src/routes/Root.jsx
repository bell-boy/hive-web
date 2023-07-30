import { auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { redirect, useNavigate, Outlet, useLoaderData, Link } from 'react-router-dom';
import '../styles/stylesheet.css';

const loader = async () =>
{
	const user = await new Promise((resolve, reject) => {
		onAuthStateChanged(auth, (user) => resolve(user));		
	});
	return user;
};

const Root = () =>
{
	const navigate = useNavigate();
	const user = useLoaderData();
	return(
		<>
			<header className='nav-bar'>
				<Link to='/home' className='logo'><h1>hive</h1></Link>
				{!user ? (
					<div className='nav-bar-item'>
						<Link to={`/login`}><button className='button-primary'>Login</button></Link>
						<Link to={`/register`}><button className='button-primary'>Register</button></Link>
					</div>
				) : ( <Link to={`/profile/${user.uid}`}><button className='button-primary'>profile</button></Link> )}
			</header>
			<Outlet />
		</>
	);
};

export default Root;
export { loader };
