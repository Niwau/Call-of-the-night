import { useEffect, useState } from "react"

import "./App.css"

export default function App() {

  const [topDistance, setTopDistance] = useState(0);

  const handleScroll = () => {
    setTopDistance(window.scrollY)
  }

  const Move = (speed) => topDistance * speed + "px"

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  const parallax = {
    nazuna: {transform: `translateY( ${Move(0.2)} )`},
    logo: {transform: `translateY( -${Move(0.1)} )`},
    star: {transform: `translate( -${Move(2)}, ${Move(0.1)} )`},
  }

  return (
    <div className="App">
      <div className="hero">
        <img style={parallax.nazuna} className="nazuna" src="./Nazuna 1.png"/>
        <img style={parallax.logo} className="logo" src="./Logo_White 1.png"/>
        <img style={parallax.star} className="star" src="./Shooting_Star.png"/>
      </div>
      <div className="content">
        <blockquote>
          <h1>SINOPSE</h1>
          <p>Incapaz de dormir ou encontrar verdadeira satisfação em sua vida cotidiana, Ko Yamori para de ir à escola e começa a vagar pelas ruas à noite. Ele encontra uma garota chamada Nazuna Nanakusa, que é uma vampira e mostra a Ko as alegrias de ser um caminhante noturno. Isso resulta em Ko querendo ser um vampiro também, mas para alcançar seu objetivo ele tem que se apaixonar por ela primeiro.</p>
        </blockquote>
        <embed src="https://www.youtube.com/embed/a4bSbmqwhso?enablejsapi=1&wmode=opaque&autoplay=1"/>
      </div>
      <footer>
        <p>Feito com ❤ por <a href="https://github.com/Niwau" target="_blank">Niwau</a></p>
      </footer>
    </div>
  )

}
