import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root.jsx';
import { loader as rootLoader } from './routes/Root.jsx';

import Login from './routes/Login.jsx';
import { action as loginAction, loader as loginLoader } from './routes/Login.jsx';

import CreateAccount from './routes/CreateAccount.jsx';
import { action as createAccountAction, loader as createAccountLoader } from './routes/CreateAccount.jsx';

import Home from './routes/Home.jsx';
import { loader as homeLoader } from './routes/Home.jsx';

import Profile from './routes/Profile.jsx';
import { loader as profileLoader } from './routes/Profile.jsx';

const router = createBrowserRouter([
  {
		path: '/',
		element: <Root />,
		loader: rootLoader,
		children: [
			{
				path: '/login',
				element: <Login />,
				action: loginAction,
				loader: loginLoader
			},
			{
				path: '/register',
				element: <CreateAccount />,
				loader: createAccountLoader,
				action: createAccountAction
			},
			{
				path: 'profile/:userid',
				element: <Profile />,
				loader: profileLoader
			}
		]
  },
	{
		path: '/home',
		element: <Home />,
		loader: homeLoader,
		children: [
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
