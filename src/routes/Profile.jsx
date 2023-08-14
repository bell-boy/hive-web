import { auth, database } from '../firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { get, child, ref } from 'firebase/database';
import { useLoaderData, useNavigate } from 'react-router-dom';

const loader = async ({ params }) =>
{	
	let userData = await new Promise((res, rej) => onAuthStateChanged(auth, (user) => res(user)));
	// if we just visit profile/ -> redirect to the specfic profile of the signed in user
	// if we have a param, access it's data
	const snapshot = await get(child(ref(database), `users/${params.userid}`));
	// TODO: error handling
	console.log(snapshot.val());
	return snapshot.val();
};

const Profile = () =>
{
	const userData = useLoaderData();
	const navigate = useNavigate();

	const logoutHandler = async (e) => 
	{
		await signOut(auth);
		navigate('/home');
	};
	return(
		<div>
			<h1>{userData.firstName} {userData.lastName}</h1>
			<h2>{userData.gradYear}</h2>
			<h2>{userData.gpa}</h2>

			<button className="button-primary" onClick={logoutHandler}>Sign Out</button>
		</div>
	);
};

export default Profile;
export { loader };
