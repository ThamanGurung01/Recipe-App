import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  const [Recipes,setRecipes]=useState([]);
  const [filter,setFilter]=useState("All");
  const filteredRecipes = filter === "All" ? Recipes : Recipes.filter((recipe) => recipe.Category === filter);

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
    setFilter(e.value);
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
    <div className='m-2'>
    <div>
    <Link to="/AddNewRecipe" className='border-2 border-solid border-black rounded-lg px-2 bg-black text-white '>AddNewRecipe</Link>      <button type='button' onClick={deleteAllRecipes} className='border-2 border-solid border-gray-700 rounded-lg px-2 bg-red-600 text-white mb-1 mx-2'>Delete All Recipes</button>
    <span className='my-2 block'>RecipeLists</span>
       {localStorage.length>0?
      <>
      <label htmlFor="filter">Category</label>
      <select className=' rounded-lg border-2 border-solid border-black m-2 text-center' name="filter" id="fitler-recipe" onChange={(e)=>handleFilter(e.target)}>
      <option value="All">All</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Others">Others</option>
      </select>
      </>
      :""} 
      
      <ol className="list-decimal list-inside">
      {Recipes.map((element,i)=> (filter==="All"||filter===element.Category)?(<li key={i}><Link to={"/ViewRecipe/"+element.key} className='font-bold hover:bg-green-600 text-black px-2 py-0.5 rounded-md'>{element.RecipeName}</Link> <button type='button' onClick={()=>deleteRecipe(element.key,i)} className='border-2 border-solid border-gray-700 rounded-lg px-2 bg-red-600 text-white mb-1 mx-2'>Delete</button></li>):"")}
      {(filteredRecipes.length<=0)?(<span>No result found</span>):""}
      </ol>
      </div>
    </div>
  )
}

export default Home