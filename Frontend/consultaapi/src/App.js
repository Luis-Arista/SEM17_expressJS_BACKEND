import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React , { useEffect , useState } from 'react'

function App() {

  const [ respuestaApi , setRespuestaApi ]=useState([])

  const consultarApi = async () => {
    let url = 'http://localhost:3005/lista'
    let respuesta = await axios.get(url)
    setRespuestaApi( respuesta.data )
  }

  useEffect( () => {
    consultarApi()
  }, [] )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {
          respuestaApi.map( ( item , i ) => {
            return(
              <div key={i}>
                <h2> {item.nombre} </h2>
                <img className='imagen' src={ item.img } alt=""></img>
              </div>
            )
          })
         }
        
      </header>
    </div>
  );
}

export default App;
