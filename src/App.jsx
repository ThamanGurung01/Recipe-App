import { Route,Routes,Link } from "react-router-dom"
import Home from "./Page/Home.jsx"
import AddNewRecipe  from "./Page/AddNewRecipe.jsx"
import ViewRecipe from "./Page/ViewRecipe.jsx"

function App() {
  return (
    <>
    <nav>
    <div><Link to="/">Home</Link></div>
    </nav>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AddNewRecipe" element={<AddNewRecipe/>}/>
      <Route path="/ViewRecipe/:recipe" element={<ViewRecipe/>}/>
      <Route/>
    </Routes>
    </>
  )
}

export default App
