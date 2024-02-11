import axios from 'axios';
import React from 'react';

function Hello() {
    const [post, setPost] = React.useState(null);

    async function getHello() {
        const res = await axios.get('http://localhost:8080/api')
        setPost(res.data);
        console.log(res);
    }

    return (
        <button onClick={getHello}>Click me</button>
    );
}

export default function Api() {

    return (
        <div>
            <Hello />
        </div>
    );
}