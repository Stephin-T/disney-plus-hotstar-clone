import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />}>
        </Route>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route path="/detail/:id" element={<Detail />}>
        </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
