import { useLoaderData } from "react-router-dom";
import foodImg from '../assets/foodrecipe.jpg';
import { FaHeart } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs"; 

export default function RecipeItems() {
  const allrecipes = useLoaderData();
  console.log(allrecipes);

  return (
    <>
      <div className="card-container">
        {allrecipes?.map((item, index) => (
          <div key={index} className="card">
            <img
              src={foodImg}
              alt={`${item.title} Recipe`}
              className="card-img"
            />
            <div className="card-body">
              <div className="title">{item.title}</div>
              <div className="icons">
                <div className="timer">
                  <BsStopwatchFill /> 
                </div>
                <FaHeart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

