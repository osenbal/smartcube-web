import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);
