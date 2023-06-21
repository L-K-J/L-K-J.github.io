import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home';
import { Main } from './pages/Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/main" element={<Main></Main>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
