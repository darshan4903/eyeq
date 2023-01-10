import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/app",
    element: <HomePage/>
  }
]);



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
