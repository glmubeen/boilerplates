import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        setProduct(state, action) {
            return state = action.payload
        },
        increaseQty(state, action) {
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
        decreaseQty(state, action) {
            let ind = -1;
            state.map((item, index) => {
                if (item.id == action.payload) {
                    ind = index
                }
            })
            if (ind > -1) {
                state[ind].qty = state[ind].qty - 1;
            }
        },

    }
})

export const { increaseQty, decreaseQty, setProduct } = productSlice.actions;
export default productSlice.reducer