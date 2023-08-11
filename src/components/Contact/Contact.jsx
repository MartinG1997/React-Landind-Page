import { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { validarRut, formatearRut } from '../../config/ValidarRUT'
import './Contact.css'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {

  const [Consulta, setConsulta] = useState('');
  const [mail, setMail] = useState('');
  const [reserva, setReserva] = useState([]);
  const [RUT, setRut] = useState('');
  const navigate = useNavigate()
  const [isValid, setIsValid] = useState(false);
  const estado = "Pendiente";

  const reservaCollectionRef = collection(db, 'reserva');

  const OnStore = async (e) => {
    e.preventDefault();
    await addDoc(reservaCollectionRef, {Consulta, RUT, mail, estado});
    navigate('/')
  }

  /*const getReserva = async () => {
    const data =  await getDocs(reservaCollectionRef)
    const q = query(collection(db, 'reserva'), where('RUT', '==', '9.176.577-2'));
    const querySnapshot = await getDocs(q);
    const prueba = querySnapshot.docs.map(doc => doc.data());
    console.log(prueba);
    console.log("data", data.docs.map(doc => ({...doc.data(), id: doc.id})))
    setReserva(
      data.docs.map(doc => ({...doc.data(), id: doc.id}))
    )
  }*/

  const handleChange = (e) => {
    let formattedRut = e.target.value.replace(/[^0-9kK]/g, ""); // Eliminar caracteres no numéricos
    formattedRut = formattedRut.slice(0, -1) + "-" + formattedRut.slice(-1); // Agregar guion
    formattedRut = formattedRut.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Agregar puntos cada 3 dígitos
    setRut(formattedRut);
    setIsValid(validarRut(formattedRut));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(validarRut(rut));
    if(isValid == true)
    {
      console.log(rut)
    }
    else
    {
      console.log("Error")
    }
  };

  
  /*useEffect(() => {
    getReserva()

  }, [])*/

  return (
    <div className='contact-container'>
      <div className="info">
        <h2>hola mundo</h2>
      </div>
        <div className="formulario">
            {/*{reserva.map( reservas => (
              <p key={reservas.id}>{reservas.RUT}</p>
            ))}*/}
            <form onSubmit={OnStore} className='form-cont'>
              <div className="form-row">
                <div className='col-25'>
                  <label>RUT</label>
                </div>
                <div className="col-75">
                  <input type="text" value={RUT} onChange={handleChange} placeholder='Ingrese RUT'/>
                </div>
              </div>
              <div className="form-row">
                <div className='col-25'>
                  <label>Email</label>
                </div>
                <div className="col-75">
                  <input type="text" value={mail} onChange={(e)=> setMail(e.target.value)} placeholder='Ingrese Email'/>
                </div>
              </div>
              <div className="form-row">
                <div className='col-25'>
                  <label>Consulta</label>
                </div>
                <div className="col-75">
                  <textarea type="text" value={Consulta} onChange={(e)=> setConsulta(e.target.value)} placeholder='Ingrese consulta u día y hora que desee agendar'/>
                </div>
              </div>
              <div className='row'>
                <input type='submit' value='Enviar'/>
              </div>
            </form>
        </div>
    </div>
  )
}
