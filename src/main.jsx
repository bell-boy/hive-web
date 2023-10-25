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
import ClientRoot from './routes/client/ClientRoot';
import ClientDashboard, { ClientDashboardLoader } from './routes/client/ClientDashboard';
import ClientJobPosting, { ClientJobPostingLoader } from './routes/client/ClientJobPosting';
import LandingPage from './routes/client/LandingPage';


const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />
	},
	{
		path: "/listings",
		element: <ClientRoot />,
		children: [
			{
				path: "/listings",
				element: <ClientDashboard />,
				loader: ClientDashboardLoader,
				children: [
					{
						path: "/listings/job/:jobid",
						element: <ClientJobPosting />,
						loader: ClientJobPostingLoader
					}
				]
			}
		]
	},

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
				loader: ClientDashboardLoader
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
