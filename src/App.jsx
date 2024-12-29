import {routing} from '../src/routing/Route'
import { RouterProvider } from 'react-router-dom'


const App = () => {
  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App

