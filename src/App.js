import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home/home'
import Example from './pages/Example/example';
import Pawel from './pages/Profiles/Pawel/Pawel';
import PChat from './pages/Profiles/Pawel/Chat/Chat';
import Michal from './pages/Profiles/Michal/index'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/example' element={<Example/>} />
          <Route path='/pawel' element={<Pawel/>} />
          <Route path='/pawel/chat' element={<PChat/>} />
          <Route path='/michal' element={<Michal/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
