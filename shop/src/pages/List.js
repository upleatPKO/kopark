
import React,{useEffect, useState} from 'react';
import { Container,Row} from 'react-bootstrap'
import Card from './../Components/Card.js'
import './../Components/Card.scss';

function List(props) {
  let copy = [...props.getShoes];
  let [getOrder, setOrder] = useState(1);
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
  
  return (
    <>
<Container>
  <p style={{"textAlign":"right"}}><button onClick={ orderPd }>이름순 정렬</button></p>
  <Row>
    {
          props.getShoes.map(function(data,idx) {
          return (
            <Card shoes={data} key={idx}></Card>
          )
        })
    }
  </Row>
</Container>
    </>
  );
}

export default List;
