import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './assets/pages/Home'
import MainNavigation from './assets/components/MainNavigation'
import axios from "axios"

const getAllRecipes=async()=>{
  let allrecipes=[]
  await axios.get().then(res=>{
  allrecipes=res.data
  })
  return allrecipes
}

const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getAllRecipes}
  ]}
])

export default function App () {
  

  return (
    <>
    <RouterProvider router={router}></RouterProvider>  
    </>
  )
}



