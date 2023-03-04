import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 1rem auto;

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 3rem 0;

    > h2 {
      font-size: clamp(2rem, 5vw, 3rem);
    }

    .presentation {
      display: flex;
      align-items: center;
      justify-content: center;

      > p {
        font-size: clamp(1.5rem, 5vw, 1.8rem);
        text-align: justify;
      }
    }

    @media (min-width: 320px) and (max-width: 768px) {
      .presentation {
        flex-direction: column;
        > p{
          order: 1;
        }
        > svg{
          order: 0;
        }
      }
    }
  }
  .more-projects {
    display: flex;
    align-items: center;
    justify-content: center;

    > a {
      border: 2px solid ${({ theme }) => theme.COLORS.YELLOW};

      padding: 1rem 2rem;
      border-radius: 6rem;
      margin-bottom: 3rem;


      &:hover{
        transition: all .2s ease-in;

        background-color: ${({ theme }) => theme.COLORS.YELLOW};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        font-weight: 600;
      }
    }
  }
`

export const Section = styled.section`
  /* width: 90%;
  margin: 6rem auto;

  .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 5rem;

    h2 {
      font-size: clamp(1.6rem, 5vw, 2.6rem);
    }

    img {
      width: 60%;
      height: auto;
    }

    p {
      font-size: clamp(1.4rem, 5vw, 1.8rem);
      text-align: justify;
    }
  }

  @media (min-width: 426px) and (max-width: 1440px) {
    .presentation {
      img {
        width: 30%;
      }

      p {
        text-align: center;
      }
    }
  } */
`

export const About = styled.div`

  #about-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 3rem;
    .about {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      border-radius: 15px;

      display: flex;
      align-items: center;
      flex-direction: column;

      gap: 1.1rem;

      text-align: center;

      padding: 1.4rem;

      .about-title {
        color: ${({ theme }) => theme.COLORS.YELLOW};
        font-weight: 600;
      }

      img {
        width: 42px;
      }
    }
  }
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

export const Footer = styled.footer`
> section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;

    .logo {
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
          background: ${({ theme }) => theme.COLORS.YELLOW};
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
  }
`
