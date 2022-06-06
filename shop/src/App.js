import { useState } from 'react';

import Navbars from './Components/Navbars.js';
import List from './Pages/List.js';
import About from './Pages/About.js';
import Detail from './Pages/Detail.js';
import Data from './Store/data.js';

import './App.scss';
import { Routes, Route, Link,useNavigate, Outlet} from 'react-router-dom';


function App() {
  let [getShoes, setShoes] = useState({Data});

  return (
    <div className="App">

      <header className="App-header">
      </header>
      <Navbars></Navbars>

      <div className="bg"><img src="/img/common/bg.png"/></div>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/list" element={<List getShoes={getShoes} setShoes={setShoes}></List>}/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/detail/:id" element={ <>상세페이지임 <Detail datails={Data} /></> }/>       
        <Route path="*" element={ <div>없는페이지임</div> } />
      </Routes>
    </div>
  );
}

export default App;
