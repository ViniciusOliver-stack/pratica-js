import { Container } from "./styles";

import logoImg from '../../images/logo.png';
import { RiMenu3Fill } from 'react-icons/ri';

export function Header({ setMenuIsVisible }) {
  return (
    <Container className="header">
      <section>
        <div className="logo">
          <img src={logoImg} alt="Logo"/>
          <p>Prática JS</p>
        </div>
        <nav>
          <a href="#">Início</a>
          <a href="#">Projetos</a>
          <a href="#">Sobre</a>
        </nav>
      </section>

      <section>
        <RiMenu3Fill size={30} onClick={() => setMenuIsVisible(true)} className="mobile"/>
      </section>
    </Container>
  )
}