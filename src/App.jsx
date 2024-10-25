import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import Home from './components/Home';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/pastes',
      element:
      <div>
        <Navbar />
        <Paste />  
      </div>
    },
    {
      path: '/pastes/:id',
      element:
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    },
  ]
);



function App() {

  return (
    <div>
      {/* <h1>React App</h1> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
