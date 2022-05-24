
import { useState } from 'react';
import { Col} from 'react-bootstrap';
import './Card.scss';


function Card(props) {

  return (
    <>
    <Col className="collection">
      <a href="#" className="collection_link">
        <img src={"/img/pd/shoes"+(props.shoes.id+1)+".jpg"}></img>
        <p className="collection_tit">{props.shoes.title}</p>
        <p className="collection_price">{props.shoes.price}</p>
      </a>
    </Col>
    </>
  )
}

export default Card;
