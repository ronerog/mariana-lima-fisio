import * as React from "react"
import "../../global.css"
import logotipo from '../images/logotipo-principal-rosa.png'
import minilogo from "../images/maca-dagua-branca.png"
import AgendamentoForm from "../components/calendar"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 30,
  marginBottom: 64,
  maxWidth: 420,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%'
}

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
  width: 150,
  marginLeft: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const text = {
  marginTop: 60,
  color: "#FFFF",
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
    <main style={pageStyles}>
      <img style={headingStyles} src={logotipo} alt="Logomarca" />
      <div style={calendarStyles}>
        <AgendamentoForm/>
      </div>
    </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
