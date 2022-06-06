import { useParams } from "react-router-dom"
import './Detail.scss';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

let YellowButton = styled.button`
 background: ${props => props.bg};
 color: ${props => (props.bg === 'yellow')? '#000':'#fff'};
 padding:10px;
`
let BlackButton = styled.button`
background: ${props => props.bg};
color: ${props => (props.bg === 'yellow')? '#000':'#fff'};
padding:10px;
`

let Noti = styled.div `
  background:#eee;
  padding:20px;
`

function Detail(props) {
  let navigate = useNavigate();

  let [getAlert, setAlert] = useState(true);

  useEffect(()=>{
    let timer = setTimeout(()=>{setAlert(!getAlert)},2000);
    console.log(2);

    return () => {
      clearTimeout(timer);
      console.log(1);
    }
  },[]);

  let {id} = useParams();
  let thisItem = props.datails.find((item)=>{
    return item.id === parseInt(id);
  });
  // let thisItem = props.datails[id];

  return (
    <div className="pdDetail">
      {(getAlert)&&<Noti>2초 뒤에 사라집니다</Noti>}
      <h2> {thisItem.title}</h2>
      <p><img src={"/img/pd/shoes"+(parseInt(thisItem.id)+1)+".jpg"} alt=""/></p>
      <p> {thisItem.content}</p>
      <p> {thisItem.price}</p>
      <YellowButton bg="yellow"> 장바구니 담기 </YellowButton>
      <BlackButton bg="black" onClick={()=> {navigate(-1)}}> 뒤로 </BlackButton>
    </div>
  );
}
export default Detail;
