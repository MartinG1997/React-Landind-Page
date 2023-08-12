import { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { validarRut, formatearRut } from '../../config/ValidarRUT'
import './Contact.css'

export const Contact = () => {

  const [Consulta, setConsulta] = useState('');
  const [mail, setMail] = useState('');
  const [Nombre, setNombre] = useState('');
  const [reserva, setReserva] = useState([]);
  const [RUT, setRut] = useState('');
  const [isValid, setIsValid] = useState(false);
  const estado = "Pendiente";
  const [FReserva, setFReservas] = ('');

  const reservaCollectionRef = collection(db, 'reserva');

  const OnStore = async (e) => {
    e.preventDefault();
    if(isValid== true)
    {
      await addDoc(reservaCollectionRef, {Consulta, RUT, mail, estado, Nombre});
      setMail('');
      setRut('');
      setNombre('');
      setConsulta('');
    }
  }

  /*const getReserva = async () => {
    const data =  await getDocs(reservaCollectionRef)
    console.log("El rut es ",RUT)
    const q = query(collection(db, 'reserva'), where('RUT', '==', RUT));
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

  
  /*useEffect(() => {
    getReserva()

  }, [])*/

  return (
    <div className='contact-container'>
      <div className="info">
        <h2>RelaxIA</h2>
        <p>Masajes a domicilio</p>
        {/*<form onSubmit={getReserva}>
            <div className="form-row">
                <div className="col-75">
                  <input type="text" value={RUT} onChange={handleChange} placeholder='Ingrese RUT'/>
                </div>
            </div>
            <div className='row left'>
                <input type='submit' id='submit' value='Consultar'/>
            </div>
  </form>*/}
      </div>
        <div className="formulario">
            {/*{reserva.map( reservas => (
              <p key={reservas.id}>{reservas.RUT}</p>
            ))}*/}
            <form onSubmit={OnStore} className='form-cont'>
            <div className="form-row">
                <div className='col-25'>
                  <label>Nombre</label>
                </div>
                <div className="col-75">
                  <input type="text" value={Nombre} onChange={(e)=> setNombre(e.target.value)} placeholder='Ingrese Nombre'/>
                </div>
              </div>
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
                <input type='submit' id='submit' value='Enviar'/>
              </div>
            </form>
        </div>
    </div>
  )
}
