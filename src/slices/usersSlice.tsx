import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../models/User'

const initialState = {
    data: [],
    loading:false,
    error:"",
}

export const fetchUsers = createAsyncThunk("fetchUsers", async (): Promise<IUser[]> => {
    let users: IUser[] = [];
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                users = res.data;
            })
        return users;    
})

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending,(state,action) => {
            state.loading = true;
            state.error = "";
            console.log("loadinggg")
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=> {
            state.data = action.payload;
            state.loading = false;
            console.log('yess')
        });
        builder.addCase(fetchUsers.rejected,(state,action)=> {
            state.loading = false;
            state.error = "Error"
            console.log("Erorrororor")
        })
    }
})

export default usersSlice.reducer;