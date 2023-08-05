
export const BannerImgDer = ({img, titulo, descripcion}) => {
    return(
        <>
            <div className="order-2">
                <h1>{titulo}</h1>
                <p>
                    {descripcion}
                </p>
            </div>
            <div className="order-1">
                <img src={img} alt="" className='border' />
            </div>
        </>
    )
}