import { auth, database } from '../firebase.js';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { Form } from 'react-router-dom';
import { redirect, Link } from 'react-router-dom';

const action = async ({params, request}) =>
{
	const formData = await request.formData();	
	try
	{
		const userCred = await createUserWithEmailAndPassword(auth, formData.get('username'), formData.get('password'));
		set(ref(database, `users/${userCred.user.uid}`), {
			firstName: 'John',
			lastName: 'Doe',
			gradYear: 2024,
			gpa: 3.8
		});
		return redirect(`/home/profile/${userCred.user.uid}`);
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
