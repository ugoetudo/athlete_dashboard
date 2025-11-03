import './App.css';
import MyForm from './MyForm';
import { NewExercise } from './NewExercise';  
import {BrowserRouter, Routes, Route, Link } from 'react-router';

export function App() {
  return (
    <>
    <div className="mainContent"> 
    <h1>Healthy Habits Gym</h1> 
    
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/sampleForm">Sample Form</Link>
        </nav>
        <Routes>
          <Route path="/" element={<NewExercise />} />
          <Route path="/sampleForm" element={< MyForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}
