import About from './Components/About';
import Home from './Components/Home';
import VisionModule from './Components/VisionModule';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Learn from './pages/Learn';
import FirstLearn from './pages/FirstLearn';
import './App.css'
import SecondPage from './pages/SecondPage';
import Quiz from './pages/Ouestion1';
import ThirdModule from './pages/ThirdModule';
import Hearing from './pages/Hearing';
import AudioTest from './pages/AudioTest';
import FindTheFragnment from './pages/FindTheFragnment';
import FragnmentModule from './pages/FragnmentModule';
import SmellingTest from './pages/SmellingTest';
import TouchModule from './pages/TouchModule';
import SpeakingModule from './pages/SpeakingModule';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/about" element={<About />} />
        <Route path='/vision' element={<VisionModule />} />
        <Route path='/learning' element={<Learn />} />
        <Route path='/firstlearn' element={<FirstLearn />} />
        <Route path='/SecondPage' element={<SecondPage />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/thirdmodule' element={<ThirdModule />} />
        <Route path='/hearing' element={<Hearing />} />
        <Route path='/smelling' element={<FindTheFragnment />} />
        <Route path='/audiotest' element={<AudioTest />} />
        <Route path='/fragnmentModule' element={<FragnmentModule />} />
        <Route path='/fragnmentTest' element={<SmellingTest/>}/>
        <Route path='/touchContainer' element={<TouchModule/>}/>
        <Route path='/speakingModule' element={<SpeakingModule/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

