import { useParams } from "react-router-dom"
import './Detail.scss';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {Tabs,Tab} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import {addItem} from './../Store/redux.store.js';

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

function ControlledTabs() {
  const [key, setKey] = useState('Info');

  return (
    <Tabs
      id="bootTab" defaultActiveKey={"QnA"}
      // activeKey={key}
      // onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Info" title="Info">
        <p>Info Tab Content...<br/> 우와아아아앙</p>
      </Tab>
      <Tab eventKey="QnA" title="QnA">
        <p>QnA Tab Content</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>Contact Tab Content</p>
      </Tab>
      <Tab eventKey="disabled" title="Disabled Tab" disabled>
        <p>Disabled Tab Content</p>
      </Tab>
    </Tabs>
  );
}

function Detail(props) {
  let navigate = useNavigate();
  let store = useSelector((state) => {
    return state;
  })


  let dispatch = useDispatch()


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
      <BlackButton bg="black" onClick={()=> {dispatch(addItem(thisItem))}}> 주문하기 </BlackButton>
      <BlackButton bg="grey" onClick={()=> {navigate(-1)}}> 뒤로 </BlackButton>

      <ControlledTabs />
    </div>
  );
}
export default Detail;
