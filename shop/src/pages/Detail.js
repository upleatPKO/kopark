import { useParams } from "react-router-dom"


function Detail(props) {
  let {id} = useParams();

  return (
    <>
      <h2> {props.detail[id].title}</h2>
      <p>{props.detail[id].price} </p>
    </>
  );
}

export default Detail;
