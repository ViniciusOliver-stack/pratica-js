import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 0 0 2rem 0;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .logo{
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        width: 42px;
        border-radius: 10px;
      }

      p {
        font-size: 2rem;
        font-weight: 600;
      }
    }

    > nav {
      display: flex;
      gap: 1.6rem;

      a {
        font-size: 1.8rem;
        font-weight: 500;
        position: relative;
        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: ${({theme}) => theme.COLORS.YELLOW};
          transition: 0.3s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }

    > svg {
      cursor: pointer;
    }

    .mobile {
      display: none;
    }
    @media (max-width: 900px) {
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
    }
  }


  @media (max-width: 900px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

  @media (max-width: 700px) {
    padding: 14.5px 16px;
  }
`
