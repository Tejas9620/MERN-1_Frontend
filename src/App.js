import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/signUp';
import Login from './Components/login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/> } />
          <Route path="/signUp" element={ <SignUp/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
