import axios from 'axios';
import React from 'react';
import '../css/api.css';

const apiUrl = "http://localhost:8080/api/";
const imageUrl = "http://localhost:8080/images/";

export default function Images() {

    const [array, setArray] = React.useState([]);
    const [curr, setIndex] = React.useState(0);
    
    const getImage = async () => {
        const res = await axios.get(apiUrl+"list");
        setArray(res.data.files);
    }

    React.useEffect(() => {
        getImage()
    }, []);

    function next() {
        setIndex(curr+140);
    }

    function prev() {
        setIndex(curr-140);
    }

    function random() {
        const rand = Math.floor(Math.random()*100);
        let i=1;
        while(i<rand) {
            next();
            i++;
        }
    }

    let angle = (array.length-2)*180;
    angle = angle/array.length;

    const images = array.map((image,index) => {
        const styles= {
            transform: `rotateY(calc(${index+curr}*${angle}deg)) translateZ(400px)`
        };

        const size = {
            width: `100px`,
            height: `100px`
        };

        return (
            <>
            <span style={styles}>
                <img style={size} src={imageUrl+image} alt="image render" />
            </span>
            </>
        );
    });    

    const galleryStyles = {
        transform: `perspective(1000px) rotateY(${curr}deg)`
    };
    
    return (
        <>
        <div className="body">
            <div className='gallery' style={galleryStyles}>
                {images}
            </div>

            <div className="btn-container">
                <div className="btn" id="prev" onClick={prev}>Prev</div>
                <div className="btn" id="random" onClick={random}>Random</div>
                <div className="btn" id="next" onClickCapture={next}>Next</div>
            </div>
        </div>
        </>
    );
}
