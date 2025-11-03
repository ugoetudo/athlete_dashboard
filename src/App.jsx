import './App.css';
import MyForm from './MyForm';
import './NewExercise'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <>
    <h1>Healthy Habits Gym</h1> 
    <div> 
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
