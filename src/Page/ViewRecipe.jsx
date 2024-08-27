import React from 'react'
import { useParams,Link } from 'react-router-dom'

const ViewRecipe = () => {
  const param=useParams();
  const recipeData=JSON.parse(localStorage.getItem(param.recipe));
  return (
    <div className='m-2  border-4 bg-gray-200 shadow-xl rounded-lg w-60 sm:w-64 md:w-72 xl:w-96 pl-3 text-lg flex flex-col flex-wrap'>
      <ul className='flex flex-col flex-wrap'>
      <li className='flex flex-col sm:flex-row my-2 flex-wrap'><span className='font-semibold'>Category: </span><span className='ml-1.5 font-mono over flex-grow '>{recipeData.Category}</span></li>
      <li className='flex flex-col mb-2 flex-wrap sm:flex-row'><span className='font-semibold'>Recipe:</span><span className='ml-1.5 font-mono truncate w-full block'>{recipeData.RecipeName}</span></li>
      <li className='flex flex-col mb-2'><span className='font-semibold'>Ingredients:</span><span className=' font-mono'>{recipeData.Ingredients}</span></li>
      <li className='flex flex-col mb-2'><span className='font-semibold'>Instructions:</span><span className=' font-mono'>{recipeData.Instructions}</span></li>
      </ul>
      <span className='mb-3 self-center'><Link className='btn-primary px-5 hover:btn-add-hover hover:px-5' to={"/EditRecipe/"+param.recipe}>Edit</Link></span>
    </div>

  )
}

export default ViewRecipe