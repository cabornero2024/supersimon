import { useState } from 'react'
import './App.css'

function App() {
  const [colors, setcolor] = useState(['#2f83dc', '#d7dc2f', '#49dc2f', '#dc342f']); 
  return (
    <>
    <div className=''> 
    <h1>SuperSimon</h1>
    </div>
    <div className='container'>
    {
      colors.map((color, index) =>
      {
        return <div key={index} className={`pad pad-${index}`} style={{backgroundColor:`${color}`}}></div>
      })
    }
    </div>
     
      
    
    </>
  )
}    


export default App

   
   /*1.-Interfaz de carton*/
   /*2.-Detectar click en los componentes*/
   /*3.-Crear Array para almacenar la secuencia del juego
   /*4.-Crear el color random para añadirlo a la secuencia
   /*5.-Reproducir la secuencia - HARD
   /*6.-Dejar que el usuario intente reproducir la secuencia
   /*7.-Validar secuencia usuario por cada pulsacion
   /*8.-Si acierta la pulsacion sigue el juego
   /*9.-Si no acierta el juego termina y limpiamos la secuencia del juego
   /*10.-Máxima puntuacion
   /*11.-Sonido
   /*12.-Tiempo
   
 */  


