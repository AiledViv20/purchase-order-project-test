import { actions } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.getOrders:
            return {
                ...state,
                ordersLoader: true,
                ordersError: null,
            };
        case actions.getOrdersSuccess:
            return {
                ...state,
                orders: action.payload,
                ordersLoader: false,
            };
        case actions.getOrdersNew:
            return {
                ...state,
                orders: [
                    ...state.orders,
                    action.payload
                ],
                ordersLoader: false,
            };
        case actions.getOrdersError:
            return {
                ...state,
                ordersLoader: false,
                ordersError: action.payload,
            };
        default:
            return state;
    }
}