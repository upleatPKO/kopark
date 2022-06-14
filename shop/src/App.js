import React, { useState } from 'react';
import Navbars from './Components/Navbars.js';
import List from './Pages/List.js';
import About from './Pages/About.js';
import Detail from './Pages/Detail.js';
import Cart from './Pages/Cart.js';
import Data from './Store/data.js';
import './App.scss';
import { Routes, Route} from 'react-router-dom';

// class Detail2 extends React.Component{
//   componentDidMount() {

//   }
//   componentDidUpdate() {

//   }
//   componentWillUnmount() {

//   }
// }
function App() {
  let [getShoes, setShoes] = useState([...Data]);


  return (
    <div className="App">

      <header className="App-header">
      </header>
      <Navbars></Navbars>

      <div className="bg"><img src="/img/common/bg.png" alt=""/></div>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/list" element={<List getShoes={[...getShoes]} setShoes={setShoes} ></List>}/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/detail/:id" element={ <><Detail datails={[...getShoes]} /></> }/>       
        <Route path="/cart" element={ <Cart/> }/>       
        <Route path="*" element={ <div>없는페이지임</div> } />
      </Routes>
    </div>
  );
}

export default App;
