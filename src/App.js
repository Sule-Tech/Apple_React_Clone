import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 
import './commonResource/css/bootstrap.css'
import './commonResource/css/styles.css'
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import MainRoute from "./Component/Main/MainRoute";
import YoutubeVideos from './Component/YouTube/YoutubeVideos';
import Mac from './Component/Pages/Mac';
import Error from './Component/Pages/Error';
import Iphone from './Component/Pages/Iphone';
import Ipad from './Component/Pages/Ipad'
import Music from "./Component/Pages/Music";
import Support from "./Component/Pages/Support";
import Tv from "./Component/Pages/Tv";
import Watch from "./Component/Pages/Watch";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/Iphone" element={<Iphone />} />
          <Route path="/Ipad" element={<Ipad />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Tv" element={<Tv />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Support" element={<Support />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <YoutubeVideos />
        <Footer />
      </>
    </Router>
  );
}

export default App;
