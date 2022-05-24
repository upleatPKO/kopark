import Navbars from './Navbars';
import List from './List';
import './App.scss';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Navbars></Navbars>

      <Routes>
        <Route path="/" element={ <div>메인임</div> } />
        <Route path="/detail" element={<List></List>} />
     
        <Route path="*" element={ <div>없는페이지임</div> } />

      </Routes>
    </div>

  );
}

export default App;
