import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {changeName,increase} from './../Store/userSlice.js';
import {increaseCount} from './../Store/redux.store.js';
function Cart() {

    let store = useSelector((state)=>{
        return state
    });

    let dispatch = useDispatch()
    let updateCount = () => {
        console.log('update');
        return false;
    }

    return (
        <>
        <p>
            <a href="#" onClick={(e)=>{ 
                e.preventDefault(); 
                dispatch(changeName());
            }}>User : {store.user.name} ({store.user.age})</a> 의 장바구니
            <button onClick={()=>{
                dispatch(increase(100)) 
            }}>+</button>
        </p>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Count</th>
                <th>Update</th>
            </tr>
            </thead>
            <tbody>
            {
                store.cart.map((item, idx) => 
                    <tr key = {idx}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td>
                            <button title="plus" 
                            onClick={()=>{dispatch(increaseCount(item.id))}}>+
                            </button>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </Table>        
        </>
    )
}

export default Cart