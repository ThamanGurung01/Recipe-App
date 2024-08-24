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
    <div>
      <form className='flex flex-col w-52 items'>
      <div><label htmlFor="Recipe-Name">Recipe Name:</label><input id='recipe-name' className='border-4' type="text" value={recipeName} onChange={(e)=>handleName(e.target)} required /></div>
      <div><label htmlFor="Ingredients">Ingredients:</label><textarea name="ingredients" id="ingredients" className='border-4' rows={2} value={ingredients} onChange={(e)=>handleIngredient(e.target)} required></textarea></div>
      <div><label htmlFor="Instructions">Instructions:</label><textarea name="instructions" id="instructions" className='border-4'  rows={2} value={instruction} onChange={(e)=>handleInstruction(e.target)} required></textarea></div>
      <div><label htmlFor="Category"></label><select name="category" id="category" ref={selectRef} value={category} onChange={(e)=>handleCategory(e.target)}>
        <option value="Others">Others</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      </div>
      <button type='button' className="border-4" onClick={StoreData}>{!Edit?"Submit":"Update"}</button>
      </form>  
    </div>
  )
}

export default AddNewRecipe
