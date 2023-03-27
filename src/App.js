import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home/home'
import Example from './pages/Example/example';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/example' element={<Example/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
