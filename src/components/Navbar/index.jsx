import { Container } from './styles'

import { IoClose } from 'react-icons/io5'
import { useEffect } from 'react'

export function NavBar({ menuIsVisible, setMenuIsVisible }) {

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>

      <nav>
        <a href="#">Início</a>
        <a href="#">Projetos</a>
        <a href="#">Sobre</a>
      </nav>
    </Container>
  )
}
