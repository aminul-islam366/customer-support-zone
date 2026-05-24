import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Root from './Components/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Contact from './Pages/ListedBooks/ListedBooks.jsx';
import ListedBooks from './Pages/ListedBooks/ListedBooks.jsx'
import BookDetails from './Pages/BookDetails/BookDetails.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index : true,  element: <Home />,},
      {path : "/listedBooks" , element : <ListedBooks/>},
      {path : "/contact" , element : <Contact></Contact>},
      {path : "/bookDetails/:bookId",
         element : <BookDetails/>,
        }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}>
    </RouterProvider>
  </StrictMode>,
)
