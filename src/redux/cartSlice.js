import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            let ind = -1;
            state.map((item, index) => {
                if (item.id == action.payload.id) {
                    ind = index
                }
            })
            if (ind == -1) {
                state.push({ ...action.payload, ...action.payload.qty + 1 })
            } else {
                state[ind].qty = state[ind].qty + 1
            }
        },
        increaseCartQty(state, action) {
            let ind = -1;
            state.map((item, index) => {
                if (item.id == action.payload) {
                    ind = index
                }
            })
            if (ind !== -1) {
                state[ind].qty = state[ind].qty + 1
            }
        },
        decreaseCartQty(state, action) {
            let ind = -1;
            state.map((item, index) => {
                if (item.id == action.payload) {
                    ind = index
                }
            })
            if (ind !== -1) {
                state[ind].qty = state[ind].qty - 1;
            }
        },
        removeItem(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addToCart, increaseCartQty, decreaseCartQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer