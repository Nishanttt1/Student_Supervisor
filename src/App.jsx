import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Team from './components/Team.jsx';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
            <Sidebar />
    
      <main className="main-content">
      <Routes>
        <Route path='/' element={<Navigate to='/projects' replace />} />
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path= '/team' element= {<Team/>}></Route>
      </Routes>
    </main>
    </div>
    </BrowserRouter>
  )
}
export default App;
