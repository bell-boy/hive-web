import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root.jsx';
import { loader as rootLoader } from './routes/Root.jsx';

import Login from './routes/Login.jsx';
import { action as loginAction, loader as loginLoader } from './routes/Login.jsx';

import Home from './routes/Home.jsx';
import { loader as homeLoader } from './routes/Home';

const router = createBrowserRouter([
  {
		path: '/',
		element: <Root />,
		loader: rootLoader
  },
  {
		path: '/login',
		element: <Login />,
		action: loginAction,
		loader: loginLoader
  },
	{
		path: '/home',
		element: <Home />,
		loader: homeLoader
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
