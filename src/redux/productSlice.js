import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product',
    initialState: [{
        id: '1', title: 'Apple Iphone 13 pro max',
        price: '$1000',
        img: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/1/d/1dc79580_887544f7_14Pro-DeepPurple.png',
        qty: 0
    },
    {
        id: '2', title: 'Apple Iphone 13 pro max',
        price: '$1000',
        img: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/1/d/1dc79580_887544f7_14Pro-DeepPurple.png',
        qty: 0
    },
    {
        id: '3', title: 'Apple Iphone 13 pro max',
        price: '$1000',
        img: 'https://d3cd3hu9wl72jo.cloudfront.net/1.d/preview/1/d/1dc79580_887544f7_14Pro-DeepPurple.png',
        qty: 0
    },],
    reducers: {
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

export const { increaseQty, decreaseQty } = productSlice.actions;
export default productSlice.reducer