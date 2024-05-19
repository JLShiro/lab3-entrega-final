import React from "react";
import { Link } from "react-router-dom"

function Survey() {
    return (
        <div className="survey">
            <span className="product-title">Pregunta 2</span> <br />
            <span className="survey-question">¿Qué sabor usted considera más refrescante?</span> <br />
            <span>Sus respuestas determinarán la variación que será incluida en su perfil</span>
            <div className="answers">
                <form>
                    <input type="radio" name="answer" id="op1" />
                    <label htmlFor="op1">Opción 1</label> <br />
                    <input type="radio" name="answer" id="op2" />
                    <label htmlFor="op2">Opción 2</label> <br />
                    <input type="radio" name="answer" id="op3" />
                    <label htmlFor="op3">Opción 3</label> <br />
                    <input type="radio" name="answer" id="op4" />
                    <label htmlFor="op4">Opción 4</label> <br />
                </form>
                <div>
                    <img src="/img/hero-banner.jpg" alt="Foto" className="survey-picture" />
                </div>
            </div>
            <div className="answer-buttons">
                <button className="survey-button back">Retroceder</button>
                <Link to="/checkout">
                    <button className="survey-button">Siguiente</button>
                </Link>
            </div>
        </div>
    )
}

export default Survey;