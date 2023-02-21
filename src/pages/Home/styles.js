import styled from 'styled-components'

export const Container = styled.div``

export const Section = styled.section`
  width: 90%;
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
  }
`

export const About = styled.div`
  width: 90%;
  margin: 0 auto;
  

  #about-wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, auto));
    gap: 3rem;

    .about{
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
      border-radius: 15px;

      display: flex;
      align-items: center;
      flex-direction: column;

      gap: 1.1rem;

      text-align: center;

      padding: 1.4rem;

      .about-title{
        color: ${({theme}) => theme.COLORS.YELLOW};
        font-weight: 600;
      }

      img { 
        width: 42px;
      }

      p, img{
        background: transparent;
      }
    }
  }


`
