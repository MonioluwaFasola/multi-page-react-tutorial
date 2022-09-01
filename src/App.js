
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './MultiplePages/Home';
import Contact from './MultiplePages/Contact';
import About from './MultiplePages/About';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>  
        <Route exact path='/about' element={<About/>}></Route>  
        <Route exact path='/contact' element={<Contact/>}></Route>  
      </Routes>
      <ul>  
       <li>  
          <Link to="/">Home</Link>  
       </li>  
       <li>  
          <Link to="/About">About</Link>  
       </li>  
       <li>  
          <Link to="/Contact">Contact</Link>  
       </li>  
      </ul> 
    </div>
  );
}

export default App;
