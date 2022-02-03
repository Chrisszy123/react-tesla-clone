import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cars: ["model S", "Model 3", "Model X", "Model Y", "Solar Panel", "Solar Roofs", "Accessories"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;
export default carSlice.reducer;