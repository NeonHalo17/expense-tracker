import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsFillTrashFill , BsFillPencilFill } from "react-icons/bs";
import AddTransaction from "./AddTransaction";
import Modal from "./Modal";

function Transactions () {

    const [editOpen, setEditOpen] = useState(false);

    const [addOpen, setAddOpen] = useState(false);

    const [rowToEdit, setRowtoEdit] = useState(null);

    const [sampleData, setSampleData] = useState([
        {
            id: 1,
            category: "Food",
            description: "Canteen",
            user: "Aman",
            date: "2022-01-01",
            amount: 100,
            type: "UPI",
        },
        {
            id: 2,
            category: "Bills",
            description: "Electricity",
            user: "Aman",
            date: "2022-02-02",
            amount: 10000,
            type: "Net Banking",
        },
        {
            id: 3,
            category: "Entertaiment",
            description: "Movie night",
            user: "Aman",
            date: "2022-03-03",
            amount: 300,
            type: "Credit Card",
        },
    ]);

    const deleteRow = (index) => {
        setSampleData(sampleData.filter((_,i) => i !== index));
    }

    const handleAddRow = () => {
        setAddOpen(true);
    }

    const handleEditRow = (idx) => {
        setRowtoEdit(idx);
        setEditOpen(true);
    }

    const handleNewRow = (newRow) => {
        setSampleData([...sampleData, newRow]);
    }

    const handleEditedRow = (newRow) => {
        setSampleData(
            sampleData.map((currRow, i) => {
                if(i !== rowToEdit) return currRow;
                
                return newRow;
            })
        );
    }

    return (
        <>
            <button onClick={handleAddRow} className="m-5 mt-3 ml-9 border-black border-2 p-2 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300">Add Transaction</button>
            {addOpen && <AddTransaction onSubmit={handleNewRow} onClose={() => setAddOpen(false)}/>}
            <div className='h-full'>
                <TableContainer component={Paper} className='w-[100%]'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className='w-[100%] overflow-hidden table-auto border-collapse rounded-sm max-w-[95%] m-auto overflow-x-auto border-2 border-solid'>
                    <TableHead className="bg-gray-300">
                        <TableRow className='w-auto h-[55px]'> 
                            <TableCell align='center'> Amount </TableCell>
                            <TableCell align='center'> Category </TableCell>
                            <TableCell align='center'> Date </TableCell>
                            <TableCell align='center'> Type </TableCell>
                            <TableCell align='center' className='w-[35%]'> Description </TableCell>
                            <TableCell align='center'> Actions </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sampleData.map((row,idx) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className='hover:bg-gray-100'
                                >
                                <TableCell align='center'>{row.amount}</TableCell>
                                <TableCell align='center'>{row.category}</TableCell>
                                <TableCell align='center'>{row.date}</TableCell>
                                <TableCell align='center'>{row.type}</TableCell>
                                <TableCell align='center'>{row.description}</TableCell>
                                <TableCell align='center'>
                                    <span className='flex justify-around p-[22px] border-collapse cursor-pointer'>
                                        <BsFillTrashFill className='fill-red-500' onClick={() => deleteRow(idx)}/>
                                        <BsFillPencilFill onClick={() => handleEditRow(idx)}/>  
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        {editOpen && <Modal onClose={() => setEditOpen(false)} editRow={handleEditedRow} defaultValue={rowToEdit !== null && sampleData[rowToEdit]}/>}
    </>
)

}

export default Transactions;