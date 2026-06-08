const GridElement = (props) => {
    return (
        <div className="GridElement">
            <h3>{props.name}</h3>
            <h4>Location: {props.coordinates}</h4>
        </div>
    )
}

export default GridElement;