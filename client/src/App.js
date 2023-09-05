import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from './components/Index'

import PdfPowerPoint from './pages/PdfPowerPoint';
import PowerPointPdf from './pages/PowerPointPdf';
import PdfWord from './pages/PdfWord';
import WordPdf from './pages/WordPdf';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={PdfWord} />
          <Route path="/wordtopdf" element={WordPdf} />
          <Route path="/pdftopowerpoint" element={PdfPowerPoint}/>
          <Route path="/powerpointtopdf" element={PowerPointPdf}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
