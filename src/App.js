import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Meal from './Components/Meal';
import RecipeInfo from './Components/RecipeInfo';
import './Components/style.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Meal/>}/>
        <Route path="/:MealId" element={<RecipeInfo/>}/>
        {/* <Route path="/" element={<meal/>}/> */}
      </Routes>

    </Router>
  
    </>
  );
}

export default App;
