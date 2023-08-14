import { Form } from 'react-router-dom';
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { redirect, Link } from 'react-router-dom';

const action = async ({params, request}) =>
{
	const formData = await request.formData();	
	try
	{
		const userCred = await signInWithEmailAndPassword(auth, formData.get('username'), formData.get('password'));
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

const Login = () =>
{
	return(
		<div className='site-flexbox'>
			<Form method='post' className='auth-form'>
				<h1>login</h1>
				<input type='text' name='username' placeholder='Email Adrress' className='input-bar'/>
				<br />
				<input type='password' name='password' placeholder ='Password' className='input-bar'/>
				<br />
				<input type='submit' className='button-primary' />
				<Link to='/register'>create account</Link>
			</Form>
		</div>
	);
};

export default Login;
export { action, loader };
