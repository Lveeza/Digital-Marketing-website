import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import App from './App.jsx'

import './index.css'
import Team from './components/Team.jsx'
import ServicesDetail from './components/ServicesDetail.jsx'

const Home = lazy(() =>
  wait(1000).then(() =>
    import('./components/pages/Home.jsx').then((module) => ({
      default: module.Home,
    })),
  ),
)


const About = lazy(() =>
  wait(1000).then(() =>
    import('./components/pages/About.jsx').then((module) => ({
      default: module.About,
    })),
  ),
)
const Contact = lazy(() =>
  wait(1000).then(() =>
    import('./components/pages/Contact.jsx').then((module) => ({
      default: module.Contact,
    })),
  ),
)

const Services = lazy(() =>
  wait(1000).then(() =>
    import('./components/pages/Services.jsx').then((module) => ({
      default: module.Services,
    })),
  ),
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/services-detail',
        element: <ServicesDetail />,
      },
    ],
  },
])

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
