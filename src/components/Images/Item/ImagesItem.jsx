import React, { useState } from 'react'
import classes from './imagesItem.module.scss'
import Modal from "../../Modal/modal";

const ImagesItem = ({img}) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false)

    const toggleModal = () => {
        setIsVisibleModal(!isVisibleModal);
    }

    return (
        <div className={classes.appImagesItems}>
            <h2
                onClick={toggleModal}
            >
                {img.title}

            </h2>
            {
                isVisibleModal
                    ? <Modal
                    img={img}
                    toggleModal={toggleModal}
                    />
                    : null
            }
        </div>
    )
}
export default ImagesItem