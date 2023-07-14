import { auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { redirect } from 'react-router-dom';

const loader = async () =>
{
	const user = await new Promise((resolve, reject) => {
		onAuthStateChanged(auth, (user) => resolve(user));	
	});
	if(!user) return redirect('/login');
	else return redirect('/home');
};

const Root = () =>
{
	return(
		<>
		</>
	);
};

export default Root;
export { loader };
