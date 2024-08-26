import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  const [Recipes,setRecipes]=useState([]);
  const [filter,setFilter]=useState("All");
  const filteredRecipes = filter === "All" ? Recipes : Recipes.filter((recipe) => recipe.Category === filter);
  let count=1;

  useEffect(()=>{
    if(localStorage.length>0){
      let newRecipes=[];
      for(let i=0; i<localStorage.length; i++){
        const keys=localStorage.key(i);
        const getDataStore=JSON.parse(localStorage.getItem(keys));
        newRecipes.push({...getDataStore,key:keys});
      }
      setRecipes(newRecipes);
    }
  },[])
  const handleFilter=(e)=>{
    setFilter(e.target.value);
  }
  const deleteAllRecipes=()=>{
    localStorage.clear();
    setRecipes([]);
  }
  const deleteRecipe=(RecipeKey)=>{
    setRecipes(c=>c.filter(element=>element.key!==RecipeKey));
    localStorage.removeItem(RecipeKey);
  }
  return (
    <div className='m-2  border-4 bg-gray-200 shadow-xl w-64 rounded-lg md:w-72 xl:w-96'>
    <div className='p-2 flex flex-col gap-y-3'>
      <div className='flex justify-center'>
      <Link to="/AddNewRecipe" className='btn-primary hover:btn-add-hover'>Add Recipes</Link>
      {localStorage.length>0?(<button type='button' onClick={deleteAllRecipes} className='ml-4 btn-primary hover:btn-delete-hover'>Delete Recipes</button>):""}
      </div>
      <span className='my-2 block font-semibold text-center text-lg'>RecipeLists</span>
       {localStorage.length>0?
      <div className='flex justify-between'>

      <label htmlFor="filter" className='font-semibold px-2 '>Category</label>
      <select className=' rounded-lg border-2 border-solid border-gray-100 shadow-md bg-gray-200 text-center text-base mx-2 hover:bg-white focus:bg-white' name="filter" id="filter-recipe" onChange={(e)=>handleFilter(e)}>
      <option value="All">All</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Others">Others</option>
      </select>
      </div>
      :""} 
            {(filteredRecipes.length>0)?(<ol className="list-decimal list-inside">
      {filteredRecipes.map((element,i)=><li key={i} className='flex justify-between mb-1.5'><Link to={"/ViewRecipe/"+element.key} className='font-bold self-center ml-2
      hover:underline hover:underline-offset-2 hover:decoration-green-600 hover:text-green-500 decoration-2'>{(count++)+". "+element.RecipeName}</Link> <button type='button' onClick={()=>deleteRecipe(element.key,i)} className='mb-1 mx-2 btn-primary hover:btn-delete-hover'>Delete</button></li>)}
      </ol>):(<span className='block text-center'>No result found</span>)}
      </div>
    </div>
  )
}

export default Home