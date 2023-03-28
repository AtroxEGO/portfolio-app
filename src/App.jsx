import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Jakub from './components/profiles/jakub/Jakub';
import Michal from './components/profiles/michal/Michal';
import Pawel from './components/profiles/pawel/Pawel';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='jakub' element={<Jakub/>}/>
          <Route path='michal' element={<Michal/>}/>
          <Route path='pawel' element={<Pawel/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
