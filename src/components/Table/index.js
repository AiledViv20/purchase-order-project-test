import React, { Fragment, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Detail from '../Detail';
import Button from '@mui/material/Button';
import { Wrapper, Title, WrapperTitle, WrapperButton } from './styled';
import ModalCreate from '../ModalCreate';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  

const TableGeneral = ({ orders, handleClickSnack, setError }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Fragment>
            <Wrapper>
                <WrapperTitle>
                    <Title>Ordenes de compra</Title>
                </WrapperTitle>
                <WrapperButton>
                    <Button style={{ backgroundColor: '#24B756' }} onClick={() => handleClickOpen()} variant="contained" size="medium">Agregar</Button>
                </WrapperButton>
            </Wrapper>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <StyledTableCell>Preview</StyledTableCell>
                                <StyledTableCell align="right">Number</StyledTableCell>
                                <StyledTableCell align="right">Sku</StyledTableCell>
                                <StyledTableCell align="right">Name</StyledTableCell>
                                <StyledTableCell align="right">Quantity</StyledTableCell>
                                <StyledTableCell align="right">Price</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders ? orders.map((row, idx) => (
                                <Detail key={idx} row={row} num={idx}
                                    handleClickSnack={handleClickSnack}
                                    setError={setError} />
                            )) : null }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            {open ? 
                <ModalCreate 
                    open={open} 
                    setOpen={setOpen}
                    handleClickSnack={handleClickSnack}
                    setError={setError}/>
                : null
            }
        </Fragment>
    );
}
 
export default TableGeneral;