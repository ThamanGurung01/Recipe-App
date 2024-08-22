import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  const [Recipes,setRecipes]=useState([]);
  useEffect(()=>{
    if(localStorage.length>0){
      let newRecipes=[];
      for(let i=0; i<localStorage.length; i++){
        const keys="Recipe"+(i+1);
        const getDataSore=JSON.parse(localStorage.getItem(keys));
        newRecipes.push({...getDataSore,key:keys});
      }
      setRecipes(newRecipes);
    }
  },[])
  function check(){
  console.log(Recipes);
  }
  return (
    <div>
    <div>
      RecipeLists
      <ul>
      {Recipes.map((element,i)=> <li key={i}><Link to={"/ViewRecipe/"+element.key}>{(i+1)+" "+element.RecipeName}</Link></li> )}
      </ul>
      <button type='button' onClick={check}>click</button>
      </div>
      <Link to="/AddNewRecipe">AddNewRecipe</Link>
    </div>
  )
}

export default Home