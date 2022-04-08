import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Loading from './components/Loading'

const Upload = React.lazy(() => import('./pages/Upload'))
const History = React.lazy(() => import('./pages/History'))
const About = React.lazy(() => import('./pages/About'))

let root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="/" element={<Home />} />
            <Route path="upload" element={<Upload />} />
            <Route path="history" element={<History />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();