import { auth } from '../firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { redirect, useNavigate, Outlet, Link } from 'react-router-dom'; 

const loader = async () =>
{
	return null;
};

const Home = () =>
{
	return (
		<div className='site-grid' style={{gridTemplateColumns: "60fr 40fr"}}>
			<div className='left-info-box'>
				<ul className='large-list'>
					<li>Gain Experience</li>
					<li>Boost Your Resume</li>
					<li>Discover Careers</li>
				</ul>
			</div>
			<div className='right-info-box'>
				<h1 className='logo'>Hive</h1>
				<p>{"Hive is Houston's Premier Internship and Research Platform for High School Students. Personalized opportunities, exclusive access, simplified search, expert guidance, vibrant community. Unlock your future today!"}</p>
				<Link to='/register'><button className="button-primary" style={{fontSize: "25px"}}>Register</button></Link>
				<Link to='/login'><button className="button-secondary" style={{fontSize: "20px"}}>Login</button></Link>
			</div>
		</div>
	);
};

export default Home;
export { loader };
