//pages
import Messages from './pages/Messages/Messages';
import News from './pages/News/News';
import Music from './pages/Music/Music';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';

//components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

//router
import {BrowserRouter, Routes, Route} from "react-router-dom";

//styles
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <BrowserRouter>
          <div className="app-wrapper">
            <div className="app-section">
              <div className="app-container">
                <Navbar />
                <Routes>
                  <Route path="/messages" element={<Messages/>}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/music" element={<Music/>}/>
                  <Route path="/settings" element={<Settings/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
