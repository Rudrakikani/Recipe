import { useLoaderData } from "react-router-dom"
import foodImg from '../assets/foodrecipe.jpg'
import { FaHeart } from "react-icons/fa";


export default function Recipeitems() {
    const allrecipes=useLoaderData()
        console.log(allrecipes)
    
  return (
   <>
   <div className="card-container">
    {
         allrecipes?.map(item, index) => {
            return (
                <div key={index} className="card">
                     <img src={foodImg} width="120px" height="100px"></img>
                     <div className="card-body">
                        <div className="title">{item.title}</div>
                        <div className="icons">
                            <div className="timer"><BsStopwatchFill /> </div>
                            <FaHeart />
                        </div>
                     </div>
                </div>
            )
         }
    }

   </div>
   </>
  )
}
