import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../components/Home/Home'
import Search from '../components/Search/Search'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
        {
           index: true,
           path:"/",
           element:<Home/>,
        },
        {
          path: '/search',
          element: <Search />,
        }
  ]
  },
])
