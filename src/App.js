import './App.css';
import { Home, Signup, Stureg } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAddressInfo } from '.';

function App() {
  const pro = getAddressInfo();
  return (
    <div className="App">
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/stureg" element={<Stureg />} />
          </Routes>
    </div>
  );
}

export default App;
