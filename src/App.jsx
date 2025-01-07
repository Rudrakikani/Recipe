import React from 'react'
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './assets/pages/Home'
import MainNavigation from './assets/components/MainNavigation'
import axios from "axios"
import AddFoodRecipe from "./pages/AddFoodRecipe"

const getAllRecipes=async()=>{
  let allrecipes=[]
  await axios.get().then(res=>{
  allrecipes=res.data
  })
  return allrecipes
}

const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getAllRecipes},
    {path:"/myRecipe",elements:<Home/>},
    {path:"/favRecipe",elements:<Home/>},
    {path:"/addRecipe",elements:<AddFoodRecipe/>},
  ]}
])

export default function App () {
  

  return (
    <>
    <RouterProvider router={router}></RouterProvider>  
    </>
  )
}



