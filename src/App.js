import './css/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from './componets/Navbar';
import Main from './pages/Main';
import Courses from './pages/Courses';
import Footer from './componets/Footer';
import Quran from './pages/Quran';
import { WhatsApp } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/quranscholar' element={<Main />}></Route>
            <Route path='/quranscholar/courses' element={<Courses />}></Route>
            <Route path='/quranscholar/quran' element={<Quran />}></Route>
          </Routes>
          <Footer />
          <div className="whatsapp">
            <a href="https://wa.me/8057121113?text=Assalamualaikum" target='_blank'>
              <WhatsApp></WhatsApp>
            </a>
          </div>
        </Router>
    </div>
  );
}

export default App;
