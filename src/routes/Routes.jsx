import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../components/Home/Home'
import Search from '../components/Search/Search'
import Creators from '../components/Creators/Creators'
import NotFound from '../components/NotFound/NotFound'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import CourseDetails from '../components/CourseDetails/CourseDetails'

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
        },
        {
          path: '/creators',
          element: <Creators />,
        },
        {
          path: '/courses',
          element: <CourseDetails />,
        },
        {
          path:'*',
          element:<NotFound/>
        }
  ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  }
])
