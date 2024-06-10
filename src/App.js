import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from "./components/HomePage";
import BookingPage from './components/BookingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='/booking' element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
