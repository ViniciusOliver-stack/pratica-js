import styled, { css } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({theme}) => theme.COLORS.BACKGROUND_900};

  opacity: 0;
  pointer-events: none;
  cursor: pointer;
  transform: translateY(-100px);

  transition: .5s;

  > svg{
    position: absolute;
    top: 3.5rem;
    right: 1.2rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  > nav { 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  a {
    z-index: 10;
  }

  ${({isVisible}) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }
  `}
`
