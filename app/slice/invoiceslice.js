import { createSlice, createAsyncThunk, PayloadAction, nanoid, asyncThunkCreator } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";


const initialState = {
    invoiceList: [
        { id: 2, name: "ok" }],

    nameList: [{
        no: 1, name: 'Aneesa'
    }],
    data: [

    ]
}

const GetPropertiesByLoc = createAsyncThunk('map/GetPropertiesByLoc', async () => {
    try {
        const response = await axios.get("https://automationexercise.com/api/productsList");
        console.log("==== responise", response)
        return response
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error
    }
})

const invoiceSlice = createSlice({
    name: "InvoiceSlice",
    initialState,
    reducers: {
        addInvoice: (state, action) => {
            console.log("@@@ payload", action.payload)
            let i = 3;
            const invoice = {
                id: i++,
                name: action.payload,
            }
            state.invoiceList.push(invoice)
        },
        removeInvoice: (state, action) => {

        },
        addName: (state, action) => {
            console.log('@@ payload', action.payload)

            // state.nameList = [...state.nameList, action.payload]

            let i = 2;
            const name = {
                no: i++,
                name: action.payload,
            }
            state.nameList.push(name)
        },
        removeName: (state, action) => {

        },
        setData: (state, action) => {
            return actions.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetPropertiesByLoc.pending, (state, action) => {

            })
            .addCase(GetPropertiesByLoc.fulfilled, (state, action) => {
                console.log("==== action", action)
                state.data = action.payload.data.products
            })
            .addCase(GetPropertiesByLoc.rejected, (state, action) => {

            })
    }
})

export { GetPropertiesByLoc }

export const { addInvoice, removeInvoice, addName, removeName, setData } = invoiceSlice.actions

export default invoiceSlice.reducer
