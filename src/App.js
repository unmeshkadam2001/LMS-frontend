import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import CreateUser from './component/CreateUser';
import LibrarianHomepageToAddBooks from './component/LibrarianHomepageToAddBooks';
import StudentHomepage from './component/StudentHomepage';
import Login from './component/Login';

const router = createBrowserRouter([
  { path: '/', element: <CreateUser /> },
  { path: '/login', element: <Login /> },
  { path: '/LibrarianHomepageToAddBooks', element: <LibrarianHomepageToAddBooks /> },
  { path: '/StudentHomepage', element: <StudentHomepage /> },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;