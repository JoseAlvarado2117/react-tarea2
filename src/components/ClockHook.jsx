import React, { useEffect, useState } from 'react';


const initialState = {
  fecha: new Date(),
  edad: 0,
  nombre: 'José Rafael',
  apellidos: 'Alvarado Gonzalez'
};

const Clockhook = () => {

  const [datos, setDatos] = useState(initialState)

  const { fecha, edad, nombre, apellidos } = datos;

  useEffect(() => {
    const timerID = setInterval(() => {
      tick()
    }, 1000)
    return () => {
      clearInterval(timerID)
    }
  })


  const tick = () => {
    setDatos({
      ...datos,
      fecha: new Date(),
      edad: edad + 1,
    })
  }

  return (
    <div>
      <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
      <h3>{nombre} {apellidos}</h3>
      <h1>Edad: {edad}</h1>
    </div>
  );
}

export default Clockhook;
