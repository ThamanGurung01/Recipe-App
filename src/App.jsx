import { Route,Routes,Link } from "react-router-dom"
import Home from "./Page/Home.jsx"
import AddNewRecipe  from "./Page/AddNewRecipe.jsx"
import ViewRecipe from "./Page/ViewRecipe.jsx"
import EditRecipe from "./Page/EditRecipe.jsx"

function App() {
  return (
    <>
    <nav className="m-2 font-bold text-2xl">
    <div><Link to="/">Home</Link></div>
    </nav>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AddNewRecipe" element={<AddNewRecipe RecipeName="" Ingredients="" Instructions="" Category="" Edit={false} RecipeKey={""}/>}/>
      <Route path="/ViewRecipe/:recipe" element={<ViewRecipe/>}/>
      <Route path="/EditRecipe/:recipe" element={<EditRecipe/>}/>
      <Route/>
    </Routes>
    </>
  )
}

export default App
