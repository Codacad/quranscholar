import './css/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './componets/Navbar';
import Main from './pages/Main';


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
