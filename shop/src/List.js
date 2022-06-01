
import { Container,Row} from 'react-bootstrap';

import { useState } from 'react';

import Card from './Card';
import './Card.scss';

function List(props) {

  return (
    <>
<Container>
  <Row>
    {
        props.shoes.map(function(data) {
          return(
            <Card shoes={data}></Card>
          )
          })
    }
  </Row>
</Container>
    </>
  );
}

export default List;
