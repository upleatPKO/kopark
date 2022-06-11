
import { Col,Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CardItem.scss';

function CardItem(props) {
  let navigate = useNavigate();
  return (
    <>
    <Col className="collection" onClick={(e)=> {e.preventDefault(); navigate('/detail/'+props.shoes.id)}} key={props.shoes.id}>
      <a className="collection_link" href="#pd">
      <Card>
        <Card.Img variant="top" src={"/img/pd/shoes"+(props.shoes.id+1)+".jpg"} />
        <Card.Body>
        <Card.Title className="collection_tit">{props.shoes.title}</Card.Title>
        <Card.Text className="collection_price">{props.shoes.price}</Card.Text>
        </Card.Body>
      </Card>
      </a>
    </Col>
    </>
  )
}

export default CardItem;
