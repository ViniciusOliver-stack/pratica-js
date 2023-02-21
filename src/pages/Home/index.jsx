import { useState } from 'react'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/Navbar'
import { Container, Section, About } from './styles'

import codeImg from '../../images/code.svg'
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
        <Section>
          <div className="presentation">
            <h2>Olá, bem-vindo ao Prática JS 👋</h2>
            <img src={codeImg} alt="" />
            <p>
              Esta procurando algum projeto mas não sabe qual projeto fazer ou
              por onde começar para treinar suas habilidades de HTML, CSS,
              JavaScript e afins. Aqui você pode encontrar repositórios e
              projetos pronto para você se inspirar e começar desenvolver os
              seus próprios projetos.
            </p>
          </div>
        </Section>

        <About>
          <div id="about-wrapper">
            <div className="about">
              <img src={trophyImg} alt="" />
              <p className="about-title">Os melhores projetos</p>
              <p>Aqui você pode encontrar os melhores projetos para lhe inspirar na hora da criação.</p>
            </div>

            <div className="about">
              <img src={medalImg} alt="" />
              <p className="about-title">10+</p>
              <p>Aqui você pode encontrar os melhores projetos para lhe inspirar na hora da criação.</p>
            </div>

            <div className="about">
              <img src={computerImg} alt="" />
              <p className="about-title">---</p>
              <p>Aqui você pode encontrar os melhores projetos para lhe inspirar na hora da criação.</p>
            </div>
          </div>
        </About>

      </Container>
    </>
  )
}
