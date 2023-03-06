import styled from "styled-components"

export const Container = styled.div`

  width: 90%;
  margin: 1rem auto;

`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, auto));
  gap: 3rem;

  margin: 6rem auto;

  @media (min-width: 320px) and (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  }
`