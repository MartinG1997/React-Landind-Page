
export const BannerImgDer = ({img, titulo, descripcion, subtitulo}) => {
    return(
        <>
            <div className="order-2">
                <h2 className="title">{titulo}</h2>
                <p className='subtitle'>{subtitulo}</p>
                <p className="text-content">
                    {descripcion}
                </p>
            </div>
            <div className="order-1">
                <img src={img} alt="" className='border' />
            </div>
        </>
    )
}