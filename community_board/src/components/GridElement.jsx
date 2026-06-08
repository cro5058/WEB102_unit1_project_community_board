const GridElement = (props) => {
    return (
        <div className="GridElement">
            <h2>{props.name}</h2>
            <h4>{props.description}</h4>
            <h4>Location: {props.coordinates}</h4>
            <a class="link_button" href={props.link}>Google Maps Link</a>
        </div>
    )
}

export default GridElement;