import './App.css';
import { useState } from 'react';
import Modal from './Modal';
import Header from './Header';
const App = () => {
    let cont = "컨텐츠";
    let title = "타이틀";
    let date = "5월 10일";

    let [getTitle, setTitle] = useState(['제목이요','우히히히','개피곤']);
    let [getCont, setCont] = useState(['제목이요 상세','우히히히 상세','개피곤 상세']);
    let [getDate, setDate] = useState(['5/10','5/11','5/12']);
    let [getColor,setColor] = useState('#eee')
    let [getFav,setFav] = useState(0);
    let [getIndex,setIndex] = useState(0);
    let orderTxt = () => {
        let cloneTitle = [...getTitle];
        setTitle(cloneTitle.sort());
    }
    
    return ( 
        <div className="App">
            <Header/>
            <div className="cont">
                <button onClick={orderTxt}>정렬</button>
                <ul className="list">
                {
                    getTitle.map(function(data,index) {
                        return(
                        <li key={index}>
                        <h3> 제목 : <a href="#" onClick={ ()  =>{
                        setIndex(index)
                    }}>{data}</a> | <span onClick={
                            ()=>{
                                setFav(index+1)
                            }}>좋아요</span>{getFav[index]}</h3>
                        <p> 등록일 : {getDate[index]}</p>
                        </li>
                        )
                    })
                    
                    
                }
                </ul>
                <Modal title={getTitle} cont={getCont} date={getDate} text="text" color={getColor} index={getIndex}></Modal>
                <input type="text" id="inp"></input><button onClick={(e)=>{ 
                    let cloneTitle = [...getTitle]; 
                    let cloneData = [...getDate];
                    let cloneCont = [...getCont];
                    let today = new Date();
                    let dd = String(today.getDate()).padStart(2, '0');
                    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                    today = mm + '/' + dd ;

                    cloneTitle.push(document.getElementById('inp').value); 
                    setTitle(cloneTitle);
                    cloneData.push(today);
                    setDate(cloneData);
                    cloneCont.push(document.getElementById('inp').value+'상세');
                    setCont(cloneCont);
                    }}>글등록</button>
            </div>
        </div>
    )
}

export default App;