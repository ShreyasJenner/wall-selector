import axios from 'axios';
import React from 'react';
import '../css/api.css';

const apiUrl = "http://localhost:8080/api/";
const imageUrl = "http://localhost:8080/images/";

export default function Images() {

    const [array, setArray] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    const [enterImage, setEnter] = React.useState("");
    const [exitImage, setExit] = React.useState("");
    const [leftImage, setLeft] = React.useState("");
    const [rightImage, setRight] = React.useState("");
    
    const getImage = async () => {
        const res = await axios.get(apiUrl+"list");
        setArray(res.data.files);
    }

    React.useEffect(() => {
        getImage()
    }, []);

    
    function changeImage() {
        setIndex((index+1)%array.length);
    }

    function ServeImage() {
        setEnter(array[index]);

        setLeft(array[index-1]===undefined?array[array.length-1]:array[index-1]);

        setRight(array[index-2]===undefined?array[array.length-2]:array[index-2]);

        return (
            <>
            <div className="image">
                <img src={imageUrl+enterImage} alt="image" id="enter"/>
                <img src={imageUrl+leftImage} alt="image" id="left"/>
                <img src={imageUrl+rightImage} alt="image" id="right"/>
            </div>
            </>
        )
    }

    const interval = setInterval(() => {
        setIndex((index+1)%array.length);
    }, 2000)

    return (
        <>
        <div className="main">
            <div className="gallery">
                <ServeImage />
                {interval}
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