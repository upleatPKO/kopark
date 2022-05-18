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
                <h2>제목 : <input type="text" value={props.title[props.index]} id="thistitle"></input></h2>
                <p>등록일: <input type="text" value={props.date[props.index]} id="thisdate"></input></p>
                <p>글 : <input type="text" value={props.cont[props.index]} id="thiscont"></input></p>
                <p>일반 text 전송 테스트 : {props.text} </p>
                
                <button onClick={ ()  =>{
                    let cloneTitle = [...props.title];
                    cloneTitle[props.index] = document.getElementById('thistitle').value;
                    props.setTitle(cloneTitle);
                }}>글수정</button>
                 <button onClick={ ()  =>{
                     let cloneTitle = [...props.title];
                     cloneTitle.splice(props.index,1);
                     props.setTitle(cloneTitle);
                     /* 
                     let cloneDate = [...props.date];
                     cloneDate.splice(props.index,1);
                     setDate(cloneDate);
                     let cloneCont = [...props.cont];
                     cloneCont.splice(props.index,1);
                     setCont(cloneCont); 
                     */
                }}>글삭제</button>
            </div>
        </div>
    )
}

export default Modal;