import axios from 'axios';
import React from 'react';
import '../css/api.css';

const apiUrl = "http://localhost:8080/api/";
const imageUrl = "http://localhost:8080/images/";

export default function Images() {

    const [image, setImage] = React.useState(0);
    const [array, setArray] = React.useState([]);

    const getImage = async () => {
        const res = await axios.get(apiUrl+"list");
        setArray(res.data.files);
    }

    React.useEffect(() => {
        getImage()
    }, []);

    function serveNextImage() {
        setImage(image+1);
        if(image>=49)
            setImage(0);
        console.log(imageUrl+array[image]);
    }

    function servePrevImage() {
        setImage(image-1);
        if(image<=0)
            setImage(49);
        console.log(imageUrl+array[image]);
    }

    return (
        <>
        <h1>{array[image]}</h1>
        <div className='content'>
            <button onClick={servePrevImage}>Prev</button>
            <br></br>
            <img className="image" src={imageUrl+array[image]} alt="image"/>
            <br></br>
            <button onClick={serveNextImage}>Next</button>
        </div>
        </>
        
    );
}
