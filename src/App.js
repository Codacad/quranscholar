import './css/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './componets/Navbar';
import Main from './pages/Main';
import Courses from './pages/Courses';
import Sidenav from './componets/Sidenav';
import Footer from './componets/Footer';
import Quran from './pages/Quran';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Sidenav />
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/courses' element={<Courses />}></Route>
            <Route path='/quran' element={<Quran />}></Route>
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
