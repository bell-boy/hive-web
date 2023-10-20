import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Route Imports
import AdminRegister from './routes/admin/AdminRegister';
import AdminLogin from './routes/admin/AdminLogin';
import AdminRoot from './routes/admin/AdminRoot';
import AdminListings from './routes/admin/AdminListings';
import AdminNewListing from './routes/admin/AdminNewListing';
import AdminEditListing from './routes/admin/AdminEditListing';


const router = createBrowserRouter([
	{
		path: "/admin/register",
		element: <AdminRegister />
	},
	{
		path: "/admin/login",
		element: <AdminLogin />
	},
	{
		path: "/admin",
		element: <AdminRoot />,
		children: [
			{
				path:"/admin",
				element: <AdminListings />,
			},
			{
				path: "/admin/new",
				element: <AdminNewListing />
			},
			{
				path: "/admin/edit/:postid",
				element: <AdminEditListing />,
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
