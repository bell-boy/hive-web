import { Form } from 'react-router-dom';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { redirect, Link } from 'react-router-dom';

const action = async ({params, request}) =>
{
	const formData = await request.formData();	
	try
	{
		const userCred = await createUserWithEmailAndPassword(auth, formData.get('username'), formData.get('password'));
		console.log(userCred);
		return redirect('/home');
	} catch (error)
	{
		console.log(error.code);	
		// tell the user they're dumb
	}
	return null;
};

const loader = async () =>
{
	const user = await new Promise((resolve, reject) => {
		onAuthStateChanged(auth, (user) => resolve(user));	
	});
	if(user) return redirect('/home');
	return null;
};

const CreateAccount = () =>
{
	return(
		<div>
			<Form method='post'>
				<h1>register</h1>
				<input type='text' name='username' />
				<br />
				<input type='password' name='password'/>
				<br />
				<input type='submit' />
			</Form>
		</div>
	);
};

export default CreateAccount;
export { action, loader };
