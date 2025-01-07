import React from 'react'
import { useNavigate } from 'react-router-dom';
import foodrecipe from '../assets/foodrecipe.jpg';  
import RecipeItems from './RecipeItems'; 

export default function Home() {
    const navigate=useNavigate()

  return (
    <>
      <section className='home'>
        <div className='left'>
          <h1>Food Recipe</h1>
          <h5></h5>
          <button onClick={()=>navigate("/addrecipe")}>Share your recipe</button>
        </div>
        <div className='right'>
          <img src={foodrecipe} width="320px" height="300px" />
        </div>
      </section>
      <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#d4f6e8" fillOpacity="1" d="M0,128L30,133.3C60,139,120,149,180,154.7C240,160,300,160,360,170.7C420,181,480,203,540,213.3C600,224,660,224,720,192C780,160,840,96,900,90.7C960,85,1020,139,1080,133.3C1140,128,1200,64,1260,74.7C1320,85,1380,171,1410,213.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>

      <div className='recipe'>
        <RecipeItems /> {}
      </div>
    </>
  );
}
