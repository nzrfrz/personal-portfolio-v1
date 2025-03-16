
import { createRoot } from 'react-dom/client'
import { GlobalContextProvider } from './context/GlobalContextProvider.tsx';

import { 
  // HashRouter,
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
// import gsap from "gsap";
// import { useGSAP } from '@gsap/react';

import App from './App.tsx'

import './index.css';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

// gsap.registerPlugin(useGSAP);

createRoot(document.getElementById('root')!).render(
  // <HashRouter>
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  // </HashRouter>
)
