import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {IUser} from '../models/User'
import {fetchUsers} from '../slices/usersSlice'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ThunkDispatch} from "@reduxjs/toolkit";

function Users() {

    // const [users, setusers] = useState<IUser[]>([])

    const usersState = useSelector((state) => state.users)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect(() => {
        loadData();
      }, [])
    
    const loadData = () => {
        dispatch(fetchUsers())
    }

  return (
    <>

        {usersState.loading && "...loading"}
        {usersState.error && usersState.error}
    
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">City</TableCell>
                        <TableCell align="center">Street</TableCell>
                        <TableCell align="center">Company name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersState.data && usersState.data.map((item: IUser) => (
                        <TableRow
                        key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{item.id}</TableCell>
                            <TableCell align="center">{item.username}</TableCell>
                            <TableCell align="center">{item.email}</TableCell>
                            <TableCell align="center">{item.address?.city}</TableCell>
                            <TableCell align="center">{item.address?.street}</TableCell>
                            <TableCell align="center">{item.company?.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </>
  )
}

export default Users