import { useState } from "react"

import { Header } from "../../components/Header";
import { NavBar } from "../../components/Navbar";
import { Card } from "../../components/Card";
import {Container, Cards} from './styles'
export function Projects(){

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return(
    <>
      <NavBar
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <Container>
        <Header setMenuIsVisible={setMenuIsVisible} />

        <h2>Projetos</h2>

        <Cards>
          <Card
            imgLink="https://i.imgur.com/hAIa35t.png"
            nameProject="FocusPomo"
            description="A FocusPomo é uma aplicação que utiliza a técnica Pomodoro para ajudar os usuários a gerenciar melhor seu tempo e aumentar sua produtividade. A técnica Pomodoro consiste em trabalhar em blocos de tempo de 25 minutos, seguidos por uma pausa de 5 minutos. "
            techs="HTML • CSS • JavaScript"
            classLevel="easy"
            level="Iniciante"
          />

          <Card
            imgLink="https://i.imgur.com/x4NRqFt.png"
            nameProject="Cronômetro"
            description="É uma aplicação de medição de tempo que é usada para medir a duração de eventos ou atividades específicas. Podendo ser amplamente variada tornando-os uma ferramenta essencial para medir e gerenciar o tempo em muitas situações diferentes."
            techs="HTML • CSS • JavaScript"
            classLevel="medium"
            level="Intermediário"
          />

          <Card
            imgLink="https://i.imgur.com/FizMsCy.png"
            nameProject="CountDown"
            description="A aplicação CountDown é uma ferramenta que permite aos usuários criar e gerenciar contagens regressivas para eventos futuros. A ideia é simples: você escolhe uma data e hora específicas e a aplicação exibe uma contagem regressiva que mostra quanto tempo falta até que esse evento ocorra."
            techs="HTML • CSS • JavaScript"
            classLevel="hard"
            level="Profissional"
          />
        </Cards>
      </Container>
    </>
  )
}