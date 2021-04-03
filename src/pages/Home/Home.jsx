import React, {useState, useEffect}  from 'react'
import classes from './home.module.scss'
import ImagesList from '../../components/Images/ImagesList'
import ButtonTemplate from "../../components/Elements/Button/ButtonTemplate";
import imagesApi  from '../../api/imgApi/api'
import { Link } from "react-router-dom";



const Home = () => {

    const [ imagesListValue, setImagesList] = useState([])

    const getImagesList = async () => {
        try {
            const { data } = await imagesApi.getImagesList()
            setImagesList(data)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getImagesList()
    }, []);
    return (
        <div className={classes.appHome}>
            <h2 className={'app__title'}>
                Nile books store
            </h2>
            <p>
                Please click on a book to view details in a modal.
                You can copy/past the link of the modal.
                The link will open book on a separate page
            </p>
            <ImagesList imagesList={imagesListValue}/>
            <Link
               to={'/cart'}
            >
            <ButtonTemplate
                buttonText = {'Cart'}
            />
            </Link>
        </div>
    )
}

export default Home