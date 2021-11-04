import React, { useState, Fragment } from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ContainerPreview, RowSkum, RowName } from './styled';
import { colorHEX } from '../../helpers';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const Detail = ({ row, num, handleClickSnack, setError }) => {
    const [open, setOpen] = useState(false);

    const handleClickToPay = () => {
        setError({
            severity: "success",
            message: "Se ha pagado correctamente"
        });
        handleClickSnack();
    }
    
    return ( 
        <Fragment>
            <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell style={{ display: 'flex' }} component="th" scope="row">
                    <Stack direction="row" spacing={2}>
                        <Avatar sx={{ bgcolor: colorHEX() }}>{row.sku.substring(0,1)}</Avatar>
                    </Stack>
                    <ContainerPreview>
                        <RowSkum>
                            {row.sku}
                        </RowSkum>
                        <RowName>
                            {row.name}
                        </RowName>
                    </ContainerPreview>
                </TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.sku}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">
                    <Typography
                        sx={{
                            fontSize: 'h6.fontSize',
                        }}
                        >
                            {}
                            <Chip
                                sx={{
                                    backgroundColor:
                                    row.price < 100
                                        ? (theme) => theme.palette.error.light
                                        : row.price >= 100
                                        ? (theme) => theme.palette.secondary.light
                                        : (theme) => theme.palette.success.light,
                                    color: '#FFFFFF',
                                    borderRadius: '6px',
                                    pl: '3px',
                                    pr: '3px',
                                }}
                                size="small"
                                label={`$${row.price}`}
                                />
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell />
                                        <StyledTableCell />
                                        <StyledTableCell>id</StyledTableCell>
                                        <StyledTableCell>productId</StyledTableCell>
                                        <StyledTableCell>Fulfillment</StyledTableCell>
                                        <StyledTableCell>Discount</StyledTableCell>
                                        <StyledTableCell>variantId</StyledTableCell>
                                        <StyledTableCell>vendor</StyledTableCell>
                                        <StyledTableCell>Acción</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={num}>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell>{row.productId}</TableCell>
                                        <TableCell>{row.fulfillment.service}</TableCell>
                                        <TableCell>{row.discount}</TableCell>
                                        <TableCell>{row.variantId}</TableCell>
                                        <TableCell>{row.vendor}</TableCell>
                                        <TableCell>
                                            <Button style={{ backgroundColor: '#22AB4B' }} onClick={() => handleClickToPay()} variant="contained" size="medium">Pagar</Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}
 
export default Detail;