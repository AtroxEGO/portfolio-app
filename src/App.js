import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home/home'
import Select from './pages/select';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/select' element={<Select/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
