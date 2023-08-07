import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Quiz from './pages/Quiz';
import About from './pages/About';
import Error from './pages/Error';
import Subscribe from './pages/Subscribe';
import Donate from './pages/Donate';
import "./custom.scss";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Quiz />} />
          <Route path='about' element={<About />} />
          <Route path='subscribe' element={<Subscribe />} />
          <Route path='donate' element={<Donate />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
