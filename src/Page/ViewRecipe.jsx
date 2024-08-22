import React from 'react'
import { useParams } from 'react-router-dom'

const ViewRecipe = () => {
  const param=useParams();
  const recipeData=JSON.parse(localStorage.getItem(param.recipe));
  return (
    <div>
      <span>ViewRecipe</span>
      <ul>
      <li>Category:{recipeData.Category}</li>
      <li>Recipe: {recipeData.RecipeName}</li>
      <li>Ingredients:<br/>{recipeData.Ingredients}</li>
      <li>Instructions:<br/>{recipeData.Instructions}</li>
      </ul>
    </div>

  )
}

export default ViewRecipe