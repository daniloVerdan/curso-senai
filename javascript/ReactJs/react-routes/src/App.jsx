import { router } from './routes'
import './App.css'
import { RouterProvider } from 'react-router-dom'

export function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
