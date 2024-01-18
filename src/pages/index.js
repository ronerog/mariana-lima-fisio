import * as React from "react"
import "../../global.css"
import logotipo from '../images/logotipo-principal-rosa.png'
import minilogo from "../images/maca-dagua-branca.png"
import AgendamentoForm from "../components/calendar"

const calendarStyles = {
 
  marginTop: 0,
  marginBottom: 64,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const minilog = {
  width: 70,
  marginLeft: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const IndexPage = () => {
  return (
    <>
   <nav>
  <div class="wrapper">
    <img style={minilog} src={minilogo}></img>
    <ul class="nav-links">
      <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
      <li><a href="#">Home</a></li>
      <li><a href="#">Agendamento</a></li>
      <li><a href="#">Localização</a></li>
      <li><a href="#">Contato</a></li>
      </ul>
  </div>
</nav>
    <main>
      <div className="banner">
      {/* <img className="headingStyles" src={logotipo} alt="Logomarca" /> */}
      </div>
      
      <div style={calendarStyles}>
        <AgendamentoForm/>
      </div>
    </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Mariana Lima - Fisioterapia</title>
