import React, { useEffect, useContext, useState } from 'react';
import { Container } from './styled';
import { myAxios } from '../../helpers/api';
import AppBarHome from '../../components/AppBar';
import TableGeneral from '../../components/Table';
import { Fragment } from 'react-is';
import { PurchaseOrderContext } from '../../context';
import { actions } from '../../context/actions';
import SnackBar from '../../components/SnackBar';

const Home = () => {
    const { state, dispatch } = useContext(PurchaseOrderContext);
    const [openSnack, setOpenSnack] = useState(false);
    const [error, setError] = useState({
        severity: "",
        message: ""
    });

    const handleClickSnack = () => {
        setOpenSnack(true);
    };

    useEffect(() => {
        const getInfo = async () => {
        try {
            dispatch({ type: actions.getOrders });
            const { data } = await myAxios({
                method: "get",
                url: `/orders`,
            });
            const filterGeneral = data.orders.map(item => {
            return {
                orders: item.items,
                number: item.number
            }
            });
            let allOrders = [];
            filterGeneral.forEach((element) => {
            element.orders.forEach((e) => {
                e.number = element.number;
            })
            allOrders = [...allOrders, ...element.orders];
            });
            dispatch({ 
                type: actions.getOrdersSuccess,
                payload: allOrders
            });
            console.log(allOrders);
        } catch (error) {
            dispatch({ 
                type: actions.getOrdersError,
                payload: error
            });
        }
        }
        getInfo();
    }, []);

  return (
    <Fragment>
        <AppBarHome />
        <Container>
            <TableGeneral 
                orders={state.orders} 
                handleClickSnack={handleClickSnack}
                setError={setError}/>
        </Container>
        {openSnack ?
            <SnackBar 
                open={openSnack} 
                setOpen={setOpenSnack}
                error={error} /> : null
        }
    </Fragment>
  );
}
 
export default Home;