import { useParams } from "react-router-dom"
import '../Detail.scss';

function Detail(props) {
  let {id} = useParams();
  let thisItem = props.datails.find((item)=>{
    return item.id == id;
  });
  // let thisItem = props.datails[id];

  return (
    <div className="pdDetail">
      <h2> {thisItem.title}</h2>
      <p><img src={"/img/pd/shoes"+(parseInt(thisItem.id)+1)+".jpg"} /></p>
      <p> {thisItem.content}</p>
      <p> {thisItem.price}</p>

    </div>
  );
}

export default Detail;
