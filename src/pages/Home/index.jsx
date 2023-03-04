import { useState } from 'react'
import logoImg from '../../images/logo.png'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/Navbar'
import { Card } from '../../components/Card'
import { Container, Section, About, Cards, Footer } from './styles'

import { Player, Controls } from '@lottiefiles/react-lottie-player'
import trophyImg from '../../images/trophy.svg'
import medalImg from '../../images/medal.svg'
import computerImg from '../../images/computer.svg'

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <NavBar
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Container>
        <Header setMenuIsVisible={setMenuIsVisible} />

        <section>
            <h2>Olá, bem-vindo ao Prática JS 👋</h2>
          <div className="presentation">
            <p>
              Esta procurando algum projeto mas não sabe qual projeto fazer ou
              por onde começar para treinar suas habilidades de HTML, CSS,
              JavaScript e afins. Aqui você pode encontrar repositórios e
              projetos pronto para você se inspirar e começar desenvolver os
              seus próprios projetos.
            </p>

            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json"
              style={{ height: 'auto', width: '300px' }}
            >
              <Controls
                visible={false}
                buttons={['play', 'repeat', 'frame', 'debug']}
              />
            </Player>
          </div>
        </section>

        <About>
          <div id="about-wrapper">
            <div className="about">
              <img src={trophyImg} alt="" />
              <p className="about-title">Os melhores projetos</p>
              <p>
                Aqui você pode encontrar os melhores projetos para lhe inspirar
                na hora da criação.
              </p>
            </div>

            <div className="about">
              <img src={medalImg} alt="" />
              <p className="about-title">10+</p>
              <p>
                Aqui você pode encontrar os melhores projetos para lhe inspirar
                na hora da criação.
              </p>
            </div>

            <div className="about">
              <img src={computerImg} alt="" />
              <p className="about-title">---</p>
              <p>
                Aqui você pode encontrar os melhores projetos para lhe inspirar
                na hora da criação.
              </p>
            </div>
          </div>
        </About>

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

        <div className="more-projects">
          <a href="#">Veja mais projetos</a>
        </div>

        <Footer>
          <section>
            <div className="logo">
              <img src={logoImg} alt="Logo" />
              <p>Prática JS</p>
            </div>
            <nav>
              <a href="#">Colaboradores</a>
              <a href="#">Sobre</a>
            </nav>
          </section>
        </Footer>
      </Container>
    </>
  )
}
