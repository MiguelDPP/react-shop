import { useState } from "react";

const initialState = {
    cart: [],
    toggleOrders: false
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    // const [toggleOrders, setToggleOrders] = useState(false);
    const [isLoaded , setIsLoaded] = useState(false);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((product, index) => index !== payload)
        })
    }

    const setToggleOrders = (payload) => {
        setState({
            ...state,
            toggleOrders: payload
        })
    }

    const getToggleOrders = () => {
        return state.toggleOrders;
    }

    return {
        state,
        getToggleOrders,
        setToggleOrders,
        addToCart,
        removeFromCart,
        isLoaded,
        setIsLoaded
    }
}

export default useInitialState;