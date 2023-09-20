import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Route Imports
import AdminLogin from './routes/admin/AdminLogin';


const router = createBrowserRouter([
	{
		path: "/adminLogin",
		element: <AdminLogin />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
