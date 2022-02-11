import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Team from './components/Team'


function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Header navigate={navigate}/>
      <Routes>
        <Route path="*" element={<Home navigate={navigate} />} />
        <Route path="/gallery" element={<Gallery navigate={navigate} />} />
        <Route path="/FAQ" element={<FAQ navigate={navigate} />} />
        <Route path="/ourTeam" element={<Team navigate={navigate} />} />
      </Routes>   
    </div>
  );
}

export default App;
