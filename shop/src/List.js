
import { useState } from 'react';
import { Container,Row} from 'react-bootstrap';
import Data from './data';
import Card from './Card';
import './List.scss';



function List(props) {
  let [getShoes, setShoes] = useState({Data});

  return (
    <>
<Container>
  <Row>
    {
        Data.map(function(data) {
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
