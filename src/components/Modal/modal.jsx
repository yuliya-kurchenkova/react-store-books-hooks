import React from 'react';
import ButtonTemplate from "../Elements/Button/ButtonTemplate";
import { useDispatch } from 'react-redux'
import  { addNewItem } from '../../redux/actions/actions'


const Modal = (props) => {
    console.log(props)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addNewItem(props.img))
        props.toggleModal()
    }
    return (
        <div className={'app-modal'}>
            <div className="app-modal__header">

                    <ButtonTemplate
                        buttonText={'back'}
                        clickEvent={props.toggleModal}
                    />

            </div>
            <div className="app-modal__content">
                <h2 className='app__title'>
                    { props.img.title }
                </h2>
            </div>
            <div className='app-modal__footer'>
                <ButtonTemplate
                    buttonText={'Buy'}
                    clickEvent={addToCart}
                />
            </div>
        </div>
    )
}

export default Modal