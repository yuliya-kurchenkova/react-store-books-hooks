import React from 'react'
import ImagesItem from "./Item/ImagesItem";
import classes from './imagesList.module.scss'

const ImagesList = (props) => {
    const { imagesList } = props
    return (
        <div className={classes.appImagesList}>
            {
            imagesList.map(img  => (
            <ImagesItem
                key={img.id}
                img={img}
            />
            ))
            }
        </div>
    )
}

export default ImagesList