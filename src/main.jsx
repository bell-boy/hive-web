import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Route Imports
import AdminRegister, { registerLoader } from './routes/admin/AdminRegister';
import AdminLogin from './routes/admin/AdminLogin';
import AdminRoot, { AdminLoader } from './routes/admin/AdminRoot';
import AdminListings from './routes/admin/AdminListings';
import AdminNewListing from './routes/admin/AdminNewListing';
import AdminEditListing from './routes/admin/AdminEditListing';
import ClientRoot from './routes/client/ClientRoot';
import ClientDashboard, { ClientDashboardLoader } from './routes/client/ClientDashboard';
import ClientJobPosting, { ClientJobPostingLoader } from './routes/client/ClientJobPosting';
import LandingPage from './routes/client/LandingPage';
import AdminViewListings from './routes/admin/AdminViewListing';


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
		element: <AdminRegister />,
		loader: registerLoader
	},
	{
		path: "/admin/login",
		element: <AdminLogin />,
		loader: registerLoader
	},
	{
		path: "/admin",
		element: <AdminRoot />,
		loader: AdminLoader,
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
				path: "/admin/edit/:postid/:postlocation",
				element: <AdminEditListing />,
				loader: ClientDashboardLoader
			},
			{
				path: "/admin/view/:postid",
				element: <AdminViewListings />,
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
