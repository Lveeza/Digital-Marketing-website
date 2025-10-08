import { useEffect, useState } from 'react'

export default function Loader({ loading }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 99) {
          return prev + Math.floor(Math.random() * 10) + 1
        }
        return prev
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-black text-3xl text-white transition-transform duration-700 ${
        loading ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <p className="mb-4 text-2xl">{progress}%</p>
      <div className="h-3 w-64 overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
