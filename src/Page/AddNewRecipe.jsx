import React,{useState,useRef,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const AddNewRecipe = ({RecipeName,Ingredients,Instructions,Category,Edit,RecipeKey}) => {
  const [recipeName,setRecipeName]=useState(RecipeName);
  const [ingredients,setIngredients]=useState(Ingredients);  
  const [instruction,setInstruction]=useState(Instructions);
  const [category,setCategory]=useState(Category);
  const [Data_Store,setDataStore]=useState({});
  const selectRef=useRef();
  const navigate=useNavigate();
  useEffect(()=>{
    handleCategory(selectRef.current);
  },[])


  const handleName=(e)=>{
setRecipeName(e.value);
  }
  
  const handleIngredient=(e)=>{
    setIngredients(e.value);

  }
  const handleInstruction=(e)=>{
    setInstruction(e.value);

  }
  const handleCategory=(e)=>{
    setCategory(e.value);
  }

  const StoreData=()=>{
    if(recipeName!=""){
      const numberOfData=localStorage.length;
      const newData={...Data_Store,RecipeName:recipeName,Ingredients:ingredients,Instructions:instruction,Category:category};
      setDataStore(newData);
      const LocalDataStore=JSON.stringify(newData);
      localStorage.setItem(!Edit?"Recipe"+(numberOfData+1):RecipeKey,LocalDataStore);
      if(!Edit){
        setRecipeName("");
        setIngredients("");
        setInstruction("");
        setCategory("Others");
      }
    }

  }
  return (
    <div className='m-2 border-4 bg-gray-200 shadow-xl rounded-lg lg:w-80 md:w-72 xl:w-96'>
      <form className='flex flex-col pl-3'>
        <span className='text-center mb-2 font-semibold text-lg'>Recipe</span>
      <div className='flex flex-col lg:flex-row'><label htmlFor="Recipe-Name" className='mb-2 lg:self-center'>Name:</label><input id='recipe-name' placeholder='Recipe Here!' className='border-2 bg-gray-200 border-gray-100 shadow-md p-1 mb-2 ml-3 inputRecipeNameW rounded-lg lg:ml-12' type="text" value={recipeName} onChange={(e)=>handleName(e.target)} required /></div>
      <div className='flex flex-col lg:flex-row'><label htmlFor="Ingredients" className='mb-2 lg:self-center'>Ingredients:</label><textarea name="ingredients" placeholder='Ingredients Here!' id="ingredients" className='border-2 resize-none overflow-auto bg-gray-200 border-gray-100 shadow-md p-1 mb-2 ml-3 inputRecipeNameW rounded-lg' value={ingredients} onChange={(e)=>handleIngredient(e.target)} required></textarea></div>
      <div className='flex flex-col lg:flex-row'><label htmlFor="Instructions" className='mb-2 lg:self-center'>Instructions:</label><textarea name="instructions" placeholder='Instructions Here!' id="instructions" className='border-2 resize-none overflow-auto bg-gray-200 border-gray-100 shadow-md p-1 mb-2 ml-2.5 inputRecipeNameW rounded-lg' value={instruction} onChange={(e)=>handleInstruction(e.target)} required></textarea></div>
      <div className='flex flex-col lg:flex-row'><label htmlFor="Category" className='mb-2 lg:mt-1'>Category:</label><select name="category" className='border-2 bg-gray-200 border-gray-100 shadow-md p-1 mb-4 w-28 ml-3 text-center rounded-lg lg:ml-8' id="category" ref={selectRef} value={category} onChange={(e)=>handleCategory(e.target)}>
        <option value="Others">Others</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      </div>
      <button type='button' className="border-2 border-solid border-black px-1 py-0.5 mb-2 rounded-lg bg-black text-white shadow-lg w-28 self-center" onClick={StoreData}>{!Edit?"Submit":"Update"}</button>
      </form>  
    </div>
  )
}

export default AddNewRecipe
