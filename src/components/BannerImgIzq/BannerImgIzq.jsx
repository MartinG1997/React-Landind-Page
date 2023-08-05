import './Banner.css'

export const BannerImgIzq = ({img, titulo, descripcion}) => {
    return(
        <>
            <div>
                <img src={img} alt="" className='border' />
            </div>
            <div>
                <h1>{titulo}</h1>
                <p>
                    {descripcion}
                </p>
            </div>
        </>
    )
}