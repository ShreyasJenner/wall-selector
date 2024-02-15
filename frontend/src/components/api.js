import axios from 'axios';
import React from 'react';
import '../css/api.css';

const apiUrl = "http://localhost:8080/api/";
const imageUrl = "http://localhost:8080/images/";

export default function Images() {

    const [array, setArray] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    const [currImage, setCurr] = React.useState("");
    
    const getImage = async () => {
        const res = await axios.get(apiUrl+"list");
        setArray(res.data.files);
    }

    React.useEffect(() => {
        getImage()
    }, []);

    function ServeImage() {
        setCurr(array[index]);
        return (
            <div className="image">
                <img src={imageUrl+currImage} alt="image" />
            </div>
        )
    }

    function changeImage() {
        setIndex((index+1)%array.length);
    }

    setInterval(changeImage,3000)

    return (
        <>
        <div className="main">
            <div className="gallery">
                <ServeImage />
            </div>

        <div className="btn-container">
            <div className="btn">
            <button onClick={changeImage}>Next</button>
            </div>
        </div>
        </div>
        </>
    );
}