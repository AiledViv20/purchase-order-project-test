import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { WrapperInput, ContainerInput, ContainerButton } from './styled';
import TextField from '@mui/material/TextField';
import { PurchaseOrderContext } from '../../context';
import { actions } from '../../context/actions';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ModalCreate = ({ open, setOpen, handleClickSnack, setError, numberOrder }) => {
    const { dispatch } = useContext(PurchaseOrderContext);
    const formik = useFormik({
        initialValues: {
            sku: "",
            name: "",
            quantity: "",
            price: "",
            id: "",
            productId: "",
            fulfillment: "",
            discount: "",
            variantId: "",
            vendor: "",
            number: numberOrder,
        },
        validationSchema: Yup.object({
            sku: Yup.string().required('Este campo es requerido'),
            name: Yup.string().required('Este campo es requerido'),
            quantity: Yup.string().required('Este campo es requerido'),
            price: Yup.number('El valor debe ser un número').required('Este campo es requerido'),
            id: Yup.string().required('Este campo es requerido'),
            productId: Yup.string().required('Este campo es requerido'),
            fulfillment: Yup.string().required('Este campo es requerido'),
            discount: Yup.string().required('Este campo es requerido'),
            variantId: Yup.string().required('Este campo es requerido'),
            vendor: Yup.string().required('Este campo es requerido'),
        }),
        onSubmit: (formData) => {
          sendData(formData);
        }
    });

    const handleClose = () => {
        setOpen(false);
    };

    const sendData = (form) => {
        dispatch({ 
            type: actions.getOrdersNew,
            payload: form
        });
        setError({
            severity: "success",
            message: "Se ha agregado correctamente el nuevo producto"
        });
        handleClickSnack();
        handleClose();
    }


    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            maxWidth="md"
        >
            
            <DialogTitle>{"Agregar Producto"}</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <WrapperInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="Sku"
                                name="sku"
                                onChange={formik.handleChange}
                                error={formik.errors.sku && true}
                                value={formik.values.sku}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.sku && Boolean(formik.errors.sku) && formik.errors.sku
                                }
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="Name"
                                name="name"
                                onChange={formik.handleChange}
                                error={formik.errors.name && true}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.name && Boolean(formik.errors.name) && formik.errors.name
                                }
                            />
                        </ContainerInput>
                    </WrapperInput>
                    <WrapperInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="Quantity"
                                name="quantity"
                                onChange={formik.handleChange}
                                error={formik.errors.quantity && true}
                                value={formik.values.quantity}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.quantity && Boolean(formik.errors.quantity) && formik.errors.quantity
                                }
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="Price"
                                name="price"
                                onChange={formik.handleChange}
                                error={formik.errors.price && true}
                                value={formik.values.price}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.price && Boolean(formik.errors.price) && formik.errors.price
                                }
                            />
                        </ContainerInput>
                    </WrapperInput>
                    <WrapperInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="id"
                                name="id"
                                onChange={formik.handleChange}
                                error={formik.errors.id && true}
                                value={formik.values.id}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.id && Boolean(formik.errors.id) && formik.errors.id
                                }
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="ProductId"
                                name="productId"
                                onChange={formik.handleChange}
                                error={formik.errors.productId && true}
                                value={formik.values.productId}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.productId && Boolean(formik.errors.productId) && formik.errors.productId
                                }
                            />
                        </ContainerInput>
                    </WrapperInput>
                    <WrapperInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="Fulfillment (service):"
                                name="fulfillment"
                                onChange={formik.handleChange}
                                error={formik.errors.fulfillment && true}
                                value={formik.values.fulfillment}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.fulfillment && Boolean(formik.errors.fulfillment) && formik.errors.fulfillment
                                }
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="Discount"
                                name="discount"
                                onChange={formik.handleChange}
                                error={formik.errors.discount && true}
                                value={formik.values.discount}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.discount && Boolean(formik.errors.discount) && formik.errors.discount
                                }
                            />
                        </ContainerInput>
                    </WrapperInput>
                    <WrapperInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="VariantId"
                                name="variantId"
                                onChange={formik.handleChange}
                                error={formik.errors.variantId && true}
                                value={formik.values.variantId}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.variantId && Boolean(formik.errors.variantId) && formik.errors.variantId
                                }
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label="vendor"
                                name="vendor"
                                onChange={formik.handleChange}
                                error={formik.errors.vendor && true}
                                value={formik.values.vendor}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.touched.vendor && Boolean(formik.errors.vendor) && formik.errors.vendor
                                }
                            />
                        </ContainerInput>
                    </WrapperInput>
                    <ContainerButton>
                        <Button type="submit" style={{ width: '50%', marginBottom: '3rem' }} variant="contained">Agregar</Button>
                    </ContainerButton>
                </form>
            </DialogContent>
        </Dialog>
    );
}
 
export default ModalCreate;