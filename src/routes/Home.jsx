import { auth } from '../firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { redirect, useNavigate, Outlet } from 'react-router-dom'; 

const loader = async () =>
{
	const user = await new Promise((resolve, reject) => {
		onAuthStateChanged(auth, (user) => resolve(user));	
	});
	if(!user) return redirect('/login');
	else console.log('logged in');
	return null;
};

const Home = () =>
{
	const navigate = useNavigate();	
	const logoutHandler = async (e) => 
	{
		try 
		{
			await signOut(auth);
			navigate('/');
		}
		catch (error)
		{
			console.log(error);
		}
	};
	return (
		<>
			<header>
				<button onClick={logoutHandler}>logout</button>	
			</header>
			<Outlet />
		</>
	);
};

export default Home;
export { loader };
