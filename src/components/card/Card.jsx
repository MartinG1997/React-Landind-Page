import './Card.css'

export const Card = ({UrlImagen, Titulo, Descripcion, Url, BtnDesc}) => {
    return(
        <>
            <div className="card">
                <div className="card-img">
                    <img src={UrlImagen} alt="" />
                </div>
                <div className="card-title">
                    <h2>{Titulo}</h2>
                </div>
                <div className="card-description">
                    <p>
                        {Descripcion}
                    </p>
                </div>
            </div>
        </>
    )
}