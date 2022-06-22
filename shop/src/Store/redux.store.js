import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from './userSlice.js'

let stock = createSlice({
    name :'stock',
    initialState : [100,50,2]
})

let cart = createSlice({
        name:'cart',
        initialState : [
            {id:0, name:'White and Black', count:2},
            {id:2, name:'Grey Yordan', count:1}
        ],
        reducers : {
            increaseCount(state, action) {
                let item = state.find((item, idx) =>{
                    return item.id == action.payload
                })
                item.count ++
            },
            addItem(state,action) {
                state.push(action.payload)
            }
            
        }
    }
)

export let {increaseCount,addItem} = cart.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})
