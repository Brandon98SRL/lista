import "./Card.css"

const Card = ({
    name = 'Name',
    indice,
    handleClick,
}) => {

    function executeHandleClick() {
        handleClick(indice)
    }

    return(
        <div className="card">
            <div id="logo-name">
                <div id="card-logo"> </div>
                <div id="name">{name}</div>
            </div>
            <div id="trash" onClick={executeHandleClick} ></div> {/* onClick(recibe una funcion)*/}
        </div>
    );
}
export default Card;