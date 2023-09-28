import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Route Imports
import AdminRegister from './routes/admin/AdminRegister';
import AdminLogin from './routes/admin/AdminLogin';


const router = createBrowserRouter([
	{
		path: "/admin/adminRegister",
		element: <AdminRegister />
	},
	{
		path: "/admin/adminLogin",
		element: <AdminLogin />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
