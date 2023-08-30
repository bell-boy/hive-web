import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root.jsx';
import { loader as rootLoader } from './routes/Root.jsx';

import Login from './routes/Login.jsx';
import { action as loginAction, loader as loginLoader } from './routes/Login.jsx';

import Admin from './routes/Admin.jsx';

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
				path: 'profile/:userid',
				element: <Profile />,
				loader: profileLoader
			},
			{
				path: '/home',
				element: <Home />,
			}
		]
  },
	{
		path: '/admin',
		element: <Admin />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
