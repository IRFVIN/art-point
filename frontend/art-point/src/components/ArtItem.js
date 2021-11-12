import { useEffect, useState } from "react";

const ArtItem = (props) => {
    const [imgObjURL, setImgObjURL] = useState('');

    const imageURL = "http://localhost:8080/images/" + props.art.id + ".png";

    useEffect(() => {
        fetch(imageURL)
        .then(res => res.blob())
        .then(imgBlob => {
            const url = URL.createObjectURL(imgBlob);
            setImgObjURL(url);
            console.log(url);
        })
    }, [imageURL]);
    
    return <div>
        {props.art.title}
        <img src={imgObjURL} alt={props.art.title} />
    </div>;
}

export default ArtItem;
