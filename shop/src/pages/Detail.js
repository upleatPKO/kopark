import { useParams } from "react-router-dom"
import '../Detail.scss';

function Detail(props) {
  let {id} = useParams();

  return (
    <div className="pdDetail">
      <h2> {props.datails[id].title}</h2>
      <p><img src={"/img/pd/shoes"+(parseInt(id)+1)+".jpg"} /></p>
      <p> {props.datails[id].content}</p>
      <p> {props.datails[id].price}</p>

    </div>
  );
}

export default Detail;
