const ArtItem = (props) => {
    const imageUrl = "http://localhost:8080/images/" + props.art.id + ".png";
    return <div>
        {props.art.title}
        <img src={imageUrl} alt="bye" />
    </div>;
}

export default ArtItem;