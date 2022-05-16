import { useState } from 'react';
import './Modal.css';
const Modal = () => {
    let [getTitle, setTitle] = useState(['제목이요','우히히히','개피곤']);
    let [getCont, setCont] = useState(['글상세1','글상세2','글상세3']);
    let [getDate, setDate] = useState(['5/10','5/11','5/12']);
    let [getFav,setFav] = useState(0);
    function orderTxt() {
        let cloneTitle = [...getTitle];
        setTitle(cloneTitle.sort());
    }

    return ( 
        <div className="modal">
            <div className="mcont">
                <h2>제목 : {getTitle}</h2>
                <p>등록일: {getDate}</p>
                <p>글 : {getCont}</p>
                
                <button onClick={ ()  =>{
                    let copy = [...getTitle];
                    copy[0] = "title1 update";
                    setTitle(copy);
                }}>글수정</button>
                 <button onClick={ ()  =>{
                    let copy = [...getTitle];
                    copy[0] = "title1 update";
                    setTitle(copy);
                }}>글삭제</button>
            </div>
            
        </div>
    )
}

export default Modal;