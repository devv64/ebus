import './App.css';
import { Home, Signup } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

    </div>
  );
}

export default App;
