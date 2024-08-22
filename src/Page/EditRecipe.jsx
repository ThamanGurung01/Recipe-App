import React from 'react'
import {useParams, Link } from 'react-router-dom';
import AddNewRecipe from './AddNewRecipe';
const EditRecipe = () => {
  const param=useParams();
  const recipeData=JSON.parse(localStorage.getItem(param.recipe));
  return (
    <div>
      <span>EditRecipe</span> <span><Link to={"/ViewRecipe/"+param.recipe}>ViewRecipe</Link></span>
      <AddNewRecipe RecipeName={recipeData.RecipeName} Ingredients={recipeData.Ingredients} Instructions={recipeData.Instructions} Category={recipeData.Category} Edit={true} RecipeKey={param.recipe}/>
    </div>
  )
}

export default EditRecipe