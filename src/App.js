import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './Modal';
import Header from './Header';
function App() {
    let cont = "컨텐츠";
    let title = "타이틀";
    let date = "5월 10일";

    let [getTitle, setTitle] = useState(['제목이요','우히히히','개피곤']);
    let [getDate, setDate] = useState(['5/10','5/11','5/12']);
    let [getFav,setFav] = useState(0);
    function orderTxt() {
        let cloneTitle = [...getTitle];
        setTitle(cloneTitle.sort());
    }

    
    return ( 
        <div className="App">
            <Header/>
            <div className="cont">
                <h2>{title}</h2>
                <p>{cont}</p>
                <p style={{color:'red',textDecoration:'underline'}}>하드코딩</p>
                <button onClick={ ()  =>{
                    let copy = [...getTitle];
                    copy[0] = "title1 update";
                    setTitle(copy);
                }}>글수정</button>
                <button onClick={orderTxt}>정렬</button>
            </div>
           
            {
                getTitle.map(function(data,index) {
                    return(
                    <div className="list">
                    <h3> 제목 : {data} <span onClick={
                        ()=>{
                            setFav(index+1)
                        }}>좋아요</span>{getFav}</h3>
                    <p> 등록일 : {getDate[0]}</p>
                    </div>
                    )
                })
                
                
            }
        <Modal></Modal>

        </div>

    )
}

export default App;