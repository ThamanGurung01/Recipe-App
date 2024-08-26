import React from 'react'
import {useParams, Link } from 'react-router-dom';
import AddNewRecipe from './AddNewRecipe';
const EditRecipe = () => {
  const param=useParams();
  const recipeData=JSON.parse(localStorage.getItem(param.recipe));
  return (
    <div className='m-2 border-4 bg-gray-200 shadow-xl rounded-lg lg:w-80 md:w-72 xl:w-96 flex flex-col'>
     <span className='mt-5 mb-1 self-center'><Link className='px-2 py-1 btn-primary hover:btn-add-hover hover:px-2 hover:py-1 ' to={"/ViewRecipe/"+param.recipe}>ViewRecipe</Link></span>
      <AddNewRecipe RecipeName={recipeData.RecipeName} Ingredients={recipeData.Ingredients} Instructions={recipeData.Instructions} Category={recipeData.Category} Edit={true} RecipeKey={param.recipe}/>
    </div>
  )
}

export default EditRecipe