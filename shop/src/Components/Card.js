
import { Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

function Card(props) {
  let navigate = useNavigate();
  return (
    <>
    <Col className="collection" onClick={()=> {navigate('/detail/'+props.shoes.id)}} key={props.shoes.id}>
      <a className="collection_link" href="#pd">
        <img src={"/img/pd/shoes"+(props.shoes.id+1)+".jpg"} alt=""></img>
        <p className="collection_tit">{props.shoes.title}</p>
        <p className="collection_price">{props.shoes.price}</p>
      </a>
    </Col>
    </>
  )
}

export default Card;
