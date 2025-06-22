import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Home } from './pages/Home';
import { Builder } from './pages/Builder';
import { AppProvider } from './context/AppContext';
import { IS_PRODUCTION } from './config';
import './index.css';

function App() {
  
  return (
    <AppProvider>
      <BrowserRouter>
        {IS_PRODUCTION && <Analytics />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
