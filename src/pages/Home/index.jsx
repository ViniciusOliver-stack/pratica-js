import { useState } from "react"
import { Header } from "../../components/Header"
import { NavBar } from "../../components/Navbar"
import { Container } from './styles'

export function Home(){
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return(
    <>
    <NavBar
      menuIsVisible={menuIsVisible}
      setMenuIsVisible={setMenuIsVisible}
    />
      <Container>
        <Header setMenuIsVisible={setMenuIsVisible}/>
        <h1>Home</h1>
      </Container>
    </>
  )
}