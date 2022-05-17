import { useState } from 'react';
import './Modal.css';
const Modal = (props) => {
    
    /* function orderTxt() {
        let cloneTitle = [...getTitle];
        setTitle(cloneTitle.sort());
    } */

    return ( 
        <div className="modal" style={{color:'#000',backgroundColor: props.color }}>
            <div className="mcont">
                <h2>제목 : {props.title[props.index]}</h2>
                <p>등록일: {props.date[props.index]}</p>
                <p>글 : {props.cont[props.index]}</p>
                <p>일반 text 전송 테스트 : {props.text} </p>
                
                <button onClick={ ()  =>{
                    
                }}>글수정</button>
                 <button onClick={ ()  =>{
                     /* let cloneTitle = [...props.title];
                     cloneTitle.slice(props.index,1);
                     setTitle(cloneTitle);
                     let cloneDate = [...props.date];
                     cloneDate.slice(props.index,1);
                     setDate(cloneDate);
                     let cloneCont = [...props.cont];
                     cloneCont.slice(props.index,1);
                     setCont(cloneCont); */

                }}>글삭제</button>
            </div>
        </div>
    )
}

export default Modal;