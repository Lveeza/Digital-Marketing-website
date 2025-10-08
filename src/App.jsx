import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import { Suspense, useEffect, useState } from 'react'
import Loader from './components/Loader'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [location])
  return (
    <>
      <Loader loading={loading} key={location.key} />

      <main>
        <Header />
        <Suspense fallback={<Loader loading={loading} />}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </main>
    </>
  )
}

export default App
