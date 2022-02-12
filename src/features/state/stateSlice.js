import { createSlice } from '@reduxjs/toolkit'



export const state = createSlice({
    name: 'state',
    initialState: {
        allData: [],
        currentData: [],
        product: '',
        state: '',
        city: '',
        isLoading: false,
        error: false
    },
    reducers: {
        fetchData: (state) => {
            state.isLoading = true
        },
        gotData: (state, action) => {
            state.isLoading = false;
            state.allData = action.payload
            state.currentData = action.payload
        },
        changeProduct: (state, action) => {
            state.product = action.payload
            state.currentData = state.allData.filter(item => action.payload ? item.product_name === action.payload : true)
            state.state = ''
            state.city = ''
        },
        changeState: (state, action) => {
            state.state = action.payload
            state.currentData = state.allData
                .filter(item => state.product ? item.product_name === state.product : true)
                .filter(item => action.payload ? item.address.state === action.payload : true)
            state.city = ''

        },
        changeCity: (state, action) => {
            state.city = action.payload
            state.currentData = state.allData
                .filter(item => state.product ? item.product_name === state.product : true)
                .filter(item => state.state ? item.address.state === state.state : true)
                .filter(item => action.payload ? item.address.city === action.payload : true)
        },
        gotError: (state) => {
            state.error = true
            state.isLoading = false

        },

    },
})

// Action creators are generated for each case reducer function
export const { gotData, fetchData, changeCity, changeProduct, changeState, gotError } = state.actions

export default state.reducer