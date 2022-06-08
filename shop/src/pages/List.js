
import React,{useEffect, useState} from 'react';
import { Container,Row,Spinner } from 'react-bootstrap'
import CardItem from './../Components/CardItem.js'
import './List.scss';
import axios from 'axios';
import styled from 'styled-components';
let CenterButton = styled.button`
text-align:center;
margin:30px auto;
`
function List(props) {
  let copy = [...props.getShoes];
  let [getOrder, setOrder] = useState(1);
  let [getMore, setMore] = useState(2);
  let [getVisible, setVisible] = useState(true)
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('훅');
  })
  let orderPd = (e) => {
    e.preventDefault();
    setOrder(!getOrder);

    copy.sort((a, b)=>{
      if(getOrder) {  
        if (a.title < b.title) {return -1};
        if (a.title > b.title) {return 1};
        return 0;
      } else {
        if (a.title > b.title) {return -1};
        if (a.title < b.title) {return 1};
        return 0; 
      }
    })

    props.setShoes(copy);
  }

  let LoadMore = () => {
      setLoading(true);
      axios.get('https://codingapple1.github.io/shop/data'+getMore+'.json')
      .then((result) =>{
        setLoading(false);
        copy = [...copy,...result.data];
        props.setShoes(copy);
        setMore(getMore+1);
      })
      .catch(()=>{
        console.log('error'+getMore);
        setLoading(false);
      })
      if(getMore >= 3) {
        setVisible(false);
      }
      /* axios.post('/url',{name:'park'}) */
      /* Promise.all(['https://codingapple1.github.io/shop/data1.json','https://codingapple1.github.io/shop/data2.json']).then(()=>{}) */
  }
  
  return (
    <>
<Container className='lists'>
  <p style={{"textAlign":"right"}}><button onClick={ orderPd }>이름순 정렬</button></p>
  <Row Row xs={1} md={3} className="g-4">
    {
          props.getShoes.map(function(data,idx) {
          return (
            <CardItem shoes={data} key={idx}></CardItem>
          )
        })
    }
  </Row>
  
  {
  (loading)&&
  <div className='centered'>
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
  }

  
  <div className='centered'>
  {(getVisible)&&<CenterButton onClick={LoadMore}>더보기</CenterButton>}
  </div>
</Container>

    </>
  );
}

export default List;
