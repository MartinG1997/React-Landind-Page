import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../config/firebase";
import './Consulta.css'


export const Consulta = () => {
    const {reserva} = useParams();
    const [reservas, setReserva] = useState([]);

    const reservaCollectionRef = collection(db, 'reserva');

    const getReserva = async () => {
    const data =  await getDocs(reservaCollectionRef)
    const q = query(collection(db, 'reserva'), where('RUT', '==', reserva));
    const querySnapshot = await getDocs(q);
    const prueba = querySnapshot.docs.map(doc => doc.data());
    console.log(prueba);
    /*console.log("data", data.docs.map(doc => ({...doc.data(), id: doc.id})))*/
    setReserva(
      querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    )
  }

  useEffect(() => {
    getReserva()

  }, [])

  return (
    <div className="request-cont">
        <h1>Consultas</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>RUT</th>
                    <th>Mail</th>
                    <th>Consulta</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {reservas.map( reserva1 => (
                    <tr key={reserva1.id}>
                        <td>{reserva1.Nombre}</td>
                        <td>{reserva1.RUT}</td>
                        <td>{reserva1.mail}</td>
                        <td>{reserva1.Consulta}</td>
                        <td>{reserva1.estado}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
