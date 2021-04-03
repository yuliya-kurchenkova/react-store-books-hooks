import React from 'react'
import classes from './cart.module.scss'
import ButtonTemplate from "../../components/Elements/Button/ButtonTemplate";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Cart = () =>{
    const cartItems = useSelector(state => state.cart.cartItems)
    console.log('cartItems', cartItems.length)
    return (
        <div className={classes.appCart}>
            <h2 className={'app__title'}>
                invoice
            </h2>
            <ul>
                {
                    cartItems.map((item, i) => (
                        <li key={i}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
            <div>
                {
                    cartItems.length  ? <div>Total:{cartItems.length}</div> : <div>Корзина пуста</div>
                }
            </div>
            <Link
                to={'/'}
            >
                <ButtonTemplate
                    buttonText = {'back home'}
            />
            </Link>
        </div>
    )
}

export default Cart