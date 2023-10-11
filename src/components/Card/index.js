import "./Card.css"

const Card = ({
    name = 'Name',
    index,
}) => {
    return(
        <div className="card">
            <div id="logo-name">
                <div id="card-logo"> </div>
                <div id="name">{name}</div>
            </div>
            <div id="trash"></div>
        </div>
    );
}
export default Card;