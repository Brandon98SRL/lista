import "./Card.css"

const Card = ({
    elemento,
    handleClick,
}) => {

    function executeHandleClick() {
        handleClick(elemento)
    }

    return(
        <div className="card">
            <div id="logo-name">
                <div id="card-logo"> </div>
                <div id="name">{elemento.name}</div>
            </div>
            <div id="trash" onClick={executeHandleClick} ></div> {/* onClick(recibe una funcion)*/}
        </div>
    );
}
export default Card;