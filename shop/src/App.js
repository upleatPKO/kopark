import { useState } from 'react';

import Navbars from './Navbars';
import List from './List';
import About from './pages/About';
import Detail from './pages/Detail';
import Data from './data';

import './App.scss';
import { Routes, Route, Link,useNavigate, Outlet} from 'react-router-dom';


function App() {
  let [getShoes, setShoes] = useState({Data});

  return (
    <div className="App">


      <Routes>
        <Route path="/" element={ 
          <>
              <header className="App-header">
              </header>
              <Navbars></Navbars>
              <div className="bg"><img src="/img/common/bg.png"/></div>
              <Outlet></Outlet>
          </>
        } >
            <Route path="/list" element={<List shoes={Data}></List>}/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/pages/Detail" element={ <Detail shoes={Data}/> }/>
        </Route>        
        <Route path="*" element={ <div>없는페이지임</div> } />
      </Routes>
    </div>

  );
}

export default App;
