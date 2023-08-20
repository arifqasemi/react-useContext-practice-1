import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/home';
import Create from './component/create';
import Nav from './component/nav';
import { GlobalProvider } from './store';
import Update from './component/update';

function App() {

  const router = createBrowserRouter([
    {path:'/', element:<Nav/>, children:[
      {path:'home', element:<Home/>},
      {path:'create', element:<Create/>},
      {path:'update/:id', element:<Update/>},

    ]},
    

  ])
  return (
    <GlobalProvider>
    <RouterProvider router={router}/>
 </GlobalProvider>
  );
}

export default App;
