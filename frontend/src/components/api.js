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

    return (

        <div>
            <button onClick={serveNextImage}>Click me</button>
            <br></br>
            <img className="image" src={imageUrl+array[image]} alt="image"/>
        </div>
    );
}